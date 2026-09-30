import { site } from "@/lib/content";
import { ThemeToggle } from "@/components/primitives/ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function TopNav() {
  const twitterHref = site.twitter ?? "#";

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-paper/75 dark:bg-paper/75 border-b border-line">
      <nav className="mx-auto flex w-full max-w-[var(--container-wide)] items-center justify-between gap-4 md:gap-6 px-4 md:px-10 lg:px-16 py-4 md:py-5">
        <a
          href="#top"
          className="group flex items-baseline gap-2 shrink-0"
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
            className="hidden sm:inline-block link-underline font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-muted hover:text-neon"
            aria-label={`${site.handle} on X / Twitter`}
          >
            {site.handle}
          </a>
        </a>

        <ul className="hidden md:flex items-center gap-x-6 font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="link-underline hover-glow">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <MobileMenu
            items={site.nav}
            cta={{ label: "Email", href: `mailto:${site.email}` }}
          />
        </div>
      </nav>
    </header>
  );
}