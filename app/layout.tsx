import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/content";
import { buildMetadata, buildViewport } from "@/lib/seo";
import { themeScript } from "@/lib/theme";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const display = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = buildMetadata(site);
export const viewport = buildViewport(site);

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}