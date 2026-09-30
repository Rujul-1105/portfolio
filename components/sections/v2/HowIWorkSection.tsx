import { Reveal } from "@/components/motion/Reveal";
import { SectionCorners } from "@/components/decor/SectionCorners";

const STEPS = [
  {
    number: "01",
    icon: "◴",
    title: "Listen",
    body: "Read the codebase, sit with the team, understand what success actually looks like before pitching anything.",
  },
  {
    number: "02",
    icon: "◳",
    title: "Sketch",
    body: "Quick, low-fidelity prototypes. We disagree about shape before any code is written.",
  },
  {
    number: "03",
    icon: "◰",
    title: "Build",
    body: "Tight iterations on a real URL. Real users from day one. Throwing things out fast when they don't work.",
  },
  {
    number: "04",
    icon: "◉",
    title: "Ship",
    body: "I don't disappear after launch. Measure, patch, stay with the thing until it works for the people using it.",
  },
];

function ProcessIcon({ glyph }: { glyph: string }) {
  return (
    <div className="bracket-corners relative inline-flex h-14 w-14 items-center justify-center bg-paper text-accent">
      <span className="font-mono text-2xl leading-none">{glyph}</span>
    </div>
  );
}

export function HowIWorkSection() {
  return (
    <section id="how" className="relative py-20 md:py-28 lg:py-32 scroll-mt-24">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <SectionCorners />

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-baseline">
            <p className="md:col-span-3 terminal">{"// How I work"}</p>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.03em] text-ink max-w-[var(--container-prose)]">
                From problem
                <br />
                to placement<span className="dot-red" />
              </h2>
              <p className="mt-6 font-mono text-sm uppercase tracking-[var(--tracking-caps)] text-muted">
                A guided path for the work
              </p>
            </div>
          </div>
        </Reveal>

        {/* Mobile: stacked with arrows between. Desktop: horizontal with arrows between. */}
        <Reveal>
          <div className="mt-12 md:mt-20">
            {/* Mobile/tablet */}
            <div className="flex flex-col gap-4 md:hidden">
              {STEPS.map((step, i) => (
                <div key={step.number} className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <ProcessIcon glyph={step.icon} />
                    <div className="flex-1 flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-accent">
                        {step.number}
                      </span>
                      <h3 className="font-display text-xl text-ink">
                        {step.title}
                      </h3>
                      <p className="font-mono text-sm text-ink-2 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                  {i < STEPS.length - 1 ? (
                    <div className="ml-7 font-mono text-accent">↓</div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Desktop horizontal flow */}
            <div className="hidden md:block">
              <div className="flex items-start gap-0">
                {STEPS.map((step, i) => (
                  <div key={step.number} className="flex items-start flex-1">
                    <div className="flex flex-col gap-4 flex-1">
                      <ProcessIcon glyph={step.icon} />
                      <span className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-accent">
                        {step.number}
                      </span>
                      <h3 className="font-display text-xl text-ink leading-[1.1]">
                        {step.title}
                      </h3>
                      <p className="font-mono text-sm text-ink-2 leading-relaxed max-w-[14rem]">
                        {step.body}
                      </p>
                    </div>
                    {i < STEPS.length - 1 ? (
                      <div className="flex items-center justify-center w-12 text-accent font-mono text-2xl pt-6">
                        →
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}