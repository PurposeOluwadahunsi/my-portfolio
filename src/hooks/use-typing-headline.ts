"use client";

import { useEffect, useRef, useState } from "react";

interface UseTypingHeadlineOptions {
  prefix: string;
  words: string[];
  enabled: boolean;
  onFirstComplete?: () => void;
}

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

    // startIndex lets us resume typing from wherever the text
    // currently is, instead of always restarting from 0 — this is
    // what stops the whole sentence from retyping on every word.
    function typeString(str: string, startIndex: number, onDone: () => void, i = startIndex) {
      if (i > str.length) {
        onDone();
        return;
      }
      setText(str.slice(0, i));
      const delay = 45 + Math.random() * 35;
      schedule(() => typeString(str, startIndex, onDone, i + 1), delay);
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
      // First pass types from 0 (prefix is empty on screen).
      // Every pass after that, the text already sits at `prefix`
      // (deleteWord stopped there), so we resume from prefix.length
      // and only type the new word's characters.
      const startIndex = wordIndex === 0 ? 0 : prefix.length;

      typeString(full, startIndex, () => {
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
    
  }, [enabled]);

  return text;
}