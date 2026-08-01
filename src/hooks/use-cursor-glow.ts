"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface CursorGlowPosition {
  x: number;
  y: number;
  isActive: boolean;
}

/**
 * Future-ready cursor-glow tracker — NOT wired into any UI yet.
 *
 * Prepared now so Sprint 3 (opening experience / interactive surfaces)
 * can consume it directly: attach `onMouseMove`/`onMouseEnter`/
 * `onMouseLeave` to a container and read `{x, y, isActive}` to
 * position a radial-gradient glow element via CSS custom properties
 * (`--glow-x`, `--glow-y`), rather than re-rendering on every pixel.
 *
 * Returns `isActive: false` permanently when the user prefers reduced
 * motion — consumers should skip rendering the glow entirely in that
 * case rather than rendering a static one.
 */
export function useCursorGlow() {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState<CursorGlowPosition>({
    x: 0,
    y: 0,
    isActive: false,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      setPosition({ x: 0, y: 0, isActive: false });
    }
  }, [prefersReducedMotion]);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isActive: true,
    });
  }

  function onMouseLeave() {
    setPosition((prev) => ({ ...prev, isActive: false }));
  }

  return { ...position, onMouseMove, onMouseLeave };
}