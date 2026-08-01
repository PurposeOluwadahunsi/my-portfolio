import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { featuredProject, secondaryProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've Built."
          description=""
        />

        <FeaturedProject project={featuredProject} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}