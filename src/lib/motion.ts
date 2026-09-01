import type { Transition, Variants } from "framer-motion";

/**
 * Purpose AI - shared Framer Motion variants (Sprint 1).
 *
 * Every animation here exists for a reason: entrances read as
 * "confident, precise" rather than "bouncy, playful". Consumers should
 * always pair these with `useReducedMotion()` (see
 * `src/hooks/use-reduced-motion.ts`) - see `getTransition()` below,
 * which returns an instant transition when the user prefers reduced
 * motion, so every variant is reduced-motion-safe by construction.
 *
 * Usage:
 *   const prefersReducedMotion = useReducedMotion();
 *   <motion.div
 *     variants={fadeUp}
 *     initial="hidden"
 *     whileInView="visible"
 *     viewport={{ once: true, margin: "-80px" }}
 *     transition={getTransition(prefersReducedMotion)}
 *   />
 */

export function getTransition(
  prefersReducedMotion: boolean,
  overrides?: Transition,
): Transition {
  if (prefersReducedMotion) {
    return { duration: 0 };
  }
  return {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1],
    ...overrides,
  };
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

/**
 * Parent variant for staggered children. Apply `staggerChildren` to a
 * parent `motion.div` and `fadeUp` (or any other variant) to its
 * children — Framer Motion propagates `initial`/`animate` state
 * automatically.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

/**
 * Hover-lift: a subtle, premium micro-interaction for cards/buttons.
 * Spread onto `whileHover` / `whileTap` on a `motion.*` element.
 */
export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
  whileTap: { y: 0, scale: 0.98, transition: { duration: 0.1 } },
};