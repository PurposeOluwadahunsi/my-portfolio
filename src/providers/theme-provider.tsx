"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Thin wrapper around next-themes.
 *
 * Design decision: dark mode is the default brand experience, but light
 * mode is fully wired and just one class away — see the `.light`
 * overrides in `globals.css`. Key choices:
 *
 * - `defaultTheme="light"`  light is the brand default, not a guess based
 *   on OS preference.
 * - `enableSystem={false}` deliberate. We don't want the site to
 *   silently flip to light for a subset of first-time visitors; theme
 *   is an explicit user choice via a future toggle, defaulting to dark.
 *   Flip to `true` later if product direction wants OS-preference
 *   detection.
 * - `attribute="class"` - toggles `.dark` / `.light` on <html>, which is
 *   what our Tailwind `darkMode: ["class"]` config expects.
 * - `disableTransitionOnChange` - prevents a flash of transitioning
 *   colors when the theme class first applies.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
