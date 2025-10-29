# 🎨 Customization Guide

This landing page template is fully white-labeled and ready for you to customize. All customization happens in **one central file**: `config.js`

## Quick Start (5 Minutes)

### 1. Edit `config.js`

Open `config.js` and update these essential fields:

```javascript
site: {
  title: "Your Product Name",           // Browser tab title
  tagline: "Your catchy tagline",       // Hero section tagline
  url: "https://yoursite.com",          // Your site URL
  author: "Your Company",               // Footer copyright
  year: "2025",                         // Copyright year
},

product: {
  name: "Your Product",                 // Product name
  shortDescription: "Short pitch",      // One-liner description
  // ... more fields
}
```

### 2. Add Your Logo Layers

Place your logo PNG files in the `assets/` folder:

```
assets/
├── logo-moon.png    (background layer)
├── logo-pink.png    (middle layer)
├── logo-black.png   (middle layer)
└── logo-cyan.png    (foreground layer)
```

**Requirements:**

- PNG format with transparency
- Same dimensions for all files (recommended: 1200x800px)
- Keep file size under 500KB each

### 3. Update Colors

Change the color scheme to match your brand:

```javascript
visuals: {
  colors: {
    primary: "#00fff9",     // Main accent color
    secondary: "#ff00ff",   // Secondary accent
    accent: "#7928ca",      // Tertiary color
    dark: "#0a0e27",        // Dark background
    darker: "#050714",      // Darker background
    text: "#e0e0e0",        // Text color
  },
}
```

### 4. Test Locally

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

---

## Complete Configuration Reference

### 📝 Basic Information

```javascript
site: {
  title: "Your Product - Tagline",
  description: "SEO meta description (150-160 characters)",
  tagline: "Hero section tagline",
  url: "https://yoursite.com",
  author: "Your Company Name",
  year: "2025",
}
```

**Where these appear:**

- `title`: Browser tab, search results, social shares
- `description`: Search engine results, social shares
- `tagline`: Large text below your logo
- `author` + `year`: Footer copyright

---

### 🎮 Product Information

```javascript
product: {
  name: "Your Product Name",
  shortDescription: "One-line pitch",
  fullDescription: "Paragraph with <a href='...'>links</a> allowed",
  detailedDescription: "More details about your product",
}
```

**Tips:**

- `shortDescription`: Keep it punchy (4-8 words)
- `fullDescription`: Can include HTML tags like `<a>`, `<strong>`, `<em>`
- `detailedDescription`: Explain key benefits or features

---

### ✨ Features Section

Customize the 4 feature boxes:

```javascript
features: [
  {
    icon: "fa-solid fa-cards", // Font Awesome icon class
    title: "Feature Title", // Feature name
    description: "Main description.", // What it does
    highlight: "Key benefit.", // Highlighted tagline
  },
  // Add 3 more features...
];
```

**Icon Options:**

- Browse icons at [fontawesome.com/icons](https://fontawesome.com/icons)
- Use free solid icons: `fa-solid fa-icon-name`
- Examples: `fa-gamepad`, `fa-rocket`, `fa-star`, `fa-heart`

**Feature Examples:**

```javascript
// Speed/Performance
{ icon: "fa-solid fa-bolt", title: "Lightning Fast", ... }

// Security
{ icon: "fa-solid fa-shield", title: "Secure & Safe", ... }

// Easy to use
{ icon: "fa-solid fa-hand-point-up", title: "Simple & Intuitive", ... }

// Customization
{ icon: "fa-solid fa-palette", title: "Fully Customizable", ... }
```

---

### 📖 Story Section

The story/pitch section below features:

```javascript
story: {
  headline: "The Problem You Solve",
  tagline: "Memorable one-liner!",
  description: "Explain the problem and your solution.",
}
```

---

### 🚀 Call-to-Action Section

Enable/disable and customize the CTA:

```javascript
cta: {
  enabled: true,  // Set to false to hide this section
  headline: "Get Started Today",
  subheading: "Available now or coming soon",
  buttons: [
    {
      text: "Primary Action",
      url: "https://your-link.com",
      style: "primary",  // or "secondary"
    },
    {
      text: "Secondary Action",
      url: "#",
      style: "secondary",
    },
  ],
}
```

**Button Styles:**

- `primary`: Bright gradient button (main action)
- `secondary`: Outline button (less important action)

**Common Use Cases:**

- Steam wishlist + Discord invite
- Sign up + Learn more
- Buy now + Free trial
- Download + Documentation

---

### 🔗 Social Links

Show/hide social media icons in footer:

```javascript
social: {
  bluesky: {
    enabled: true,
    url: "https://bsky.app/profile/yourhandle",
  },
  discord: {
    enabled: false,  // Hidden
    url: "https://discord.gg/your-invite",
  },
  github: {
    enabled: true,
    url: "https://github.com/your-username",
  },
  youtube: {
    enabled: true,
    url: "https://youtube.com/@yourchannel",
  },
  twitter: {
    enabled: false,
    url: "https://twitter.com/yourhandle",
  },
  instagram: {
    enabled: false,
    url: "https://instagram.com/yourhandle",
  },
}
```

---

### 🎨 Visual Customization

#### Logo Layers

Configure your parallax logo layers:

```javascript
visuals: {
  logo: {
    layers: [
      {
        file: "assets/logo-moon.png",
        speed: 0.5,  // Higher = moves more
        filter: "drop-shadow(0 0 20px rgba(0, 255, 249, 0.5))",
      },
      // 3 more layers...
    ],
  },
}
```

**Speed Guide:**

- 0.5: Background (moves most)
- 0.3-0.4: Middle layers
- 0.1-0.2: Foreground (moves least)

**Filter Examples:**

```javascript
// Cyan glow
filter: "drop-shadow(0 0 20px rgba(0, 255, 249, 0.5))";

// Pink glow
filter: "drop-shadow(0 0 15px rgba(255, 0, 255, 0.6))";

// No effect
filter: "none";
```

#### Color Scheme

```javascript
colors: {
  primary: "#00fff9",     // Links, accents, glow effects
  secondary: "#ff00ff",   // Buttons, headings, icons
  accent: "#7928ca",      // Gradients, highlights
  dark: "#0a0e27",        // Background gradient
  darker: "#050714",      // Solid background
  text: "#e0e0e0",        // Body text
}
```

**Choosing Colors:**

1. Pick your brand's primary color
2. Choose a complementary secondary color
3. Use a color tool like [coolors.co](https://coolors.co)
4. Keep text readable (light text on dark background)

#### Starfield Settings

```javascript
starfield: {
  numStars: 200,   // Number of stars (50-500)
  speed: 0.5,      // Movement speed (0.1-2.0)
}
```

**Performance Tips:**

- 200 stars: Good balance
- 100 stars: Better for mobile
- 400+ stars: May lag on older devices

#### Parallax Effect

```javascript
parallax: {
  maxMove: 30,    // Maximum pixel movement (10-50)
  ease: 0.1,      // Smoothing (0.05-0.3, lower = smoother)
}
```

**Recommendations:**

- Subtle effect: `maxMove: 20, ease: 0.05`
- Default: `maxMove: 30, ease: 0.1`
- Dramatic: `maxMove: 50, ease: 0.2`

---

### 📱 Social Media Meta Tags

For social sharing (Discord, Twitter, Facebook):

```javascript
meta: {
  ogImage: "https://yoursite.com/assets/social-share.png",
  ogType: "website",
  themeColor: "#00fff9",  // Browser theme color (mobile)
  keywords: [
    "your product",
    "category",
    "industry",
    "keywords",
  ],
}
```

**Social Share Image:**

1. Create a 1200×630px image
2. Include your logo and tagline
3. Save as `social-share.png` in `assets/`
4. Update the URL in config
5. See `SOCIAL-MEDIA-TAGS.md` for details

---

### ⚙️ Advanced Settings

```javascript
advanced: {
  // Enable/disable features
  enableScrollAnimations: true,  // Fade-in on scroll
  enableParallax: true,          // Logo parallax effect
  enableStarfield: true,         // Animated starfield

  // Optional integrations
  googleAnalyticsId: "",         // e.g., "G-XXXXXXXXXX"
  fontAwesomeKit: "5bdcdf02ed",  // Your Font Awesome kit ID
  faviconPath: "favicon.ico",    // Path to favicon
}
```

**Disabling Features:**
Set any `enable*` to `false` to turn off that feature. Useful for:

- Testing performance
- Creating minimal versions
- Mobile optimization

**Google Analytics:**

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (starts with "G-")
3. Add it to `googleAnalyticsId`

**Custom Font Awesome Kit:**

1. Sign up at [fontawesome.com](https://fontawesome.com)
2. Create a kit
3. Get your kit code (the part after `/`)
4. Replace `fontAwesomeKit` value

---

## Common Customization Scenarios

### Scenario 1: Different Product Type (SaaS App)

```javascript
site: {
  title: "TaskMaster Pro - Project Management Simplified",
  tagline: "Manage Projects Without the Chaos",
}

features: [
  {
    icon: "fa-solid fa-list-check",
    title: "Smart Task Management",
    description: "Organize tasks with AI-powered prioritization.",
    highlight: "Never miss a deadline.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Team Collaboration",
    description: "Real-time updates, comments, and file sharing.",
    highlight: "Everyone stays in sync.",
  },
  // ...
]
```

### Scenario 2: Portfolio/Personal Brand

```javascript
site: {
  title: "Jane Doe - Creative Developer",
  tagline: "Building Beautiful Digital Experiences",
}

features: [
  {
    icon: "fa-solid fa-code",
    title: "Web Development",
    description: "Full-stack applications with modern frameworks.",
    highlight: "React, Node.js, TypeScript",
  },
  // ...
]

cta: {
  enabled: true,
  headline: "Let's Work Together",
  subheading: "Available for freelance projects",
  buttons: [
    { text: "View Portfolio", url: "#portfolio", style: "primary" },
    { text: "Contact Me", url: "mailto:hello@janedoe.com", style: "secondary" },
  ],
}
```

### Scenario 3: Event/Conference

```javascript
site: {
  title: "DevCon 2026 - The Future of Code",
  tagline: "Join 5,000+ Developers This Summer",
}

cta: {
  enabled: true,
  headline: "Save Your Spot",
  subheading: "Early bird tickets on sale now",
  buttons: [
    { text: "Register Now", url: "https://tickets.devcon2026.com", style: "primary" },
    { text: "View Schedule", url: "#schedule", style: "secondary" },
  ],
}
```

---

## Troubleshooting

### Logo Not Appearing

**Problem:** Parallax layers are invisible

**Solutions:**

1. Verify files exist in `assets/` folder
2. Check filenames match exactly (case-sensitive)
3. Ensure PNGs have transparent backgrounds
4. Check browser console (F12) for errors
5. Clear browser cache (Ctrl+Shift+R)

### Colors Not Changing

**Problem:** Old colors still showing

**Solutions:**

1. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. Check `config.js` is loading (view page source)
3. Verify no syntax errors in config.js
4. Make sure CSS custom properties are supported (modern browser)

### Features Not Showing

**Problem:** Feature boxes are empty or missing

**Solutions:**

1. Check `features` array in config.js
2. Verify each feature has all 4 fields (icon, title, description, highlight)
3. Check Font Awesome icons are valid
4. Look for JavaScript errors in console

### Performance Issues

**Problem:** Page is slow or laggy

**Solutions:**

```javascript
// Reduce stars
visuals: {
  starfield: { numStars: 100, speed: 0.3 }
}

// Or disable effects on mobile
advanced: {
  enableStarfield: false,  // Disable for better performance
  enableParallax: false,   // Disable on low-end devices
}
```

### Content Not Updating

**Problem:** Changes in config.js not showing

**Steps:**

1. Clear browser cache
2. Check for JavaScript errors (F12 → Console)
3. Verify `config.js` is being loaded (check Network tab)
4. Make sure `config-loader.js` is loading after `config.js`
5. Validate JSON syntax in config.js (use [jsonlint.com](https://jsonlint.com))

---

## Pro Tips

### 1. Test on Multiple Devices

```bash
# Local testing with network access
python3 -m http.server 8000

# Find your local IP
ipconfig getifaddr en0  # Mac
hostname -I  # Linux

# Access from mobile: http://YOUR-IP:8000
```

### 2. Optimize Logo Images

```bash
# Use tools like:
# - TinyPNG (tinypng.com)
# - ImageOptim (Mac)
# - Squoosh (squoosh.app)

# Target: < 500KB per image
```

### 3. Validate Your Config

Add this to your browser console to check config:

```javascript
console.log(CONFIG); // View entire config
console.log(CONFIG.visuals.colors); // Check colors
```

### 4. Version Control

Keep your customizations in git:

```bash
git add config.js assets/
git commit -m "Customized for my brand"
```

### 5. Create Variations

Make multiple configs for different themes:

```bash
cp config.js config-dark.js
cp config.js config-light.js
# Edit each, then swap as needed
```

---

## Need More Help?

1. **Check the docs:**

   - `README.md` - Overview and setup
   - `DEPLOYMENT.md` - Deploy to production
   - `SOCIAL-MEDIA-TAGS.md` - Social sharing setup
   - `QUICK-REFERENCE.md` - Quick commands

2. **Common Resources:**

   - [Font Awesome Icons](https://fontawesome.com/icons)
   - [Coolors Color Picker](https://coolors.co)
   - [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)

3. **Debugging:**
   - Browser Console (F12)
   - [W3C HTML Validator](https://validator.w3.org)
   - [CSS Validator](https://jigsaw.w3.org/css-validator/)

---

**Happy customizing! 🎨**

Make this template your own and create something amazing!
