Run a comprehensive audit of the Road Map Col project and create prioritized Linear issues for every real finding.

## When to use

Run this skill periodically (after major feature batches, before releases, or when explicitly requested) to surface technical debt, security gaps, and quality issues.

## Audit dimensions

For each dimension below, read the relevant files and report **specific, actionable findings** — not vague suggestions. Skip anything already tracked in Linear.

### 1. Security
- `target="_blank"` links missing `rel="noopener noreferrer"`
- `dangerouslySetInnerHTML` usage — should it use `next/script` instead?
- User input fed into external URLs without validation (WhatsApp messages, form fields)
- HTTP security headers in `next.config.ts` (CSP, X-Frame-Options, HSTS, X-Content-Type-Options)
- Hardcoded secrets or API keys in source files
- Environment variables exposed to the client unnecessarily

### 2. SEO
- `src/app/layout.tsx` metadata — title unique per page? description meaningful? OG tags? Twitter cards?
- Presence of `public/robots.txt` and `src/app/sitemap.ts`
- JSON-LD structured data on tour pages (TouristAttraction schema)
- Canonical URLs on dynamic routes
- Missing `alt` text on images

### 3. Performance
- Next.js `<Image>` without `priority` on above-the-fold images (hero, first carousel slide)
- `<Image>` with wrong `width`/`height` vs actual display size — prefer `fill` + `sizes`
- `<video>` elements without `preload="none"` — fetched eagerly even when off-screen
- Background images via inline CSS `style={{ backgroundImage }}` — not optimized by Next.js
- Large bundle imports (import entire library vs named imports)

### 4. Accessibility (a11y)
- Interactive elements (buttons, links) with no accessible label (`aria-label`, `title`, or visible text)
- Form `<Label>` elements not linked to inputs via `htmlFor` / `id`
- Missing skip-to-content link in `layout.tsx`
- Carousel or modal without keyboard focus management
- Color contrast — check CSS custom property values vs WCAG AA

### 5. Bugs
- Duplicate React `key` props (e.g., `key={tour.place}` when places could repeat)
- Missing error boundaries around dynamic/client components
- Form submits without validation (empty required fields reach external URL)
- TypeScript `any` types or unsafe casts

### 6. Test coverage
- Run `bun test:coverage` and identify files with < 80% statement coverage
- Flag any critical business logic file with 0% coverage
- Flag components with interactive state (toggles, forms) that have no interaction tests

### 7. UX / UI
- Empty states (tour not found, empty tours list) — are they designed or just plain text?
- Loading states — do skeleton loaders exist for async content?
- Mobile layout issues — FAB overlapping footer, touch target sizes < 44px
- Forms with no success/error feedback after submission

## Steps

1. **Read files** relevant to each dimension (see paths below).
2. **Cross-reference Linear** — list open issues with `list_issues` to skip already-tracked items.
3. **Report findings** in this format for each issue:
   ```
   [Category] Severity — Short title
   File: path:line
   Problem: one sentence
   Fix: one sentence
   ```
4. **Create Linear issues** for every new finding:
   - Team: Lesteban, Project: Road Map Col
   - Priority: 1 (Urgent) = security/data loss, 2 (High) = user-facing bug/SEO/perf, 3 (Normal) = a11y/UX/tests, 4 (Low) = polish
   - Label: Bug / Feature / Infrastructure / Design
   - Description: problem + fix + Definition of Done checklist
5. **Summarize** to the user: total issues found, breakdown by category and severity, Linear issue numbers created.

## Key files to read

```
src/app/layout.tsx
src/app/page.tsx
src/app/tours/page.tsx
src/app/tours/[name]/page.tsx
src/app/personalize/page.tsx
src/components/ui/header.tsx
src/components/ui/footer.tsx
src/components/ui/carousel-home.tsx
src/components/ui/tour-media-carousel.tsx
src/lib/data.tsx
src/lib/images.ts
next.config.ts
public/          (check for robots.txt, sitemap.xml)
```
