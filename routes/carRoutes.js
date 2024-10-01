import { Router } from 'express';
import { submitCar, uploadMiddleware } from '../controllers/carController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/submit-car', authenticate, uploadMiddleware, submitCar);

export default router;
