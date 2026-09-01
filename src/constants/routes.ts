
export const routes = {
  home: "/",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
} as const;

export type RouteKey = keyof typeof routes;
