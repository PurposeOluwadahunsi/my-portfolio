/**
 * Layered hero background — grid, radial glow, noise. The glow is now
 * offset toward the text column instead of dead-center, so it reads
 * as intentional lighting behind the copy rather than a generic
 * centered spotlight.
 */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-grid absolute inset-0" />
      <div className="hero-glow absolute left-[20%] top-1/3 -translate-x-1/2 -translate-y-1/2 lg:left-[28%]" />
      <div className="hero-noise absolute inset-0" />
    </div>
  );
}