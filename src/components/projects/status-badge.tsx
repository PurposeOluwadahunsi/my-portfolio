import type { ProjectStatus } from "@/types/project";

interface StatusBadgeProps {
  status: ProjectStatus;
}

// Small status indicator — reused by both the featured project and
// the secondary cards, so "Production" vs "In Development" always
// looks the same wherever it appears.
export function StatusBadge({ status }: StatusBadgeProps) {
  const isProduction = status === "Production";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-caption ${
        isProduction ? "border-success/30 text-success" : "border-warning/30 text-warning"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${isProduction ? "bg-success" : "bg-warning"}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}