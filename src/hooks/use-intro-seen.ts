"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "purpose-ai-intro-seen";


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