import { ArrowUpRight } from "lucide-react";

import type { ProjectLink } from "@/types/project";

interface ProjectLinksProps {
  links: ProjectLink[];
}

// Renders whatever links a project actually has. An empty array (like
// AgroPulse AI, which isn't ready to be linked to at all) renders
// nothing — no fake "Coming Soon" button for a project this early.
export function ProjectLinks({ links }: ProjectLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <ProjectLinkButton key={link.label} {...link} />
      ))}
    </div>
  );
}

function ProjectLinkButton({ label, href }: ProjectLink) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-caption text-muted-foreground/50">
        {label}
        <span className="text-muted-foreground/40">· Soon</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-caption text-foreground transition-colors duration-fast hover:border-accent hover:text-accent"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}