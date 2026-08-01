import { Fraunces } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

/**
 * Centralized font configuration.
 *
 * Two fonts, two jobs:
 *
 * - Geist Sans (UI font) — everything except the hero name/headline.
 *   Neutral, extremely legible at small sizes, already self-hosted
 *   with zero layout shift.
 *
 * - Fraunces (display font) — reserved for the hero name only. Loaded
 *   in full variable mode (no fixed `weight`) so the `opsz` and `SOFT`
 *   axes are available, giving it that warm, confident serif quality
 *   instead of the stereotypical mono/futuristic "AI font" look.
 *
 * Self-hosted via next/font/google at build time — no runtime request
 * to Google's CDN.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

export const fontVariables = `${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable}`;