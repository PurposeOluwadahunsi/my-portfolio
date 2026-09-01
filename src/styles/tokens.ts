/**
 * Purpose AI — design token registry (JS/TS mirror).
 *
 * The source of truth for *color* is CSS variables in `globals.css`
 * (so Tailwind and shadcn/ui theming works). This file mirrors the
 * non-color, structural tokens that JS-side code needs direct access
 * to — e.g. Framer Motion transition configs, canvas/SVG drawing,
 * or chart libraries that can't consume CSS variables directly.
 *
 * Nothing here has "real" values yet - these are placeholders that
 * establish the *shape* of the design system ahead of a visual design
 * pass. Keep this file additive-only until real UI work begins.
 */

export const radius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
} as const;

export const shadow = {
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
} as const;

/**
 * Spacing scale placeholder. Tailwind's default scale (0–96) already
 * covers most needs; this is reserved for a small number of
 * brand-specific additions once layout work begins.
 */
export const spacing = {
  containerPadding: "var(--container-padding)",
} as const;

/**
 * Motion tokens for Framer Motion. Durations/easings only - actual
 * `variants` objects belong next to the components that use them, not
 * here, to avoid this file becoming a dumping ground.
 */
export const motion = {
  duration: {
    fast: 0.15,
    base: 0.3,
    slow: 0.6,
  },
  easing: {
    standard: [0.4, 0, 0.2, 1],
    decelerate: [0, 0, 0.2, 1],
    accelerate: [0.4, 0, 1, 1],
  },
} as const;

/**
 * Typography scale placeholder. Real font sizes stay in Tailwind's
 * `theme.fontSize` once defined; this documents intended semantic
 * roles so the eventual scale has names to map onto.
 */
export const typographyRoles = [
  "display",
  "headline",
  "title",
  "body",
  "caption",
  "mono",
] as const;

export type TypographyRole = (typeof typographyRoles)[number];
