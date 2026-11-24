const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function syncThemeToggle() {
  const isDark = root.classList.contains("dark-mode");
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

themeToggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark-mode");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch {
    // The theme still applies for this page if storage is unavailable.
  }
  syncThemeToggle();
});

syncThemeToggle();
