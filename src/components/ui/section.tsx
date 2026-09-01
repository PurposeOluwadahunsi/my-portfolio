import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Renders as a different landmark element when needed (e.g. "header", "aside"). */
  as?: "section" | "div" | "header" | "footer" | "aside";
}

/**
 * Vertical rhythm wrapper for full-width page sections. Owns consistent
 * top/bottom spacing so individual sections (Hero, About, Projects...)
 * never have to guess their own padding spacing scales up at larger
 * breakpoints for the "spacious desktop, native mobile" requirement.
 */
export function Section({ as: Tag = "section", className, ...props }: SectionProps) {
  return (
    <Tag
      className={cn("py-16 md:py-24 lg:py-32", className)}
      {...props}
    />
  );
}