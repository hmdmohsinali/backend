import { Router } from 'express';
import { submitCar } from '../controllers/carController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { upload } from '../utils/multer.js';

const router = Router();

router.post('/submit-car', authenticate, upload  , submitCar);

export default router;
