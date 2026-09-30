import { site } from "@/lib/content";
import { SocialList } from "@/components/primitives/SocialList";
import { Rule } from "@/components/primitives/Rule";

export function SiteFooter() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="mt-12 border-t border-line bg-paper-2">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <a
            href="#top"
            className="font-bold text-2xl md:text-3xl tracking-[-0.03em] text-ink hover:text-violet transition-colors"
          >
            {site.name}
            <span className="text-violet">.</span>
          </a>
          <SocialList socials={site.socials} />
        </div>

        <div className="mt-10">
          <Rule />
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-muted">
              © {year} {site.name} · all rights reserved
            </p>
            <p className="terminal">
              <span className="text-lime">●</span> All systems normal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}