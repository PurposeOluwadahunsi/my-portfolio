"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/shared/logo";
import { NavLink } from "@/components/layout/nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { MenuToggle } from "@/components/layout/menu-toggle";
import { navItems } from "@/constants/navigation";

export function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <MenuToggle
          open={mobileNavOpen}
          onClick={() => setMobileNavOpen((prev) => !prev)}
        />

        <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      </Container>
    </header>
  );
}