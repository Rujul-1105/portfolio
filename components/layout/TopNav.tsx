import { site } from "@/lib/content";
import { ThemeToggle } from "@/components/primitives/ThemeToggle";

export function TopNav() {
  const twitterHref = site.twitter ?? "#";

  return (
    <header className="sticky top-0 z-30 bg-paper border-b border-line">
      <nav className="mx-auto flex w-full max-w-[var(--container-wide)] items-center justify-between gap-6 px-6 md:px-10 lg:px-16 py-5">
        <a
          href="#top"
          className="group flex items-center gap-2"
          aria-label="Home"
        >
          <span
            aria-hidden
            className="font-mono text-accent text-base leading-none"
          >
            ▙▟
          </span>
          <span className="font-display text-base text-ink group-hover:text-accent transition-colors">
            {site.handle.replace("@", "")}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-x-6 font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline hover-glow"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={twitterHref}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline hover-glow"
              aria-label="Twitter / X"
            >
              Twitter
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${site.email}`}
            className="bracket-corners inline-flex items-center gap-2 bg-accent text-paper font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] px-4 py-2 hover:bg-accent-bright transition-colors"
          >
            Get in touch ↗
          </a>
        </div>
      </nav>
    </header>
  );
}