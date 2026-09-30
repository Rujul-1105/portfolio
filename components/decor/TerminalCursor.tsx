interface TerminalCursorProps {
  className?: string;
  blink?: boolean;
  color?: "neon" | "ink";
}

/**
 * Blinking terminal cursor — a single block that blinks every ~1s.
 * Pure CSS animation, respects reduced-motion.
 */
export function TerminalCursor({
  className,
  blink = true,
  color = "neon",
}: TerminalCursorProps) {
  const colorClass = color === "neon" ? "text-neon bg-neon" : "text-ink bg-ink";
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-[0.9em] w-[0.55em] translate-y-[0.05em] align-baseline ${colorClass} ${className ?? ""}`}
      style={
        blink
          ? { animation: "terminal-blink 1.05s steps(2, end) infinite" }
          : undefined
      }
    />
  );
}