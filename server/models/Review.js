import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      ret.createdAt = ret.createdAt;
      ret.updatedAt = ret.updatedAt;
      return ret;
    }
  }
});

export default mongoose.model('Review', reviewSchema);

