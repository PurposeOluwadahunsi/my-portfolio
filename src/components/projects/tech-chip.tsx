interface TechChipProps {
  label: string;
}

// Same visual language as the hero's stack chips — small, quiet,
// no icons or logos. A row of these should read as "informative",
// not "badge collection."
export function TechChip({ label }: TechChipProps) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-caption text-muted-foreground">
      {label}
    </span>
  );
}