import type { ReactNode } from "react";
import {
  Inter_Tight,
  JetBrains_Mono,
  Fraunces,
  Boldonse,
  Josefin_Slab,
  Oswald,
} from "next/font/google";
import { site } from "@/lib/content";
import { buildMetadata, buildViewport } from "@/lib/seo";
import { themeScript } from "@/lib/theme";
import { SiteShell } from "@/components/layout/SiteShell";
import { NoiseOverlay } from "@/components/decor/NoiseOverlay";
import "./globals.css";

const bold = Boldonse({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bold",
  display: "swap",
  adjustFontFallback: false,
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-display",
  display: "swap",
});

const slab = Josefin_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-slab",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = buildMetadata(site);
export const viewport = buildViewport(site);

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bold.variable} ${display.variable} ${slab.variable} ${sans.variable} ${mono.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <div aria-hidden className="scanline-overlay" />
        <div aria-hidden className="crt-vignette" />
        <NoiseOverlay opacity={0.04} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}