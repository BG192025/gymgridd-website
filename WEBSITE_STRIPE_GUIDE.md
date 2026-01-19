# Gridd Website - Stripe Account Setup Guide

## ✅ What You Have

I've created a professional website for your Gridd gym app that includes everything Stripe needs to approve your account:

### **Main Website** (`app/page.jsx`)
- Professional landing page explaining your business
- How it works section
- Features and benefits
- Payment information (important for Stripe)
- Contact information
- Mobile-responsive design

### **Legal Pages** (Required for Stripe)
- **Terms of Service** (`app/terms/page.jsx`)
- **Privacy Policy** (`app/privacy/page.jsx`)
- **Refund Policy** (`app/refund/page.jsx`)

## 🚀 How to Use This for Stripe

### 1. **Deploy Your Website**

You have several options:

#### **Option A: Deploy to Vercel (Recommended - Free)**
```bash
# If not already installed
npm install -g vercel

# Deploy
vercel

# Or connect your GitHub repo to Vercel for automatic deployments
```

#### **Option B: Deploy to Netlify (Free)**
1. Push your code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

#### **Option C: Run Locally for Development**
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`

### 2. **Customize for Your Business**

Before submitting to Stripe, update these fields:

**In `app/page.jsx`:**
- Update email: `hello@gridd.app` → Your actual email
- Update phone: `+1 (234) 567-8900` → Your actual phone
- Update business address (in Contact section)

**In `app/terms/page.jsx`, `app/privacy/page.jsx`, and `app/refund/page.jsx`:**
- Update email addresses to your actual support/legal emails
- Add your business address where indicated
- Review and adjust terms to match your business model

**In `app/layout.jsx`:**
- The metadata is already set, but you can customize the description

### 3. **What Stripe Will Look For**

When you apply for a Stripe account, Stripe will check:

✅ **Professional website** - You have this  
✅ **Terms of Service** - `/terms` page  
✅ **Privacy Policy** - `/privacy` page  
✅ **Refund Policy** - `/refund` page (linked in footer)  
✅ **Contact information** - Visible on website  
✅ **Clear business description** - Explained on homepage  
✅ **Payment information** - How payments work is explained  
✅ **Business legitimacy** - Professional appearance  

### 4. **Stripe Application Information**

When filling out your Stripe application, you'll need:

**Business Information:**
- Business name: Gridd (or your registered name)
- Business type: Marketplace / Platform
- Business description: "Fitness platform connecting users with gyms worldwide. Users book day passes, class packs, and memberships through our mobile app and web platform."
- Website URL: [Your deployed website URL]
- Support email: [Your email from the website]
- Support phone: [Your phone from the website]

**Payment Information:**
- Revenue sharing model: 85% to gyms, 15% platform fee
- Payment processor: Stripe (for Stripe Connect)
- Pricing model: Variable (gyms set their own prices)

### 5. **Important Notes for Stripe**

- **Business Address:** Make sure to add your actual business address in the legal pages
- **Email Domains:** Consider getting a custom email domain (e.g., @gridd.app) for more professionalism
- **Phone Number:** Use a business phone number if possible
- **Refund Policy:** Stripe will check this, so make sure it's reasonable and legal
- **Terms & Privacy:** These are required by law in many jurisdictions

### 6. **Next Steps**

1. ✅ Deploy the website (Vercel recommended)
2. ✅ Customize contact information and business details
3. ✅ Review all legal pages
4. ✅ Test all links work correctly
5. ✅ Apply for Stripe account at https://dashboard.stripe.com/register
6. ✅ Provide your website URL in the Stripe application

## 📝 Checklist for Stripe Application

- [ ] Website is live and accessible
- [ ] Contact information is accurate
- [ ] Terms of Service page works and is accessible
- [ ] Privacy Policy page works and is accessible
- [ ] Refund Policy page works and is accessible
- [ ] Business address is listed in legal pages
- [ ] Support email is active and monitored
- [ ] All links in footer work correctly
- [ ] Website looks professional and legitimate
- [ ] Business description clearly explains what you do

## 🔧 Troubleshooting

**Website won't deploy?**
- Make sure all dependencies are installed: `npm install`
- Check for any build errors: `npm run build`
- Verify Next.js is configured correctly

**Links not working?**
- Make sure you're using the correct routes
- Check that all page files exist in the correct directories

**Need to update content?**
- Edit the respective `.jsx` files in the `app` directory
- Redeploy after making changes

## 📞 Support

If you need help customizing the website or have questions about the Stripe application process, feel free to ask!

---

**Good luck with your Stripe application! 🎉**

