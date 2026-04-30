# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Road Map Col — a tourism/travel booking website for Colombia (focused on Medellín/Antioquia). Built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS 4. Uses Bun as the package manager and runtime.

## Commands

```bash
bun dev              # Start dev server (Turbopack)
bun run build        # Production build
bun run lint         # ESLint
bun run format       # Prettier format
bun run format:check # Prettier check
bun run type-check   # TypeScript type check (tsc --noEmit)
bun test             # Run Vitest tests
bun test:ui          # Vitest interactive UI
bun test:coverage    # Vitest with coverage
```

CI runs lint, typecheck, and test as parallel jobs on PR to `main`/`develop`, and on push to `main` only (no double-run on merge). Branches are auto-deleted after PR close except `develop` and `main`.

## Architecture

- **App Router pages** at `src/app/` — routes: `/`, `/tours`, `/tours/[name]`, `/personalize`
- **Static data** in `src/lib/data.tsx` — all tour, header link, and contact data lives here (no database/CMS). Images hosted on Cloudinary.
- **UI components** in `src/components/ui/` — built on Radix UI primitives + shadcn/ui ("new-york" style) + CVA for variants
- **Feature components** in `src/components/` — `TourCard`, `TourGallery`, `GTM`
- **Utility** `cn()` in `src/lib/utils.ts` — combines clsx + tailwind-merge
- **Path alias**: `@/*` maps to `src/*`

## Code Style & Conventions

- No semicolons, single quotes, 80-char line limit
- Import sorting enforced by `@trivago/prettier-plugin-sort-imports`
- Tailwind class sorting enforced by `prettier-plugin-tailwindcss`
- ESLint enforces sorted object keys (`sort-keys`)
- File naming: kebab-case for components (e.g., `tour-card.tsx`)
- Tests go in `__tests__/` directories adjacent to source files, named `*.test.ts(x)`

## Testing

Vitest + jsdom + Testing Library. Test setup at `src/test/setup.ts` provides mocks for Next.js router, Image, Link, and fonts. Run a single test file with:

```bash
bunx vitest run src/components/__tests__/button.test.tsx
```

## Key Business Logic

Tours have a base price plus optional activities with individual prices. The tour detail page (`src/app/tours/[name]/page.tsx`) calculates dynamic pricing from selected activities and generates pre-filled WhatsApp messages for quotes.

## Common Skills

### Adding a new tour

1. Add the tour entry to the `TOURS` array in `src/lib/data.tsx` following the existing structure: `place`, `title`, `description`, `image`, `images` (optional gallery with `{type: 'image'|'video', url, alt}`), `duration`, `highlights`, `price`, `href` (must be `/tours/<slug>`), and `activities` array.
2. Optionally add a landing carousel entry to `LANDING_LINKS` in the same file to feature the tour on the home page.
3. No new route file is needed — the dynamic route `src/app/tours/[name]/page.tsx` handles all tours by matching `href`.

### Adding a new page/route

1. Create `src/app/<route>/page.tsx`. Use `'use client'` directive if the page needs interactivity (useState, useEffect, event handlers).
2. Add navigation entry to `HEADER_LINKS` in `src/lib/data.tsx` with `label`, `href`, and `icon` (from lucide-react).
3. Layout is handled globally in `src/app/layout.tsx` (Header + Footer + WhatsApp button wrap all pages).

### Adding a UI component (shadcn/ui)

```bash
bunx shadcn@latest add <component-name>
```

Components land in `src/components/ui/`. Config is in `components.json` (style: "new-york", icons: lucide). Custom components in the same directory should follow the same pattern: Radix primitives + CVA variants + `cn()` for class merging.

### Adding Cloudinary images

Upload to Cloudinary under the `lesteban` account, in the `roadmapcol/<tour-slug>/` folder. Use the full `https://res.cloudinary.com/lesteban/image/upload/...` URL. Remote image patterns for Cloudinary are already configured in `next.config.ts`.

### WhatsApp contact integration

All WhatsApp links use the format `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`. The phone number is centralized in `CONTACT` from `src/lib/data.tsx`. When adding new contact points, import `CONTACT` rather than hardcoding the number.

## Branch & PR Workflow

Every code change must follow this flow for traceability:

1. **Create a Linear issue** (in the Road Map Col project) before starting work.
2. **Create a branch** from `develop` using the convention:
   - `feat/les-XX-short-description` — new feature
   - `fix/les-XX-short-description` — bug fix
   - `chore/les-XX-short-description` — infrastructure / tooling
3. **Commit** with a message referencing the issue: `feat: add X (LES-XX)`.
4. **Open a PR** targeting `develop` (never directly to `main`). Title must reference the Linear issue number.
5. After merge, the branch is **auto-deleted** by `.github/workflows/cleanup.yml`.
6. Never commit directly to `develop` or `main`.
