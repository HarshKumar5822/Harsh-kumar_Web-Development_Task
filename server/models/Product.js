import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  sizes: {
    type: [String],
    required: true,
    default: []
  },
  images: {
    type: [String],
    required: true,
    default: []
  }
}, {
  timestamps: true
});

export default mongoose.model('Product', productSchema);

