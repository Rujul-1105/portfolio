"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
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
        className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted hover:text-violet transition-colors"
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
      className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted hover:text-violet transition-colors"
    >
      <span aria-hidden className="inline-flex items-center gap-1.5">
        <span className={theme === "light" ? "text-violet" : ""}>●</span>
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
}