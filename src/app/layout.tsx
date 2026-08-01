import type { Metadata, Viewport } from "next";

import { buildMetadata } from "@/lib/metadata";
import { fontVariables } from "@/lib/fonts";
import { Providers } from "@/providers/providers";
import { AppShell } from "@/components/layout/app-shell";

import "./globals.css";

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${fontVariables} font-sans antialiased`}>
        <Providers>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
