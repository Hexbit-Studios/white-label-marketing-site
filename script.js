// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Fade-in animation on scroll
class ScrollAnimations {
  constructor() {
    this.elements = document.querySelectorAll(
      ".feature, .info-block, .cta-section"
    );
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, this.observerOptions);

    this.elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Check if features are enabled in config
  const enableScrollAnimations =
    typeof CONFIG !== "undefined"
      ? CONFIG.advanced.enableScrollAnimations
      : true;

  initSmoothScroll();

  if (enableScrollAnimations) {
    new ScrollAnimations();
  }

  // Log initialization
  const siteName =
    typeof CONFIG !== "undefined" ? CONFIG.product.name : "Landing Page";
  console.log(`🚀 ${siteName} landing page initialized`);
});

// Add scroll indicator interaction
const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    document.querySelector("#game-info").scrollIntoView({
      behavior: "smooth",
    });
  });
}
