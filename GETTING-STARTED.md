# 🚀 Getting Started Guide

Welcome! This guide will walk you through setting up your landing page from scratch. No coding experience required!

## 📋 What You'll Need

- A text editor (VS Code, Sublime Text, or even Notepad)
- Your logo image (PNG or SVG file)
- Your brand colors (hex codes like #4A90E2)
- Your content (product name, description, features)
- 20 minutes of time

---

## Step 1: Get the Template (2 min)

### Download ZIP

1. Download this repository as a ZIP file
2. Extract it to a folder on your computer
3. Rename the folder to your project name

---

## Step 2: Prepare Your Assets (5 min)

### 📸 Logo File

You need **ONE logo file**:

**Requirements:**

- Format: PNG (with transparency) or SVG
- Recommended size: 400-600px wide
- File size: Under 200KB
- Name it: `logo.png` or `logo.svg`

**Where to put it:**

```
assets/
└── logo.png  (or logo.svg)
```

The template includes a placeholder logo that you can replace with your own.

### 🎨 Choose Your Colors

Pick 3 main colors for your brand:

1. **Primary** - Main accent (buttons, links, features)
2. **Secondary** - Secondary accent (highlights, CTAs)
3. **Accent** - Tertiary color (gradients, hover effects)

**How to find colors:**

- Use [coolors.co](https://coolors.co) to generate palettes
- Pick from your existing branding
- Look at competitors for inspiration

**Get hex codes:**

- In Photoshop: Color Picker → # value
- In Figma: Select color → Copy as hex
- Online: Use any color picker tool

**Example (Professional Blue):**

```
Primary: #4A90E2 (blue)
Secondary: #2ECC71 (green)
Accent: #F39C12 (orange)
```

---

## Step 3: Edit Config File (10 min)

Open `config.js` in your text editor. This is the ONLY file you need to edit!

### 3.1 Basic Information

Find this section and update it:

```javascript
site: {
  title: "Your Product Name - Your Tagline",
  description: "A brief description for search engines (150-160 characters)",
  tagline: "Your Hero Tagline",
  url: "https://yourwebsite.com",
  author: "Your Company Name",
  year: "2025",
},
```

**Example (SaaS App):**

```javascript
site: {
  title: "TaskFlow - Project Management Simplified",
  description: "Streamline your projects with AI-powered task management. Collaborate in real-time, track progress, and hit deadlines.",
  tagline: "Project Management Without the Chaos",
  url: "https://taskflow.app",
  author: "TaskFlow Inc",
  year: "2025",
},
```

### 3.2 Product Information

```javascript
product: {
  name: "Your Product Name",
  shortDescription: "One-line pitch (keep it punchy!)",
  fullDescription: "A paragraph about your product. Can include <a href='https://yourcompany.com'>links</a>.",
  detailedDescription: "More details about features and benefits.",
}
```

### 3.3 Features (The 4 Boxes)

Update the 4 feature boxes. Each feature has:

- **icon**: Optional - Font Awesome icon class (leave empty for numbered circles)
- **title**: Feature name
- **description**: What it does
- **highlight**: Key benefit (short!)

```javascript
features: [
  {
    icon: "", // Leave empty for numbered circles, or use "fa-solid fa-rocket" with Font Awesome
    title: "Fast & Efficient",
    description: "Lightning-fast performance that saves you time.",
    highlight: "10x faster than competitors.",
  },
  {
    icon: "",
    title: "Secure & Private",
    description: "Bank-level encryption keeps your data safe.",
    highlight: "Your data stays private.",
  },
  {
    icon: "",
    title: "Team Collaboration",
    description: "Work together seamlessly in real-time.",
    highlight: "Everyone stays in sync.",
  },
  {
    icon: "",
    title: "Analytics Dashboard",
    description: "Track progress with beautiful insights.",
    highlight: "Make data-driven decisions.",
  },
];
```

**Icon Tips:**

- **Without Font Awesome:** Leave `icon: ""` empty - you'll get beautiful numbered circles (1, 2, 3, 4)
- **With Font Awesome:** Add your kit ID (see step 3.8) and use icons like `"fa-solid fa-rocket"`
- Browse icons at [fontawesome.com/icons](https://fontawesome.com/icons) (free solid icons)

### 3.4 Story Section

```javascript
story: {
  headline: "Why We Built This",
  tagline: "A memorable one-liner!",
  description: "Tell your story. Why does your product exist? What problem does it solve?",
}
```

### 3.5 Colors

Replace with your brand colors:

```javascript
visuals: {
  logo: {
    file: "assets/logo.svg",  // Your logo file path
    alt: "Your Company Logo",
  },
  colors: {
    primary: "#4A90E2",      // Your main color
    secondary: "#2ECC71",    // Your secondary color
    accent: "#F39C12",       // Your tertiary color
    dark: "#2C3E50",         // Dark background (hero section)
    darker: "#1A252F",       // Darker background
    text: "#ECF0F1",         // Light text (for dark backgrounds)
    textDark: "#2C3E50",     // Dark text (for light backgrounds)
  }
}
```

**Note:** The hero section uses a dark background, while the content area below has a clean white/light background.

### 3.6 Social Links

Enable/disable and update your social media:

```javascript
social: {
  bluesky: {
    enabled: true,
    url: "https://bsky.app/profile/yourhandle",
  },
  discord: {
    enabled: true,
    url: "https://discord.gg/your-invite-code",
  },
  github: {
    enabled: true,
    url: "https://github.com/your-username",
  },
  youtube: {
    enabled: false,  // Hidden
    url: "",
  },
  twitter: {
    enabled: true,
    url: "https://twitter.com/yourhandle",
  },
  instagram: {
    enabled: false,
    url: "",
  },
}
```

**Note:** Social links will display as text buttons by default. To use icons, add a Font Awesome kit ID (see next section).

### 3.7 Call-to-Action (Optional)

Want a "Get Started" or "Buy Now" section? Enable it:

```javascript
cta: {
  enabled: true,  // Change to true to show
  headline: "Ready to Get Started?",
  subheading: "Join thousands of happy users today",
  buttons: [
    {
      text: "Start Free Trial",
      url: "https://yourapp.com/signup",
      style: "primary",
    },
    {
      text: "Learn More",
      url: "#features",
      style: "secondary",
    },
  ],
}
```

### 3.8 Font Awesome (Optional)

**By default, the template works without Font Awesome:**

- Features show numbered circles (1, 2, 3, 4)
- Social links show as text buttons

**To use icons:**

1. Sign up at [fontawesome.com](https://fontawesome.com)
2. Create a free kit
3. Copy your kit ID
4. Add it to config:

```javascript
advanced: {
  fontAwesomeKit: "abc123def456",  // Your Font Awesome kit ID
}
```

---

## Step 4: Test Locally (3 min)

### Mac/Linux

```bash
cd /path/to/your/project
python3 -m http.server 8000
```

### Windows

```bash
cd C:\path\to\your\project
python -m http.server 8000
```

### Any OS (with Node.js)

```bash
npx http-server -p 8000
```

**Then open:** [http://localhost:8000](http://localhost:8000)

### What to Check

- [ ] Does your logo appear in the hero section?
- [ ] Are colors correct?
- [ ] Is all text updated?
- [ ] Do links work?
- [ ] Does it look good on mobile? (resize browser)
- [ ] Are feature icons/numbers displaying correctly?
- [ ] Do social links work (text or icon format)?

---

## Step 5: Deploy (Optional, 10 min)

Ready to go live? See `DEPLOYMENT.md` for:

- Pushing to GitHub
- Deploying to Vercel (free!)
- Connecting a custom domain

---

## 🆘 Troubleshooting

### "Logo doesn't show"

**Check:**

1. File is in `assets/` folder
2. Filename matches what's in `config.js` (case-sensitive)
3. File is a valid image format (PNG, SVG, or JPG)
4. Clear browser cache (Ctrl+Shift+R)

**Quick fix:**

```bash
ls assets/
# Should show:
# logo.svg (or logo.png)
```

### "Page is blank"

**Check:**

1. Did you open `index.html` directly? (Don't do this)
2. Use a local server instead (see Step 4)
3. Check browser console for errors (F12 → Console)

**Why?** Browsers block local file loading for security. A server fixes this.

### "Colors didn't change"

**Check:**

1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Check for typos in hex codes: `#4A90E2` (not `4A90E2`)
3. Verify `config.js` has no syntax errors (missing comma?)

### "Changes not showing"

**Solutions:**

1. Stop the server (Ctrl+C)
2. Restart: `python3 -m http.server 8000`
3. Hard refresh browser
4. Check for JavaScript errors (F12 → Console)

### "Features showing numbers instead of icons"

**This is normal!** The template works without Font Awesome by default.

**To use icons:**

1. Add Font Awesome kit ID to `config.js`
2. Add icon classes to features: `icon: "fa-solid fa-rocket"`
3. Refresh the page

### "Social links are text, not icons"

**This is normal!** Text buttons look professional and work great.

**To use icon links:**

1. Add Font Awesome kit ID to `config.js`
2. Refresh the page - icons will appear automatically

---

## 🎓 Next Steps

Once you've got the basics working:

1. **Read `CUSTOMIZATION.md`** - Learn advanced customization
2. **Optimize images** - Use [tinypng.com](https://tinypng.com) to compress
3. **Add social sharing** - See `SOCIAL-MEDIA-TAGS.md`
4. **Deploy to production** - See `DEPLOYMENT.md`
5. **Set up analytics** - Add Google Analytics ID in config

---

## 💡 Pro Tips

### Use VS Code

- Free, powerful text editor
- Syntax highlighting for JS/CSS/HTML
- Built-in terminal
- Download: [code.visualstudio.com](https://code.visualstudio.com)

### Keep Backups

```bash
# Save a working version
cp config.js config.backup.js

# If you mess up, restore:
cp config.backup.js config.js
```

### Test on Mobile

While running local server:

1. Find your local IP:

   ```bash
   # Mac
   ipconfig getifaddr en0

   # Linux
   hostname -I

   # Windows
   ipconfig
   ```

2. On your phone, visit: `http://YOUR-IP:8000`

### Validate Your Config

Check for syntax errors:

1. Open browser console (F12)
2. Type: `console.log(CONFIG)`
3. Should show your config object
4. If errors, check for missing commas or quotes

---

## 📞 Need Help?

1. **Check the docs:**

   - `CUSTOMIZATION.md` - Complete customization guide
   - `DEPLOYMENT.md` - Deploy to production
   - `QUICK-REFERENCE.md` - Quick commands

2. **Common issues:**

   - Logo not showing? Check filename and path in config.js
   - Colors not changing? Hard refresh browser
   - Features missing? Check config.js syntax

3. **Still stuck?**
   - Open browser console (F12) and check for errors
   - Look for typos in config.js
   - Make sure local server is running

---

## ✅ Launch Checklist

Before deploying:

- [ ] All text updated in config.js
- [ ] Logo file added to assets/
- [ ] Colors customized
- [ ] Features updated
- [ ] Social links updated
- [ ] Tested locally
- [ ] Tested on mobile (resize browser)
- [ ] All links work
- [ ] No console errors

**You're ready!** 🚀

See `DEPLOYMENT.md` to put your site live!

---

**Questions?** Check the other documentation files or open an issue on GitHub.

**Happy building!** 🎉
