"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

// The chat button sits at `bottom-24 right-6` (96px/24px) and is
// 56x56px, so its center is 124px up / 52px left of the viewport's
// bottom-right corner. Each SVG container below is pinned to that
// same corner (bottom-0 right-0), so its path can end at an exact
// coordinate — (width - 52, height - 124) — that always lands on the
// button's center, at any screen size.
export function AskPurposeCta() {
  const reducedMotion = useReducedMotion();

  const pathTransition = {
    duration: reducedMotion ? 0 : 1.6,
    ease: [0.65, 0, 0.35, 1] as const,
    delay: reducedMotion ? 0 : 1.1,
  };
  const arrowheadTransition = {
    duration: reducedMotion ? 0 : 0.3,
    delay: reducedMotion ? 0 : 2.6,
  };
  const textTransition = {
    duration: reducedMotion ? 0 : 0.5,
    delay: reducedMotion ? 0 : 0.6,
  };

  return (
    <div aria-hidden="true" className="pointer-events-none text-foreground">
      {/* Desktop: 240x260 container, endpoint at (188, 136) = button center */}
      <div className="fixed bottom-0 right-0 z-20 hidden h-[260px] w-[240px] sm:block">
        <motion.p
          initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={textTransition}
          className="absolute left-[10px] top-[6px] font-display text-lg italic text-foreground/80"
        >
          Ask Purpose AI
        </motion.p>
        <svg
          width="240"
          height="260"
          viewBox="0 0 240 260"
          fill="none"
          className="absolute inset-0"
        >
          <motion.path
            d="M18 34 C 36 58, 18 78, 46 88 C 78 100, 60 60, 92 70 C 122 80, 100 110, 132 120 C 156 128, 168 130, 188 136"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: reducedMotion ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={pathTransition}
          />
          <motion.path
            d="M188 136 L176 130 M188 136 L182 150"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={arrowheadTransition}
          />
        </svg>
      </div>

      {/* Mobile: 170x210 container, endpoint at (118, 86) = button center */}
      <div className="fixed bottom-0 right-0 z-20 h-[210px] w-[170px] sm:hidden">
        <motion.p
          initial={{ opacity: reducedMotion ? 2 : 0, y: reducedMotion ? 0 : 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={textTransition}
          className="absolute left-[8px] top-[4px] font-display text-base italic text-foreground/80"
        >
          Ask Purpose AI
        </motion.p>
        <svg
          width="170"
          height="200"
          viewBox="0 0 170 210"
          fill="none"
          className="absolute inset-0"
        >
          <motion.path
            d="M12 26 C 26 42, 12 56, 32 62 C 54 70, 42 44, 64 50 C 84 56, 70 76, 92 82 C 104 86, 110 84, 118 100"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: reducedMotion ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={pathTransition}
          />
          <motion.path
            d="M118 86 L108 80 M118 86 L114 96"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={arrowheadTransition}
          />
        </svg>
      </div>
    </div>
  );
}