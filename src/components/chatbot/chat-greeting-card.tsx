"use client";

import { motion } from "framer-motion";
import { Send, Sparkles, X } from "lucide-react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ChatGreetingCardProps {
  onStart: () => void;
  onClose: () => void;
}

export function ChatGreetingCard({ onStart, onClose }: ChatGreetingCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 8 }}
      transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-72 rounded-2xl border border-border bg-card p-4 shadow-lg"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss"
        className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors duration-fast hover:text-foreground"
      >
        <X className="h-3.5 w-3.5" />
      </button>

      <div className="flex items-center gap-2.5 pr-6">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <p className="text-body-sm font-semibold text-foreground">Purpose AI</p>
          <p className="text-caption text-muted-foreground">AI Assistant</p>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-secondary px-3 py-2.5">
        <p className="text-body-sm text-foreground">
          Hi, Got questions about my projects or experience? Happy to help.
        </p>
        <p className="mt-1 text-right text-caption text-muted-foreground">Just now</p>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-2.5 text-sm font-semibold text-white transition-colors duration-fast hover:bg-accent/90"
      >
        Start chatting
        <Send className="h-4 w-4" />
      </button>
    </motion.div>
  );
}