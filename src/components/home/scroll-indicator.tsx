"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";


export function ScrollIndicator() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      aria-hidden="true"
    >
      <motion.div
        className="h-10 w-px bg-gradient-to-b from-muted-foreground/40 to-transparent"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, 10, 0], opacity: [0.6, 1, 0.6] }
        }
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
