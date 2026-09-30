"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  }

  // Avoid SSR/CSR mismatch — render a stable placeholder until mounted.
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted hover:text-neon transition-colors"
        tabIndex={-1}
      >
        <span aria-hidden>◐</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted hover:text-neon transition-colors"
    >
      <span aria-hidden className="inline-flex items-center gap-1.5">
        <span className={theme === "dark" ? "text-neon" : ""}>●</span>
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}