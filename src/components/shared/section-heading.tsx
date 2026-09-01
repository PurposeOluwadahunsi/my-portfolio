import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}


// eyebrow/title markup each time.
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="text-label uppercase text-accent">{eyebrow}</span>
      <h2 className="text-heading">{title}</h2>
      {description && (
        <p className="max-w-xl text-body text-muted-foreground">{description}</p>
      )}
    </div>
  );
}