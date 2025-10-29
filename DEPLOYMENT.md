# 🚀 Deployment Guide

Get your landing page live in production! This guide covers deploying to Vercel (recommended and free) and connecting a custom domain.

## Quick Overview

**Total Time:** ~15 minutes

- GitHub setup: 5 min
- Vercel deployment: 2 min
- Domain connection: 2 min (+ DNS wait time)

---

## Prerequisites

Before you start:

- [ ] Landing page is customized and tested locally
- [ ] GitHub account ([signup here](https://github.com/signup))
- [ ] Vercel account ([signup here](https://vercel.com/signup) - use GitHub)
- [ ] Domain name (optional, ~$10-15/year at [NameCheap](https://www.namecheap.com))

---

## Step 1: Push to GitHub (5 min)

### First Time Setup

If you haven't initialized Git yet:

```bash
# Navigate to your project folder
cd /path/to/your/landing-page

# Initialize Git
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: My landing page"
```

### Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Repository name: `my-landing-page` (or whatever you want)
4. Description: "My awesome landing page"
5. Keep it **Public** (or Private if you have a paid plan)
6. **Don't** initialize with README (we already have files)
7. Click **Create repository**

### Push Your Code

GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR-USERNAME/my-landing-page.git
git branch -M main
git push -u origin main
```

**Replace** `YOUR-USERNAME` with your actual GitHub username!

### Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files
3. Check that `config.js` and `assets/` are there

---

## Step 2: Deploy to Vercel (2 min)

Vercel is perfect for static sites:

- ✅ Free forever (for personal projects)
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (fast everywhere)
- ✅ Auto-deploy on git push
- ✅ Preview deployments for branches

### Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** or **Login**
3. Choose **Continue with GitHub**
4. Authorize Vercel

### Import Your Project

1. On Vercel dashboard, click **Add New...** → **Project**
2. Find your repository (`my-landing-page`)
3. Click **Import**

### Configure (or Don't!)

Vercel auto-detects static sites. Just:

- **Framework Preset:** None
- **Build Command:** (leave empty)
- **Output Directory:** (leave empty)
- **Install Command:** (leave empty)

### Deploy!

1. Click **Deploy**
2. Wait ~30 seconds
3. 🎉 **Done!** Your site is live!

You'll get a URL like: `my-landing-page-abc123.vercel.app`

### Test Your Site

1. Click **Visit** on Vercel
2. Check everything works:
   - [ ] Logo loads
   - [ ] Colors correct
   - [ ] Links work
   - [ ] Mobile responsive

---

## Step 3: Custom Domain (Optional, 15 min)

Want `yoursite.com` instead of `yoursite.vercel.app`?

### Buy a Domain

If you don't have one:

1. Go to [NameCheap.com](https://www.namecheap.com) (or any registrar)
2. Search for your desired domain
3. Buy it (~$10-15/year)

**Tip:** `.com` is most professional, but `.dev`, `.app`, `.io` work great too.

### Connect Domain in Vercel

1. In Vercel, go to your project
2. Click **Settings** → **Domains**
3. Enter your domain: `yoursite.com`
4. Click **Add**

Vercel will show DNS records you need to add.

### Add DNS Records

#### In NameCheap:

1. Login to NameCheap
2. **Domain List** → **Manage** your domain
3. Click **Advanced DNS** tab
4. Delete existing **A Records** and **CNAME Records** (if any)
5. Add these new records:

**A Record:**

- **Type:** A Record
- **Host:** `@`
- **Value:** `76.76.21.21`
- **TTL:** Automatic

**CNAME Record (for www):**

- **Type:** CNAME Record
- **Host:** `www`
- **Value:** `cname.vercel-dns.com.`
- **TTL:** Automatic

6. Click **Save All Changes**

#### In Other Registrars:

The process is similar. Look for:

- DNS Settings
- DNS Management
- Nameservers / Advanced DNS

Add the same A and CNAME records as above.

### Wait for DNS Propagation

- **Typical:** 10-30 minutes
- **Maximum:** 24-48 hours
- **Check status:** [whatsmydns.net](https://www.whatsmydns.net)

### Verify Connection

1. Back in Vercel → Domains
2. Wait for checkmarks ✅ next to your domain
3. SSL certificate will auto-install
4. Visit `https://yoursite.com` - it works!

---

## Step 4: Auto-Deploy (Already Set Up!)

Now whenever you push to GitHub:

```bash
# Edit config.js
# Save changes

git add .
git commit -m "Updated colors and features"
git push
```

Vercel automatically:

- Detects the push
- Deploys new version
- Updates your site (~30 seconds)

**Check deployment:**

- Go to Vercel dashboard
- See deployment history
- Each push creates a new deployment

---

## Advanced Features

### Preview Deployments

Want to test changes before going live?

```bash
# Create a test branch
git checkout -b test-changes

# Make changes, then push
git push origin test-changes
```

Vercel creates a preview URL like:
`my-landing-page-git-test-changes-username.vercel.app`

Test it, and if good:

```bash
# Merge to main
git checkout main
git merge test-changes
git push
```

### Custom Build Commands

Need to run scripts before deploy?

1. Vercel → Project Settings → General
2. Build Command: `npm run build` (or whatever)
3. Output Directory: `dist` (if using a bundler)

### Environment Variables

For API keys or secrets:

1. Vercel → Project Settings → Environment Variables
2. Add key/value pairs
3. Access in code: `process.env.YOUR_KEY`

### Multiple Domains

Point multiple domains to same site:

1. Vercel → Settings → Domains
2. Add each domain
3. Add same DNS records for each

---

## Troubleshooting

### Domain Not Working

**Check:**

1. Wait longer (DNS can take 24 hours)
2. Verify DNS records match exactly
3. Make sure you saved changes in registrar
4. Check [whatsmydns.net](https://www.whatsmydns.net)
5. Try incognito mode (clears cache)

**Still not working?**

- Check Vercel domain status (should be ✅)
- Contact your domain registrar support
- Verify nameservers are correct

### SSL Certificate Issues

**Problem:** "Not Secure" warning

**Solution:**

- Wait 10 minutes (SSL auto-installs)
- Force HTTPS: Vercel → Settings → Domains → Force HTTPS
- Clear browser cache

### Deployment Failed

**Check:**

1. Vercel deployment logs (click failed deployment)
2. Look for error messages
3. Verify all files pushed to GitHub
4. Check for build errors locally first

### Site Shows Old Version

**Solutions:**

1. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)
2. Wait a few minutes (CDN cache)
3. Check Vercel shows latest deployment
4. Try incognito mode

### Images Not Loading

**Check:**

1. Files exist in `assets/` folder
2. File paths are correct (case-sensitive!)
3. Files were pushed to GitHub
4. Image URLs in config.js are correct

---

## Performance Tips

### Optimize Images

Before deploying:

```bash
# Compress logo files
# Use tinypng.com or imageoptim.com
# Target: < 500KB per image
```

### Enable Analytics

Add Google Analytics:

```javascript
// In config.js
advanced: {
  googleAnalyticsId: "G-XXXXXXXXXX",  // Your GA4 ID
}
```

### Monitor Performance

Use tools to check:

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## Vercel Features to Explore

### Realtime Analytics

- Vercel → Analytics tab
- See visitor data
- Free for small sites

### Edge Functions

- Run server-side code
- Form submissions
- API endpoints

### Password Protection

- Protect site with password
- Good for client previews
- Settings → Deployment Protection

---

## Alternative Hosting Options

### Netlify (Similar to Vercel)

1. [netlify.com](https://www.netlify.com)
2. Drag and drop your folder
3. Or connect GitHub
4. Free tier available

### GitHub Pages (Free)

```bash
# Enable in repo settings
# Settings → Pages → Source → main branch
# Site at: username.github.io/repo-name
```

**Limitations:**

- Must be public repo (for free plan)
- Slower than Vercel
- No automatic builds

### Cloudflare Pages (Free)

1. [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub
3. Deploy
4. Fast global CDN

---

## Maintenance & Updates

### Regular Updates

Keep your site fresh:

```bash
# Update content
vim config.js  # or use any editor

# Commit and push
git add config.js
git commit -m "Updated Q3 2025 features"
git push

# Auto-deploys in ~30 seconds!
```

### Backup Your Config

```bash
# Save important config versions
cp config.js config-2025-03-15.js
git add config-2025-03-15.js
git commit -m "Backup config before major changes"
```

### Rollback if Needed

In Vercel:

1. Go to **Deployments**
2. Find a previous good deployment
3. Click **...** → **Promote to Production**
4. Instant rollback!

Or in Git:

```bash
# View history
git log --oneline

# Revert to previous commit
git revert HEAD
git push
```

---

## Launch Checklist

Before announcing your site:

### Technical

- [ ] Site loads on desktop
- [ ] Site loads on mobile
- [ ] All links work
- [ ] Images load
- [ ] Forms work (if any)
- [ ] HTTPS/SSL active (green lock)
- [ ] Custom domain connected
- [ ] Social meta tags added
- [ ] Favicon present

### Content

- [ ] All text reviewed for typos
- [ ] Contact info correct
- [ ] Social links work
- [ ] CTAs are compelling
- [ ] Copyright year correct

### SEO & Marketing

- [ ] Google Analytics installed
- [ ] Meta description compelling
- [ ] Page title optimized
- [ ] Social share image created
- [ ] Tested social sharing
- [ ] Submitted to Google Search Console

### Performance

- [ ] Page loads in < 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Works in Chrome, Firefox, Safari
- [ ] Mobile responsive

---

## Post-Launch

### Share Your Site

- Post on social media
- Add to your GitHub profile
- Submit to directories
- Share with communities

### Monitor Traffic

- Check Vercel analytics
- Set up Google Analytics
- Track conversions
- Monitor performance

### Iterate

- Collect user feedback
- A/B test CTAs
- Optimize for SEO
- Update content regularly

---

## 🎉 You're Live!

Congratulations! Your landing page is now live and accessible worldwide.

**Your URLs:**

- Production: `https://yoursite.com`
- Vercel: `https://yoursite.vercel.app`
- GitHub: `https://github.com/username/repo`

**What's Next?**

- Share your site!
- Monitor analytics
- Iterate based on feedback
- Keep content fresh

---

**Questions about deployment?**
Check Vercel docs or open an issue on GitHub!

**Good luck with your launch!** 🚀
