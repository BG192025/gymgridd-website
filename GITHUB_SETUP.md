# 📦 GitHub Repository Setup Guide

## Step 1: Check Which Files to Add

For your **website deployment**, you only need these files:

### ✅ Files to Include:
```
✅ app/                    # All your website pages
✅ public/                 # Logo and static files
✅ package.json           # Dependencies
✅ package-lock.json      # Lock file
✅ next.config.js         # Next.js config
✅ tailwind.config.js     # Tailwind CSS config
✅ postcss.config.js      # PostCSS config
✅ vercel.json            # Vercel deployment config
✅ .gitignore            # Git ignore file
✅ README.md             # Documentation (optional)
```

### ❌ Files to Exclude:
```
❌ expo-app/              # Your mobile app (separate project)
❌ node_modules/          # Dependencies (auto-generated)
❌ .next/                 # Build files (auto-generated)
❌ .env*                  # Environment variables (keep secret!)
```

---

## Step 2: Initialize Git Repository

Run these commands in your terminal:

```bash
# Navigate to your project folder (if not already there)
cd "C:\Users\brian\OneDrive\Documents\gym app proto gbt"

# Initialize git repository
git init

# Add the .gitignore file first
git add .gitignore

# Add website files only
git add app/
git add public/
git add package.json
git add package-lock.json
git add next.config.js
git add tailwind.config.js
git add postcss.config.js
git add vercel.json
git add DEPLOYMENT_INSTRUCTIONS.md
git add GITHUB_SETUP.md

# Commit the files
git commit -m "Initial commit - Gym Gridd website"
```

---

## Step 3: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** button in the top right → **"New repository"**
3. Repository name: `gym-gridd-website` (or your preferred name)
4. Description: "Gym Gridd - Find & Book Gyms Website"
5. Choose: **Public** or **Private**
6. **DON'T** check "Initialize with README" (you already have files)
7. Click **"Create repository"**

---

## Step 4: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Replace YOUR_USERNAME with your GitHub username
# Replace YOUR_REPO_NAME with the repository name you created

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/brian/gym-gridd-website.git
git branch -M main
git push -u origin main
```

---

## Step 5: Verify Files Are Pushed

1. Go to your GitHub repository page
2. You should see:
   - ✅ `app/` folder
   - ✅ `public/` folder
   - ✅ `package.json`
   - ✅ `next.config.js`
   - ✅ `.gitignore`
   - ❌ **NOT** `expo-app/` folder
   - ❌ **NOT** `node_modules/` folder

---

## 🔧 Quick Commands Reference

```bash
# Check what files will be added
git status

# See which files are staged
git status --short

# Add all website files at once
git add app/ public/ *.json *.js *.md .gitignore

# Remove a file if you accidentally added it
git reset HEAD expo-app/

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push
```

---

## ❓ Troubleshooting

### "Permission denied" error
- You may need to authenticate with GitHub
- Use GitHub Desktop app, or set up SSH keys

### "Repository not found" error
- Check your repository name and username are correct
- Make sure you created the repository on GitHub first

### Want to add more files later?
```bash
git add filename.js
git commit -m "Added new file"
git push
```

---

## 📝 Important Notes

- Your **expo-app/** folder should be in a **separate repository** (it's your mobile app)
- Only commit the **website files** to this repository
- Never commit `.env` files or sensitive information
- The `.gitignore` file will automatically exclude `node_modules/` and other unnecessary files

---

**Next Step:** After pushing to GitHub, deploy to Vercel using the instructions in `DEPLOYMENT_INSTRUCTIONS.md`

