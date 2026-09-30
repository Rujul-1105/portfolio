"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/content";
import { TextRain } from "@/components/decor/TextRain";
import { SectionCorners } from "@/components/decor/SectionCorners";
import { BracketButton } from "@/components/primitives/BracketButton";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center pt-32 md:pt-40 pb-24 md:pb-32"
    >
      <TextRain columns={14} rotate={-3} />

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <SectionCorners />

        <div className="border border-line border-x-0 md:border-x pt-12 md:pt-20 pb-12 md:pb-16 px-0 md:px-12">
          <motion.p
            className="terminal text-center"
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Powered by · {site.role}
          </motion.p>

          <motion.h1
            className="mt-6 md:mt-8 font-display text-center text-[clamp(3.5rem,11vw,9rem)] leading-[0.95] tracking-[-0.03em] text-ink"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          >
            The quiet layer
            <br />
            of <span className="dot-red">software</span>
          </motion.h1>

          <motion.p
            className="mt-8 md:mt-10 mx-auto max-w-[var(--container-prose)] text-center font-mono text-base md:text-lg leading-relaxed text-ink-2"
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          >
            {site.tagline} Considered, calm software for the web — built
            end-to-end, shipped in public, maintained with care.
          </motion.p>

          <motion.div
            className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
          >
            <BracketButton href="#work" variant="primary">
              Selected work ↘
            </BracketButton>
            <BracketButton href={`mailto:${site.email}`} variant="secondary">
              Hire me ↗
            </BracketButton>
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-muted">
          <span>v0.1 · 2026</span>
          <span className="status-dot" aria-hidden />
          <span>{site.location ?? "Remote"}</span>
        </div>
      </div>
    </section>
  );
}