import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// Get all reviews for a product
router.get('/product/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ product_id: req.params.productId })
      .sort({ createdAt: -1 })
      .lean();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new review
router.post('/', async (req, res) => {
  try {
    const { product_id, username, rating, comment } = req.body;
    
    if (!product_id || !username || !rating || !comment) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    const review = new Review({
      product_id,
      username,
      rating,
      comment
    });

    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

