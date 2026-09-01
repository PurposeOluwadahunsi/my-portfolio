"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface CursorGlowPosition {
  x: number;
  y: number;
  isActive: boolean;
}


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