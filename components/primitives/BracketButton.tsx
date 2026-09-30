import type { ReactNode } from "react";

interface BracketButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

/**
 * Button with red corner brackets in the corners — the signature
 * superteam.fun CTA element. Optional `bracket-corners` class on the
 * button itself to render the brackets via the CSS pseudo-elements.
 */
export function BracketButton({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: BracketButtonProps) {
  const base =
    "bracket-corners inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] transition-colors";
  const variants = {
    primary:
      "bg-accent text-paper hover:bg-accent-bright",
    secondary:
      "bg-transparent text-ink hover:text-accent",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={`${base} ${variants[variant]} ${className ?? ""}`}
    >
      {children}
    </a>
  );
}