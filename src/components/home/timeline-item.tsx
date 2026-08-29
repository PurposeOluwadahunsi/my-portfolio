"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { fadeUp, getTransition } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TimelineItemProps {
  org: string;
  role: string;
  period: string;
  year: string;
  category: string;
  summary: string;
  tags: string[];
}

export function TimelineItem({ org, role, year, category, summary, tags }: TimelineItemProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      transition={getTransition(reduced)}
      className="relative border-l-[2px] border-border pl-6"
    >
      <span
        className="absolute -left-[6.5px] top-6 h-3 w-3 rounded-full bg-foreground"
        aria-hidden="true"
      />

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
            {year}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
            {category}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold text-foreground sm:text-xl">{role}</h3>

        <div className="mt-1.5 flex items-center gap-1.5 text-caption uppercase tracking-wide text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {org}
        </div>

        <p className="mt-4 text-body-sm text-muted-foreground">{summary}</p>

        <div className="my-4 h-px bg-border" />

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border px-2.5 py-1 text-caption uppercase tracking-wide text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}