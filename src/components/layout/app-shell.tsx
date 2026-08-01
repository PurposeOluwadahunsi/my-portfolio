import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface AppShellProps {
  children: ReactNode;
}

// The one layout every route inherits. Kept deliberately dumb — it
// doesn't know about chatbots, command palettes, or intro sequences.
// Those get added as siblings inside this shell later (see README
// note in the deliverables below) without this file needing to change
// shape.
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}