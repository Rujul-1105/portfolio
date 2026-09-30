import { experienceSorted } from "@/lib/content";
import { Section } from "@/components/primitives/Section";
import { ExperienceRow } from "@/components/primitives/ExperienceRow";
import { Reveal } from "@/components/motion/Reveal";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="03"
      title="Experience"
      meta={`${experienceSorted.length} roles`}
    >
      <Reveal>
        <div className="border-t border-line">
          {experienceSorted.map((entry) => (
            <ExperienceRow key={`${entry.company}-${entry.start}`} entry={entry} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}