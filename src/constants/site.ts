import { contact } from "@/data/contact";

/**
 * Single source of truth for site-wide identity and SEO inputs.
 * Contact-specific values (github/linkedin/email) are pulled from
 * data/contact.ts rather than duplicated here, so there's exactly
 * one place that can go stale.
 */
export const siteConfig = {
  name: "Purpose Oluwadahunsi",
  title: "Purpose Oluwadahunsi - AI Engineer",
  description:
    "Purpose Oluwadahunsi's portfolio - AI engineering, machine learning, and full-stack development, showcased through interactive, thoughtfully designed experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og-image.png",
  keywords: [
    "Purpose Oluwadahunsi",
    "AI Engineer",
    "Machine Learning Engineer",
    "Software Engineer Portfolio",
    "AI Portfolio",
    "Full Stack AI Developer",
    "Next.js Portfolio",
  ],
  author: {
    name: "Purpose Oluwadahunsi",
    url: "",
  },
  links: {
    github: contact.github,
    linkedin: contact.linkedin,
    twitter: "",
    email: contact.email,
  },
} as const;

export type SiteConfig = typeof siteConfig;