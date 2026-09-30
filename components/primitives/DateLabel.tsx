import type { ReactNode } from "react";

interface DateLabelProps {
  children: ReactNode;
  className?: string;
}

/** Mono caps label used for dates, years, ranges. */
export function DateLabel({ children, className }: DateLabelProps) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted ${className ?? ""}`}
    >
      {children}
    </span>
  );
}