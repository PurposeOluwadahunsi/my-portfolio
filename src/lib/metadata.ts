import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import type { PageSeo } from "@/types/seo";

/**
 * Builds a Next.js `Metadata` object for a route, merging site-wide
 * defaults with optional per-page overrides. Centralizing this means
 * every future route gets correct title templating, canonical URL,
 * OpenGraph, and Twitter card metadata "for free" by calling this
 * function instead of hand-writing a Metadata object.
 *
 * Usage in a route's `page.tsx`:
 *   export const metadata = buildMetadata({ title: "Projects", path: "/projects" });
 */
export function buildMetadata(seo: PageSeo = {}): Metadata {
  const title = seo.title ? `${seo.title} — ${siteConfig.name}` : siteConfig.title;
  const description = seo.description ?? siteConfig.description;
  const url = seo.path ? `${siteConfig.url}${seo.path}` : siteConfig.url;
  const ogImage = seo.ogImage ?? siteConfig.ogImage;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: seo.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      // creator: "@handle" — reserved until siteConfig.links.twitter is set.
    },
    icons: {
      // Placeholder mark — swap for a final favicon.ico / apple-touch-icon
      // set before launch (see public/README.md).
      icon: "/favicon.svg",
    },
  };
}
