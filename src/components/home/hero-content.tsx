"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { heroContent } from "@/constants/hero";
import { getTransition, fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useChatModal } from "@/providers/chat-modal-provider";
import { useIntroSeen } from "@/hooks/use-intro-seen";
import { useTypingHeadline } from "@/hooks/use-typing-headline";
import { useEffect, useState } from "react";

const HEADLINE_PREFIX = "I build intelligent systems that turn ideas into ";
const ROTATING_WORDS = ["impact", "products", "systems", "experiences"];

export function HeroContent() {
  const prefersReducedMotion = useReducedMotion();
  const transition = getTransition(prefersReducedMotion);
  const { openChat } = useChatModal();
  const { hasSeenIntro } = useIntroSeen();

  const [readyToType, setReadyToType] = useState(false);
  const [showSupporting, setShowSupporting] = useState(prefersReducedMotion);

  useEffect(() => {
    if (hasSeenIntro === null) return;
    if (prefersReducedMotion) {
      setReadyToType(true);
      return;
    }
    const delay = hasSeenIntro ? 300 : 1800;
    const id = setTimeout(() => setReadyToType(true), delay);
    return () => clearTimeout(id);
  }, [hasSeenIntro, prefersReducedMotion]);

  const typedText = useTypingHeadline({
    prefix: HEADLINE_PREFIX,
    words: ROTATING_WORDS,
    enabled: readyToType && !prefersReducedMotion,
    onFirstComplete: () => setShowSupporting(true),
  });

  const staticHeadline = HEADLINE_PREFIX + ROTATING_WORDS[0];
  const displayText = prefersReducedMotion ? staticHeadline : typedText;

  const prefixPart = displayText.slice(0, HEADLINE_PREFIX.length);
  const wordPart = displayText.slice(HEADLINE_PREFIX.length);

  return (
    <div className="flex flex-col items-start text-left">
      <div className="flex w-full items-start justify-between gap-4">
        <h1 className="min-h-[2.6em] font-manrope text-headline text-foreground">
          <span className="sr-only">{staticHeadline}</span>
          <span aria-hidden="true">
            {prefixPart}
            <span className="text-accent">{wordPart}</span>
            {readyToType && !prefersReducedMotion && (
              <span className="typing-cursor h-[0.9em] align-middle" />
            )}
          </span>
        </h1>

        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border md:hidden">
          <Image
            src="/IMG_5090.jpeg"
            alt="Portrait of Purpose, AI Engineer"
            fill
            sizes="64px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={showSupporting ? "visible" : "hidden"}
        transition={transition}
        className="mt-6 flex w-full flex-col items-start"
      >
        <p className="text-body font-semibold text-foreground/90">
          Purpose Oluwadahunsi
          <span className="text-muted-foreground"> - AI/ML Engineer</span>
        </p>

        <p className="mt-3 max-w-md text-body-sm text-muted-foreground sm:text-body">
          {heroContent.mission}
        </p>

        <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row">
          <a
            href={heroContent.primaryCta.href}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-accent/50 bg-transparent px-7 text-sm font-semibold text-foreground transition-colors duration-fast hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {heroContent.primaryCta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={openChat}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 text-sm font-semibold text-foreground transition-colors duration-fast hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <MessageCircle className="h-4 w-4" />
            {heroContent.secondaryCta.label}
          </button>
        </div>
      </motion.div>
    </div>
  );
}