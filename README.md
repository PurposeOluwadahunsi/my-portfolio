# Purpose Oluwadahunsi Portfolio

A personal portfolio website for Purpose Oluwadahunsi, focused on AI engineering, machine learning, data science, and full-stack development.

The site is designed to showcase projects, technical experience, skills, certifications, and selected work through a clean and interactive interface.

It also includes a portfolio aware AI assistant that can answer questions about the work presented on the site.

## Live Website

[Visit the portfolio](https://purposeoluwadahunsi.vercel.app)

## About

This portfolio was built to do more than display a list of projects.

It presents the work, the technologies behind it, the learning journey, and the person behind the projects in one place.

The website includes:

- Featured projects and case studies
- A project collection
- Experience and learning journey
- Skills and certifications
- Resume download and preview
- Contact information
- Purpose AI, an AI assistant that can answer questions about the portfolio
- Responsive navigation and interactions
- SEO metadata, sitemap, and robots configuration

## Built With

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)

### AI

- [Groq](https://groq.com/)
- LLM-based portfolio assistant
- Grounded responses using project and profile data

### Development

- Git
- GitHub
- Vercel
- ESLint
- Prettier

## Main Features

### Portfolio

The homepage brings together the main parts of the portfolio:

- Introduction
- Featured projects
- Other projects
- Journey and experience
- Skills
- Credentials
- Contact

The content is separated from the UI where possible, which makes it easier to update the portfolio without changing components.

### Purpose AI

Purpose AI is the portfolio's built-in AI assistant.

Visitors can ask questions such as:

- What projects has Purpose built?
- What is DashAI?
- What technologies does Purpose use?
- What is Purpose's background?
- Why is a particular project private?
- What areas is Purpose currently focused on?

The assistant uses Groq for model inference and portfolio data as its source of context.

The goal is to make the portfolio easier to explore without replacing the actual content on the website.

### Project Showcase

Projects are presented with different levels of detail depending on their importance.

Featured projects receive larger visual treatment and include information such as:

- The problem
- What was built
- Why it matters
- What was learned
- Technologies used
- Project status
- Available links

Projects shown on the portfolio currently include work such as:

- DashAI
- Malaria Risk Prediction System
- AgroPulse AI
- Car Price Prediction
- Housing Price Prediction
- sutton
- Other data science and machine learning works

Project information is stored separately from the presentation components so it can be updated easily.

### Journey

The Journey section presents education, experience, learning, and current focus in a visual timeline.

The section also uses a sticky stacking card interaction to create a stronger sense of progression while scrolling.

The interaction is built with normal browser positioning and CSS rather than a heavy scrolling library.

### Floating Dock

The site uses a floating navigation dock instead of a traditional top navigation bar.

The dock provides access to:

- Home
- Projects
- Journey
- Purpose AI
- GitHub
- LinkedIn
- Resume

The active section is detected while scrolling so the navigation stays connected to the current page position.

### Contact and Resume

The contact section provides direct access to:

- Email
- GitHub
- LinkedIn
- Location
- Resume

The resume can be viewed or downloaded directly from the portfolio.

## Project Structure

The project uses the Next.js App Router with the main application inside `src/app`.

```text
purpose-ai/
├── public/
│   ├── resume/
│   │   └── Purpose-Oluwadahunsi-Resume.pdf
│   ├── certificate/
│   └── add your certificates 
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── chat/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── projects/
│   │   └── upload projects
│   │
│   ├── constants/
│   │   └── site.ts
│   │
│   ├── data/
│   │   ├── availability.ts
│   │   ├── contact.ts
│   │   ├── credentials.ts
│   │   ├── journey.ts
│   │   ├── knowledge.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   │
│   ├── hooks/
│   │   ├── use-active-section.ts
│   │   └── use-chat.ts
│   │
│   ├── lib/
│   │   ├── fonts.ts
│   │   ├── groq.ts
│   │   └── metadata.ts
│   │
│   ├── providers/
│   │   └── providers.tsx
│   │
│   ├── types/
│   │   └── upload types
│   │
│   └── styles/
│
├── .env.local
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

The exact contents can change as the project evolves, but the main idea is to keep:

- Page structure in `src/app`
- Reusable UI in `src/components`
- Portfolio content in `src/data`
- Shared configuration in `src/constants`
- Utilities and integrations in `src/lib`

## Getting Started

### 1. Fork the repository

Fork this repository to your own GitHub account.

Then clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/purpose-ai.git
```

Move into the project directory:

```bash
cd purpose-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a file named:

```text
.env.local
```

Add:

```env
GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

You can get a Groq API key from the [Groq Console](https://console.groq.com/).

Never commit `.env.local` or any API key to GitHub.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The site should now be available locally.

## Make It Your Own

This project can be used as a starting point for your own portfolio.

Most personal content is stored in the `src/data` directory.

### Personal information

Update:

```text
src/data/contact.ts
```

This contains information such as your:

- Name
- Email
- GitHub
- LinkedIn
- Location

### Projects

Update:

```text
src/data/projects.ts
```

Add your own projects, technologies, descriptions, statuses, images, videos, and links.

The project components are designed to consume the data, so you should not need to rebuild the project cards for every new project.

### AI knowledge

Update:

```text
src/data/knowledge.ts
```

This contains information that Purpose AI can use when answering questions about the portfolio.

When turning this repository into your own portfolio, replace the existing profile and project information with your own.

### Journey

Update:

```text
src/data/journey.ts
```

This controls the education, experience, milestones, and other timeline content shown in the Journey section.

### Skills

Update:

```text
src/data/skills.ts
```

Add or remove technologies and skills based on your own experience.

### Credentials

Update:

```text
src/data/credentials.ts
```

Use this for certifications, training, and other credentials you want to display.

### Availability

Update:

```text
src/data/availability.ts
```

This controls the types of opportunities shown in the contact section.

### Site configuration

Update:

```text
src/constants/site.ts
```

This contains site-wide information used by the application and SEO metadata.

Examples include:

- Site name
- Site title
- Description
- Website URL
- Keywords
- Social links

### SEO

Metadata is generated through:

```text
src/lib/metadata.ts
```

The project also includes:

```text
src/app/robots.ts
src/app/sitemap.ts
```

These generate:

```text
/robots.txt
/sitemap.xml
```

When deploying your own version, make sure `NEXT_PUBLIC_SITE_URL` points to your actual website URL.

### Resume

Replace the existing resume with your own file in:

```text
public/resume/
```

Then update the filename in the relevant resume component if necessary.

### Images and videos

Project media is stored under `public/`.

Replace the included media with your own project screenshots, images, and videos.

Make sure your file names match the paths used by the project data.

## Using Purpose AI

The AI assistant is implemented with a small server-side API layer.

The main flow is:

```text
Visitor
   ↓
Chat Interface
   ↓
/api/chat
   ↓
Portfolio Context
   ↓
Groq API
   ↓
AI Response
   ↓
Visitor
```

The assistant does not need direct access to your API key from the browser.

The Groq API key stays on the server through the environment variable:

```env
GROQ_API_KEY=your_groq_api_key
```

The assistant is also given structured portfolio information so that its answers stay focused on the person and work presented on the site.

When making your own version, update the knowledge and project data before deploying the AI assistant.

## Deployment

The portfolio can be deployed to Vercel.

### Deploy with Vercel

Push your project to GitHub, then import the repository into Vercel.

During setup, add the required environment variables:

```env
GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Deploy the project.

Vercel will build and serve the Next.js application automatically.

### Custom domain

After deployment, you can connect your own domain through the Vercel project settings.

After adding the domain, update:

```env
NEXT_PUBLIC_SITE_URL
```

to match the live website.

## Available Scripts

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

Run the linter:

```bash
npm run lint
```

## Security Notes

The Groq API key should never be placed directly in client-side code.

Use:

```text
.env.local
```

for local development and Vercel environment variables for production.

Do not commit secrets, API keys, private credentials, or personal environment files to the repository.

## Customization Checklist

After forking the project, update these areas before deploying:

```text
[ ] Your name
[ ] Your email
[ ] GitHub link
[ ] LinkedIn link
[ ] Location
[ ] Projects
[ ] Project images/videos
[ ] Skills
[ ] Experience
[ ] Education
[ ] Certifications
[ ] Resume
[ ] AI knowledge
[ ] Site title
[ ] Site description
[ ] Site URL
[ ] Favicon
[ ] Open Graph image
[ ] Environment variables
```

## Why This Repository Is Public

This project is intentionally structured so other developers can learn from it and adapt it.

You are welcome to fork it, change the content, redesign sections, replace the projects, and use the architecture as a starting point for your own portfolio.

The most important part is to make the portfolio your own rather than copying the content unchanged.

## License

This project is available for personal and educational use.

If you fork the project, replace the personal content, images, resume, links, and portfolio information with your own.

## Contact

Purpose Oluwadahunsi

- GitHub: https://github.com/PurposeOluwadahunsi
- LinkedIn: https://www.linkedin.com/in/purpose-oluwadunsi-43a3a2298
- Email: oluwadahunsipurpose670@gmail.com