"use client";

import { motion } from "framer-motion";
import { FolderGit2, Github, Home, Linkedin, Route, Sparkles, FileText, type LucideIcon } from "lucide-react";

import { contact } from "@/data/contact";
import { resumePath } from "@/components/home/resume-actions";
import { useActiveSection } from "@/hooks/use-active-section";
import { useChatModal } from "@/providers/chat-modal-provider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Home", href: "#hero", icon: Home },
  { id: "projects", label: "Projects", href: "#projects", icon: FolderGit2 },
  { id: "journey", label: "Journey", href: "#journey", icon: Route },
];

export function FloatingDock() {
  const activeId = useActiveSection(["hero", "projects", "journey", "contact"]);
  const { openChat } = useChatModal();
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: reducedMotion ? 0 : 0.4 }}
      className="fixed inset-x-0 bottom-2 z-30 flex justify-center px-4"
    >
      <div className="no-scrollbar flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border bg-card/90 px-2 py-2 shadow-lg backdrop-blur-md">
        {navItems.map((item) => (
          <DockLink
            key={item.id}
            label={item.label}
            href={item.href}
            icon={item.icon}
            active={activeId === item.id}
          />
        ))}

        <div className="mx-1 h-5 w-px shrink-0 bg-border" aria-hidden="true" />

        <DockButton label="Purpose AI" icon={Sparkles} onClick={openChat} />

        <div className="mx-1 h-5 w-px shrink-0 bg-border" aria-hidden="true" />

        <DockLink label="GitHub" href={contact.github} icon={Github} external />
        <DockLink label="LinkedIn" href={contact.linkedin} icon={Linkedin} external />
        <DockLink label="Resume" href={resumePath} icon={FileText} external />
      </div>
    </motion.div>
  );
}

function DockLink({
  label,
  href,
  icon: Icon,
  active,
  external,
}: {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={cn(
        "group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-fast hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active ? "text-accent" : "text-muted-foreground hover:text-foreground",
      )}
    >
      <Icon className="h-4 w-4" />
      {active && (
        <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
      )}
      <Tooltip label={label} />
    </a>
  );
}

function DockButton({
  label,
  icon: Icon,
  onClick,
}: {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors duration-fast hover:bg-secondary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Icon className="h-4 w-4" />
      <Tooltip label={label} />
    </button>
  );
}

function Tooltip({ label }: { label: string }) {
  return (
    <span
      role="tooltip"
      className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-caption text-foreground opacity-0 shadow-sm transition-opacity duration-fast group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  );
}