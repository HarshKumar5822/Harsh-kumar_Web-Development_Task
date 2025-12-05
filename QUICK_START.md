# Quick Start Guide

## Prerequisites Check
- [ ] Node.js installed (v18+)
- [ ] MongoDB installed and running (or MongoDB Atlas account)

## 5-Minute Setup

### 1. Backend (Terminal 1)
```bash
cd server
npm install
npm run seed
npm run dev
```
✅ Backend running on http://localhost:5000

### 2. Frontend (Terminal 2)
```bash
npm install
npm run dev
```
✅ Frontend running on http://localhost:8080

### 3. Open Browser
Navigate to: **http://localhost:8080**

## What You'll See

1. **Homepage** with 5 perfume products
2. **Click any product** to see details
3. **Scroll down** to see reviews section
4. **Add a review** to test functionality
5. **Try share buttons** for social media

## Environment Variables

### Backend (`server/.env`)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/perfume-shop
NODE_ENV=development
```

### Frontend (root `.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

## Troubleshooting

**MongoDB not connecting?**
- Check if MongoDB is running: `mongosh`
- Or use MongoDB Atlas and update `MONGODB_URI`

**No products showing?**
- Run `npm run seed` in server directory
- Check backend is running: http://localhost:5000/api/products

**CORS errors?**
- Ensure backend starts before frontend
- Check `VITE_API_URL` matches backend URL

## Next Steps

- Take screenshots of the application
- Test all features (navigation, reviews, sharing)
- Check responsive design on mobile

---

**Need help?** Check `SETUP.md` for detailed instructions.

