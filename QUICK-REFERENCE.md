# ⚡ Quick Reference

Fast access to commands, settings, and common tasks.

---

## 🚀 Quick Start (5 Minutes)

```bash
# 1. Clone or download the template
git clone https://github.com/your-username/white-label-landing-page.git
cd white-label-landing-page

# 2. Add your logo files to assets/
cp your-logos/* assets/

# 3. Edit config.js
vim config.js  # or use any editor

# 4. Test locally
python3 -m http.server 8000
# Open http://localhost:8000

# 5. Deploy
git add .
git commit -m "Customized landing page"
git remote add origin https://github.com/your-username/your-site.git
git push -u origin main

# 6. Deploy on Vercel
# → Visit vercel.com
# → Import GitHub repo
# → Click Deploy
```

---

## 📁 File Structure

```
white-label-landing-page/
├── config.js              ⭐ Edit this to customize everything
├── config-loader.js       Applies config to HTML
├── index.html             Main HTML (rarely need to edit)
├── styles.css             Styling (colors from config)
├── script.js              Animations (settings from config)
├── assets/                Your logo and images
│   ├── logo-moon.png      Background layer (speed: 0.5)
│   ├── logo-pink.png      Middle layer (speed: 0.3)
│   ├── logo-black.png     Middle layer (speed: 0.2)
│   └── logo-cyan.png      Foreground layer (speed: 0.1)
└── [docs]                 Documentation files
```

---

## ⚙️ Config.js Quick Reference

### Essential Fields

```javascript
// Basic info
site: {
  title: "Product - Tagline",
  description: "SEO description",
  tagline: "Hero tagline",
  url: "https://yoursite.com",
  author: "Your Company",
  year: "2025",
}

// Product
product: {
  name: "Product Name",
  shortDescription: "One-liner",
}

// Colors
visuals: {
  colors: {
    primary: "#00fff9",
    secondary: "#ff00ff",
    accent: "#7928ca",
  }
}

// Social
social: {
  platform: { enabled: true, url: "https://..." }
}
```

---

## 🎨 Common Color Schemes

```javascript
// Cyberpunk (default)
colors: { primary: "#00fff9", secondary: "#ff00ff", accent: "#7928ca" }

// Ocean
colors: { primary: "#00d4ff", secondary: "#0099ff", accent: "#0055aa" }

// Forest
colors: { primary: "#00ff88", secondary: "#88ff00", accent: "#00aa55" }

// Fire
colors: { primary: "#ff4400", secondary: "#ff0044", accent: "#cc0044" }

// Monochrome
colors: { primary: "#ffffff", secondary: "#888888", accent: "#444444" }

// Purple Dream
colors: { primary: "#aa00ff", secondary: "#ff00aa", accent: "#6600cc" }
```

---

## 🎯 Font Awesome Icons

Common icons for features:

```javascript
// Technology
"fa-solid fa-code"; // Code
"fa-solid fa-microchip"; // Chip
"fa-solid fa-server"; // Server
"fa-solid fa-database"; // Database

// Business
"fa-solid fa-chart-line"; // Growth
"fa-solid fa-rocket"; // Launch
"fa-solid fa-lightbulb"; // Idea
"fa-solid fa-handshake"; // Partnership

// Security
"fa-solid fa-shield"; // Shield
"fa-solid fa-lock"; // Lock
"fa-solid fa-key"; // Key
"fa-solid fa-shield-check"; // Verified

// Communication
"fa-solid fa-comments"; // Chat
"fa-solid fa-envelope"; // Email
"fa-solid fa-phone"; // Phone
"fa-solid fa-video"; // Video

// Features
"fa-solid fa-star"; // Featured
"fa-solid fa-heart"; // Favorite
"fa-solid fa-check"; // Verified
"fa-solid fa-bolt"; // Fast

// Tools
"fa-solid fa-wrench"; // Settings
"fa-solid fa-gear"; // Config
"fa-solid fa-sliders"; // Customize
"fa-solid fa-palette"; // Design
```

**Browse all:** [fontawesome.com/icons](https://fontawesome.com/icons)

---

## 🖥️ Local Development

### Start Server

```bash
# Python 3 (Mac/Linux/Windows)
python3 -m http.server 8000

# Python 2 (older systems)
python -m SimpleHTTPServer 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

### Test on Mobile

```bash
# Find your local IP
# Mac:
ipconfig getifaddr en0

# Linux:
hostname -I

# Windows:
ipconfig

# Then on phone: http://YOUR-IP:8000
```

---

## 🔧 Common Customizations

### Disable Effects

```javascript
// In config.js
advanced: {
  enableStarfield: false,        // No stars
  enableParallax: false,         // Static logo
  enableScrollAnimations: false, // No fade-ins
}
```

### Adjust Animation Speed

```javascript
visuals: {
  starfield: {
    numStars: 100,    // Fewer = faster
    speed: 0.3,       // Slower movement
  },
  parallax: {
    maxMove: 20,      // Less movement
    ease: 0.05,       // Smoother
  }
}
```

### Change Logo Files

```javascript
visuals: {
  logo: {
    layers: [
      { file: "assets/my-logo-1.png", speed: 0.5 },
      { file: "assets/my-logo-2.png", speed: 0.3 },
      { file: "assets/my-logo-3.png", speed: 0.2 },
      { file: "assets/my-logo-4.png", speed: 0.1 },
    ];
  }
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main

# 2. Deploy on Vercel
# → vercel.com
# → Import repo
# → Deploy

# 3. Updates (auto-deploy on push)
git add .
git commit -m "Updated features"
git push
```

### Netlify

```bash
# Option 1: Drag & Drop
# → netlify.com
# → Drag project folder

# Option 2: GitHub
# → Connect repo
# → Deploy
```

### GitHub Pages

```bash
# In repo settings:
# Settings → Pages → Source: main branch
# Site at: username.github.io/repo-name
```

---

## 🌐 DNS Records (for Custom Domain)

### NameCheap

| Type  | Host | Value                |
| ----- | ---- | -------------------- |
| A     | @    | 76.76.21.21          |
| CNAME | www  | cname.vercel-dns.com |

### Cloudflare

Same as above, but:

- Ensure "Proxy status" is OFF (gray cloud)
- Or use Cloudflare Pages instead

### GoDaddy

| Type  | Name | Value                | TTL |
| ----- | ---- | -------------------- | --- |
| A     | @    | 76.76.21.21          | 1h  |
| CNAME | www  | cname.vercel-dns.com | 1h  |

---

## 🐛 Debugging

### Check Config Loading

```javascript
// In browser console (F12):
console.log(CONFIG);
// Should show your config object
```

### View Errors

```javascript
// Browser console (F12 → Console tab)
// Look for red errors
```

### Validate Syntax

```bash
# Check for JSON errors (if config was JSON)
# For JS, use browser console or:
node -c config.js
```

### Clear Cache

```bash
# Hard refresh
# Windows/Linux: Ctrl + Shift + R
# Mac: Cmd + Shift + R

# Or incognito mode
# Ctrl/Cmd + Shift + N
```

---

## 📊 Performance

### Optimize Images

```bash
# Online tools:
# → tinypng.com
# → squoosh.app
# → imageoptim.com

# Target: < 500KB per logo file
```

### Check Speed

```bash
# Online tools:
# → pagespeed.web.dev
# → gtmetrix.com
# → webpagetest.org
```

### Reduce Stars (if slow)

```javascript
visuals: {
  starfield: {
    numStars: 50;
  } // Default: 200
}
```

---

## 🔍 SEO Checklist

```javascript
// In config.js:
site: {
  title: "Product Name - Key Benefit",  // < 60 chars
  description: "Compelling 150-char description",
}

meta: {
  keywords: ["primary", "secondary", "industry"],
  ogImage: "https://yoursite.com/assets/social-share.png",
}
```

---

## 📱 Social Share Image

**Dimensions:** 1200 × 630 pixels

**Include:**

- Your logo
- Product name
- Tagline or key benefit
- Release date (if relevant)

**Save as:** `assets/social-share.png`

**Test:**

- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 🎯 Launch Checklist

### Before Deploy

- [ ] All content updated in config.js
- [ ] Logo files added to assets/
- [ ] Colors customized
- [ ] Features written
- [ ] Social links updated
- [ ] Tested locally
- [ ] No console errors

### After Deploy

- [ ] Site loads correctly
- [ ] Mobile responsive
- [ ] All links work
- [ ] HTTPS active
- [ ] Domain connected
- [ ] Analytics added
- [ ] Social sharing tested

---

## 💡 Pro Tips

```bash
# Save config backup before big changes
cp config.js config.backup.js

# Test changes in a branch
git checkout -b test-feature
# ... make changes ...
git push origin test-feature
# Vercel creates preview URL

# Quick color test
# Change colors in config → refresh → instant preview

# Find good color combos
# → coolors.co
# → color.adobe.com

# Free images
# → unsplash.com
# → pexels.com
```

---

## 🆘 Emergency Fixes

### Site is broken

```bash
# Rollback in Vercel
# → Deployments → Previous deployment → Promote

# Or in Git
git revert HEAD
git push
```

### Lost config

```bash
# Restore from backup
cp config.backup.js config.js

# Or from Git history
git checkout HEAD~1 config.js
```

### DNS not working

```bash
# Check propagation
# → whatsmydns.net

# Wait 24 hours
# DNS can take time

# Verify records match exactly
# → Check registrar settings
```

---

## 📞 Resources

| Resource              | URL                   |
| --------------------- | --------------------- |
| Font Awesome Icons    | fontawesome.com/icons |
| Color Schemes         | coolors.co            |
| Image Compression     | tinypng.com           |
| DNS Propagation Check | whatsmydns.net        |
| PageSpeed Insights    | pagespeed.web.dev     |
| Vercel Documentation  | vercel.com/docs       |
| GitHub Pages          | pages.github.com      |
| Google Fonts          | fonts.google.com      |

---

## 🔗 Quick Links

- **Documentation**

  - `CUSTOMIZATION.md` - Complete guide
  - `GETTING-STARTED.md` - Beginner tutorial
  - `DEPLOYMENT.md` - Production guide
  - `SOCIAL-MEDIA-TAGS.md` - Social setup

- **Tools**
  - [VS Code](https://code.visualstudio.com) - Editor
  - [Vercel](https://vercel.com) - Hosting
  - [NameCheap](https://namecheap.com) - Domains

---

**Need more help?** Check the full documentation files!

**Quick question?** Check browser console for errors (F12).

**Ready to launch?** See `DEPLOYMENT.md`! 🚀
