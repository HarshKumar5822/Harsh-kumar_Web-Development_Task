# 🚀 How to Run - Visual Guide

## 📋 Prerequisites Checklist

- [ ] Node.js installed (Download: https://nodejs.org/)
- [ ] MongoDB installed OR MongoDB Atlas account
- [ ] Code editor (VS Code recommended)

---

## 🎯 Quick Start (3 Steps)

### ⚙️ STEP 1: Setup Backend

**Open Terminal/PowerShell and run:**

```powershell
# Navigate to server folder
cd server

# Install dependencies
npm install

# Create .env file (see below for content)
# Then seed database
npm run seed

# Start backend server
npm run dev
```

**Create `server/.env` file with:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/perfume-shop
NODE_ENV=development
```

**✅ Success looks like:**
```
Connected to MongoDB
Server is running on port 5000
```

**⚠️ KEEP THIS TERMINAL OPEN!**

---

### 🎨 STEP 2: Setup Frontend

**Open a NEW Terminal/PowerShell window:**

```powershell
# Make sure you're in project root (not server folder)
cd scent-savvy-store-main

# Install dependencies
npm install

# Create .env file (see below for content)
# Then start frontend
npm run dev
```

**Create `.env` file in ROOT folder with:**
```
VITE_API_URL=http://localhost:5000/api
```

**✅ Success looks like:**
```
VITE v5.x.x  ready in xxx ms
➜  Local:   http://localhost:8080/
```

---

### 🌐 STEP 3: Open Browser

1. Open your web browser
2. Go to: **http://localhost:8080**
3. You should see the perfume shop! 🎉

---

## 📸 What You'll See

### Homepage:
- Navigation bar at top
- Large hero banner
- 5 perfume product cards
- Footer

### Product Page (click any card):
- Product images gallery
- Product name and description
- Price and size selector
- Reviews section
- Share buttons

---

## 🔧 Common Issues & Fixes

### Issue: "npm: command not found"
**Fix:** Install Node.js from https://nodejs.org/

### Issue: "Cannot connect to MongoDB"
**Fix:** 
- Start MongoDB service, OR
- Use MongoDB Atlas and update `MONGODB_URI` in `server/.env`

### Issue: "Port 5000 already in use"
**Fix:** Change port in `server/.env`:
```
PORT=5001
```
Then update `VITE_API_URL` in root `.env`:
```
VITE_API_URL=http://localhost:5001/api
```

### Issue: "No products showing"
**Fix:**
1. Make sure backend is running
2. Run `npm run seed` in server folder
3. Refresh browser

### Issue: "CORS error" or "Failed to fetch"
**Fix:**
1. Start backend BEFORE frontend
2. Check both `.env` files exist
3. Restart both servers

---

## 📝 File Structure Reminder

```
scent-savvy-store-main/
├── server/
│   ├── .env          ← Create this!
│   ├── package.json
│   └── ...
├── .env              ← Create this!
├── package.json
└── ...
```

---

## ✅ Verification Checklist

- [ ] Backend terminal shows "Server is running on port 5000"
- [ ] Frontend terminal shows "Local: http://localhost:8080/"
- [ ] Browser opens to homepage successfully
- [ ] Can see 5 product cards
- [ ] Can click on products to see details
- [ ] Can add reviews
- [ ] Share buttons work

---

## 🛑 To Stop the Application

1. **Frontend**: Press `Ctrl + C` in frontend terminal
2. **Backend**: Press `Ctrl + C` in backend terminal

---

## 💡 Pro Tips

1. **Always start backend first**, then frontend
2. **Keep both terminals open** while using the app
3. **Check terminal output** for error messages
4. **Use browser console** (F12) to debug frontend issues

---

## 📞 Still Having Issues?

1. Check `HOW_TO_RUN.md` for detailed troubleshooting
2. Verify all `.env` files are created correctly
3. Make sure MongoDB is running
4. Check that ports 5000 and 8080 are not blocked

---

**Remember: You need TWO terminals running simultaneously!**

