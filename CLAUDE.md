# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev       # Start dev server (http://localhost:3000)

# Build & production
npm run build     # Build for production
npm run start     # Start production server

# Linting
npm run lint      # Run ESLint
```

No test suite is configured in this project.

## Architecture

**Framework:** Next.js App Router (React 19, TypeScript, Tailwind CSS v4)

**Path alias:** `@/*` → `src/*`

**Directory layout:**
- `src/app/` — Pages and layouts using App Router. Each route has its own directory with `page.tsx` and a local `Components/` subfolder for page-specific components.
- `src/Components/` — Shared components, split into `UI/` (primitives) and feature folders (`Navbar/`, `Footer/`).
- `src/actions/` — Next.js Server Actions (e.g. `sendMail.ts` for contact form).
- `src/lib/` — Zod schemas (`zod-schemas.ts`) and utilities.
- `src/hooks/` — Custom hooks (`useSectionObserver.tsx` — Intersection Observer for scroll-triggered fade-ins).

**Pages / routes:**
- `/` — Homepage (`Hero → Services → ShortAbout → Testimonial → FinalCTA`)
- `/sites-web` — Website creation services
- `/applications` — Web application services
- `/a-propos` — About page
- `/contact` — Contact form
- `/mentions-legales`, `/politique-confidentialite` — Legal pages

## Key Patterns

**Section animations:** `useSectionObserver` observes all `<section>` elements and adds `.animate-fade-in` when they enter the viewport. The `Section` component in `src/Components/UI/Section.tsx` accepts an `alternate` boolean prop to apply the gradient border style.

**Styling:** Tailwind CSS v4 (imported via `@import "tailwindcss"` in `globals.css`). Custom CSS variables for colors and fonts (`--font-heading: Raleway`, `--font-body: DM Sans`). Component-level utility classes (`.input`, `.formError`, `.hero-label`) are defined in `globals.css` under `@layer components`.

**Contact form flow:**
1. `ContactForm.tsx` (client component) uses React Hook Form + `@hookform/resolvers/zod` with `sendMailSchema`.
2. On submit, calls the `sendMail` server action in `src/actions/sendMail.ts`.
3. Server action validates with Zod, renders `ContactEmail.tsx` (React Email template), and sends via Resend API.
4. Returns `SendMailResponse` with success status and field-level errors back to the client.

**Environment variables required:**
- `RESEND_API_KEY` — Resend API key
- `EMAIL_TO` — Destination email address for contact form submissions
