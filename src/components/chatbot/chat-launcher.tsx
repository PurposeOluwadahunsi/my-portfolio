"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { useChatModal } from "@/providers/chat-modal-provider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { FloatingChatButton } from "@/components/chatbot/floating-chat-button";
import { ChatGreetingCard } from "@/components/chatbot/chat-greeting-card";

// Single fixed wrapper stacking the greeting card above the button in
// a flex column — no manual pixel math, so they can't drift apart.
// Greeting appears once ~1.5s after load, auto-dismisses after ~5s,
// or closes immediately on X / "Start chatting".
export function ChatLauncher() {
  const { open, openChat } = useChatModal();
  const reducedMotion = useReducedMotion();
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    if (open) {
      setShowGreeting(false);
      return;
    }
    const showTimer = setTimeout(() => setShowGreeting(true), reducedMotion ? 0 : 1500);
    const hideTimer = setTimeout(() => setShowGreeting(false), reducedMotion ? 0 : 6500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [open, reducedMotion]);

  if (open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showGreeting && (
          <ChatGreetingCard
            onStart={() => {
              openChat();
              setShowGreeting(false);
            }}
            onClose={() => setShowGreeting(false)}
          />
        )}
      </AnimatePresence>
      <FloatingChatButton onClick={openChat} />
    </div>
  );
}