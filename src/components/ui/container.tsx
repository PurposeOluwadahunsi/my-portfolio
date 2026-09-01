import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Narrower reading-width container for text-heavy sections (e.g. article body). */
  narrow?: boolean;
}


export function Container({
  className,
  narrow = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8 lg:px-12",
        narrow ? "max-w-[720px]" : "max-w-container",
        className,
      )}
      {...props}
    />
  );
}