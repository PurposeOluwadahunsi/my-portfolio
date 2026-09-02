"use client";

import { useEffect, useRef } from "react";
import { Sparkles, Trash2, X } from "lucide-react";

import { useChat } from "@/hooks/use-chat";
import { MessageBubble } from "@/components/chatbot/message-bubble";
import { ChatInput } from "@/components/chatbot/chat-input";
// import { SuggestedPrompts } from "@/components/chatbot/suggested-prompts";

interface ChatPanelProps {
  onClose?: () => void;
}

export function ChatPanel({ onClose }: ChatPanelProps) {
  const { messages, loading, error, sendMessage, clearChat } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex shrink-0 items-center justify-end gap-1 px-3 py-3">
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            aria-label="Clear chat"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors duration-fast hover:text-foreground"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
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

      <div
        className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 pb-4"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center gap-6 pt-10 text-center sm:pt-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>

            <p className="text-heading font-semibold text-foreground">Purpose AI</p>

            <div className="w-full max-w-sm text-left">
              <p className="mb-1.5 text-caption text-muted-foreground">AI Assistant</p>
              <div className="rounded-2xl bg-secondary px-4 py-3">
                <p className="text-body-sm text-foreground">
                  Hi, I can answer questions about Purpose&apos;s projects, experience, and
                  skills. What would you like to know?
                </p>
              </div>
            </div>

            {/* <SuggestedPrompts onSelect={sendMessage} /> */}
          </div>
        ) : (
          messages.map((m) => <MessageBubble key={m.id} message={m} />)
        )}

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