"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { getTransition, scaleIn } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";


export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={getTransition(prefersReducedMotion, { delay: 0.2 })}
      className="relative mx-auto hidden md:block md:w-[200px] lg:w-full lg:max-w-sm"
    >
      <div
        className="absolute inset-0 -z-10 scale-110 rounded-full bg-accent/25 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative aspect-square overflow-hidden rounded-full border border-border bg-card">
        <Image
          src="/IMG_5090.jpeg"
          alt="Portrait of Purpose, AI Engineer"
          fill
          sizes="(max-width: 1024px) 200px, 360px"
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}