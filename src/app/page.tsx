import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { ProjectsSection } from "@/components/home/projects-section";
import { JourneySection } from "@/components/home/journey-section";
import { ContactSection } from "@/components/home/contact-section";
import { ChatModalProvider } from "@/providers/chat-modal-provider";
import { ChatModal } from "@/components/chatbot/chat-modal";
import { FloatingChatButton } from "@/components/chatbot/floating-chat-button";

export default function HomePage() {
  return (
    <ChatModalProvider>
      <Intro />
      <Hero />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
      <FloatingChatButton />
      <ChatModal />
    </ChatModalProvider>
  );
}