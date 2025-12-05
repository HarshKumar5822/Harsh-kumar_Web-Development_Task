const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  images: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Review {
  _id: string;
  product_id: string;
  username: string;
  rating: number;
  comment: string;
  createdAt?: string;
  updated_at?: string;
}

// Products API
export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  getById: async (id: string): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  }
};

// Reviews API
export const reviewsApi = {
  getByProductId: async (productId: string): Promise<Review[]> => {
    const response = await fetch(`${API_BASE_URL}/reviews/product/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return response.json();
  },

  create: async (review: {
    product_id: string;
    username: string;
    rating: number;
    comment: string;
  }): Promise<Review> => {
    const response = await fetch(`${API_BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    });
    if (!response.ok) {
      throw new Error('Failed to create review');
    }
    return response.json();
  }
};

