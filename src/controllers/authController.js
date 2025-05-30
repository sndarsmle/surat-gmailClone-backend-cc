// src/controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { mysqlDB } from '../prismaClients.js';
import logActivity from '../services/logService.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
  const { nama, email, password } = req.body;

  if (!nama || !email || !password) {
    return res.status(400).json({ message: 'Nama, email, dan password diperlukan' });
  }

  try {
    const existingUser = await mysqlDB.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await mysqlDB.user.create({
      data: { nama, email, password: hashedPassword },
    });

    await logActivity('USER_REGISTER', { userId: user.id, ipAddress: req.ip });
    res.status(201).json({ message: 'User berhasil didaftarkan', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mendaftarkan user', error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password diperlukan' });
  }

  try {
    const user = await mysqlDB.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Email atau password salah' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email atau password salah' });
    }

    const accessToken = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h', // accessToken berlaku 1 jam
    });

    await logActivity('USER_LOGIN', { userId: user.id, ipAddress: req.ip });
    res.json({ message: 'Login berhasil', accessToken, userId: user.id, nama: user.nama });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal login', error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await mysqlDB.user.findMany({
        select: {
            id: true,
            nama: true,
            email: true,
            createdAt: true,
        },
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Gagal mengambil daftar user', error: error.message });
    }
}