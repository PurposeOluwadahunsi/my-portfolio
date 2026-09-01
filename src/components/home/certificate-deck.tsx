"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { certifications } from "@/data/certifications";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function FolderGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 26" fill="currentColor" className={className}>
      <path d="M2 2a2 2 0 0 1 2-2h8.5a2 2 0 0 1 1.6.8L16 3h12a2 2 0 0 1 2 2v2H2V2z" opacity="0.65" />
      <path d="M0 7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}


export function CertificateDeck() {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState(certifications.map((_, i) => i));
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  function next() {
    setOrder((prev) => {
      const [first, ...rest] = prev;
      if (first === undefined) return prev;
      return [...rest, first];
    });
  }

  function prevCard() {
    setOrder((prevOrder) => {
      const last = prevOrder[prevOrder.length - 1];
      if (last === undefined) return prevOrder;
      return [last, ...prevOrder.slice(0, -1)];
    });
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prevCard();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!open && (
          <motion.button
            key="trigger"
            layoutId="cert-box"
            type="button"
            onClick={() => setOpen(true)}
            transition={{ duration: reducedMotion ? 0 : 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex w-full flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
          >
            <motion.div
              animate={reducedMotion ? undefined : { rotate: [0, -8, 8, -4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            >
              <FolderGlyph className="h-14 w-14 text-foreground" />
            </motion.div>
            <div>
              <p className="text-body-sm font-semibold text-foreground">Certificates</p>
              <p className="text-caption text-muted-foreground">
                Tap to open ({certifications.length})
              </p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="backdrop"
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.2 }}
              >
                <div
                  className="absolute inset-0 bg-background/90 backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                  aria-hidden="true"
                />

                <motion.div
                  key="deck-box"
                  layoutId="cert-box"
                  transition={{ duration: reducedMotion ? 0 : 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="relative flex w-full max-w-sm flex-col items-center rounded-2xl border border-border bg-card p-4"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="relative mt-6 h-[340px] w-full">
                    <AnimatePresence initial={false}>
                      {order.slice(0, 3).map((certIndex, stackPos) => {
                        const cert = certifications[certIndex];
                        if (!cert) return null;
                        const isFront = stackPos === 0;
                        return (
                          <motion.div
                            key={certIndex}
                            drag={isFront ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.7}
                            dragMomentum={false}
                            whileDrag={{ scale: 1.03 }}
                            onDragEnd={(_, info) => {
                              if (Math.abs(info.offset.x) > 100) next();
                            }}
                            initial={{ opacity: 0, scale: 0.85, y: 20 }}
                            animate={{
                              opacity: 1,
                              scale: 1 - stackPos * 0.05,
                              y: stackPos * 10,
                              rotate: isFront ? 0 : stackPos % 2 === 0 ? 4 : -4,
                            }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{
                              type: reducedMotion ? "tween" : "spring",
                              stiffness: 260,
                              damping: 24,
                              duration: reducedMotion ? 0 : undefined,
                            }}
                            className="absolute inset-0 flex cursor-grab flex-col rounded-2xl border border-border bg-card p-3 shadow-lg active:cursor-grabbing"
                            style={{ zIndex: 10 - stackPos }}
                          >
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-secondary">
                              <Image
                                src={cert.image}
                                alt={cert.name}
                                fill
                                sizes="360px"
                                className="pointer-events-none object-contain p-2"
                                draggable={false}
                              />
                            </div>
                            <p className="mt-3 text-body-sm font-semibold text-foreground">
                              {cert.name}
                            </p>
                            <p className="text-caption text-muted-foreground">{cert.issuer}</p>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>

                  <div className="mb-2 mt-6 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={prevCard}
                      aria-label="Previous certificate"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <p className="text-caption text-muted-foreground">
                      {(order[0] ?? 0) + 1} / {certifications.length}
                    </p>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next certificate"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mb-2 text-caption text-muted-foreground/70 sm:hidden">
                    Swipe the card to browse
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}