"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/content";
import { SocialList } from "@/components/primitives/SocialList";
import { Rule } from "@/components/primitives/Rule";
import { GridPattern } from "@/components/decor/GridPattern";
import { GeometricAccent } from "@/components/decor/GeometricAccent";
import { TerminalCursor } from "@/components/decor/TerminalCursor";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[70vh] md:min-h-[90vh] flex flex-col justify-end pt-20 md:pt-32 pb-12 md:pb-24"
    >
      {/* Backdrop layers */}
      <div className="absolute inset-0 fade-edge">
        <GridPattern size={32} opacity={0.3} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[24%] -top-[10%] w-[280px] md:w-[520px] text-line/30 md:text-line/40 drift slow-rotate"
      >
        <GeometricAccent variant="ring" strokeWidth={1} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[20%] bottom-[2%] w-[200px] md:w-[360px] text-line/20 md:text-line/30 drift"
        style={{ animationDelay: "2.4s" }}
      >
        <GeometricAccent variant="arc" strokeWidth={1} />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        {/* Status line */}
        <motion.div
          className="terminal flex items-center gap-3"
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="status-dot" aria-hidden />
          <span className="text-ink-2">Online</span>
          <span aria-hidden className="text-line">/</span>
          <span>Available for work · {site.location ?? "Remote"}</span>
          <TerminalCursor className="ml-1" />
        </motion.div>

        {/* Hero grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 items-end">
          <motion.div
            className="md:col-span-9 flex flex-col gap-8 md:gap-10"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
          >
            <motion.h1
              className="font-bold text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] tracking-[-0.03em] text-ink"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: EASE }}
            >
              {site.name}
              <span className="text-neon">.</span>
            </motion.h1>

            <motion.p
              className="font-display italic text-2xl md:text-3xl lg:text-4xl leading-[1.15] text-ink-2 max-w-[var(--container-prose)]"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
            >
              {site.tagline}
            </motion.p>

            <motion.div
              className="terminal-prompt terminal pt-2"
              initial={reduced ? false : { opacity: 0 }}
              animate={reduced ? undefined : { opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.32, ease: EASE }}
            >
              <span className="text-ink-2">{site.role}</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-3 flex flex-col gap-8 md:items-end"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          >
            <div className="flex flex-col gap-2 md:items-end">
              <span className="terminal">Find me</span>
              <SocialList socials={site.socials} className="md:justify-end" />
            </div>
            <div className="hidden md:block">
              <span className="terminal">v0.1 — 2026</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24">
          <Rule />
        </div>
      </div>
    </section>
  );
}