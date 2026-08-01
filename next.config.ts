import type { NextConfig } from "next";

/**
 * Purpose AI — Next.js configuration.
 *
 * Kept intentionally lean at the foundation stage. Every option below is
 * either required for correctness (typed routes, strict mode) or cheap
 * performance/DX wins that don't couple us to UI decisions yet.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Enables compile-time checked links (e.g. <Link href={typedRoute} />)
  // Extremely valuable once real routes/pages exist.
  typedRoutes: true,

  images: {
    // Modern, smaller formats first; Next falls back automatically.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Placeholder — add trusted remote image hosts here as they're needed
      // (e.g. a CMS, GitHub avatars, project screenshots CDN).
    ],
  },

  experimental: {
    // Optimizes barrel-file imports for these packages automatically,
    // which keeps client bundles small as the icon/animation surface grows.
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
