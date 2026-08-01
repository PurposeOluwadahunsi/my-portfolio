"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MagneticResult {
  ref: React.RefObject<HTMLElement | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
}

/**
 * Subtle "magnetic" pull effect for buttons/links: the element nudges
 * a few pixels toward the cursor on hover, then springs back. Used
 * sparingly — primary CTAs only, never on every interactive element.
 *
 * `strength` caps how far the element can travel (in px). Kept small
 * (default 12) on purpose — this should read as precise, not gimmicky.
 *
 * Automatically disabled when the user prefers reduced motion.
 */
export function useMagnetic(strength = 12): MagneticResult {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, x: springX, y: springY, onMouseMove, onMouseLeave };
}