/**
 * Pure visual primitive for a section label — used where Section's
 * built-in header isn't appropriate (e.g. hero subline).
 */
interface SectionLabelProps {
  index: string;
  title: string;
  className?: string;
}

export function SectionLabel({
  index,
  title,
  className,
}: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted ${className ?? ""}`}
    >
      <span>{index} — </span>
      <span className="text-ink-2">{title}</span>
    </p>
  );
}