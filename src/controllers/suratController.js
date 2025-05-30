// src/controllers/suratController.js
import { mysqlDB } from '../prismaClients.js';
import logActivity from '../services/logService.js';
import fs from 'fs'; // Untuk menghapus file jika diperlukan
import { deleteFileFromGCS, uploadFileToGCS } from '../utils/UploadFileToGCS.js';

// Membuat Surat Baru
export const createSurat = async (req, res) => {
  const { subject, isi, kategori_surat, penerimaEmail } = req.body;
  const pengirimId = req.user.userId; // Dari token JWT

  if (!subject || !kategori_surat || !penerimaEmail) {
    // Hapus file jika sudah terupload karena validasi gagal
    // if (req.file) fs.unlinkSync(req.file.path);
    return res.status(400).json({ message: 'Subject, kategori surat, dan email penerima diperlukan' });
  }

  if (kategori_surat === 'resmi' && !req.file) {
      return res.status(400).json({ message: 'File PDF diperlukan untuk surat resmi' });
  }
  if (kategori_surat !== 'resmi' && req.file) {
      // Jika bukan surat resmi tapi ada file, hapus filenya
      // fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: 'Upload file hanya untuk surat resmi.' });
  }


  let gcsFilePath = null;

  try {
    const penerima = await mysqlDB.user.findUnique({ where: { email: penerimaEmail } });
    if (!penerima) {
      // if (req.file) fs.unlinkSync(req.file.path);
      return res.status(404).json({ message: 'User penerima tidak ditemukan' });
    }
    if (penerima.id === pengirimId) {
        // if (req.file) fs.unlinkSync(req.file.path);
        return res.status(400).json({ message: 'Tidak bisa mengirim surat ke diri sendiri.' });
    }

    // const pdf_file_path = req.file ? req.file.path : null;
    if (kategori_surat === 'resmi' && req.file) {
      console.log('Buffer file untuk upload:', req.file.buffer);
      try {
        gcsFilePath = await uploadFileToGCS(
          req.file.buffer,         // Kirim buffer file
          req.file.originalname,   // Kirim nama asli file
          req.file.mimetype 
        ); // Panggil utilitas upload Anda
        // Jika multer menyimpan file sementara di disk, hapus setelah berhasil upload ke GCS
        if (req.file.path) {
          fs.unlinkSync(req.file.path);
        }
      } catch (uploadError) {
        console.error('GCS Upload Error:', uploadError);
        // Hapus file sementara jika upload gagal dan file ada di disk
        if (req.file && req.file.path) {
            try { fs.unlinkSync(req.file.path); } catch (e) { console.error("Gagal hapus file sementara setelah GCS error:", e); }
        }
        return res.status(500).json({ message: 'Gagal mengupload file PDF ke cloud storage.', error: uploadError.message });
      }
    }

    const surat = await mysqlDB.surat.create({
      data: {
        subject,
        isi,
        kategori_surat, // "resmi" atau "tidak resmi"
        pdf_file_path: gcsFilePath, // Path file di GCS atau null jika tidak ada
        pengirimId,
        penerimaId: penerima.id,
        status_baca: 'belum dibaca',
      },
    });

    await logActivity('CREATE_SURAT', {
      userId: pengirimId,
      entity: 'Surat',
      entityId: surat.id,
      details: { subject: surat.subject, penerimaId: penerima.id },
      ipAddress: req.ip,
    });

    res.status(201).json({ message: 'Surat berhasil dikirim', surat });
  } catch (error) {
    console.error(error);
    if (req.file) fs.unlinkSync(req.file.path); // Hapus file jika ada error setelah upload
    res.status(500).json({ message: 'Gagal mengirim surat', error: error.message });
  }
};

// Mendapatkan Semua Surat (Inbox dan Terkirim untuk user yang login)
export const getAllSurat = async (req, res) => {
  const userId = req.user.userId;
  const { type } = req.query; // ?type=inbox atau ?type=sent

  try {
    let suratList;
    if (type === 'inbox') {
      suratList = await mysqlDB.surat.findMany({
        where: { penerimaId: userId },
        orderBy: { createdAt: 'desc' },
        include: { 
            pengirim: { 
                select: { 
                    id: true, 
                    nama: true, 
                    email: true 
                } 
            },
            penerima: {
                select: {
                    id: true,
                    nama: true,
                    email: true
                }
            }
        },
      });
    } else if (type === 'sent') {
      suratList = await mysqlDB.surat.findMany({
        where: { pengirimId: userId },
        orderBy: { createdAt: 'desc' },
        include: { 
            penerima: { 
                select: { 
                    id: true, 
                    nama: true, 
                    email: true 
                } 
            },
            pengirim: { 
                select: { 
                    id: true, 
                    nama: true, 
                    email: true 
                } 
            }
        },
      });
    } else {
      // Default: ambil semua yang terkait (atau bisa error jika tipe tidak valid)
       return res.status(400).json({ message: 'Tipe surat tidak valid (pilih inbox atau sent)'});
    }

    res.json(suratList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil daftar surat', error: error.message });
  }
};

// Mendapatkan Detail Surat berdasarkan ID
export const getSuratById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  try {
    const surat = await mysqlDB.surat.findUnique({
      where: { id },
      include: {
        pengirim: { select: { id: true, nama: true, email: true } },
        penerima: { select: { id: true, nama: true, email: true } },
      },
    });

    if (!surat) {
      return res.status(404).json({ message: 'Surat tidak ditemukan' });
    }

    // Pastikan user adalah pengirim atau penerima
    if (surat.pengirimId !== userId && surat.penerimaId !== userId) {
      return res.status(403).json({ message: 'Anda tidak memiliki akses ke surat ini' });
    }

    // Jika penerima membuka surat dan statusnya "belum dibaca", ubah jadi "dibaca"
    if (surat.penerimaId === userId && surat.status_baca === 'belum dibaca') {
      const updatedSurat = await mysqlDB.surat.update({
        where: { id },
        data: { status_baca: 'dibaca' },
      });
      await logActivity('READ_SURAT', {
        userId: userId,
        entity: 'Surat',
        entityId: surat.id,
        ipAddress: req.ip,
      });
      return res.json(updatedSurat);
    }

    res.json(surat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil detail surat', error: error.message });
  }
};

// Mengubah Status Baca Surat (Contoh sederhana, bisa dikembangkan)
export const updateStatusBaca = async (req, res) => {
    const { id } = req.params;
    const { status_baca } = req.body; // "dibaca" atau "belum dibaca"
    const userId = req.user.userId;

    if (!status_baca || !['dibaca', 'belum dibaca'].includes(status_baca)) {
        return res.status(400).json({ message: 'Status baca tidak valid.' });
    }

    try {
        const surat = await mysqlDB.surat.findUnique({ where: { id } });

        if (!surat) {
            return res.status(404).json({ message: 'Surat tidak ditemukan' });
        }

        // Hanya penerima yang bisa mengubah status baca
        if (surat.penerimaId !== userId) {
            return res.status(403).json({ message: 'Hanya penerima yang dapat mengubah status baca surat ini.' });
        }

        const updatedSurat = await mysqlDB.surat.update({
            where: { id },
            data: { status_baca },
        });

        await logActivity('UPDATE_STATUS_BACA_SURAT', {
            userId: userId,
            entity: 'Surat',
            entityId: surat.id,
            details: { old_status: surat.status_baca, new_status: updatedSurat.status_baca },
            ipAddress: req.ip,
        });

        res.json({ message: 'Status surat berhasil diperbarui', surat: updatedSurat });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Gagal memperbarui status surat', error: error.message });
    }
};

// Menghapus Surat (Soft delete bisa jadi alternatif yang lebih baik)
export const deleteSurat = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  try {
    const surat = await mysqlDB.surat.findUnique({ where: { id } });

    if (!surat) {
      return res.status(404).json({ message: 'Surat tidak ditemukan' });
    }

    // Hanya pengirim atau penerima yang bisa menghapus (kebijakan bisa disesuaikan)
    // Untuk contoh ini, kita izinkan hanya pengirim.
    if (surat.pengirimId !== userId) {
      return res.status(403).json({ message: 'Hanya pengirim yang dapat menghapus surat ini.' });
    }


    // Hapus file PDF dari GCS jika ada
    if (surat.pdf_file_path && surat.kategori_surat === 'resmi') {
      try {
        // Asumsi Anda akan membuat fungsi deleteFileFromGCS(filePath) di utilitas Anda
        // filePath bisa berupa URL lengkap atau hanya nama objek/path di GCS
        // tergantung bagaimana Anda menyimpannya dan bagaimana fungsi delete Anda bekerja.
        await deleteFileFromGCS(surat.pdf_file_path);
        console.log(`TODO: Implement deleteFileFromGCS for ${surat.pdf_file_path}`);
      } catch (fileError) {
        console.error('Gagal menghapus file dari GCS:', fileError);
        // Lanjutkan proses delete surat dari DB, tapi log error file
      }
    }

    // Hapus file PDF jika ada
    // if (surat.pdf_file_path) {
    //   try {
    //     fs.unlinkSync(surat.pdf_file_path); 
    //   } catch (fileError) {
    //     console.error('Gagal menghapus file terkait surat:', fileError);
    //     // Lanjutkan proses delete surat dari DB, tapi log error file
    //   }
    // }

    await mysqlDB.surat.delete({ where: { id } });

    await logActivity('DELETE_SURAT', {
      userId: userId,
      entity: 'Surat',
      entityId: id, // id surat yang dihapus
      ipAddress: req.ip,
    });

    res.json({ message: 'Surat berhasil dihapus' });
  } catch (error) {
    console.error(error);
    // Periksa apakah error karena foreign key constraint (jika onDelete tidak Cascade)
    if (error.code === 'P2003' || error.code === 'P2014') { // Kode error Prisma untuk FK constraint
        return res.status(400).json({ message: 'Gagal menghapus surat karena masih ada relasi terkait.'})
    }
    res.status(500).json({ message: 'Gagal menghapus surat', error: error.message });
  }
};