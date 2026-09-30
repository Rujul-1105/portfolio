import { site } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCorners } from "@/components/decor/SectionCorners";
import { BracketButton } from "@/components/primitives/BracketButton";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 lg:py-32 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <SectionCorners />

        <Reveal>
          <div className="flex flex-col items-start gap-8 md:gap-10 border-t border-line pt-10">
            <p className="terminal">{"// Get in touch"}</p>

            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] text-ink max-w-[var(--container-prose)]">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-accent">quietly</span> ambitious
              <span className="dot-red" />
            </h2>

            <p className="font-mono text-base md:text-lg text-ink-2 leading-relaxed max-w-[var(--container-prose)]">
              I take on a small number of focused projects each year — usually
              product work with a strong editorial or design-led brief. The
              fastest way to start is an email.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <BracketButton
                href={`mailto:${site.email}`}
                variant="primary"
              >
                Email — {site.email}
              </BracketButton>
              {site.twitter ? (
                <BracketButton href={site.twitter} variant="secondary" external>
                  Twitter ↗
                </BracketButton>
              ) : null}
              {site.github ? (
                <BracketButton href={site.github} variant="secondary" external>
                  GitHub ↗
                </BracketButton>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}