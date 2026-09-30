import type { ReactNode } from "react";

interface CTABannerProps {
  eyebrow?: string;
  headline: ReactNode;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}

/**
 * Large gradient CTA banner. Used at the bottom of v2 before the footer.
 */
export function CTABanner({
  eyebrow,
  headline,
  body,
  primary,
  secondary,
  className,
}: CTABannerProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-[var(--radius-card)] border border-violet/30 ${className ?? ""}`}
    >
      {/* Gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-violet-soft) 0%, transparent 50%, rgba(132,204,22,0.12) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[30%] -right-[15%] h-[80%] w-[60%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-violet-soft) 0%, transparent 65%)",
        }}
      />

      <div className="relative px-8 md:px-16 py-16 md:py-24 flex flex-col items-start gap-6">
        {eyebrow ? (
          <p className="terminal terminal-prompt">{eyebrow}</p>
        ) : null}

        <h2 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em] text-ink max-w-[var(--container-prose)]">
          {headline}
        </h2>

        {body ? (
          <p className="text-base md:text-lg text-ink-2 leading-relaxed max-w-[var(--container-prose)]">
            {body}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap items-center gap-3 md:gap-4">
          <a
            href={primary.href}
            className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-violet text-paper font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] px-6 py-3 hover:opacity-90 transition-opacity"
          >
            {primary.label} ↗
          </a>
          {secondary ? (
            <a
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] glass border border-line font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] px-6 py-3 text-ink hover:text-violet transition-colors"
            >
              {secondary.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}