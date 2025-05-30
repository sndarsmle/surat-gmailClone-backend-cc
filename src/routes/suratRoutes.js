// src/routes/suratRoutes.js
import express from 'express';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js'; // Middleware upload
import {
  createSurat,
  getAllSurat,
  getSuratById,
  updateStatusBaca,
  deleteSurat,
} from '../controllers/suratController.js';

const router = express.Router();

// Semua rute di bawah ini memerlukan autentikasi
router.use(authenticateToken);

router.post('/', upload.single('pdfFile'), createSurat); // 'pdfFile' adalah nama field di form-data
router.get('/', getAllSurat);
router.get('/:id', getSuratById);
router.patch('/:id/status', updateStatusBaca);
router.delete('/:id', deleteSurat);

export default router;