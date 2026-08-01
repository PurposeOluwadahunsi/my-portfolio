"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Returns true if the user has requested reduced motion at the OS level.
 * Framer Motion variants throughout the app should branch on this to
 * swap transform/opacity animations for near-instant transitions —
 * the CSS-level fallback in globals.css only covers plain CSS
 * transitions/animations, not Framer Motion's JS-driven ones.
 *
 * Usage:
 *   const prefersReducedMotion = useReducedMotion();
 *   <motion.div transition={{ duration: prefersReducedMotion ? 0 : 0.4 }} />
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
