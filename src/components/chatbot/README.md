# components/chatbot

Future AI-powered chatbot UI (the "AI integrations" pillar of Purpose
AI). Kept isolated from other component folders so the eventual
client-side chat state, streaming UI, and message list don't leak into
unrelated Server Components. Backing logic belongs in `src/services`.
