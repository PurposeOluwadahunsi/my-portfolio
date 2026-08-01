import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional class names (clsx) and resolves Tailwind class
 * conflicts (tailwind-merge). Standard shadcn/ui pattern — every
 * component in src/components/ui should compose classes through this.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
