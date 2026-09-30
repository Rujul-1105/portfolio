import { site } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCorners } from "@/components/decor/SectionCorners";

const FEATURES = [
  {
    title: "Build",
    body: "Tight, fast iterations on real URLs by day three. Ship, measure, refine.",
  },
  {
    title: "Design",
    body: "Editorial typography, considered color, attention to the small details.",
  },
  {
    title: "Lead",
    body: "Mentor engineers, run reviews, align teams around what actually ships.",
  },
  {
    title: "Ship",
    body: "I don't disappear after launch. I sit with the thing until it works.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 lg:py-32 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <SectionCorners />

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-baseline">
            <p className="md:col-span-3 terminal">{"// About"}</p>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.03em] text-ink max-w-[var(--container-prose)]">
                Built to ship
                <br />
                quiet<span className="dot-red">software</span>
              </h2>
              <p className="mt-8 font-mono text-base md:text-lg leading-relaxed text-ink-2 max-w-[var(--container-prose)]">
                {site.bio}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {FEATURES.map((f, i) => (
              <article
                key={f.title}
                className="bg-paper p-6 md:p-8 flex flex-col gap-4 min-h-[220px] relative group hover:bg-paper-2 transition-colors"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-muted">
                    0{FEATURES.length}
                  </span>
                </div>
                <h3
                  className={`font-display text-2xl md:text-3xl leading-[1.1] tracking-[-0.02em] ${
                    i === 0 ? "text-accent" : "text-ink"
                  } group-hover:text-accent transition-colors`}
                >
                  {f.title}
                  <span className="dot-red">{i === 0 ? "" : ""}</span>
                </h3>
                <p className="font-mono text-sm leading-relaxed text-ink-2 mt-auto">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}