"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MenuToggleProps {
  open: boolean;
  onClick: () => void;
}

const topVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 6 },
};

const middleVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const bottomVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -6 },
};

// Three lines that rotate and merge into an X, rather than swapping
// one icon for another. Doubles as both the open trigger and the
// close trigger — clicking it again while open closes the drawer.
export function MenuToggle({ open, onClick }: MenuToggleProps) {
  const prefersReducedMotion = useReducedMotion();
  const transition = {
    duration: prefersReducedMotion ? 0 : 0.25,
    ease: [0.4, 0, 0.2, 1] as const,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-fast hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
    >
      <span className="relative block h-4 w-4">
        <motion.span
          className="absolute left-0 top-0 h-[1.5px] w-4 origin-center bg-current"
          variants={topVariants}
          animate={open ? "open" : "closed"}
          transition={transition}
        />
        <motion.span
          className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current"
          variants={middleVariants}
          animate={open ? "open" : "closed"}
          transition={{ duration: prefersReducedMotion ? 0 : 0.15 }}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-[1.5px] w-4 origin-center bg-current"
          variants={bottomVariants}
          animate={open ? "open" : "closed"}
          transition={transition}
        />
      </span>
    </button>
  );
}