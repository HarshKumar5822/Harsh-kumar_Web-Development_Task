# Perfume Shop - Full Stack Application

A beautiful and modern perfume e-commerce website built with React, Node.js, Express, and MongoDB.

## Features

### Homepage
- ✅ Responsive navigation bar
- ✅ Eye-catching call-to-action banner
- ✅ Product cards with hover effects (4-5 products)
- ✅ Clickable product cards that redirect to product pages

### Product Page
- ✅ Detailed product information (description, price, sizes)
- ✅ Image gallery with multiple product images
- ✅ Reviews section (read and add reviews)
- ✅ Social media share buttons

### Technical Stack
- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **UI Components**: shadcn/ui

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd scent-savvy-store-main
```

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/perfume-shop
NODE_ENV=development
```

**Note**: If you're using MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string.

### 3. Seed the Database

Run the seed script to populate the database with sample products and reviews:

```bash
npm run seed
```

This will create 5 perfume products with reviews in your MongoDB database.

### 4. Start the Backend Server

```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### 5. Frontend Setup

Open a new terminal, navigate to the project root, and install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### 6. Start the Frontend Development Server

```bash
npm run dev
```

The frontend will run on `http://localhost:8080`

## Project Structure

```
scent-savvy-store-main/
├── server/                 # Backend server
│   ├── models/            # MongoDB models
│   │   ├── Product.js
│   │   └── Review.js
│   ├── routes/            # API routes
│   │   ├── products.js
│   │   └── reviews.js
│   ├── server.js          # Express server
│   ├── seed.js            # Database seed script
│   └── package.json
├── src/                   # Frontend React app
│   ├── components/        # React components
│   ├── pages/             # Page components
│   ├── lib/               # Utilities and API client
│   └── ...
└── package.json           # Frontend dependencies
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID

### Reviews
- `GET /api/reviews/product/:productId` - Get all reviews for a product
- `POST /api/reviews` - Create a new review

## Usage

1. **View Products**: Navigate to the homepage to see all available perfumes
2. **View Product Details**: Click on any product card to see detailed information
3. **Add Reviews**: Scroll to the reviews section on a product page and submit a review
4. **Share Products**: Use the share buttons to share products on social media

## Development

### Backend Development
- The backend uses Express.js with MongoDB
- Models are defined using Mongoose
- API routes are organized in the `routes/` directory

### Frontend Development
- Built with React and TypeScript
- Uses Vite for fast development
- Tailwind CSS for styling
- shadcn/ui for UI components

## Database Schema

### Product
```javascript
{
  name: String,
  description: String,
  price: Number,
  sizes: [String],
  images: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Review
```javascript
{
  product_id: ObjectId (ref: Product),
  username: String,
  rating: Number (1-5),
  comment: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally, or
- Update `MONGODB_URI` in `server/.env` with your MongoDB Atlas connection string

### CORS Issues
- The backend is configured to allow CORS from the frontend
- If you encounter CORS errors, check that the frontend URL matches the CORS configuration

### Port Conflicts
- Backend default port: 5000
- Frontend default port: 8080
- Change ports in `server/.env` and `vite.config.ts` if needed

## Production Build

### Build Frontend
```bash
npm run build
```

### Start Backend in Production
```bash
cd server
npm start
```

## License

This project is created for educational purposes.

## Screenshots

After running the application, you can take screenshots of:
- Homepage with product grid
- Product detail page
- Reviews section
- Responsive design on mobile devices

---

**Note**: Make sure MongoDB is running before starting the backend server. The application uses MongoDB to store all product and review data dynamically.
