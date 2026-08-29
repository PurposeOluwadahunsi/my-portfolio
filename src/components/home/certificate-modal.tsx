"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Folder, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { certifications } from "@/data/certifications";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Trigger + modal. Centering uses a full-screen flex wrapper
// (fixed inset-0 flex items-center justify-center) instead of
// top/left-50%-plus-translate — the same robust pattern already
// proven in chat-modal.tsx, rather than a second centering technique
// that behaves inconsistently across viewports/devtools emulation.
export function CertificateModal() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function scrollToIndex(index: number) {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.clientWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const container = scrollRef.current;
    if (!container) return;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(index);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-3 rounded-xl border border-border p-3 text-left transition-colors duration-fast hover:border-accent"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
          <Folder className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="text-body-sm font-semibold text-foreground">Certificates</p>
          <p className="text-caption text-muted-foreground">Tap to view</p>
        </div>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-caption font-semibold text-foreground">
          {certifications.length}
        </span>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
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
                  role="dialog"
                  aria-modal="true"
                  aria-label="Certificates"
                  className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-card p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2 }}
                >
                  <div className="mb-3 flex shrink-0 items-center justify-between">
                    <p className="text-body-sm font-semibold text-foreground">
                      Certificates ({activeIndex + 1}/{certifications.length})
                    </p>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close"
                      className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="min-h-0 flex-1 overflow-y-auto">
                    <div className="relative">
                      <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                      >
                        {certifications.map((cert) => (
                          <div key={cert.name} className="w-full shrink-0 snap-center">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-secondary">
                              <Image
                                src={cert.image}
                                alt={cert.name}
                                fill
                                sizes="(max-width: 640px) 90vw, 600px"
                                className="object-contain p-2"
                              />
                            </div>
                            <p className="mt-3 text-body-sm font-semibold text-foreground">
                              {cert.name}
                            </p>
                            <p className="text-caption text-muted-foreground">{cert.issuer}</p>
                          </div>
                        ))}
                      </div>

                      {certifications.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                            disabled={activeIndex === 0}
                            aria-label="Previous certificate"
                            className="absolute left-1 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground disabled:opacity-30 sm:flex"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              scrollToIndex(Math.min(certifications.length - 1, activeIndex + 1))
                            }
                            disabled={activeIndex === certifications.length - 1}
                            aria-label="Next certificate"
                            className="absolute right-1 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground disabled:opacity-30 sm:flex"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {certifications.length > 1 && (
                    <div className="mt-4 flex shrink-0 justify-center gap-1.5">
                      {certifications.map((cert, index) => (
                        <button
                          key={cert.name}
                          type="button"
                          onClick={() => scrollToIndex(index)}
                          aria-label={`Go to certificate ${index + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-fast ${
                            index === activeIndex ? "w-5 bg-accent" : "w-1.5 bg-border"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}