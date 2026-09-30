"use client";

import { site } from "@/lib/content";
import { ProfileCard } from "@/components/decor/ProfileCard";
import { GradientMesh } from "@/components/decor/GradientMesh";
import { SocialList } from "@/components/primitives/SocialList";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24"
    >
      <GradientMesh />

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <ProfileCard avatarUrl={site.avatar} />

        <motion.div
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
        >
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="terminal">Find me ↗</span>
            <SocialList socials={site.socials} />
          </div>

          <div className="md:col-span-9 md:text-right">
            <p className="terminal">
              Scroll · <span className="text-violet">Discover</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}