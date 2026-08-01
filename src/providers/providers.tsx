"use client";

import type { ReactNode } from "react";

import { ThemeProvider } from "@/providers/theme-provider";

/**
 * Single composition root for all client-side providers.
 *
 * Rationale: `layout.tsx` stays a Server Component. Any provider that
 * requires client-side context (theme, future analytics, future auth,
 * future chatbot state) is composed here instead, and this is the ONLY
 * client boundary at the root. As new providers are needed, nest them
 * here rather than adding "use client" scattered across the app.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
