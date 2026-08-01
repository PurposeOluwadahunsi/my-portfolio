"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { IconButton } from "@/components/ui/icon-button";

// Hidden from the navbar for now (see navbar.tsx) since the product
// direction is dark-only at launch, but the toggle itself is fully
// functional — flip the flag in navbar.tsx when light mode ships.
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes can't know the resolved theme until after hydration,
  // so we avoid rendering the wrong icon for a split second.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton aria-label="Toggle theme" className="opacity-0" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <IconButton
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </IconButton>
  );
}