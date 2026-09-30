"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { site } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ProfileCardProps {
  avatarUrl?: string;
}

/**
 * v2 hero — ProfileCard style. Avatar on the left, identity on the right,
 * sits inside a glass container on top of the gradient mesh.
 */
export function ProfileCard({ avatarUrl }: ProfileCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="glass relative overflow-hidden rounded-[var(--radius-card)] p-6 md:p-10"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        {/* Avatar */}
        <motion.div
          className="relative shrink-0"
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet via-lime to-violet opacity-70 blur-md" />
          <div className="relative h-28 w-28 md:h-36 md:w-36 overflow-hidden rounded-full border-2 border-violet/40 bg-paper-2">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={`${site.name} avatar`}
                fill
                sizes="(min-width: 768px) 144px, 112px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-bold text-4xl md:text-5xl text-violet">
                {site.name.charAt(0)}
              </div>
            )}
          </div>
        </motion.div>

        {/* Identity */}
        <div className="flex flex-1 flex-col gap-5">
          <motion.div
            className="flex items-center gap-2"
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            <span className="status-dot" aria-hidden />
            <span className="terminal text-ink-2">Available · {site.location ?? "Remote"}</span>
          </motion.div>

          <motion.h1
            className="font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] text-ink"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          >
            {site.name}
            <span className="text-violet">.</span>
          </motion.h1>

          <motion.p
            className="font-display text-xl md:text-2xl text-ink-2 leading-snug max-w-[var(--container-prose)]"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          >
            {site.tagline}
          </motion.p>

          <motion.p
            className="terminal-prompt terminal pt-1"
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
          >
            <span className="text-ink-2">{site.role}</span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}