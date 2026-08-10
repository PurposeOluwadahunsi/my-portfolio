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
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            onClick={close}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Chat with Purpose AI"
            className="fixed inset-x-0 bottom-0 z-50 h-[85dvh] w-full origin-bottom overflow-hidden rounded-t-3xl border border-border bg-card sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-[600px] sm:w-[400px] sm:origin-bottom-right sm:rounded-2xl sm:shadow-lg"
            initial={
              reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.4 }
            }
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.4 }}
            transition={{
              type: reducedMotion ? "tween" : "spring",
              stiffness: 340,
              damping: 28,
              duration: reducedMotion ? 0 : undefined,
            }}
          >
            <ChatPanel onClose={close} />
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}