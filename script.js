// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after clicking a link (mobile)
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Embed toggles (for Figma preview)
document.querySelectorAll("[data-open-embed]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-open-embed");
    if (!targetId) return;

    const embed = document.getElementById(targetId);
    if (!embed) return;

    const isHidden = embed.hasAttribute("hidden");
    if (isHidden) embed.removeAttribute("hidden");
    else embed.setAttribute("hidden", "");
  });
});

// Copy email button
const copyEmailBtn = document.getElementById("copyEmailBtn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    const email = copyEmailBtn.getAttribute("data-email");
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      const oldText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = "Copied!";
      setTimeout(() => (copyEmailBtn.textContent = oldText), 1200);
    } catch (e) {
      // Fallback
      window.prompt("Copy this email:", email);
    }
  });
}