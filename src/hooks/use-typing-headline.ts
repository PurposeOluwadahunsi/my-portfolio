"use client";

import { useEffect, useRef, useState } from "react";

interface UseTypingHeadlineOptions {
  prefix: string;
  words: string[];
  enabled: boolean;
  onFirstComplete?: () => void;
}

// Small state machine: types `prefix + words[0]` once, pauses, then
// loops the last word only (type -> pause -> delete -> next word).
// Does nothing until `enabled` is true, so the caller controls when
// typing starts (e.g. after the intro sequence finishes).
export function useTypingHeadline({
  prefix,
  words,
  enabled,
  onFirstComplete,
}: UseTypingHeadlineOptions) {
  const [text, setText] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const firstCompleteFired = useRef(false);

  function schedule(fn: () => void, delay: number) {
    const id = setTimeout(fn, delay);
    timers.current.push(id);
  }

  useEffect(() => {
    if (!enabled) return;

    timers.current.forEach(clearTimeout);
    timers.current = [];
    firstCompleteFired.current = false;

    let wordIndex = 0;

    function typeString(str: string, onDone: () => void, i = 0) {
      if (i > str.length) {
        onDone();
        return;
      }
      setText(str.slice(0, i));
      const delay = 45 + Math.random() * 35;
      schedule(() => typeString(str, onDone, i + 1), delay);
    }

    function deleteWord(fullPrefixPlusWord: string, keepLength: number, onDone: () => void) {
      if (fullPrefixPlusWord.length <= keepLength) {
        onDone();
        return;
      }
      setText(fullPrefixPlusWord.slice(0, fullPrefixPlusWord.length - 1));
      schedule(
        () => deleteWord(fullPrefixPlusWord.slice(0, -1), keepLength, onDone),
        25 + Math.random() * 15,
      );
    }

    function loopWord() {
      const word = words[wordIndex % words.length];
      const full = prefix + word;

      typeString(full, () => {
        if (!firstCompleteFired.current) {
          firstCompleteFired.current = true;
          onFirstComplete?.();
        }

        schedule(() => {
          deleteWord(full, prefix.length, () => {
            wordIndex += 1;
            schedule(loopWord, 250);
          });
        }, 1700);
      });
    }

    schedule(loopWord, 500);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return text;
}