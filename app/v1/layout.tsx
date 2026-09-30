import type { ReactNode } from "react";
import "./globals.css";

/**
 * Legacy v1 layout. The site root layout (app/layout.tsx) is the v2
 * layout; this overrides fonts/theme for anything under /v1/* so the
 * archived v1 home still renders with its bohemian cream palette and
 * editorial typography.
 */
export default function V1Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}