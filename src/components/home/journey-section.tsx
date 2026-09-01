import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { JourneyCard } from "@/components/home/journey-card";
import { SkillsGrid } from "@/components/home/skills-grid";
import { CredentialsCard } from "@/components/home/credentials-card";
import { journey } from "@/data/journey";


export function JourneySection() {
  return (
    <Section id="journey">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & growth"
          description="A grounded look at how I got here — the work, the learning, and what I'm building now."
        />

        <div className="flex flex-col">
          {journey.map((item, index) => (
            <JourneyCard key={item.org} {...item} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SkillsGrid />
          <CredentialsCard />
        </div>
      </Container>
    </Section>
  );
}