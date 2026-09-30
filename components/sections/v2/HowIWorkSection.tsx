import { Reveal } from "@/components/motion/Reveal";
import { StepProcess } from "@/components/decor/StepProcess";

const STEPS = [
  {
    number: "01",
    icon: "◇",
    title: "Listen",
    body: "I start by reading the room — your codebase, your users, your constraints. No pitch before I've understood the problem.",
  },
  {
    number: "02",
    icon: "○",
    title: "Sketch",
    body: "Quick, ugly prototypes in Figma or on paper. I share them early so we can disagree about shape before anything is built.",
  },
  {
    number: "03",
    icon: "△",
    title: "Build",
    body: "Tight, fast iterations. Real code on real URLs by day three. If something isn't working, we throw it out and try again.",
  },
  {
    number: "04",
    icon: "□",
    title: "Ship",
    body: "I don't disappear after launch. I measure, I patch, I sit with the thing until it actually works for the people using it.",
  },
];

export function HowIWorkSection() {
  return (
    <section
      id="how"
      className="relative py-20 md:py-28 lg:py-32 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <Reveal>
          <header className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline border-t border-line pt-6">
            <p className="flex items-baseline gap-3">
              <span className="font-mono text-base md:text-lg tracking-[var(--tracking-mono)] text-ink hover-glow cursor-default">
                04
              </span>
              <span aria-hidden className="font-mono text-line">
                —
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
                How I work
              </span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted lg:justify-self-end">
              The loop
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="mt-10 md:mt-12">
            <StepProcess steps={STEPS} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}