import { experienceSorted } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCorners } from "@/components/decor/SectionCorners";
import { ExperienceRow } from "@/components/primitives/ExperienceRow";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 lg:py-32 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <SectionCorners />

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-baseline">
            <p className="md:col-span-3 terminal">{"// Experience"}</p>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.03em] text-ink max-w-[var(--container-prose)]">
                Where the work
                <br />
                happened<span className="dot-red" />
              </h2>
              <p className="mt-6 font-mono text-sm uppercase tracking-[var(--tracking-caps)] text-muted">
                {experienceSorted.length} roles · most recent first
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 md:mt-16 border-t border-line">
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