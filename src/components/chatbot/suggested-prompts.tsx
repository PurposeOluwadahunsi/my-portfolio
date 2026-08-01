"use client";

const prompts = [
  "Who is Purpose?",
  "Why is DashAI private?",
  "What is AgroPulse AI?",
  "What technologies does Purpose use?",
  "What is your strongest project?",
];

export function SuggestedPrompts({ onSelect }: { onSelect: (prompt: string) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {prompts.map((p) => (
        <button
          key={p}
          onClick={() => onSelect(p)}
          className="rounded-full border border-border px-3 py-1.5 text-caption text-muted-foreground transition-colors duration-fast hover:border-accent hover:text-accent"
        >
          {p}
        </button>
      ))}
    </div>
  );
}