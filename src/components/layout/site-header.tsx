import Image from "next/image";

import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between">
        <Image
          src="/logoppp.png"
          alt="Purpose Oluwadahunsi"
          width={160}
          height={44}
          className="h-12 w-auto object-contain dark:invert-0 [.light_&]:invert"
          priority
        />
        <ThemeToggle />
      </Container>
    </header>
  );
}