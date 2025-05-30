import { pgDB } from '../prismaClients.js'; // Pastikan path ini benar

/**
 * Mengambil log aktivitas untuk pengguna yang sedang login.
 */
export const getMyActivityLogs = async (req, res) => {
  const userId = req.user.userId; // Diambil dari token JWT setelah middleware authenticateToken

  if (!userId) {
    // Seharusnya tidak terjadi jika authenticateToken bekerja dengan benar
    return res.status(401).json({ message: 'User tidak terautentikasi.' });
  }

  try {
    const logs = await pgDB.activityLog.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc', // Urutkan dari yang terbaru
      },
      take: 100, // Batasi jumlah log yang diambil (opsional, untuk paginasi di masa depan)
    });

    res.json(logs);
  } catch (error) {
    console.error('Error fetching activity logs for user:', error);
    res.status(500).json({ message: 'Gagal mengambil log aktivitas.', error: error.message });
  }
};

// Tambahkan fungsi lain terkait user di sini jika ada (misalnya, getMyProfile, updateMyProfile)