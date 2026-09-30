// Inline script that sets the theme class on <html> before hydration
// to avoid a flash of incorrect theme. v2 defaults to DARK unless the
// user explicitly chose light.

export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (prefersLight ? 'light' : 'dark');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  } catch (e) {}
})();
`;

export type Theme = "light" | "dark";