# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Road Map Col — a tourism/travel booking website for Colombia (focused on Medellín/Antioquia). Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4. Uses Bun as the package manager and runtime.

## Commands

```bash
bun dev              # Start dev server (Turbopack)
bun run build        # Production build
bun run lint         # ESLint (runs `eslint .` — `next lint` removed in Next.js 16)
bun run format       # Prettier format
bun run format:check # Prettier check
bun run type-check   # TypeScript type check (tsc --noEmit)
bun run test         # Run Vitest tests
bun run test:ui      # Vitest interactive UI
bun run test:coverage # Vitest with coverage (100% threshold enforced)
```

CI runs lint, typecheck, test, and coverage as parallel jobs on PR to `main`/`develop`, and on push to `main` only (no double-run on merge). The `Coverage (100% required)` job fails the PR if any metric drops below 100%. Branches are auto-deleted after PR close except `develop` and `main`.

## Architecture

- **App Router pages** at `src/app/` — routes: `/`, `/tours`, `/tours/[name]`, `/personalize`; also `sitemap.ts` and `robots.ts` (Next.js special files serving `/sitemap.xml` and `/robots.txt`)
- **Static data** in `src/lib/data.tsx` — all tour, header link, and contact data lives here (no database/CMS). Images hosted on Cloudinary.
- **Image URLs** in `src/lib/images.ts` — centralized Cloudinary URLs for logo and social icons. Use Cloudinary transformations (e.g. `w_1200,h_630,c_pad,b_white`) for resizing without uploading new assets.
- **UI components** in `src/components/ui/` — built on Radix UI primitives + shadcn/ui ("new-york" style) + CVA for variants
- **Feature components** in `src/components/` — `TourCard`, `TourGallery`, `GTM`
- **Utility** `cn()` in `src/lib/utils.ts` — combines clsx + tailwind-merge
- **Path alias**: `@/*` maps to `src/*`

## Code Style & Conventions

- No semicolons, single quotes, 80-char line limit
- Import sorting enforced by `@trivago/prettier-plugin-sort-imports`
- Tailwind class sorting enforced by `prettier-plugin-tailwindcss`
- ESLint enforces sorted object keys (`sort-keys`)
- ESLint config (`eslint.config.mjs`) uses native flat config — import `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` directly as arrays. No `FlatCompat` needed (Next.js 16+).
- Environment variables: client-accessible vars use `NEXT_PUBLIC_` prefix. Secrets go in `.env.local` (gitignored). `.env.example` is tracked and lists all required vars with placeholder values. All dependency versions are pinned (no `^`).
- File naming: kebab-case for components (e.g., `tour-card.tsx`)
- Tests go in `__tests__/` directories adjacent to source files, named `*.test.ts(x)`

## Testing

Vitest + jsdom + Testing Library. Test setup at `src/test/setup.ts` provides mocks for Next.js router, Image, Link, fonts, and `HTMLMediaElement`. Coverage is enforced at 100% (branches/functions/lines/statements) via vitest.config.ts thresholds — CI fails if coverage drops. Run a single test file with:

```bash
bunx vitest run src/components/__tests__/button.test.tsx
```

**Key pitfalls:**
- `bun test` ≠ `bun run test` — `bun test` uses Bun's native runner and ignores vitest.config.ts entirely. Always use `bun run test`.
- The global `next/image` mock returns `null`. Tests that need `getByAltText` must add a local `vi.mock('next/image', ...)` that renders a real `<img>`.
- Use `/* c8 ignore next */` for genuinely unreachable branches (Embla stale-closure guards, dead code in shadcn templates) rather than writing contorted tests.
- Never disable ESLint rules (`eslint-disable`) in test files. Fix the actual types — use `as unknown as TargetType` for mocks that can't satisfy the interface directly (e.g. `vi.fn() as unknown as EmblaViewportRefType`).
- **esbuild binary corruption**: After `bun add` installs many packages, the esbuild binary can be corrupted (exits SIGKILL 137), causing Vitest to fail with "write EPIPE". Fix: `rm -rf node_modules/esbuild node_modules/@esbuild && bun add -d esbuild@<version>`.

## Key Business Logic

Tours have a base price plus optional activities with individual prices. The tour detail page (`src/app/tours/[name]/page.tsx`) calculates dynamic pricing from selected activities and generates pre-filled WhatsApp messages for quotes.

## Skills

Common workflows are available as slash commands in `.claude/commands/`:

- `/start-issue` — create a Linear issue + branch before starting any change
- `/dev-issue` — pick up an existing Linear issue, implement it, and open a PR end-to-end
- `/ship-issue` — commit and push the current branch
- `/new-pr` — open a PR to `develop` for the current branch (standardized description)
- `/new-tour` — add a tour to `src/lib/data.tsx`
- `/new-page` — add a page/route and nav entry
- `/new-image` — upload to Cloudinary and wire up in the project
- `/retrospective` — review the session and sync CLAUDE.md + skills with what changed
