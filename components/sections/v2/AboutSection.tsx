import { site } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { SkillChip } from "@/components/decor/SkillChip";

const SKILLS = [
  "TypeScript",
  "Next.js",
  "React",
  "Rust",
  "Go",
  "Postgres",
  "Swift",
  "Figma",
];

const SKILL_TONE: Record<string, "violet" | "lime" | "neutral"> = {
  TypeScript: "violet",
  "Next.js": "violet",
  React: "violet",
  Rust: "lime",
  Go: "lime",
  Postgres: "neutral",
  Swift: "neutral",
  Figma: "neutral",
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-32 scroll-mt-24">
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

        <Reveal>
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-baseline">
            <p className="md:col-span-3 font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
              The short version
            </p>
            <div className="md:col-span-9">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.2] text-ink max-w-[var(--container-prose)]">
                {site.bio}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 md:mt-16">
            <p className="terminal mb-4">{"// Stack"}</p>
            <ul className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <li key={s}>
                  <SkillChip tone={SKILL_TONE[s] ?? "neutral"}>{s}</SkillChip>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}