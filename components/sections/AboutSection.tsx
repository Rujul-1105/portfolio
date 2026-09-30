import { site } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

const VALUES = [
  { label: "Calm", body: "Software that doesn't shout for attention." },
  { label: "Considered", body: "Small details done with intention." },
  { label: "Durable", body: "Built to be maintained, not replaced." },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <Reveal>
          <header className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline border-t border-line pt-6">
            <p className="flex items-baseline gap-3">
              <span className="font-mono text-base md:text-lg tracking-[var(--tracking-mono)] text-ink hover-glow cursor-default">
                01
              </span>
              <span aria-hidden className="font-mono text-line">
                —
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
                About
              </span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted lg:justify-self-end">
              Who I am
            </p>
          </header>
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
          <Reveal>
            <p className="md:col-span-3 font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
              The short version
            </p>
          </Reveal>

          <Reveal>
            <div className="md:col-span-9 flex flex-col gap-8">
              <p className="font-display italic text-2xl md:text-3xl lg:text-4xl leading-[1.2] text-ink">
                {site.bio}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line">
                {VALUES.map((v) => (
                  <li
                    key={v.label}
                    className="bg-paper p-5 flex flex-col gap-2 hover:bg-paper-2 transition-colors"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-neon">
                      {v.label}
                    </span>
                    <span className="font-mono text-sm text-ink-2 leading-relaxed">
                      {v.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}