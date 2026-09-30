import { experienceSorted } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { ExperienceRow } from "@/components/primitives/ExperienceRow";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 lg:py-32 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <Reveal>
          <header className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline border-t border-line pt-6">
            <p className="flex items-baseline gap-3">
              <span className="font-mono text-base md:text-lg tracking-[var(--tracking-mono)] text-ink hover-glow cursor-default">
                05
              </span>
              <span aria-hidden className="font-mono text-line">
                —
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
                Experience
              </span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted lg:justify-self-end">
              {experienceSorted.length} roles
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="mt-10 md:mt-12 border-t border-line">
            {experienceSorted.map((entry) => (
              <ExperienceRow
                key={`${entry.company}-${entry.start}`}
                entry={entry}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}