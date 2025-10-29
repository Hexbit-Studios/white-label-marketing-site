// ========================================
// 🔧 CONFIG LOADER
// ========================================
// This script applies the configuration from config.js to the HTML

(function () {
  "use strict";

  // Wait for DOM and CONFIG to be ready
  function initConfig() {
    if (typeof CONFIG === "undefined") {
      console.error(
        "CONFIG is not defined. Make sure config.js is loaded before config-loader.js"
      );
      return;
    }

    // Apply simple text replacements
    applyTextReplacements();

    // Apply colors to CSS
    applyColors();

    // Generate dynamic content
    generateFeatures();
    generateCTA();
    generateSocialLinks();
    applyLogo();

    // Apply Font Awesome kit
    applyFontAwesomeKit();

    console.log(`✅ Configuration loaded for: ${CONFIG.site.title}`);
  }

  // Replace text content for elements with data-config attribute
  function applyTextReplacements() {
    document.querySelectorAll("[data-config]").forEach((element) => {
      const configPath = element.getAttribute("data-config");
      const value = getNestedValue(CONFIG, configPath);

      if (value !== undefined) {
        if (element.tagName === "META") {
          element.setAttribute("content", value);
        } else if (element.tagName === "TITLE") {
          element.textContent = value;
        } else if (
          element.tagName === "LINK" &&
          configPath.includes("favicon")
        ) {
          element.setAttribute("href", value);
        } else if (
          element.tagName === "SCRIPT" &&
          configPath.includes("fontAwesome")
        ) {
          // Font Awesome kit will be handled separately
          return;
        } else {
          // For HTML content, check if it contains HTML tags
          if (typeof value === "string" && value.includes("<")) {
            element.innerHTML = value;
          } else {
            element.textContent = value;
          }
        }
      }
    });
  }

  // Apply color scheme to CSS custom properties
  function applyColors() {
    const root = document.documentElement;
    const colors = CONFIG.visuals.colors;

    root.style.setProperty("--color-primary", colors.primary);
    root.style.setProperty("--color-secondary", colors.secondary);
    root.style.setProperty("--color-accent", colors.accent);
    root.style.setProperty("--color-dark", colors.dark);
    root.style.setProperty("--color-darker", colors.darker);
    root.style.setProperty("--color-text", colors.text);
    if (colors.textDark) {
      root.style.setProperty("--color-text-dark", colors.textDark);
    }
  }

  // Generate feature boxes
  function generateFeatures() {
    const container = document.getElementById("features-container");
    if (!container) return;

    container.innerHTML = "";

    // Check if Font Awesome kit is available and not a placeholder
    const hasValidFontAwesome =
      CONFIG.advanced.fontAwesomeKit &&
      CONFIG.advanced.fontAwesomeKit !== "" &&
      CONFIG.advanced.fontAwesomeKit !== "insert-your-kit-id-here" &&
      CONFIG.advanced.fontAwesomeKit !== "1234567890";

    CONFIG.features.forEach((feature, index) => {
      const featureDiv = document.createElement("div");
      featureDiv.className = "feature";

      // Use Font Awesome icons if available, otherwise use styled numbers
      let iconHTML;
      if (hasValidFontAwesome && feature.icon && feature.icon.includes("fa-")) {
        iconHTML = `<div class="feature-icon"><i class="${feature.icon}"></i></div>`;
      } else {
        iconHTML = `<div class="feature-icon feature-icon-number">${
          index + 1
        }</div>`;
      }

      featureDiv.innerHTML = `
        ${iconHTML}
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
        <p class="feature-highlight">${feature.highlight}</p>
      `;

      container.appendChild(featureDiv);
    });
  }

  // Generate CTA section if enabled
  function generateCTA() {
    const container = document.getElementById("cta-section");
    if (!container) return;

    if (!CONFIG.cta.enabled) {
      container.style.display = "none";
      return;
    }

    container.classList.remove("hidden");

    const buttons = CONFIG.cta.buttons
      .map((btn) => {
        const btnClass =
          btn.style === "primary" ? "btn-primary" : "btn-secondary";
        return `<a href="${btn.url}" class="btn ${btnClass}">${btn.text}</a>`;
      })
      .join("\n        ");

    container.innerHTML = `
      <h2>${CONFIG.cta.headline}</h2>
      <p>${CONFIG.cta.subheading}</p>
      <div class="cta-buttons">
        ${buttons}
      </div>
    `;
  }

  // Generate social links
  function generateSocialLinks() {
    const container = document.getElementById("social-links");
    if (!container) return;

    container.innerHTML = "";

    // Check if Font Awesome kit is available and not a placeholder
    const hasValidFontAwesome =
      CONFIG.advanced.fontAwesomeKit &&
      CONFIG.advanced.fontAwesomeKit !== "" &&
      CONFIG.advanced.fontAwesomeKit !== "insert-your-kit-id-here" &&
      CONFIG.advanced.fontAwesomeKit !== "1234567890";

    const socialPlatforms = {
      bluesky: { icon: "fa-brands fa-bluesky", text: "Bluesky" },
      discord: { icon: "fa-brands fa-discord", text: "Discord" },
      github: { icon: "fa-brands fa-github", text: "GitHub" },
      youtube: { icon: "fa-brands fa-youtube", text: "YouTube" },
      twitter: { icon: "fa-brands fa-twitter", text: "Twitter" },
      instagram: { icon: "fa-brands fa-instagram", text: "Instagram" },
    };

    Object.entries(CONFIG.social).forEach(([platform, config]) => {
      if (config.enabled) {
        const link = document.createElement("a");
        link.href = config.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        // Use icons if Font Awesome is available, otherwise use text
        if (hasValidFontAwesome) {
          link.innerHTML = `<i class="${socialPlatforms[platform].icon}"></i>`;
          link.className = "social-link-icon";
        } else {
          link.textContent = socialPlatforms[platform].text;
          link.className = "social-link-text";
        }

        container.appendChild(link);
      }
    });
  }

  // Apply logo from config
  function applyLogo() {
    const logoElement = document.getElementById("hero-logo");
    if (logoElement && CONFIG.visuals.logo) {
      logoElement.src = CONFIG.visuals.logo.file;
      logoElement.alt = CONFIG.visuals.logo.alt || "Logo";
    }
  }

  // Apply Font Awesome Kit
  function applyFontAwesomeKit() {
    // Check if Font Awesome kit is available and not a placeholder
    const hasValidFontAwesome =
      CONFIG.advanced.fontAwesomeKit &&
      CONFIG.advanced.fontAwesomeKit !== "" &&
      CONFIG.advanced.fontAwesomeKit !== "insert-your-kit-id-here" &&
      CONFIG.advanced.fontAwesomeKit !== "1234567890";

    if (hasValidFontAwesome) {
      // Dynamically load Font Awesome if not already loaded
      const existingScript = document.querySelector(
        'script[src*="fontawesome.com"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://kit.fontawesome.com/${CONFIG.advanced.fontAwesomeKit}.js`;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
      } else {
        const newSrc = `https://kit.fontawesome.com/${CONFIG.advanced.fontAwesomeKit}.js`;
        if (existingScript.src !== newSrc) {
          existingScript.src = newSrc;
        }
      }
    }
  }

  // Helper function to get nested object value by string path
  function getNestedValue(obj, path) {
    return path.split(".").reduce((current, key) => current?.[key], obj);
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initConfig);
  } else {
    initConfig();
  }
})();
