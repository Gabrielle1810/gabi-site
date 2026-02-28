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
      window.prompt("Copy this email:", email);
    }
  });
}