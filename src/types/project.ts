export interface ProjectLink {
  label: string;
  /** Omit to render a disabled "Coming Soon" state instead of a link. */
  href?: string;
}

export type ProjectStatus = "Production" | "In Development";

export interface CaseStudyProject {
  slug: string;
  name: string;
  status: ProjectStatus;
  /** One-line description shown under the name. */
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  /** A short, personal reflection — see the note in data/projects.ts. */
  learned: string;
  stack: string[];
  /** Only one project should be featured at a time — it gets the large layout. */
  featured: boolean;
  video?: string;
  /**
   * Path to a real screenshot in /public, e.g. "/dashhh.png". Leave
   * unset to fall back to the dashed placeholder box — see
   * ProjectImage, which handles this switch automatically.
   */
  image?: string;
  /** Shown on the placeholder image until `image` above is set. */
  imagePlaceholderLabel: string;
  links: ProjectLink[];
}
export type Project = CaseStudyProject;