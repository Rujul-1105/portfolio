// Inline script that sets the theme class on <html> before hydration.
// Default is DARK (no class needed) unless the user has explicitly chosen
// light. This is intentional — the cyberscore theme is designed dark-first
// and falling back to OS preference meant many users saw the light
// variant on first visit, which is the weaker direction.

export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  } catch (e) {}
})();
`;

export type Theme = "light" | "dark";