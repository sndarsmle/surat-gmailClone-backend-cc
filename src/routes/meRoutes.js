// src/routes/meRoutes.js
import express from 'express';
import { authenticateToken } from '../middlewares/authMiddleware.js'; // Middleware autentikasi
import { getMyActivityLogs } from '../controllers/userController.js'; // Controller yang baru dibuat/diupdate

const router = express.Router();

// Semua rute di bawah ini memerlukan autentikasi
router.use(authenticateToken);

// GET /api/me/activity-logs
router.get('/activity-logs', getMyActivityLogs);

// Anda bisa menambahkan rute lain terkait /me di sini
// Contoh: router.get('/profile', getMyProfileController);

export default router;