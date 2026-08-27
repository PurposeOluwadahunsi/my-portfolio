import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { ProjectsSection } from "@/components/home/projects-section";
import { JourneySection } from "@/components/home/journey-section";
import { ContactSection } from "@/components/home/contact-section";
import { ChatModalProvider } from "@/providers/chat-modal-provider";
import { ChatModal } from "@/components/chatbot/chat-modal";
import { FloatingChatButton } from "@/components/chatbot/floating-chat-button";
import { FloatingDock } from "@/components/layout/floating-dock";
import { ChatLauncher } from "@/components/chatbot/chat-launcher";

export default function HomePage() {
  return (
    <ChatModalProvider>
      <Intro />
      <Hero />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
      <ChatLauncher />
      <FloatingDock />
      <ChatModal />
    </ChatModalProvider>
  );
}