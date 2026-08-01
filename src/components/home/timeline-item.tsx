"use client";

import { motion } from "framer-motion";
import { fadeUp, getTransition } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TimelineItemProps {
  org: string;
  role: string;
  period: string;
  summary: string;
}

export function TimelineItem({ org, role, period, summary }: TimelineItemProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={fadeUp}
      transition={getTransition(reduced)}
      className="relative border-l border-border pl-6"
    >
      <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
      <p className="text-caption text-muted-foreground">{period}</p>
      <h3 className="mt-1 text-body font-semibold text-foreground">{role}</h3>
      <p className="text-body-sm text-muted-foreground">{org}</p>
      <p className="mt-2 text-body-sm text-muted-foreground">{summary}</p>
    </motion.div>
  );
}