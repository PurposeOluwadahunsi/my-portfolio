"use client";

import { motion } from "framer-motion";

import { ProjectMedia } from "@/components/projects/project-media";
import { ProjectLinks } from "@/components/projects/project-links";
import { StatusBadge } from "@/components/projects/status-badge";
import { TechChip } from "@/components/projects/tech-chip";
import { getTransition, fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { CaseStudyProject } from "@/types/project";

interface ProjectCardProps {
  project: CaseStudyProject;
}

// Secondary project treatment — noticeably more compact than
// FeaturedProject: one condensed sentence instead of four case-study
// points, fewer tech chips, smaller image. On purpose, so these never
// visually compete with DashAI.
export function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const transition = getTransition(prefersReducedMotion);

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={transition}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      className="flex flex-col items-start rounded-xl border border-border p-5 transition-colors duration-fast hover:border-border-hover"
    >
      <ProjectMedia
        image={project.image}
        video={project.video}
        alt={`${project.name} screenshot`}
        placeholderLabel={project.imagePlaceholderLabel}
      />

      <div className="mt-5 flex items-center gap-3">
        <h4 className="text-subheading font-semibold">{project.name}</h4>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-2 text-body-sm text-muted-foreground">{project.solution}</p>

      <p className="mt-3 text-caption text-muted-foreground/70">
        <span className="font-semibold text-foreground/60">Learned: </span>
        {project.learned}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((item) => (
          <TechChip key={item} label={item} />
        ))}
      </div>

      <div className="mt-5">
        <ProjectLinks links={project.links} />
      </div>
    </motion.article>
  );
}