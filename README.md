# 🌟 White Label Landing Page Template

A clean, professional, and fully customizable landing page template with modern design. Perfect for indie games, SaaS products, portfolios, or any project that needs a professional web presence.

## ✨ Features

### 🎨 **Fully White-Labeled**

- **One-file configuration** - Change everything from `config.js`
- No need to hunt through HTML/CSS files
- Update branding, colors, content in minutes
- Works immediately without any dependencies

### 🎭 **Modern Design**

- **Dark hero section** with clean logo display
- **Light content area** for maximum readability
- **Smooth scroll animations** and transitions
- **Responsive design** - looks great on all devices
- **Professional fonts** - Inter, Rajdhani, JetBrains Mono

### ⚙️ **Easy Customization**

- Single logo file (PNG or SVG)
- Professional neutral color scheme (easily customizable)
- Add/remove features and sections
- Optional Font Awesome icons (works great without them too)
- Configure social links (text or icon format)

### 🚀 **Production Ready**

- Optimized for performance
- SEO-friendly meta tags
- Social media sharing cards
- One-click Vercel deployment
- No external dependencies required

---

## 📦 What's Included

```
white-label-marketing-site/
├── config.js              # ⭐ Main configuration file (edit this!)
├── config-loader.js       # Applies config to HTML
├── index.html             # Main HTML structure
├── styles.css             # Styling (colors from config)
├── script.js              # Scroll animations
├── vercel.json            # Vercel deployment config
│
├── assets/                # Your logo and images
│   ├── logo.svg           # Placeholder logo (replace with yours)
│   └── README.md          # Logo requirements guide
│
├── CUSTOMIZATION.md       # Complete customization guide
├── DEPLOYMENT.md          # Quick deployment walkthrough
├── GETTING-STARTED.md     # Step-by-step setup
├── QUICK-REFERENCE.md     # Command cheat sheet
├── SOCIAL-MEDIA-TAGS.md   # Social sharing optimization
└── README.md              # This file
```

---

## 🚀 Quick Start

### 1. **Download**

Download this repository as ZIP using the code button above and extract.

### 2. **Customize Your Site**

Open `config.js` and update these essential fields:

```javascript
site: {
  title: "Your Product Name - Your Tagline",
  description: "Your product description for SEO",
  tagline: "Your catchy hero tagline",
  url: "https://yoursite.com",
  author: "Your Company",
  year: "2025",
},

product: {
  name: "Your Product",
  shortDescription: "Your one-liner pitch",
  // ... more fields
}
```

See `CUSTOMIZATION.md` for complete documentation.

### 3. **Add Your Logo**

Replace the placeholder logo with your own:

```
assets/
└── logo.png  (or logo.svg)
```

**Requirements:**

- Format: PNG (with transparency) or SVG
- Recommended size: 400-600px wide
- Under 200KB

The template includes a placeholder logo that displays immediately.

### 4. **Customize Colors**

Update the color scheme in `config.js`:

```javascript
visuals: {
  logo: {
    file: "assets/logo.svg",
    alt: "Your Company Logo",
  },
  colors: {
    primary: "#4A90E2",     // Professional blue (customize to your brand)
    secondary: "#2ECC71",   // Success green
    accent: "#F39C12",      // Accent orange
    // ... more colors
  }
}
```

### 5. **Test Locally**

```bash
# Option 1: Python (built-in)
python3 -m http.server 8000

# Option 2: Node.js (if you have it)
npx http-server -p 8000

# Open http://localhost:8000
```

### 6. **Deploy to Production**

#### Deploy to Vercel (Recommended - Free & Easy)

1. Push to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Select your repository
5. Click "Deploy"
6. Done! Your site is live in ~30 seconds

You should also be able to deploy this to GitHub pages or any other static site hosting platform.

---

## 📖 Documentation

Comprehensive guides for every aspect:

| Guide                      | Description                                |
| -------------------------- | ------------------------------------------ |
| **`CUSTOMIZATION.md`**     | Complete guide to customizing every aspect |
| **`GETTING-STARTED.md`**   | Step-by-step setup for beginners           |
| **`QUICK-REFERENCE.md`**   | Quick command reference and checklist      |
| **`SOCIAL-MEDIA-TAGS.md`** | Setup social sharing cards                 |

---

## 🎨 Customization Overview

Everything is configured in **`config.js`**. Here's what you can customize:

### 📝 Content

- Site title, description, tagline
- Product information
- 4 feature boxes (titles, descriptions, highlights)
- Story/pitch section
- Call-to-action section
- Footer and copyright

### 🎨 Visuals

- Single logo file (PNG or SVG)
- Color scheme (professional neutral theme)
- Feature icons (optional - uses numbered circles by default)
- Social link format (text or icon-based)

### 🔗 Links

- Social media (Bluesky, Discord, GitHub, YouTube, Twitter, Instagram)
- Call-to-action buttons
- External links

### ⚙️ Features

- Enable/disable scroll animations
- Optional Font Awesome integration (for icons)
- Fully functional without any external dependencies

**See `CUSTOMIZATION.md` for complete documentation!**

---

## 🎯 Use Cases

This template is perfect for:

- ✅ **Indie Game Landing Pages**

  - Showcase your game with style
  - Steam wishlist integration
  - Discord community links

- ✅ **SaaS Products**

  - Professional web presence
  - Feature highlighting
  - Sign-up CTAs

- ✅ **Personal Portfolios**

  - Creative professionals
  - Developers and designers
  - Show your work with impact

- ✅ **Events & Conferences**

  - Promote your event
  - Registration CTAs
  - Schedule and information

- ✅ **Product Launches**
  - Coming soon pages
  - Pre-order campaigns
  - Build anticipation

---

## 🔧 Technical Details

### Technologies Used

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **CSS Custom Properties** - Dynamic theming
- **Canvas API** - Starfield animation
- **Intersection Observer** - Scroll animations
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

### Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

### Performance

- Optimized rendering
- Lazy loading where appropriate
- ~100KB total (before images)

---

## 🎬 Example Configurations

### Gaming (Default)

The template comes pre-configured with a gaming example. Perfect for indie titles!

### SaaS Application

```javascript
// config.js example
site: {
  title: "ProjectHub - Team Collaboration Made Simple",
  tagline: "Work Together, Achieve More",
}

features: [
  {
    icon: "fa-solid fa-list-check",
    title: "Task Management",
    description: "Organize work with smart task boards.",
    highlight: "Never miss a deadline.",
  },
  // ... more features
]
```

### Portfolio

```javascript
// config.js example
site: {
  title: "Alex Chen - Full Stack Developer",
  tagline: "Building Digital Experiences",
}

cta: {
  enabled: true,
  headline: "Let's Build Something",
  buttons: [
    { text: "View Projects", url: "#portfolio", style: "primary" },
    { text: "Contact Me", url: "mailto:alex@example.com", style: "secondary" },
  ],
}
```

---

## 🎨 Customization Examples

### Change Color Scheme

```javascript
// Professional Blue (Default)
visuals: {
  colors: {
    primary: "#4A90E2",
    secondary: "#2ECC71",
    accent: "#F39C12",
    dark: "#2C3E50",
    darker: "#1A252F",
    text: "#ECF0F1",
    textDark: "#2C3E50",
  }
}

// Tech Purple
visuals: {
  colors: {
    primary: "#9B59B6",
    secondary: "#3498DB",
    accent: "#E74C3C",
    dark: "#2C3E50",
    darker: "#1A252F",
    text: "#ECF0F1",
    textDark: "#2C3E50",
  }
}

// Nature Green
visuals: {
  colors: {
    primary: "#27AE60",
    secondary: "#2ECC71",
    accent: "#F39C12",
    dark: "#1E8449",
    darker: "#145A32",
    text: "#ECF0F1",
    textDark: "#145A32",
  }
}

// Corporate Gray
visuals: {
  colors: {
    primary: "#5D6D7E",
    secondary: "#85929E",
    accent: "#3498DB",
    dark: "#34495E",
    darker: "#2C3E50",
    text: "#ECF0F1",
    textDark: "#2C3E50",
  }
}
```

### Enable Font Awesome Icons

```javascript
// Default: numbered circles for features, text for social links
advanced: {
  fontAwesomeKit: "",  // Empty = no icons
}

// With Font Awesome icons
advanced: {
  fontAwesomeKit: "your-kit-id-here",  // Icons for features & social
}

features: [
  {
    icon: "fa-solid fa-rocket",  // Only works with Font Awesome kit
    title: "Fast & Efficient",
    // ...
  }
]
```

### Disable Scroll Animations

```javascript
advanced: {
  enableScrollAnimations: false,  // Disable fade-in effects
}
```

---

## 🆘 Troubleshooting

### Logo Not Showing?

1. Check file is in `assets/` folder
2. Verify filename in `config.js` matches exactly (case-sensitive)
3. Ensure image is valid PNG, SVG, or JPG format
4. Clear browser cache (Ctrl+Shift+R)

### Colors Not Changing?

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check `config.js` syntax (no missing commas!)
3. Open browser console (F12) for errors

### Features Not Appearing?

1. Verify `features` array in config.js
2. Check all 4 fields are present (icon, title, description, highlight)
3. Icons are optional - leave empty for numbered circles

### Icons Not Showing?

**This is normal!** The template works without Font Awesome by default.

- Features display numbered circles (1, 2, 3, 4)
- Social links display as text buttons

To enable icons, add your Font Awesome kit ID in `config.js`.

See `CUSTOMIZATION.md` for more troubleshooting tips.

---

## 📋 Deployment Checklist

Before going live:

- [ ] Updated all content in `config.js`
- [ ] Added logo PNG files to `assets/`
- [ ] Customized color scheme
- [ ] Updated social media links
- [ ] Added Google Analytics ID (optional)
- [ ] Created social share image (1200x630px)
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested all links work
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Connected custom domain (optional)
- [ ] Verified SSL certificate
- [ ] Tested social sharing (Discord, Twitter)

---

## 🤝 Contributing

This is a template - feel free to:

- Fork and modify for your needs
- Share your customizations
- Report bugs or issues
- Suggest improvements

---

## 📄 License

MIT License - Use freely for personal or commercial projects!

See `LICENSE` file for details.

---

## 🌟 Example Sites Using This Template

Add your site here! Submit a PR to showcase your customization.

---

## 💡 Tips for Success

1. **Start with the basics** - Get your content right before tweaking visuals
2. **Test locally first** - Always preview before deploying
3. **Optimize images** - Keep logo files under 500KB each
4. **Mobile first** - Test on phones, most traffic is mobile
5. **Keep it simple** - Don't overcomplicate your message
6. **Update regularly** - Keep content fresh and relevant

---

## 🎓 Learning Resources

- **Font Awesome Icons**: [fontawesome.com/icons](https://fontawesome.com/icons)
- **Color Schemes**: [coolors.co](https://coolors.co)
- **Image Optimization**: [tinypng.com](https://tinypng.com)
- **Domain Registration**: [namecheap.com](https://namecheap.com)
- **Hosting**: [vercel.com](https://vercel.com)

---

## ❓ FAQ

**Q: Can I use this for commercial projects?**  
A: Yes! MIT License allows commercial use.

**Q: Do I need coding experience?**  
A: Basic editing of `config.js` is all you need. See `GETTING-STARTED.md` for help.

**Q: How do I add more features than 4?**  
A: Just add more objects to the `features` array in config.js. The grid will adapt.

**Q: Can I change the fonts?**  
A: Yes, but it requires editing `index.html` and `styles.css`. Google Fonts is used by default.

**Q: Can I add more pages?**  
A: This is a single-page template, but you can create additional HTML files and link to them.

---

## 🚀 Ready to Launch?

1. **Read** `GETTING-STARTED.md` (5 min)
2. **Edit** `config.js` (10 min)
3. **Test** locally (5 min)
4. **Deploy** to Vercel (2 min)
5. **Done!** Your site is live

---

**Questions? Issues? Suggestions?**

Open an issue on GitHub or check the documentation files!

---

**Made with ❤️ for the indie game and web dev community**

_Originally created for [Hexbit Studios](https://hexbitstudios.com)_
