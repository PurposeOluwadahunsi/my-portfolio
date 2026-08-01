# services

External-facing integration logic: API clients, the future AI chatbot
backend calls, analytics, email/contact-form submission. Anything that
talks to the outside world lives here, isolated from `lib` (pure
internal helpers) and `components` (rendering only).

Example future files: `services/chat.ts` (AI chatbot API client),
`services/analytics.ts`.

Currently empty — populated as integrations are added.
