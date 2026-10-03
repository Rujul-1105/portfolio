import { site } from "@/lib/content";
import { SocialList } from "@/components/primitives/SocialList";
import { Rule } from "@/components/primitives/Rule";
import { GridPattern } from "@/components/decor/GridPattern";

export function SiteFooter() {
    const year = new Date().getUTCFullYear();
    return (
        <footer className="relative mt-12 border-t border-line bg-paper-2 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-60">
                <GridPattern size={28} opacity={0.35} />
            </div>

            <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
                    <div className="md:col-span-7 flex flex-col gap-6">
                        <p className="terminal mb-2">{"// About"}</p>
                        <p className="font-mono text-lg md:text-3xl lg:text-2xl leading-[1.15] text-ink max-w-[var(--container-prose)]">
                            {site.bio_footer}
                        </p>
                        <SocialList socials={site.socials} />
                    </div>

                    <div className="md:col-span-5 flex flex-col md:items-end gap-4">
                        <p className="terminal mb-1 md:text-right">{"// Say hello"}</p>
                        <a
                            href={`mailto:${site.email}`}
                            className="link-neon font-bold text-2xl md:text-3xl lg:text-4xl text-ink"
                        >
                            {site.email}
                        </a>
                        <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
                            © {year} {site.name} · all rights reserved
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <Rule />
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <p className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-muted">
                            Built with Next.js · Tailwind · Motion
                        </p>
                        <p className="terminal">
                            <span className="text-neon">●</span> System normal
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
