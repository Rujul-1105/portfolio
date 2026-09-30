interface GeometricAccentProps {
  className?: string;
  variant?: "ring" | "square" | "cross" | "arc";
  strokeWidth?: number;
}

/**
 * Large geometric outline — sits behind hero / floating in sections.
 * Pure SVG, no deps. Strokes the line color token.
 */
export function GeometricAccent({
  className,
  variant = "ring",
  strokeWidth = 1,
}: GeometricAccentProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className ?? ""}`}
    >
      {variant === "ring" ? (
        <>
          <circle
            cx="300"
            cy="300"
            r="240"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="300"
            cy="300"
            r="180"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray="2 6"
            opacity="0.5"
          />
        </>
      ) : null}

      {variant === "square" ? (
        <>
          <rect
            x="80"
            y="80"
            width="440"
            height="440"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <rect
            x="140"
            y="140"
            width="320"
            height="320"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray="2 6"
            opacity="0.5"
          />
        </>
      ) : null}

      {variant === "cross" ? (
        <>
          <line
            x1="60"
            y1="300"
            x2="540"
            y2="300"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <line
            x1="300"
            y1="60"
            x2="300"
            y2="540"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="300"
            cy="300"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            opacity="0.6"
          />
        </>
      ) : null}

      {variant === "arc" ? (
        <>
          <path
            d="M 60 500 Q 300 100 540 500"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M 60 540 Q 300 140 540 540"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray="2 6"
            opacity="0.5"
          />
        </>
      ) : null}
    </svg>
  );
}