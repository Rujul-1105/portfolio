import { site } from "@/lib/content";
import { ThemeToggle } from "@/components/primitives/ThemeToggle";

export function TopNav() {
  const twitterHref = site.twitter ?? "#";

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-paper/75 dark:bg-paper/75 border-b border-line">
      <nav className="mx-auto flex w-full max-w-[var(--container-wide)] items-baseline justify-between gap-6 px-6 md:px-10 lg:px-16 py-5">
        <a
          href="#top"
          className="group flex items-baseline gap-2"
          aria-label="Home"
        >
          <span aria-hidden className="status-dot" />
          <span className="font-bold text-base tracking-[-0.03em] text-ink group-hover:text-neon transition-colors">
            {site.name}
          </span>
          <a
            href={twitterHref}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-muted hover:text-neon"
            aria-label={`${site.handle} on X / Twitter`}
          >
            {site.handle}
          </a>
        </a>

        <ul className="flex items-baseline gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[var(--tracking-caps)]">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline text-ink-2 hover-glow"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-1 border-l border-line pl-5">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}