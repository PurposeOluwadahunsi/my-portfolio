import { Fraunces, Manrope } from "next/font/google";
import { GeistMono } from "geist/font/mono";

// Manrope is now the single UI/body typeface across the whole site.
// Fraunces stays, but only for the hero's "Purpose" word (kept as the
// one deliberate signature detail). Geist Sans has been retired —
// nothing else referenced its variable directly, so it's a clean
// removal, not just an unused leftover.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const fontVariables = `${GeistMono.variable} ${fraunces.variable} ${manrope.variable}`;