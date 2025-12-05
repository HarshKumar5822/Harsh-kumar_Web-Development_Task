# How to Run the Perfume Shop Application

## Step-by-Step Instructions

### Step 1: Install Prerequisites

Make sure you have these installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - Choose one option:
  - **Option A**: Local MongoDB - [Download here](https://www.mongodb.com/try/download/community)
  - **Option B**: MongoDB Atlas (Cloud) - [Sign up free](https://www.mongodb.com/cloud/atlas)

### Step 2: Start MongoDB

#### If using Local MongoDB:
- **Windows**: MongoDB should start automatically as a service
- **Mac**: Run `brew services start mongodb-community` in terminal
- **Linux**: Run `sudo systemctl start mongod` in terminal

Verify MongoDB is running:
```bash
mongosh
```
If it connects, you're good! Type `exit` to leave.

#### If using MongoDB Atlas:
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster (free tier is fine)
3. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
4. You'll use this in Step 3

### Step 3: Backend Setup

1. **Open Terminal/Command Prompt** and navigate to the server folder:
   ```bash
   cd server
   ```

2. **Install backend dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file**:
   - Create a file named `.env` in the `server` folder
   - Add this content:
     ```env
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/perfume-shop
     NODE_ENV=development
     ```
   - **If using MongoDB Atlas**, replace `MONGODB_URI` with your Atlas connection string

4. **Seed the database** (populate with sample data):
   ```bash
   npm run seed
   ```
   You should see:
   ```
   Connected to MongoDB
   Cleared existing data
   Inserted 5 products
   Inserted reviews for all products
   Database seeded successfully!
   ```

5. **Start the backend server**:
   ```bash
   npm run dev
   ```
   You should see:
   ```
   Connected to MongoDB
   Server is running on port 5000
   ```
   ✅ **Keep this terminal open!** The backend must keep running.

### Step 4: Frontend Setup

1. **Open a NEW Terminal/Command Prompt** window
   - Keep the backend terminal running!

2. **Navigate to project root**:
   ```bash
   cd scent-savvy-store-main
   ```
   (or wherever your project folder is)

3. **Install frontend dependencies**:
   ```bash
   npm install
   ```
   This may take a few minutes.

4. **Create environment file**:
   - Create a file named `.env` in the **root** folder (same level as `package.json`)
   - Add this content:
     ```env
     VITE_API_URL=http://localhost:5000/api
     ```

5. **Start the frontend server**:
   ```bash
   npm run dev
   ```
   You should see:
   ```
   VITE v5.x.x  ready in xxx ms
   ➜  Local:   http://localhost:8080/
   ```

### Step 5: Open the Application

1. **Open your web browser**
2. **Navigate to**: `http://localhost:8080`
3. You should see the perfume shop homepage with 5 products!

## What You Should See

- ✅ Homepage with navigation bar
- ✅ Hero banner with "Discover Your Signature Scent"
- ✅ 5 product cards displayed in a grid
- ✅ Click any product to see details
- ✅ Product page with images, description, price, sizes
- ✅ Reviews section at the bottom
- ✅ Share buttons for social media

## Testing the Application

1. **Browse Products**: Click on different product cards
2. **View Details**: See product images, descriptions, and prices
3. **Add Review**: Scroll to reviews section and submit a review
4. **Test Sharing**: Click share buttons (they open in new tabs)
5. **Test Responsive**: Resize browser window or view on mobile

## Troubleshooting

### ❌ "Cannot connect to MongoDB"
- **Solution**: Make sure MongoDB is running
  - Local: Check if MongoDB service is started
  - Atlas: Check your connection string and IP whitelist

### ❌ "Port 5000 already in use"
- **Solution**: Change port in `server/.env`:
  ```env
  PORT=5001
  ```
  Then update `VITE_API_URL` in root `.env` to match

### ❌ "No products showing"
- **Solution**: 
  1. Make sure backend is running
  2. Run `npm run seed` again in server folder
  3. Check browser console for errors

### ❌ "CORS error" or "Failed to fetch"
- **Solution**:
  1. Make sure backend is running BEFORE starting frontend
  2. Check `VITE_API_URL` matches backend URL
  3. Restart both servers

### ❌ "Module not found" errors
- **Solution**: Run `npm install` in both root and server folders

### ❌ Frontend shows blank page
- **Solution**:
  1. Check browser console (F12) for errors
  2. Make sure backend is running
  3. Verify `.env` file exists with correct `VITE_API_URL`

## Quick Commands Reference

### Backend (in `server/` folder):
```bash
npm install          # Install dependencies
npm run seed         # Populate database
npm run dev          # Start development server
npm start            # Start production server
```

### Frontend (in root folder):
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
```

## Stopping the Application

1. **Stop Frontend**: Press `Ctrl + C` in frontend terminal
2. **Stop Backend**: Press `Ctrl + C` in backend terminal
3. **Stop MongoDB** (if local): Usually runs as service, no need to stop

## Need Help?

- Check `SETUP.md` for detailed setup
- Check `README.md` for full documentation
- Check browser console (F12) for frontend errors
- Check backend terminal for server errors

---

**Remember**: You need TWO terminals running:
1. Backend server (in `server/` folder)
2. Frontend server (in root folder)

Both must be running for the app to work!

