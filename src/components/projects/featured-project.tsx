"use client";

import { motion } from "framer-motion";

import { ProjectMedia } from "@/components/projects/project-media";
import { ProjectLinks } from "@/components/projects/project-links";
import { StatusBadge } from "@/components/projects/status-badge";
import { TechChip } from "@/components/projects/tech-chip";
import { getTransition, fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { CaseStudyProject } from "@/types/project";

interface FeaturedProjectProps {
  project: CaseStudyProject;
}

// The DashAI showcase. This is the one project that gets a large,
// two-column editorial treatment — everything else in the section
// (see project-card.tsx) is deliberately smaller so this stays the
// obvious visual anchor.
export function FeaturedProject({ project }: FeaturedProjectProps) {
  const prefersReducedMotion = useReducedMotion();
  const transition = getTransition(prefersReducedMotion);

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
      className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-14"
    >
      <motion.div
        whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="order-1"
      >
        <ProjectMedia
          image={project.image}
          video={project.video}
          alt={`${project.name} screenshot`}
          placeholderLabel={project.imagePlaceholderLabel}
        />
      </motion.div>

      <div className="order-2 flex flex-col items-start">
        <div className="flex items-center gap-3">
          <span className="text-label uppercase text-accent">Featured Project</span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-3 font-display text-heading">{project.name}</h3>

        <p className="mt-2 max-w-md text-subheading text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-6 flex flex-col gap-4 border-l border-border pl-5">
          <CaseStudyPoint label="The problem" text={project.problem} />
          <CaseStudyPoint label="What I built" text={project.solution} />
          <CaseStudyPoint label="Why it matters" text={project.impact} />
          <CaseStudyPoint label="What I learned" text={project.learned} />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <TechChip key={item} label={item} />
          ))}
        </div>

        <div className="mt-7">
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </motion.article>
  );
}

function CaseStudyPoint({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-caption font-semibold uppercase tracking-wide text-foreground/70">
        {label}
      </p>
      <p className="mt-1 max-w-md text-body-sm text-muted-foreground">{text}</p>
    </div>
  );
}