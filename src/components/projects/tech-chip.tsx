import type { LucideIcon } from "lucide-react";

interface TechChipProps {
  label: string;
  icon?: LucideIcon;
}

// Backward compatible — `icon` is optional so existing calls (project
// cards) keep working unchanged. Only skills-grid.tsx passes one.
export function TechChip({ label, icon: Icon }: TechChipProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-caption text-muted-foreground">
      {Icon && <Icon className="h-3 w-3" />}
      {label}
    </span>
  );
}