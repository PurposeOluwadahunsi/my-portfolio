/**
 * Single source of truth for site-wide identity and SEO inputs.
 * Every metadata field (root layout, OpenGraph, Twitter cards, JSON-LD
 * once added) should read from here rather than hardcoding strings —
 * keeps rebranding or domain changes to a one-file edit.
 */
export const siteConfig = {
  name: "Purpose AI",
  title: "Purpose AI",
  description:
    "Purpose AI is my personal portfolio, showcasing my work in AI engineering, machine learning, and full-stack development through interactive and thoughtfully designed experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og-image.png",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Software Engineer Portfolio",
    "AI Portfolio",
    "Full Stack AI Developer",
    "Next.js Portfolio",
  ],
  author: {
    name: "Purpose AI",
    // Reserved for future use (JSON-LD Person schema, footer, contact card).
    url: "",
  },
  links: {
    // Placeholders wire up once real profiles exist.
    github: "https://github.com/purposeoluwadahunsi",
    linkedin: "https://linkedin.com/in/purposeoluwadahunsi",
    twitter: "",
    email: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
