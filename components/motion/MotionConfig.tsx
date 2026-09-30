"use client";

import { MotionConfig as MotionConfigProvider } from "motion/react";
import type { ReactNode } from "react";

/**
 * Wraps the app in a shared Motion config: reduced-motion handling and
 * a single set of easing tokens used everywhere on the site.
 */
export function MotionConfig({ children }: { children: ReactNode }) {
  return (
    <MotionConfigProvider
      reducedMotion="user"
      transition={{
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </MotionConfigProvider>
  );
}