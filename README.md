# Purpose AI — Foundation

Production-ready foundation for a premium AI Engineer portfolio. This is
architecture, tooling, theming, SEO, and accessibility scaffolding —
**no UI sections have been built yet** (no Hero, Navbar, About, Projects).
That's intentional; see the project brief this was built against.

## Getting started

```bash
npm install
npm run dev
```

Then add shadcn/ui primitives as needed, e.g.:

```bash
npx shadcn@latest add button card dialog
```

## Scripts

| Command                | Purpose                              |
| ----------------------- | ------------------------------------- |
| `npm run dev`           | Start dev server (Turbopack)          |
| `npm run build`         | Production build                      |
| `npm run start`         | Serve production build                |
| `npm run lint`          | ESLint                                |
| `npm run lint:fix`      | ESLint with autofix                   |
| `npm run format`        | Prettier write                        |
| `npm run format:check`  | Prettier check (CI-friendly)          |
| `npm run typecheck`     | `tsc --noEmit`                        |

---

## 1. Folder structure

```
src/
  app/            Routes, layouts, route-level metadata (App Router)
  components/
    ui/           shadcn/ui primitives (Button, Card, Dialog...)
    layout/       Navbar, Footer, page shell — structural chrome
    home/         Landing-page-specific sections (Hero, About...)
    projects/     Project cards, case study layouts
    chatbot/      Future AI chatbot UI
    shared/       Cross-feature building blocks (Container, headings)
  lib/            Pure internal helpers (cn, fonts, metadata builder)
  hooks/          Reusable client-side hooks
  types/          Shared TypeScript contracts
  constants/      Static config (site identity, routes)
  data/           Static/typed content (projects, skills, timeline)
  styles/         Non-CSS design tokens (JS/TS mirror for Framer Motion etc.)
  providers/      Client-side context composition root
  services/       External integrations (AI chatbot API, analytics)
public/           Static assets
```

## 2. Why each folder exists

- **`app/`** — Next.js App Router convention. Owns routing, layouts, and
  route-level metadata. Stays Server-Component-first.
- **`components/ui`** — the design system's atoms. Domain-agnostic on
  purpose, so they're trivially reusable and match the shadcn/ui CLI's
  expected output location (see `components.json`).
- **`components/layout`** — structural chrome that wraps every page.
  Separated from `ui` because it's composition, not a primitive.
- **`components/home` / `components/projects` / `components/chatbot`** —
  feature-scoped composition. Splitting by feature (not by "big vs
  small component") keeps each folder's blast radius contained: a
  chatbot change can't accidentally break the projects grid.
- **`components/shared`** — the escape valve for the rare component
  used by 2+ features that isn't generic enough to be a `ui/` atom.
- **`lib/`** — deterministic, side-effect-free helpers (class merging,
  font config, metadata building). No network calls belong here.
- **`hooks/`** — client-only reusable behavior (media queries, reduced
  motion). Kept separate from `lib` because hooks have React lifecycle
  semantics `lib` functions don't.
- **`types/`** — the contracts other layers are built against, defined
  ahead of content so `data/` and `components/` can target a stable
  shape instead of inferring types from JSON.
- **`constants/`** — single-source-of-truth static config (site
  identity, route paths) so strings aren't duplicated across the app.
- **`data/`** — actual content, typed against `types/`. Separated from
  `constants` because this is content that changes often (new
  projects), not app-wide config.
- **`styles/`** — the *non-CSS* half of the design token system. Color
  lives in CSS variables (`app/globals.css`) for Tailwind/shadcn
  compatibility; anything JS needs directly (motion durations, canvas
  drawing) lives here as a typed mirror.
- **`providers/`** — the single client-boundary composition root, so
  `layout.tsx` can stay a Server Component while still supporting
  ThemeProvider today and auth/analytics/chat providers later.
- **`services/`** — outward-facing integration code (future AI chatbot
  backend, analytics, form submission), isolated from `lib` so
  "talks to the network" and "pure helper" are never confused.

## 3. Packages installed

**Runtime**

- `next`, `react`, `react-dom` — framework
- `next-themes` — dark/light theme switching
- `geist` — self-hosted Geist font (sans + mono), zero-layout-shift
- `framer-motion` — animation (installed, not yet used)
- `lucide-react` — icon set
- `clsx`, `class-variance-authority`, `tailwind-merge` — the standard
  shadcn/ui class-composition trio
- `tailwindcss-animate` — animation utilities shadcn/ui components expect
- `@radix-ui/react-slot` — required by shadcn/ui's `asChild` pattern

**Tooling**

- `typescript`, `@types/*` — typed codebase
- `tailwindcss`, `postcss`, `autoprefixer` — styling pipeline
- `eslint`, `eslint-config-next`, `eslint-config-prettier` — linting,
  with Prettier conflicts disabled
- `prettier`, `prettier-plugin-tailwindcss` — formatting + automatic
  Tailwind class sorting

## 4. Architecture decisions

- **Server Components by default.** Only `providers.tsx`,
  `theme-provider.tsx`, and the two hooks are `"use client"`. Every
  future component should default to Server and only opt into client
  when it needs interactivity, browser APIs, or hooks.
- **Single client boundary at the root.** Rather than scattering
  `"use client"` across the tree, all client context is composed once
  in `providers/providers.tsx`. Keeps `layout.tsx` a Server Component.
- **Dark mode as the default, light mode as a first-class citizen, not
  an afterthought.** `next-themes` is configured with
  `defaultTheme="dark"` and `enableSystem={false}` — a deliberate
  choice (see comment in `theme-provider.tsx`) — while the full
  `.light` CSS variable set already exists in `globals.css`, so
  shipping a theme toggle later is a UI-only change.
- **Color tokens in CSS, everything else mirrored in TypeScript.**
  Colors live as HSL CSS variables so Tailwind's `hsl(var(--x))`
  pattern and shadcn/ui theming work out of the box. Non-color tokens
  (radius, shadow, motion, spacing) are mirrored in `styles/tokens.ts`
  for JS contexts (Framer Motion, canvas) that can't read Tailwind
  classes.
- **Metadata via a builder function, not hardcoded per page.**
  `buildMetadata()` in `lib/metadata.ts` merges `siteConfig` with
  optional per-route overrides (`PageSeo`), so every future route gets
  correct OpenGraph/Twitter/canonical metadata by calling one function.
- **Self-hosted fonts (`geist` package) instead of `next/font/google`.**
  No runtime dependency on Google's font CDN; zero layout shift via
  `next/font`'s built-in `size-adjust` metrics.
- **Absolute imports via a rich `paths` map**, not just a bare `@/*`,
  so deep imports like `@/components/ui/button` read cleanly and
  editors autocomplete correctly.

## 5. Future scalability

- **New feature area (e.g. "blog"):** add
  `components/blog/`, `data/posts.ts`, `types/post.ts`,
  `app/blog/[slug]/page.tsx` calling `buildMetadata({ path, title })`.
  No existing file needs to change.
- **Chatbot integration:** `services/chat.ts` owns the API client,
  `components/chatbot/` owns the UI, `providers/providers.tsx` gains a
  `ChatProvider` if global state is needed — the seams already exist.
- **Light mode toggle:** purely additive — a `components/layout` toggle
  button calling `next-themes`' `useTheme()`; no token or provider
  rework required.
- **Design system growth:** new shadcn/ui primitives drop into
  `components/ui` via the CLI (already configured through
  `components.json`); new color/spacing tokens are CSS-variable edits
  in one file (`globals.css`), not a grep-and-replace across
  components, because components only ever consume semantic Tailwind
  classes.
- **i18n, analytics, auth:** each is a new provider in
  `providers/providers.tsx` and, where relevant, a new `services/`
  file — the composition pattern doesn't need to change shape to
  accommodate them.

## 6. Best practices used

- Strict TypeScript (`strict`, `noUncheckedIndexedAccess`,
  `noImplicitOverride`) — catches null/undefined and override bugs at
  compile time.
- ESLint (flat config) + `eslint-config-prettier` so linting and
  formatting never fight each other; Prettier auto-sorts Tailwind
  classes via `prettier-plugin-tailwindcss`.
- Semantic HTML in every scaffolded route (`main`, heading hierarchy).
- Consistent, visible `:focus-visible` ring defined once in
  `globals.css` rather than per-component.
- `prefers-reduced-motion` handled at two layers: a global CSS
  safety-net in `globals.css`, and a `useReducedMotion()` hook for
  Framer Motion variants to branch on individually.
- Next.js Image `formats` configured for AVIF/WebP; `optimizePackageImports`
  set for `lucide-react`/`framer-motion` to keep client bundles lean as
  the icon/animation surface grows.
- No secrets committed — `.env.example` documents required variables;
  real values stay in untracked `.env.local`.
- Every non-trivial file carries a doc comment explaining **why**, not
  just what, so the next engineer (or future you) doesn't have to
  reverse-engineer intent.
