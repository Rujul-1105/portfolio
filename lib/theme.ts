// Inline script that sets the .dark class on <html> before hydration
// to avoid a flash of incorrect theme. Reads localStorage first, falls
// back to prefers-color-scheme.

export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export type Theme = "light" | "dark";