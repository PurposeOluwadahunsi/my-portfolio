"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineItem } from "@/components/home/timeline-item";
import { SkillsGrid } from "@/components/home/skills-grid";
import { CredentialsCard } from "@/components/home/credentials-card";
import { staggerContainer } from "@/lib/motion";
import { journey } from "@/data/journey";

export function JourneySection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <Section id="journey">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & growth"
          description="A grounded look at how I got here. The work, the learning, and what I'm building now."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div ref={timelineRef} className="relative">
            {/* w-[3px] + bg-foreground matches timeline-item.tsx's
                border-l-[3px] border-border track exactly, so the
                overlay sits flush on top of it instead of looking
                like a separate thin line. */}
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-0 top-0 h-full w-[4px] origin-top bg-foreground"
              aria-hidden="true"
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-8"
            >
              {journey.map((item) => (
                <TimelineItem key={item.org} {...item} />
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-8">
            <SkillsGrid />
            <CredentialsCard />
          </div>
        </div>
      </Container>
    </Section>
  );
}