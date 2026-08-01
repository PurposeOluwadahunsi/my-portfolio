import { HeroBackground } from "@/components/home/background";
import { HeroContent } from "@/components/home/hero-content";
import { HeroVisual } from "@/components/home/hero-visual";
import { ScrollIndicator } from "@/components/home/scroll-indicator";
import { Container } from "@/components/ui/container";

// No forced min-height here anymore — a full-viewport-height section
// only makes sense when the content actually needs that much room.
// With this shorter content, forcing 100vh just centers everything
// and leaves a large gap above/below on tall screens. Padding alone
// gives a comfortable, intentional amount of breathing room instead.
export function Hero() {
  return (
    <section id="hero" className="relative flex items-center overflow-hidden">
      <HeroBackground />
      <Container className="relative z-10 grid grid-cols-1 items-center gap-6 py-12 sm:gap-8 sm:py-14 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:py-20 lg:gap-16 lg:py-24">
        <HeroContent />
        <HeroVisual />
      </Container>
      <ScrollIndicator />
    </section>
  );
}