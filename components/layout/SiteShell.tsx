import type { ReactNode } from "react";
import { TopNav } from "./TopNav";
import { SiteFooter } from "./SiteFooter";
import { MotionConfig } from "@/components/motion/MotionConfig";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <MotionConfig>
      <div className="min-h-dvh flex flex-col bg-paper text-ink">
        <TopNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </MotionConfig>
  );
}