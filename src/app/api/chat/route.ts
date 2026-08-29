import { NextRequest, NextResponse } from "next/server";

import { getGroqResponse, type ChatMessage } from "@/lib/groq";
import { projects } from "@/data/projects";
import { profile, notebookProjects, faqs } from "@/data/knowledge";
import { contact } from "@/data/contact";

function buildSystemPrompt(): string {
  const projectLines = projects
    .map((p) => `- ${p.name} (${p.status}): ${p.tagline} Tech: ${p.stack.join(", ")}.`)
    .join("\n");
  const notebookLines = notebookProjects.map((p) => `- ${p.name}: ${p.description}`).join("\n");
  const faqLines = faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n");

  return `You are Purpose AI, the assistant on ${profile.name}'s portfolio site.

About Purpose: ${profile.role}, ${profile.education}. Focus: ${profile.focus}.

Contact info (share this when asked how to reach Purpose):
Email: ${contact.email}
Phone: ${contact.phone}
GitHub: ${contact.github}
LinkedIn: ${contact.linkedin}
Location: ${contact.location}

Deployed/featured projects:
${projectLines}

Other projects (notebook-based, not deployed):
${notebookLines}

Notes:
${faqLines}

Rules:
- Only answer questions about Purpose, his projects, skills, and work.
- Stay strictly grounded in the facts above. Never invent metrics, users, revenue, awards, or features not listed.
- If you don't know something, say so politely and suggest contacting Purpose directly.
- Be concise, warm, and professional — a few sentences, not essays.
- If asked something unrelated, politely redirect back to Purpose AI topics.`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const systemPrompt: ChatMessage = { role: "system", content: buildSystemPrompt() };
    const reply = await getGroqResponse([systemPrompt, ...messages]);

    return NextResponse.json({ reply });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong talking to the assistant. Please try again." },
      { status: 500 },
    );
  }
}