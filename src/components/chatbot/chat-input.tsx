"use client";

import { useRef, useState } from "react";
import { ArrowUp, Smile } from "lucide-react";

const EMOJIS = [
  "😀", "😂", "🙂", "😉", "😍", "🤔", "😎", "🙌",
  "👍", "👏", "🔥", "🚀", "✨", "💡", "🎉", "🤝",
  "😅", "🙏", "💯", "❤️", "👀", "🤖", "📌", "✅",
];

interface ChatInputProps {
  onSend: (value: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit() {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  }

  function insertEmoji(emoji: string) {
    const textarea = textareaRef.current;
    if (!textarea) {
      setValue((v) => v + emoji);
      return;
    }
    const start = textarea.selectionStart ?? value.length;
    const end = textarea.selectionEnd ?? value.length;
    const next = value.slice(0, start) + emoji + value.slice(end);
    setValue(next);
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + emoji.length;
    });
  }

  function autoGrow(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 128)}px`;
  }

  return (
    <div className="p-3">
      <div className="relative flex items-end gap-1.5 rounded-3xl bg-secondary/60 px-2 py-2 transition-colors duration-fast focus-within:bg-secondary">
        <button
          type="button"
          onClick={() => setShowEmoji((v) => !v)}
          aria-label="Add emoji"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors duration-fast hover:text-foreground"
        >
          <Smile className="h-4 w-4" />
        </button>

        <textarea
          ref={textareaRef}
          value={value}
          onChange={autoGrow}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          rows={1}
          placeholder="Message"
          aria-label="Message"
          className="max-h-32 flex-1 resize-none border-0 bg-transparent py-1 text-body-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:outline-none focus:ring-0"
        />

        <button
          onClick={handleSubmit}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success text-white transition-opacity duration-fast disabled:opacity-30"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
        </button>

        {showEmoji && (
          <div
            className="absolute bottom-full left-0 mb-2 grid w-64 grid-cols-8 gap-1 rounded-2xl bg-card p-2 shadow-lg"
            onMouseLeave={() => setShowEmoji(false)}
          >
            {EMOJIS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => {
                  insertEmoji(emoji);
                  setShowEmoji(false);
                }}
                className="flex h-7 w-7 items-center justify-center rounded-md text-base hover:bg-secondary"
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}