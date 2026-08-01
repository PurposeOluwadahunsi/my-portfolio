"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { useChatModal } from "@/providers/chat-modal-provider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function FloatingChatButton() {
  const { open, openChat } = useChatModal();
  const reducedMotion = useReducedMotion();

  if (open) return null;

  return (
    <motion.button
      type="button"
      onClick={openChat}
      aria-label="Chat with Purpose AI"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: reducedMotion ? 0 : 0.4 }}
      whileHover={reducedMotion ? undefined : { scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-accent/50"
        animate={
          reducedMotion ? undefined : { scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <MessageCircle className="relative h-6 w-6" />
    </motion.button>
  );
}