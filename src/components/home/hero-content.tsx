"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { heroContent } from "@/constants/hero";
import { siteConfig } from "@/constants/site";
import { getTransition, staggerContainer, fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useChatModal } from "@/providers/chat-modal-provider";

const socialLinks = [
  { label: "GitHub", href: siteConfig.links.github, icon: undefined },
].filter((link) => link.href);

export function HeroContent() {
  const prefersReducedMotion = useReducedMotion();
  const transition = getTransition(prefersReducedMotion);
  const { openChat } = useChatModal();

  return (
    <motion.div
      className="flex flex-col items-start text-left"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex flex-col">
          <motion.h1
            variants={fadeUp}
            transition={transition}
            className="hero-name font-display text-hero"
          >
            {heroContent.greeting}{" "}
            <span className="text-accent">{heroContent.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mt-2 text-subheading font-semibold text-foreground/90"
          >
            {heroContent.role}
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          transition={transition}
          className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border md:hidden"
        >
          <Image
            src="/IMG_5090.jpeg"
            alt="Portrait of Purpose, AI Engineer"
            fill
            sizes="64px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      <motion.p
        variants={fadeUp}
        transition={transition}
        className="mt-4 max-w-md text-body-sm text-muted-foreground sm:text-body"
      >
        {heroContent.mission}
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={transition}
        className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row"
      >
        <a
          href={heroContent.primaryCta.href}
          className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-white transition-colors duration-fast hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {heroContent.primaryCta.label}
        </a>

        <button
          type="button"
          onClick={openChat}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 text-sm font-semibold text-foreground transition-colors duration-fast hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <MessageCircle className="h-4 w-4" />
          {heroContent.secondaryCta.label}
        </button>
      </motion.div>
    </motion.div>
  );
}