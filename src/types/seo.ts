/**
 * Minimal shape for page-level metadata overrides, used by
 * `buildMetadata()` in `src/lib/metadata.ts`. Individual routes pass a
 * partial `PageSeo` to override the site defaults (e.g. a future
 * `/projects/[slug]` page overriding title/description/ogImage per
 * project) without duplicating the full Metadata boilerplate.
 */
export interface PageSeo {
  title?: string;
  description?: string;
  path?: string; // route path, e.g. "/projects/some-project"
  ogImage?: string;
  noIndex?: boolean;
}
