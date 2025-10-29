# 📱 Social Media Optimization Guide

Make your landing page look amazing when shared on social media! This guide covers Open Graph tags, Twitter Cards, and creating the perfect social share image.

---

## 🎯 Why This Matters

When someone shares your site on:

- **Discord** - Shows preview card
- **Twitter** - Shows Twitter Card
- **Facebook** - Shows Open Graph preview
- **LinkedIn** - Shows professional preview
- **Slack** - Shows embedded preview

**Without optimization:** Just a plain link 😞  
**With optimization:** Beautiful card with image, title, description 🎉

---

## 🖼️ Step 1: Create Social Share Image

### Specifications

- **Dimensions:** 1200 × 630 pixels (1.91:1 ratio)
- **Format:** PNG or JPG
- **File size:** Under 1MB (smaller is better)
- **File name:** `social-share.png`
- **Location:** `assets/social-share.png`

### What to Include

✅ **Must Have:**

- Your logo (prominent)
- Product/company name
- Tagline or key benefit

✅ **Nice to Have:**

- Release date or status
- Key feature icons
- Brand colors
- Call to action

❌ **Avoid:**

- Too much text (will be hard to read)
- Small fonts (min 40px)
- Important info near edges (may be cropped)
- Low contrast colors

### Design Tools

**Free Online:**

- [Canva](https://canva.com) - Templates available
- [Figma](https://figma.com) - Professional design
- [Photopea](https://photopea.com) - Photoshop alternative

**Desktop:**

- Adobe Photoshop
- Sketch (Mac)
- GIMP (Free)

### Template Layout

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              [YOUR LOGO - Large]                    │
│                                                     │
│            Your Product Name                        │
│          Your Compelling Tagline                    │
│                                                     │
│         Icon  •  Icon  •  Icon                      │
│                                                     │
│        Coming Soon • Q2 2025                        │
│                                                     │
└─────────────────────────────────────────────────────┘
            1200 × 630 pixels
```

### Quick Canva Method

1. Go to [canva.com](https://canva.com)
2. Create design → Custom size → 1200 × 630
3. Choose template or start blank
4. Add your logo
5. Add text (product name, tagline)
6. Use your brand colors
7. Download as PNG
8. Save to `assets/social-share.png`

---

## ⚙️ Step 2: Configure in config.js

Update your meta configuration:

```javascript
// In config.js
meta: {
  ogImage: "https://yoursite.com/assets/social-share.png",  // Full URL!
  ogType: "website",
  themeColor: "#00fff9",  // Your primary color
  keywords: [
    "your product",
    "industry",
    "category",
    "relevant keywords",
  ],
}
```

**Important:** Use the **full URL** with your domain, not a relative path!

---

## 📝 Step 3: Add Meta Tags (Optional Advanced)

The template includes basic meta tags, but for full control, you can add these to `index.html` in the `<head>` section:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yoursite.com/" />
<meta property="og:title" content="Your Product - Your Tagline" />
<meta
  property="og:description"
  content="Compelling description under 160 characters."
/>
<meta
  property="og:image"
  content="https://yoursite.com/assets/social-share.png"
/>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://yoursite.com/" />
<meta name="twitter:title" content="Your Product - Your Tagline" />
<meta name="twitter:description" content="Compelling description." />
<meta
  name="twitter:image"
  content="https://yoursite.com/assets/social-share.png"
/>
<meta name="twitter:creator" content="@yourhandle" />

<!-- Theme Color (Mobile Browser) -->
<meta name="theme-color" content="#00fff9" />

<!-- Keywords -->
<meta name="keywords" content="your, product, keywords, here" />
```

---

## ✅ Step 4: Test Your Social Cards

### Facebook & Discord

1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your URL: `https://yoursite.com`
3. Click **Debug**
4. See preview!
5. Click **Scrape Again** if you make changes

### Twitter

1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your URL
3. Click **Preview Card**
4. See how it looks!

### LinkedIn

1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter your URL
3. See preview

### Discord

1. Paste your URL in any Discord channel
2. Discord auto-generates preview
3. If it doesn't show, wait a few minutes (Discord caches)

---

## 🎨 Design Tips

### Color Scheme

Match your site's theme:

```javascript
// If your site uses cyan/magenta
background: Gradient from #0a0e27 to #050714
text: #00fff9 (cyan) or #ff00ff (magenta)
accents: Your brand colors

// If your site is minimal
background: Solid color or subtle gradient
text: High contrast
logo: Centered and large
```

### Typography

- **Product name:** 60-80px, bold
- **Tagline:** 40-50px, regular or medium
- **Additional text:** 30-35px, light
- **Font:** Use your brand font or:
  - Sans-serif: Inter, Montserrat, Poppins
  - Display: Audiowide, Exo, Orbitron

### Layout Options

**Centered (Classic):**

```
        [LOGO]
     Product Name
    Your Tagline Here
```

**Left-Aligned (Modern):**

```
[LOGO]               [VISUAL]
Product Name
Tagline
Features
```

**Hero Image:**

```
[Large Product Screenshot or Illustration]
            [LOGO]
         Product Name
```

---

## 🔍 Common Mistakes

### ❌ Wrong Image Size

**Problem:** Image cropped weirdly  
**Solution:** Exactly 1200×630px

### ❌ Relative URL

**Problem:** Image doesn't show  
**Solution:** Use full URL with https://

```javascript
// Bad
ogImage: "/assets/social-share.png";

// Good
ogImage: "https://yoursite.com/assets/social-share.png";
```

### ❌ File Too Large

**Problem:** Slow loading, may not display  
**Solution:** Compress to < 1MB

- Use [TinyPNG](https://tinypng.com)
- Or [Squoosh](https://squoosh.app)

### ❌ Low Contrast Text

**Problem:** Can't read text  
**Solution:** Use contrast checker

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Aim for 4.5:1 ratio minimum

### ❌ Caching Issues

**Problem:** Old image still showing  
**Solution:**

- Use Facebook debugger **Scrape Again**
- Rename file if necessary
- Clear Discord cache (wait 24h or use new URL)

---

## 📊 Platform-Specific Tips

### Discord

- **Most important** for gaming/tech products
- Shows large preview by default
- Updates slowly (24h cache)
- **Tip:** Join Discord servers and share to test

### Twitter

- Choose `summary_large_image` for big preview
- Add `twitter:creator` for attribution
- Consider adding your Twitter handle
- **Tip:** Preview shows in Twitter Card Validator

### Facebook

- Most complex Open Graph support
- Shows title, description, image
- Can add additional metadata
- **Tip:** Use debugger before sharing

### LinkedIn

- Professional audience
- Clean, simple designs work best
- Include company name
- **Tip:** Test with Post Inspector

---

## 🎯 Different Contexts

### Product Launch

```
┌─────────────────────────────────┐
│     [PRODUCT SCREENSHOT]        │
│                                 │
│     Launching Q2 2025           │
│     Get Early Access            │
└─────────────────────────────────┘
```

### Event/Conference

```
┌─────────────────────────────────┐
│     [EVENT LOGO]                │
│                                 │
│     June 15-17, 2025            │
│     San Francisco, CA           │
│     Register Now                │
└─────────────────────────────────┘
```

### Portfolio/Personal

```
┌─────────────────────────────────┐
│     [YOUR PHOTO/AVATAR]         │
│                                 │
│     Your Name                   │
│     Title • Location            │
│     View Portfolio →            │
└─────────────────────────────────┘
```

---

## 🚀 Advanced: Multiple Images

Want different images for different pages?

### In HTML

```html
<!-- Homepage -->
<meta
  property="og:image"
  content="https://yoursite.com/assets/home-share.png"
/>

<!-- About page -->
<meta
  property="og:image"
  content="https://yoursite.com/assets/about-share.png"
/>
```

### Dynamic Meta Tags

For multiple pages, use JavaScript:

```javascript
// Set dynamic meta based on page
const pageTitle = "About Us - Your Company";
const pageImage = "https://yoursite.com/assets/about-share.png";

document
  .querySelector('meta[property="og:title"]')
  .setAttribute("content", pageTitle);
document
  .querySelector('meta[property="og:image"]')
  .setAttribute("content", pageImage);
```

---

## 📱 Mobile Browser Theme

```javascript
// In config.js
meta: {
  themeColor: "#00fff9",  // Your primary brand color
}
```

This colors the mobile browser UI:

- Android Chrome top bar
- iOS Safari status bar
- Progressive Web App theme

---

## 🎨 Example Designs

### Gaming (like default template)

- Dark background (#0a0e27)
- Neon colors (cyan, magenta)
- Parallax logo layers combined
- "Coming to Steam 2025"

### SaaS Professional

- Light or dark solid background
- Clean logo centered
- Modern sans-serif font
- Feature icons
- "Start Free Trial"

### Portfolio

- Large hero image or photo
- Name and title
- Minimalist design
- "View Projects"

---

## ✅ Checklist

Before sharing your site:

- [ ] Social share image created (1200×630px)
- [ ] Image saved to `assets/social-share.png`
- [ ] Image compressed (< 1MB)
- [ ] Config.js updated with full URL
- [ ] Tested in Facebook debugger
- [ ] Tested in Twitter validator
- [ ] Tested in Discord
- [ ] Site deployed (not localhost!)
- [ ] HTTPS active
- [ ] All meta tags present

---

## 🆘 Troubleshooting

### Image Doesn't Show

**Check:**

1. File exists at `assets/social-share.png`
2. Using full URL (https://yoursite.com/...)
3. File is accessible (not 404)
4. Correct image size (1200×630)
5. Site is deployed (not localhost!)

**Fix:**

```bash
# Verify file exists
ls assets/social-share.png

# Check URL in browser
# Visit: https://yoursite.com/assets/social-share.png
# Should show the image
```

### Old Image Cached

**Solutions:**

1. Facebook debugger → **Scrape Again**
2. Rename file: `social-share-v2.png`
3. Update URL in config
4. Wait 24 hours for Discord
5. Share in private/incognito mode

### Image Looks Weird

**Check:**

1. Dimensions exactly 1200×630
2. Not stretched or squashed
3. Important content not near edges
4. Text is readable at small sizes

### Wrong Title/Description

**Fix:**

```javascript
// Update in config.js
site: {
  title: "Correct Title - Tagline",
  description: "Correct description under 160 chars",
}
```

Then hard refresh and re-test.

---

## 📚 Resources

| Tool                    | Purpose            | URL                                   |
| ----------------------- | ------------------ | ------------------------------------- |
| Canva                   | Design tool        | canva.com                             |
| Facebook Debugger       | Test Open Graph    | developers.facebook.com/tools/debug/  |
| Twitter Card Validator  | Test Twitter Card  | cards-dev.twitter.com/validator       |
| LinkedIn Post Inspector | Test LinkedIn      | linkedin.com/post-inspector/          |
| TinyPNG                 | Compress images    | tinypng.com                           |
| Squoosh                 | Image optimization | squoosh.app                           |
| Contrast Checker        | Accessibility      | webaim.org/resources/contrastchecker/ |
| Meta Tags Tool          | Generate tags      | metatags.io                           |

---

## 💡 Pro Tips

1. **Create templates** - Design once, reuse for future projects
2. **A/B test** - Try different images and see what gets more clicks
3. **Brand consistency** - Use same style as your website
4. **Update regularly** - Change for launches, seasons, campaigns
5. **Mobile preview** - Check how it looks on small screens
6. **Accessibility** - Ensure text is readable for everyone

---

## 🎉 You're Done!

Your site will now look professional when shared on:

- ✅ Discord
- ✅ Twitter
- ✅ Facebook
- ✅ LinkedIn
- ✅ Slack
- ✅ Any platform with link previews

**Test it:** Share your link and watch the beautiful preview appear! 🚀

---

**Questions?** Check the other documentation files or open an issue!
