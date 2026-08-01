"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "purpose-ai-intro-seen";

/**
 * Tracks whether the visitor has already seen the opening intro.
 *
 * Returns `null` on the very first render (before we've had a chance
 * to check localStorage) so the intro never flashes on screen for a
 * returning visitor before disappearing callers should treat `null`
 * as "not decided yet" and render nothing until it resolves.
 *
 * `markIntroSeen()` persists the preference. `resetIntroSeen()` is
 * exported for a future settings page to offer an intro replay.
 */
export function useIntroSeen() {
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);

  useEffect(() => {
    setHasSeenIntro(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  function markIntroSeen() {
    localStorage.setItem(STORAGE_KEY, "true");
    setHasSeenIntro(true);
  }

  return { hasSeenIntro, markIntroSeen };
}

/** Exported standalone so a future settings page can offer "Replay intro". */
export function resetIntroSeen() {
  localStorage.removeItem(STORAGE_KEY);
}