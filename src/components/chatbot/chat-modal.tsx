"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ChatPanel } from "@/components/chatbot/chat-panel";
import { useChatModal } from "@/providers/chat-modal-provider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Desktop: docks bottom-right, near the launcher. Mobile: slides up
// as a full-width bottom sheet. Portaled to document.body for the
// same reason mobile-nav.tsx is — avoids any ancestor filter/backdrop
// breaking position:fixed.
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
            className="fixed inset-x-0 bottom-0 z-50 h-[85vh] w-full overflow-hidden rounded-t-3xl border border-border bg-card sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-[600px] sm:w-[400px] sm:rounded-2xl sm:shadow-lg"
            initial={reducedMotion ? { opacity: 0 } : { y: "100%" }}
            animate={reducedMotion ? { opacity: 1 } : { y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { y: "100%" }}
            transition={{ duration: reducedMotion ? 0 : 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <ChatPanel onClose={close} />
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}