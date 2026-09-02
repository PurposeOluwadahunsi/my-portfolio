"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ChatPanel } from "@/components/chatbot/chat-panel";
import { useChatModal } from "@/providers/chat-modal-provider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";


export function ChatModal() {
  const { open, close } = useChatModal();
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Chat with Purpose AI"
          className="fixed inset-0 z-50 h-[100dvh] w-full bg-card"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <ChatPanel onClose={close} />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}