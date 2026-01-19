# 🚀 Deployment Guide - Gym Gridd Website

## Overview
This is a **Next.js** website. There's no single "main file" - Next.js uses a framework structure where the entry point is the `app/` directory.

## 📋 Project Structure
```
├── app/                    # Main Next.js app directory
│   ├── page.jsx           # Homepage
│   ├── for-gyms/page.jsx  # Gym owners page
│   ├── terms/page.jsx     # Terms of Service
│   ├── privacy/page.jsx   # Privacy Policy
│   └── refund/page.jsx    # Refund Policy
├── public/                 # Static files (images, etc.)
├── package.json           # Project dependencies and scripts
└── next.config.js         # Next.js configuration
```

## 🛠️ Available Commands

### Development (Local Testing)
```bash
npm run dev
```
- Runs the website on `http://localhost:3000`
- Hot reload enabled for development

### Build (Production)
```bash
npm run build
```
- Creates an optimized production build
- Tests if everything compiles correctly

### Start (Production Server)
```bash
npm start
```
- Runs the production server
- Only works after running `npm run build`

---

## 📤 Deploying to GitHub & Vercel

### Step 1: Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Gym Gridd website"
```

### Step 2: Create GitHub Repository
1. Go to [github.com](https://github.com) and create a new repository
2. Name it something like `gym-gridd-website` or `gym-gridd`
3. **Don't** initialize with README (you already have files)

### Step 3: Push to GitHub
```bash
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

#### Option A: Via Vercel Website (Easiest)
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect it's a Next.js project
5. Click **"Deploy"** - that's it!

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: gym-gridd-website
# - Directory: ./
# - Override settings? No
```

### Step 5: Add Your Logo
Before deploying, make sure you add your logo file:
- Place it at: `public/images/logo.png`
- Or if SVG: `public/images/logo.svg` (then update code to use `.svg`)

---

## ✅ Post-Deployment Checklist

- [ ] Website is live on Vercel
- [ ] All pages load correctly:
  - [ ] Homepage (`/`)
  - [ ] For Gyms (`/for-gyms`)
  - [ ] Terms (`/terms`)
  - [ ] Privacy (`/privacy`)
  - [ ] Refund (`/refund`)
- [ ] Logo appears in navigation and footer
- [ ] Links work correctly
- [ ] Update contact email/phone numbers
- [ ] Test on mobile devices

---

## 🔧 Troubleshooting

### Build Fails
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Logo Not Showing
- Check file exists: `public/images/logo.png`
- Check file name matches exactly (case-sensitive)
- Try refreshing browser cache

### Vercel Deployment Issues
- Make sure `package.json` has `build` script
- Check that Next.js version is compatible
- View build logs in Vercel dashboard

---

## 📝 Important Notes

1. **No Single Main File**: Next.js uses the `app/` directory structure
2. **Entry Point**: Next.js automatically uses `app/layout.jsx` and `app/page.jsx`
3. **Build Command**: Vercel will automatically run `npm run build`
4. **Output Directory**: Next.js builds to `.next/` (auto-handled by Vercel)
5. **Environment Variables**: If you add any, set them in Vercel dashboard under Project Settings

---

## 🌐 Your Website URL

After deployment, Vercel will give you a URL like:
- `https://gym-gridd-website.vercel.app`
- You can add a custom domain later in Vercel settings

---

## 💡 Quick Commands Reference

```bash
# Local development
npm run dev

# Production build test
npm run build

# Push to GitHub
git add .
git commit -m "Your message"
git push

# Deploy to Vercel (if using CLI)
vercel --prod
```

---

**Need Help?** Check Vercel docs: https://vercel.com/docs

