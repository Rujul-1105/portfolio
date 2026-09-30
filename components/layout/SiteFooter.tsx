import { site } from "@/lib/content";

const FOOTER_GROUPS = [
  {
    label: "Site",
    links: [
      { label: "Now", href: "#now" },
      { label: "Selected Work", href: "#work" },
      { label: "How I work", href: "#how" },
      { label: "Experience", href: "#experience" },
      { label: "Activity", href: "#activity" },
    ],
  },
  {
    label: "Find me",
    links: [
      ...site.socials.map((s) => ({
        label: s.label,
        href: s.href,
      })),
      { label: "Email", href: `mailto:${site.email}` },
    ],
  },
  {
    label: "Subscribe",
    type: "newsletter",
  },
] as const;

export function SiteFooter() {
  const year = new Date().getUTCFullYear();
  const name = site.name.toUpperCase().replace(/\s/g, "");

  return (
    <footer className="relative border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-line pt-8">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <p className="terminal">{group.label}</p>
              {"links" in group ? (
                <ul className="flex flex-col gap-2">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noreferrer noopener" : undefined}
                        className="link-underline text-ink hover-glow font-mono text-sm"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <a
                  href={`mailto:${site.email}`}
                  className="bracket-corners inline-flex items-center gap-2 bg-accent text-paper font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] px-4 py-2 w-fit hover:bg-accent-bright transition-colors"
                >
                  {site.email} ↗
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="terminal">© {year} {site.name} · All rights reserved</p>
        </div>
      </div>

      {/* Massive dotted name — the SUPERTEAM TALENT-style wordmark */}
      <div className="relative overflow-hidden mt-8">
        <h2
          aria-hidden
          className="select-none whitespace-nowrap text-center font-bold tracking-[-0.04em] leading-[0.85]"
          style={{
            fontSize: "clamp(72px, 18vw, 280px)",
            color: "transparent",
            WebkitTextStroke: "0",
            backgroundImage:
              "radial-gradient(circle, var(--color-accent) 1.2px, transparent 1.6px)",
            backgroundSize: "6px 6px",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            paddingBottom: "0.2em",
          }}
        >
          {name}
        </h2>
      </div>
    </footer>
  );
}