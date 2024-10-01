import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import carRoutes from './routes/carRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();

// Connect to MongoDB
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
