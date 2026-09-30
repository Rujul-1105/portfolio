/**
 * Animated radial gradient mesh — sets the v2 hero backdrop. Pure CSS,
 * no JS. Multiple colored blobs drift slowly behind a vignette mask.
 */
export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <div className="absolute inset-0 fade-edge">
        {/* Blob 1 — violet, top-left */}
        <div
          className="absolute -top-[20%] -left-[15%] h-[60vh] w-[60vh] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, var(--color-violet-soft) 0%, transparent 65%)",
          }}
        />
        {/* Blob 2 — lime, mid-right */}
        <div
          className="absolute top-[10%] right-[-10%] h-[55vh] w-[55vh] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(132, 204, 22, 0.18) 0%, transparent 65%)",
            animationDelay: "-6s",
          }}
        />
        {/* Blob 3 — violet, bottom */}
        <div
          className="absolute bottom-[-25%] left-[20%] h-[70vh] w-[70vh] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, var(--color-violet-soft) 0%, transparent 65%)",
            animationDelay: "-12s",
          }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            color: "var(--color-violet)",
            maskImage:
              "radial-gradient(circle at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 30%, transparent 75%)",
          }}
        />
      </div>
    </div>
  );
}