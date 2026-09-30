import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
          404 — Not Found
        </p>
        <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95] tracking-[var(--tracking-display)] text-ink">
          The page you&apos;re looking for has moved on.
        </h1>
        <p className="mt-8 text-lg text-ink-2 max-w-[var(--container-prose)]">
          This might be a typo, or the link may be stale. Try the home page or
          use the navigation above.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block link-underline font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2 hover:text-ink"
        >
          ↗ Back home
        </Link>
      </div>
    </section>
  );
}