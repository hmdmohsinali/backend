import Car from '../models/Car.js';
import { uploadImage } from '../utils/cloudinary.js';
import multer from 'multer';  // Middleware to handle form-data

const upload = multer({ dest: 'uploads/' });  // Temporary storage for uploaded files

// Submit Car Info
export const submitCar = async (req, res) => {
  const { model, price, phone, city, maxPictures } = req.body;
  const userId = req.userId;

  try {
    // Handle image uploads to Cloudinary
    const imageUrls = [];
    for (let file of req.files) {
      const imageUrl = await uploadImage(file.path);
      imageUrls.push(imageUrl);
    }

    const newCar = new Car({
      userId,
      model,
      price,
      phone,
      city,
      images: imageUrls,
    });

    await newCar.save();
    res.status(201).json({ message: 'Car entry submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const uploadMiddleware = upload.array('images', 10);  // Maximum 10 images
