"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Sparkles, Trash2, X } from "lucide-react";

import { useChat } from "@/hooks/use-chat";
import { MessageBubble } from "@/components/chatbot/message-bubble";
import { ChatInput } from "@/components/chatbot/chat-input";

interface ChatPanelProps {
  onClose?: () => void;
}

// Two states sharing one layoutId ("chat-brand") on the icon+title
// block: big and centered when empty, small and docked in the header
// once a conversation starts. Framer Motion animates the size/position
// change automatically between the two — the same shared-layout
// technique used for the certificate folder-to-deck transition.
export function ChatPanel({ onClose }: ChatPanelProps) {
  const { messages, loading, error, sendMessage, clearChat } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasMessages = messages.length > 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const greeting = (
    <div className="flex flex-col items-start gap-1.5">
      <p className="text-caption text-muted-foreground">AI Assistant</p>
      <div className="max-w-sm rounded-2xl bg-secondary px-4 py-3">
        <p className="text-body-sm text-foreground">
          Hi, I can answer questions about Purpose&apos;s projects, experience, and skills.
          What would you like to know?
        </p>
      </div>
    </div>
  );

  if (!hasMessages) {
    return (
      <div className="flex h-full w-full flex-col overflow-hidden">
        <div className="flex shrink-0 justify-end px-3 py-3">
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-1 flex-col items-center gap-8 overflow-y-auto px-4 pt-4 text-center">
          <motion.div layoutId="chat-brand" className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <p className="text-heading font-semibold text-foreground">Purpose AI</p>
          </motion.div>

          <div className="mt-10 w-full max-w-sm text-left">{greeting}</div>
        </div>

        <div className="shrink-0">
          <ChatInput onSend={sendMessage} disabled={loading} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex shrink-0 items-center justify-between gap-2 border-b border-border px-4 py-3">
        <motion.div layoutId="chat-brand" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent/30 via-accent/10 to-transparent">
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
          <span className="text-body-sm font-semibold text-foreground">Purpose AI</span>
        </motion.div>

        <div className="flex items-center gap-1">
          <button
            onClick={clearChat}
            aria-label="Clear chat"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors duration-fast hover:text-foreground"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div
        className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-4"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {greeting}

        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}

        {loading && (
          <div
            className="flex items-center gap-1.5 text-muted-foreground"
            aria-label="Assistant is typing"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:300ms]" />
          </div>
        )}

        {error && <p className="text-caption text-destructive">{error}</p>}

        <div ref={bottomRef} />
      </div>

      <div className="shrink-0">
        <ChatInput onSend={sendMessage} disabled={loading} />
      </div>
    </div>
  );
}