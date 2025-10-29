# 📁 Assets Folder

This folder contains all images and visual assets for your landing page.

---

## 🎨 Required Logo File

Place your logo PNG file here:

### 📋 File

**`logo.png`** - Your main logo

- Displayed in the hero section
- **Recommended size:** 400-600px wide
- **Format:** PNG with transparency preferred
- **File size:** Keep under 200KB for fast loading

---

## 📐 Specifications

### Format

- **File type:** PNG (preferred) or SVG
- **Transparency:** Recommended for best results
- **Color mode:** RGB or RGBA

### Size

- **Recommended width:** 400-600px
- **Maximum width:** 800px
- **Aspect ratio:** Maintain your logo's natural proportions
- **File size:** Keep under 200KB

---

## 🎨 Creating Your Logo

### Option 1: Use Your Existing Logo

Simply rename and place your logo file:

```bash
cp your-logo.png logo.png
# Move to assets folder
```

### Option 2: Export from Design Software

**Photoshop:**

- File → Export → Export As...
- Format: PNG
- Transparency: ✅ Checked (if desired)
- Resolution: 2x for retina displays

**Figma:**

- Select your logo
- Export → PNG
- Scale: 2x or 3x
- Include: Background = OFF (for transparency)

**Illustrator:**

- File → Export → Export As
- Format: PNG
- Transparent Background: ✅ (if desired)
- Resolution: High (300 PPI)

---

## 🎯 Tips for Best Results

### 1. Optimize File Size

- Use PNG optimization tools:
  - [TinyPNG](https://tinypng.com)
  - [Squoosh](https://squoosh.app)
  - [ImageOptim](https://imageoptim.com) (Mac)
- Target: < 200KB
- Smaller = faster loading

### 2. Consider Transparency

- Transparent background looks cleaner
- Works better with gradient backgrounds
- PNG format required for transparency

### 3. Test Different Sizes

- Desktop: Logo should be visible but not overwhelming
- Mobile: Ensure logo is still readable when scaled down
- Test on both screen sizes

### 4. Retina Display

- Export at 2x your target size
- Example: If you want 400px wide, export at 800px
- Browser will scale it down for sharp display

---

## 🖼️ Additional Assets

### Social Share Image (Recommended)

**File:** `social-share.png`

- Dimensions: **1200 × 630 pixels**
- Format: PNG or JPG
- Purpose: Social media previews (Discord, Twitter, Facebook)
- See `SOCIAL-MEDIA-TAGS.md` for details

### Favicon (Optional)

**Files:**

- `favicon-32x32.png` (32×32px)
- `favicon-16x16.png` (16×16px)
- `apple-touch-icon.png` (180×180px)

**Generate:**

1. Use [favicon.io](https://favicon.io/favicon-converter/)
2. Upload your logo
3. Download generated files
4. Place in `assets/` folder

---

## 📁 Folder Structure

```
assets/
├── logo.png                ← Required
├── social-share.png        ← Recommended
├── favicon-32x32.png       ← Optional
├── favicon-16x16.png       ← Optional
├── apple-touch-icon.png    ← Optional
└── README.md               ← This file
```

---

## ✅ Checklist

Before deploying:

- [ ] Logo PNG file added
- [ ] Logo is correct dimensions (400-600px wide)
- [ ] File under 200KB
- [ ] Tested locally (logo displays correctly)
- [ ] Looks good on desktop and mobile
- [ ] Social share image created (optional)
- [ ] Favicons generated (optional)

---

## 🐛 Troubleshooting

### Logo Doesn't Appear

**Check:**

1. File is in `assets/` folder (not subfolder)
2. Filename is exactly `logo.png` (lowercase)
3. File is a valid image format (PNG, JPG, or SVG)
4. Running a local server (not opening index.html directly)
5. Path in `config.js` matches: `assets/logo.png`

**Verify:**

```bash
# In terminal, from project root:
ls assets/

# Should show:
# logo.png  README.md
```

### Logo is Blurry

**Solutions:**

1. Export at higher resolution (2x size)
2. Use 800px wide instead of 400px
3. Ensure original is vector (not low-res raster)
4. Check browser zoom is at 100%

### File Size Too Large

**Compress:**

1. Use [TinyPNG](https://tinypng.com)
2. Or [Squoosh](https://squoosh.app)
3. Reduce dimensions if still too large
4. Convert to PNG-8 if colors are limited

### Logo Looks Bad on Dark Background

**Solutions:**

1. Add white/light outline to logo
2. Use transparent background with light elements
3. Adjust logo colors for better contrast
4. Add subtle shadow/glow in CSS (automatic)

---

## 🎨 Customization

### Change Logo in Config

Edit `config.js`:

```javascript
visuals: {
  logo: {
    file: "assets/logo.png",  // Your logo path
    alt: "My Company Logo",   // Alt text for accessibility
  }
}
```

### Different Logo File Name

Want to use a different filename?

```javascript
// In config.js
visuals: {
  logo: {
    file: "assets/my-custom-logo.png",
    alt: "Logo",
  }
}
```

### Logo Size in CSS

Want to adjust logo size? Edit `styles.css`:

```css
#hero-logo {
  max-width: 500px; /* Change this value */
  width: 100%;
  height: auto;
}
```

---

## 📚 Resources

| Tool              | Purpose              | URL            |
| ----------------- | -------------------- | -------------- |
| TinyPNG           | Compress PNGs        | tinypng.com    |
| Squoosh           | Image optimization   | squoosh.app    |
| Favicon Generator | Create favicons      | favicon.io     |
| ImageOptim        | Mac compression tool | imageoptim.com |
| Photopea          | Free Photoshop       | photopea.com   |
| Canva             | Design tool          | canva.com      |

---

## 💡 Pro Tips

1. **Keep originals** - Save source files (AI, PSD, Figma, etc.)
2. **Version control** - Track changes with git
3. **Backup** - Keep copies of working versions
4. **Test both themes** - Ensure logo works on light and dark backgrounds
5. **Mobile first** - Make sure it's readable on small screens

---

## 🎉 You're Ready!

Once you've added your logo file:

1. Test locally to see it in the hero section
2. Optimize file size if needed
3. Ensure it looks good on all devices
4. Deploy to production

**Your logo will look great!** ✨

---

**Questions?** Check `CUSTOMIZATION.md` or `GETTING-STARTED.md`!
