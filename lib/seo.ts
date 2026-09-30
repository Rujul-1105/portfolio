import type { Metadata, Viewport } from "next";
import type { SiteConfig } from "@/types/content";

export function buildMetadata(site: SiteConfig): Metadata {
  return {
    metadataBase: new URL("https://example.com"),
    title: {
      default: site.name,
      template: site.meta.titleTemplate,
    },
    description: site.meta.description,
    openGraph: {
      title: site.name,
      description: site.meta.description,
      type: "website",
      ...(site.ogImage ? { images: [{ url: site.ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: site.name,
      description: site.meta.description,
      ...(site.ogImage ? { images: [site.ogImage] } : {}),
    },
  };
}

export function buildViewport(site: SiteConfig): Viewport {
  return {
    themeColor: site.meta.themeColor,
  };
}