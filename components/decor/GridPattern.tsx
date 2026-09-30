interface GridPatternProps {
  className?: string;
  size?: number;
  opacity?: number;
}

/**
 * Animated dot grid — fills its parent. Subtle, slow pulse.
 * Inline SVG so it scales and doesn't need network requests.
 */
export function GridPattern({
  className,
  size = 28,
  opacity = 0.45,
}: GridPatternProps) {
  const dotR = 1;
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dot-grid"
          x="0"
          y="0"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={dotR}
            fill="currentColor"
          />
        </pattern>
        <radialGradient id="dot-fade" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="dot-mask">
          <rect width="100%" height="100%" fill="url(#dot-fade)" />
        </mask>
      </defs>
      <g
        mask="url(#dot-mask)"
        style={{ color: `rgba(180, 130, 110, ${opacity})` }}
      >
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </g>
    </svg>
  );
}