// src/app.js
import express from 'express';
import dotenv from 'dotenv';
import path from 'path'; // Untuk path.join dan __dirname
import { fileURLToPath } from 'url'; // Untuk mendapatkan __dirname di ES Modules

import authRoutes from './routes/authRoutes.js';
import suratRoutes from './routes/suratRoutes.js';
import multer from 'multer';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import meRoutes from './routes/meRoutes.js';


// Load environment variables
dotenv.config();

// Karena menggunakan ES Modules, __dirname tidak tersedia secara default
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:3001',
  'https://yourdomain.com',
  'https://deploy-surat-frontend-dot-a-08-450504.uc.r.appspot.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) { // !origin mengizinkan request tanpa origin (seperti dari Postman atau curl)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));

// Middleware
app.use(express.json()); // Untuk parsing application/json
app.use(express.urlencoded({ extended: true })); // Untuk parsing application/x-www-form-urlencoded

// Middleware untuk logging setiap request (opsional, bisa diganti dengan morgan)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// Rute
app.use('/api/auth', authRoutes);
app.use('/api/surat', suratRoutes);
app.use('/api/me', meRoutes); 

// Menyajikan file PDF statis dari direktori uploads
// `/uploads/pdfs` adalah URL prefix, `path.join(__dirname, '../uploads/pdfs')` adalah path ke direktori di server
app.use('/uploads/pdfs', express.static(path.join(__dirname, '../uploads/pdfs')));


// Basic route
app.get('/', (req, res) => {
  res.send('Selamat datang di API Gmail Clone Sederhana!');
});

// Global Error Handler (Contoh sederhana)
app.use((err, req, res, next) => {
  console.error(err.stack);
  // Handle error dari multer (misal file terlalu besar atau tipe salah)
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: err.message });
  } else if (err) {
    // Error spesifik dari fileFilter multer
    if (err.message === 'Hanya file PDF yang diizinkan!') {
        return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Terjadi kesalahan internal server!', error: err.message });
  }
  next();
});


app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});