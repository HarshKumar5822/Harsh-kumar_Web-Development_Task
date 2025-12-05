# Quick Setup Guide

Follow these steps to get the Perfume Shop application running:

## Step 1: Install MongoDB

### Option A: Local MongoDB
1. Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service:
   - **Windows**: MongoDB should start automatically as a service
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`

### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and get your connection string
3. Update `server/.env` with your Atlas connection string

## Step 2: Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file (copy from .env.example or create manually)
# Add: MONGODB_URI=mongodb://localhost:27017/perfume-shop

# Seed the database
npm run seed

# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

## Step 3: Frontend Setup

Open a **new terminal** window:

```bash
# Navigate to project root
cd scent-savvy-store-main

# Install dependencies
npm install

# Create .env file in root directory
# Add: VITE_API_URL=http://localhost:5000/api

# Start the frontend
npm run dev
```

The frontend will run on `http://localhost:8080`

## Step 4: Verify Installation

1. Open your browser and go to `http://localhost:8080`
2. You should see the homepage with 5 perfume products
3. Click on any product to view details
4. Try adding a review on a product page

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running: `mongosh` should connect
- Check your `MONGODB_URI` in `server/.env`
- For Atlas: Ensure your IP is whitelisted

### Port Already in Use
- Backend: Change `PORT` in `server/.env`
- Frontend: Change port in `vite.config.ts`

### CORS Errors
- Ensure backend is running before starting frontend
- Check that `VITE_API_URL` matches your backend URL

### No Products Showing
- Run `npm run seed` in the server directory
- Check MongoDB connection
- Verify backend is running and accessible at `http://localhost:5000/api/products`

## Next Steps

- Take screenshots of the homepage and product pages
- Test the review functionality
- Try the social media share buttons
- Test responsive design on mobile devices

