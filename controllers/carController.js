import Car from '../models/Car.js';
import { uploadImage } from '../utils/cloudinary.js';

// Submit Car Info (handling image uploads)
export const submitCar = async (req, res) => {
  const { model, price, phone, city } = req.body;
  const userId = req.userId;

  try {
    // Check if images were uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No images uploaded' });
    }

    // Upload each image to Cloudinary
    const imageUrls = [];
    for (let file of req.files) {
      const imageUrl = await uploadImage(file.buffer);  // Upload image buffer to Cloudinary
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
    res.status(201).json({ message: 'Car entry submitted successfully', car: newCar });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
