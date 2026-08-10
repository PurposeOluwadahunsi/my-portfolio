import type { CaseStudyProject } from "@/types/project";

// NOTE on "learned": these are short, first-person reflections — I've
// drafted reasonable starting copy, but only you actually know what
// you learned building each of these. Treat these three lines as
// drafts to personalize, not finished copy.
export const projects: CaseStudyProject[] = [
  {
    slug: "dashai",
    name: "DashAI",
    status: "Production",
    tagline: "An AI-powered study platform that turns documents into a real study session.",
    problem:
      "Studying from raw lecture notes and PDFs is slow students spend more time organizing material than actually learning it, and generic AI chatbots don't understand the specific document in front of them.",
    solution:
      "DashAI is a full-stack study platform built around retrieval-augmented generation: upload your own documents and the AI study assistant answers questions, generates quizzes and flashcards, and runs exam-mode sessions grounded in that specific material. It includes authentication, per-user progress tracking, and a modern responsive UI.",
    impact:
      "Turns static documents into an interactive study loop, read, ask, quiz, review. Instead of three or four disconnected tools.",
    learned:
      "Building the RAG pipeline pushed me to think carefully about retrieval quality, not just model quality, a good answer is only as good as what gets retrieved.",
    stack: ["Next.js", "TypeScript", "Python", "RAG", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    image: "/dashhh.png",
    imagePlaceholderLabel: "Replace this placeholder with a DashAI dashboard screenshot",
    links: [
      { label: "Visit Product", href: "https://dashai.com.ng" },
      { label: "Case Study" },
    ],
  },
  {
    slug: "malaria-diagnosis-system",
    name: "Malaria Diagnosis System",
    status: "Production",
    tagline: "A deployed machine learning app for preliminary malaria diagnosis support.",
    problem:
      "Access to fast preliminary diagnostic support can be limited, and delays in flagging likely cases can slow down care.",
    solution:
      "A machine learning application deployed as a web app to support preliminary malaria diagnosis, built and shipped end-to-end from model to a live, usable interface.",
    impact:
      "A working example of taking an ML model past the notebook stage into a real, deployed tool someone can actually use.",
    learned:
      "Deploying the model taught me how much of the real work in ML applications happens after the model is trained packaging, interface, and making it reliable for someone else to use.",
    stack: ["Python", "Machine Learning", "Streamlit"],
    featured: false,
    // No `image` yet — tell me the filename once it's in /public and
    // I'll wire it in the same way DashAI's is above, e.g.
    // image: "/malaria.png"
    video: "/Video Project.mp4",
    imagePlaceholderLabel: "Malaria Diagnosis System",
    links: [{ label: "Live Demo", href: "https://malaria-diagnosis-system.streamlit.app" }],
  },
  {
    slug: "agropulse-ai",
    name: "AgroPulse AI",
    status: "In Development",
    tagline: "An AI hackathon project for livestock disease identification and farm decision support.",
    problem:
      "Smallholder farmers often lack quick access to veterinary expertise, and early signs of livestock disease can go unnoticed until it's costly.",
    solution:
      "AgroPulse AI is being built to help identify likely livestock diseases from symptoms and support farm decision-making, currently in active development as part of an AI hackathon.",
    impact:
      "Aims to put a first layer of veterinary triage within reach of farmers who need it most.",
    learned:
      "Still early here, this project is more about the problem space (agricultural AI) than a finished build yet.",
    stack: ["Python", "Machine Learning"],
    featured: false,
    imagePlaceholderLabel: "AgroPulse AI is still in development",
    links: [],
  },
];

export const featuredProject = projects.find((project) => project.featured)!;
export const secondaryProjects = projects.filter((project) => !project.featured);