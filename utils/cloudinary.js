import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();  // Loads environment variables from `.env`

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'car_images',  // Specify folder in Cloudinary
    });
    return result.secure_url;  // Return the secure URL of the image
  } catch (error) {
    throw new Error('Image upload failed');
  }
};