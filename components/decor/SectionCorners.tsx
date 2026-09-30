/**
 * Crosshair `+` markers at the four corners of a section.
 * Used as a frame around content blocks — purely decorative.
 */
export function SectionCorners({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
    >
      <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 font-mono text-accent text-base leading-none">
        +
      </span>
      <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 font-mono text-accent text-base leading-none">
        +
      </span>
      <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 font-mono text-accent text-base leading-none">
        +
      </span>
      <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 font-mono text-accent text-base leading-none">
        +
      </span>
    </div>
  );
}