import type { CaseStudyProject } from "@/types/project";

export const projects: CaseStudyProject[] = [
  {
    slug: "dashai",
    name: "DashAI",
    status: "Production",
    tagline: "An AI-powered study platform that turns documents into a real study session.",
    problem:
      "Studying from raw lecture notes and PDFs is slow, students spend more time organizing material than actually learning it, and generic AI chatbots don't understand the specific document in front of them.",
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
      "Deploying the model taught me how much of the real work in ML applications happens after the model is trained, packaging, interface, and making it reliable for someone else to use.",
    stack: ["Python", "Machine Learning", "Streamlit"],
    featured: false,
    video: "/Video Project.mp4",
    imagePlaceholderLabel: "Replace this placeholder with a Malaria Diagnosis System screenshot",
    links: [{ label: "Live Demo", href: "https://malaria-diagnosis-system.streamlit.app" }],
  },
  {
    slug: "agriguard",
    name: "AgriGuard",
    status: "Production",
    tagline: "AI-powered crop disease detection from leaf images, built as a team capstone.",
    problem:
      "Farmers often lack fast, accessible ways to identify crop diseases early, and misdiagnosis or delayed treatment can hurt yields.",
    solution:
      "AgriGuard uses fine-tuned ResNet50 models to detect diseases and pests in Cassava and Maize from leaf photos, combining confidence thresholding with energy-based out-of-distribution detection to reduce unreliable predictions. It gives treatment recommendations, preventive measures, and downloadable PDF reports, with a multilingual interface (English, Hausa, Igbo, Yoruba, Swahili, French).",
    impact:
      "A practical example of computer vision applied to a real agricultural problem, from model training through a deployed, usable interface.",
    learned:
      "Built as a team capstone for TechCrush Cohort 7 working through model validation (confidence + OOD detection) as a team sharpened how I think about making predictions trustworthy, not just accurate.",
    stack: ["Python", "PyTorch", "Computer Vision", "Streamlit"],
    image: "/agriguard.png",
    featured: false,
    imagePlaceholderLabel: "Replace this placeholder with an AgriGuard screenshot",
    links: [
      { label: "Live Demo", href: "https://agriguard-mygeakgwedwkqb7pzwbx5q.streamlit.app" },
      { label: "GitHub", href: "https://github.com/AgriGuard-TechCrush/AgriGuard" },
    ],
  },
  {
    slug: "agropulse-ai",
    name: "AgroPulse AI",
    status: "Production",
    tagline: "An AI hackathon project for livestock disease identification and farm decision support.",
    problem:
      "Smallholder farmers often lack quick access to veterinary expertise, and early signs of livestock disease can go unnoticed until it's costly.",
    solution:
      "AgroPulse AI helps identify likely livestock diseases from symptoms and supports farm decision-making, built as part of an AI hackathon.",
    impact:
      "Puts a first layer of veterinary triage within reach of farmers who need it most.",
    learned:
      "This project sharpened how I think about applying AI to agricultural problem spaces, not just conventional tech domains.",
    stack: ["Python", "Machine Learning"],
    image: "/ss1.png",
    featured: false,
    imagePlaceholderLabel: "Replace this placeholder with an AgroPulse AI screenshot",
    links: [
      { label: "GitHub", href: "https://github.com/PurposeOluwadahunsi/agropulse-ai-adtc-2026" },
    ],
  },
];

export const featuredProject = projects.find((project) => project.featured)!;
export const secondaryProjects = projects.filter((project) => !project.featured);