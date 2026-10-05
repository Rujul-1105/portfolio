import { skills } from "@/lib/content";
import { Section } from "@/components/primitives/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function SkillsSection() {
    return (
        <Section id="skills" index="02" title="Skills" meta={`${skills.skills.length} categories`}>
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-10">
                {skills.skills.map((group) => (
                    <StaggerItem key={group.category}>
                        <div className="flex flex-col gap-3 border-t border-line pt-4">
                            <h3 className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-neon">
                                {group.category}
                            </h3>
                            <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="font-mono text-[12px] tracking-[var(--tracking-mono)] text-ink hover:text-neon transition-colors"
                                    >
                                        {item} |
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </StaggerItem>
                ))}
            </Stagger>
        </Section>
    );
}
