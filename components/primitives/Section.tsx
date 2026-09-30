import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * Editorial section wrapper — provides a hairline-top header with the
 * "01 — TITLE" label, optional right-aligned meta, and vertical rhythm.
 * Numbers glow on hover; labels are mono caps with terminal feel.
 */
export function Section({
  id,
  index,
  title,
  meta,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 lg:py-32 scroll-mt-20 md:scroll-mt-24 ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <header className="group grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline border-t border-line pt-6">
          <p className="flex items-baseline gap-3">
            <span className="font-mono text-base md:text-lg tracking-[var(--tracking-mono)] text-ink hover-glow cursor-default">
              {index}
            </span>
            <span aria-hidden className="font-mono text-line">
              —
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
              {title}
            </span>
          </p>
          {meta ? (
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted lg:justify-self-end">
              {meta}
            </p>
          ) : null}
        </header>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}