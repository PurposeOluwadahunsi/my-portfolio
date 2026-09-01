"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { fadeUp, getTransition } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface JourneyCardProps {
  org: string;
  role: string;
  period: string;
  year: string;
  category: string;
  summary: string;
  tags: string[];
  index: number;
}

// Sticky-stack chapter card. `top` increases slightly per index so
// scroll listener. `rotate` and the deep shadow give the physical,
// slanted-stack-of-papers look from the reference.
export function JourneyCard({ role, org, year, category, summary, tags, index }: JourneyCardProps) {
  const reduced = useReducedMotion();
  const rotate = reduced ? 0 : index % 2 === 0 ? -1.25 : 1.25;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={getTransition(reduced)}
      style={{
        top: `calc(5rem + ${index * 20}px)`,
        zIndex: index + 1,
        rotate,
      }}
      className="sticky mb-10 flex min-h-[58vh] flex-col justify-between rounded-[2rem] border border-border bg-card p-8 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.55)] sm:p-10 md:min-h-[65vh]"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
            {year}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
            {category}
          </span>
        </div>

        <p className="mt-6 font-mono text-caption text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-4xl">{role}</h3>

        <div className="mt-3 flex items-center gap-1.5 text-caption uppercase tracking-wide text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {org}
        </div>

        <p className="mt-6 max-w-xl text-body-sm text-muted-foreground sm:text-body">{summary}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-border px-2.5 py-1 text-caption uppercase tracking-wide text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}