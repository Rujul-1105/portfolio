"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/types/content";

interface MobileMenuProps {
  items: NavItem[];
  cta?: { label: string; href: string };
  onAction?: () => void;
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function MobileMenu({ items, cta, onAction }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    onAction?.();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink hover:text-neon hover:border-neon transition-colors"
      >
        <MenuIcon open={open} />
      </button>

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <nav
        id="mobile-menu-panel"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-50 h-full w-[78%] max-w-sm bg-paper border-l border-line shadow-2xl transition-transform duration-300 ease-out md:hidden overflow-x-hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-line">
          <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
            Menu
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink hover:text-neon hover:border-neon transition-colors"
          >
            <MenuIcon open={true} />
          </button>
        </div>

        <ul className="flex flex-col px-2 py-4">
          {items.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={close}
                className="flex items-center justify-between gap-3 px-4 py-4 font-display italic text-2xl text-ink hover:text-neon transition-colors border-b border-line/60 last:border-b-0"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </span>
                <span className="font-mono text-sm text-muted">↓</span>
              </a>
            </li>
          ))}
        </ul>

        {cta ? (
          <div className="px-5 pb-8">
            <a
              href={cta.href}
              onClick={close}
              className="flex items-center justify-center gap-2 rounded-md bg-accent text-ink font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] px-5 py-3 hover:opacity-90 transition-opacity"
            >
              {cta.label} ↗
            </a>
          </div>
        ) : null}
      </nav>
    </>
  );
}