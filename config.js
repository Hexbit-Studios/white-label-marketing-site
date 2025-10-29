// ========================================
// 🎨 SITE CONFIGURATION
// ========================================
// Edit this file to customize your landing page
// All settings in one place - no need to hunt through code!

const CONFIG = {
  // ========================================
  // 📝 BASIC INFORMATION
  // ========================================
  site: {
    title: "My Game - My Tagline",
    description: "My Game Description",
    tagline: "My Game Tagline",
    url: "https://mygame.com",
    author: "My Company",
    year: "2025",
  },

  // ========================================
  // 🎮 GAME/PRODUCT INFORMATION
  // ========================================
  product: {
    name: "My Game",
    shortDescription: "My Game Short Description",
    fullDescription: "My Game Description",
    detailedDescription: "My Game Detailed Description",
  },

  // ========================================
  // ✨ FEATURES
  // ========================================
  // Customize the four feature boxes on your landing page
  features: [
    {
      icon: "", // Optional: Font Awesome icon class (e.g., "fa-solid fa-rocket")
      title: "Feature 1",
      description: "Feature 1 Description",
      highlight: "Feature 1 Highlight",
    },
    {
      icon: "", // Leave empty to use numbered circles, or add FA icon if using Font Awesome
      title: "Feature 2",
      description: "Feature 2 Description",
      highlight: "Feature 2 Highlight",
    },
    {
      icon: "",
      title: "Feature 3",
      description: "Feature 3 Description",
      highlight: "Feature 3 Highlight",
    },
    {
      icon: "",
      title: "Feature 4",
      description: "Feature 4 Description",
      highlight: "Feature 4 Highlight",
    },
  ],

  // ========================================
  // 📖 STORY SECTION
  // ========================================
  story: {
    headline: "My Game Story Headline",
    tagline: "My Game Story Tagline",
    description: "My Game Story Description",
  },

  // ========================================
  // 🚀 CALL TO ACTION
  // ========================================
  cta: {
    enabled: true, // Set to true to show the CTA section
    headline: "Stay Updated",
    subheading: "Coming soon to Steam!",
    buttons: [
      {
        text: "Wishlist on Steam",
        url: "#", // TODO: Add Steam wishlist link
        style: "primary", // 'primary' or 'secondary'
      },
      {
        text: "Join our Discord",
        url: "#", // TODO: Add Discord invite link
        style: "secondary",
      },
    ],
  },

  // ========================================
  // 🔗 SOCIAL LINKS
  // ========================================
  social: {
    // Set 'enabled: false' to hide specific social links
    bluesky: {
      enabled: true,
      url: "#", // TODO: Add Bluesky profile link
    },
    discord: {
      enabled: true,
      url: "#", // TODO: Add Discord invite link
    },
    github: {
      enabled: true,
      url: "#", // TODO: Add GitHub profile link
    },
    youtube: {
      enabled: true,
      url: "#", // TODO: Add YouTube channel link
    },
    twitter: {
      enabled: true,
      url: "#", // TODO: Add Twitter profile link
    },
    instagram: {
      enabled: true,
      url: "#", // TODO: Add Instagram profile link
    },
  },

  // ========================================
  // 🎨 VISUAL CUSTOMIZATION
  // ========================================
  visuals: {
    // Logo (single image file)
    logo: {
      file: "assets/logo.svg", // Your logo file (PNG, SVG, or JPG)
      alt: "Logo", // Alt text for accessibility
    },

    // Color scheme (CSS custom properties) - Professional neutral theme
    colors: {
      primary: "#4A90E2", // Professional blue
      secondary: "#2ECC71", // Success green
      accent: "#F39C12", // Accent orange
      dark: "#2C3E50", // Slate dark
      darker: "#1A252F", // Darker slate
      text: "#ECF0F1", // Light text
      textDark: "#2C3E50", // Dark text for light backgrounds
    },
  },

  // ========================================
  // 📱 SOCIAL MEDIA META TAGS
  // ========================================
  meta: {
    ogImage: "#", // TODO: Add social share image link
    ogType: "website",
    themeColor: "#00fff9", // TODO: Add theme color
    keywords: [], // TODO: Add keywords
  },

  // ========================================
  // ⚙️ ADVANCED SETTINGS
  // ========================================
  advanced: {
    // Enable/disable features
    enableScrollAnimations: true,

    // Google Analytics (optional)
    googleAnalyticsId: "", // e.g., 'G-XXXXXXXXXX'

    // Font Awesome Kit (for icons - optional)
    // Leave empty to use text links, or add your kit ID for icon links
    fontAwesomeKit: "", // e.g., "abc123def456"

    // Favicon
    faviconPath: "favicon.ico",
  },
};

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
