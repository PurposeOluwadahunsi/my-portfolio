import { availability } from "@/data/availability";

export function AvailabilityBadge() {
  return (
    <div>
      <p className="text-label uppercase text-muted-foreground">Open To</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {availability.map((item) => (
          <span
            key={item}
            className="rounded-full border border-success/30 px-3 py-1 text-caption text-success"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}