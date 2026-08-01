import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

// Text-only logo on purpose — no image, no icon. "Purpose" carries the
// weight, "AI" sits slightly muted so it reads as a suffix, not a shout.
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-body font-semibold tracking-tight transition-opacity duration-fast hover:opacity-70",
        className,
      )}
    >
      Purpose <span className="text-muted-foreground">AI</span>
    </Link>
  );
}