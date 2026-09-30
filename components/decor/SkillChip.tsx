interface SkillChipProps {
  children: React.ReactNode;
  className?: string;
  tone?: "violet" | "lime" | "neutral";
}

/** Pill-shaped skill indicator — used in the v2 About section. */
export function SkillChip({ children, className, tone = "neutral" }: SkillChipProps) {
  const toneClass =
    tone === "violet"
      ? "border-violet/40 bg-violet/10 text-violet"
      : tone === "lime"
        ? "border-lime/40 bg-lime/10 text-lime"
        : "border-line bg-paper-2 text-ink-2";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] ${toneClass} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}