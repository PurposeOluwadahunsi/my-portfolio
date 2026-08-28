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
  {
  slug: "sutton",
  name: "Sutton",
  status: "Production",
  tagline: "AI-powered conversational bookkeeping with persistent business memory for informal traders and SMEs.",
  problem:
    "Informal traders often manage debts, inventory, and customer information through mental notes, paper records, or scattered WhatsApp conversations, making it easy to lose track of important business information.",
  solution:
    "Sutton is a conversational AI bookkeeper that lets traders record business activity naturally through chat. It uses Groq-powered language models to extract debts, inventory changes, and customer information from unstructured messages, then stores those records as persistent memories using Walrus Memory. Traders can later ask questions about previous transactions and Sutton retrieves the relevant information to answer them.",
  impact:
    "Demonstrates how persistent AI memory can turn natural conversation into a practical bookkeeping tool for informal businesses, allowing traders to record and retrieve important business information without relying on traditional accounting software.",
  learned:
    "Built for the Lagos Walrus Memory x AI Prompt Hackathon, this project strengthened my understanding of AI memory systems, structured information extraction, semantic retrieval, and integrating decentralized storage with conversational AI.",
  stack: [
    "Next.js",
    "TypeScript",
    "Groq",
    "Llama",
    "Walrus Memory",
    "Vercel"
  ],
  featured: false,
  image: "/walrus hackhathon.png",
  imagePlaceholderLabel: "Sutton screenshot is unavailable",
  links: [
    { label: "Github", href:"https://github.com/PurposeOluwadahunsi/sutton"},
  ],
},
];

export const featuredProject = projects.find((project) => project.featured)!;
export const secondaryProjects = projects.filter((project) => !project.featured);