/**
 * Central route registry. Components/links should reference these
 * instead of hardcoding path strings, so a future URL structure change
 * (e.g. `/projects` -> `/work`) is a one-file edit.
 */
export const routes = {
  home: "/",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
} as const;

export type RouteKey = keyof typeof routes;
