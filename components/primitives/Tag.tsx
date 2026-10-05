interface TagProps {
  children: React.ReactNode;
  className?: string;
}

/** Lowercase mono tag — used for tech stack lists. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[var(--tracking-mono)] text-ink ${className ?? ""}`}
    >
      {children}
    </span>
  );
}