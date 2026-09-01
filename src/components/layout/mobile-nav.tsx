"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { IconButton } from "@/components/ui/icon-button";
import { NavLink } from "@/components/layout/nav-link";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { navItems } from "@/constants/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

// Rendered via a portal straight onto document.body. This matters:
// the navbar header has `backdrop-blur-md` on it, and any ancestor
// with a filter/backdrop-filter creates a new containing block for
// `position: fixed` descendants so without the portal, this drawer
// would be "fixed" relative to the ~70px-tall header instead of the
// full viewport, which is what was causing it to render squashed and
// overlapping the page content instead of as a proper full-height
// side panel.
export function MobileNav({ open, onClose }: MobileNavProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col
              border-l border-border bg-background md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.35,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="text-body-sm text-muted-foreground">Menu</span>
              <IconButton aria-label="Close menu" onClick={onClose}>
                <X className="h-4 w-4" />
              </IconButton>
            </div>

            <nav className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  onClick={onClose}
                  className="py-3 text-body"
                />
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}