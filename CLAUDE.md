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

## Skills

Common workflows are available as slash commands in `.claude/commands/`:

- `/start-issue` — create a Linear issue + branch before starting any change
- `/ship-issue` — commit, push, and open a PR to `develop`
- `/new-tour` — add a tour to `src/lib/data.tsx`
- `/new-page` — add a page/route and nav entry
- `/new-image` — upload to Cloudinary and wire up in the project
