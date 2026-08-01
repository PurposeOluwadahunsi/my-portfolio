"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ContactCard } from "@/components/home/contact-card";
import { ResumeActions } from "@/components/home/resume-actions";
import { AvailabilityBadge } from "@/components/home/availability-badge";
import { getTransition, fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useChatModal } from "@/providers/chat-modal-provider";

export function ContactSection() {
  const reduced = useReducedMotion();
  const transition = getTransition(reduced);
  const { openChat } = useChatModal();

  return (
    <Section id="contact">
      <Container className="flex flex-col items-center gap-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={transition}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="font-display text-heading">Let's build something meaningful.</h2>
          <p className="max-w-md text-body text-muted-foreground">
            Interested in collaborating or hiring? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={transition}
          className="w-full max-w-2xl"
        >
          <ContactCard />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={transition}
        >
          <ResumeActions />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={transition}
        >
          <AvailabilityBadge />
        </motion.div>

        <button
          onClick={openChat}
          className="text-body-sm text-muted-foreground underline underline-offset-4 transition-colors duration-fast hover:text-accent"
        >
          Still have questions? Ask Purpose AI.
        </button>
      </Container>
    </Section>
  );
}