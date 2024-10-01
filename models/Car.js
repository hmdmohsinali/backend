import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  model: { type: String, required: true, minlength: 3 },
  price: { type: Number, required: true },
  phone: { type: String, required: true, length: 11 },
  city: { type: String, required: true },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

const Car = mongoose.model('Car', CarSchema);
export default Car;
