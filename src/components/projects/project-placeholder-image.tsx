interface ProjectPlaceholderImageProps {
  label: string;
  aspect?: "video" | "square";
}

// Stand-in for a real screenshot. Deliberately looks like a
// placeholder (not a fake mockup) so it's obvious what to replace and
// where once a real image exists, swap this component out for a
// plain `next/image` in the parent, following the same pattern used
// in hero-visual.tsx.
export function ProjectPlaceholderImage({
  label,
  aspect = "video",
}: ProjectPlaceholderImageProps) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-secondary/40 ${
        aspect === "video" ? "aspect-video" : "aspect-square"
      }`}
    >
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <p className="relative max-w-[70%] text-center text-caption text-muted-foreground">
        {label}
      </p>
    </div>
  );
}