"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { introSequence } from "@/constants/hero";
import { useIntroSeen } from "@/hooks/use-intro-seen";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const PHRASE_DURATION_MS = 350;
const EXIT_DURATION_MS = 400;


export function Intro() {
  const { hasSeenIntro, markIntroSeen } = useIntroSeen();
  const prefersReducedMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const shouldPlay = hasSeenIntro === false && !prefersReducedMotion;

  useEffect(() => {
    if (hasSeenIntro !== false) return;

    if (prefersReducedMotion) {
      markIntroSeen();
      return;
    }

    if (phraseIndex < introSequence.length - 1) {
      const timer = setTimeout(
        () => setPhraseIndex((i) => i + 1),
        PHRASE_DURATION_MS,
      );
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisible(false);
      markIntroSeen();
    }, PHRASE_DURATION_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phraseIndex, hasSeenIntro, prefersReducedMotion]);

  if (!shouldPlay) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION_MS / 1000, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="sr-only" role="status" aria-live="polite">
            Loading Purpose AI portfolio
          </span>

          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              aria-hidden="true"
              className="font-display text-subheading text-foreground md:text-heading"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              {introSequence[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
