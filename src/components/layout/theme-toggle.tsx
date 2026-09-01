"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-[72px] rounded-full bg-secondary" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-secondary p-1">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Switch to light theme"
        aria-pressed={!isDark}
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-fast ${
          !isDark ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
        }`}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Switch to dark theme"
        aria-pressed={isDark}
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-fast ${
          isDark ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
        }`}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}