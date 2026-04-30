Add a new page/route to the Road Map Col site.

## Arguments

`$ARGUMENTS` — route path (e.g. `about` or `blog/[slug]`)

## Steps

1. **Create the page file** at `src/app/<route>/page.tsx`.
   - Add `'use client'` only if the page needs `useState`, `useEffect`, or event handlers.
   - Server components are preferred for static or data-fetching pages.

2. **Add a nav entry** in `HEADER_LINKS` inside `src/lib/data.tsx`:
   ```ts
   { label: 'Label', href: '/<route>', icon: <IconName className="size-4" /> }
   ```
   Icon from `lucide-react`. Keep the array in display order.

3. **No layout changes needed** — Header, Footer, and the floating WhatsApp button are applied globally in `src/app/layout.tsx`.

4. **Run checks**:
   ```
   bun run type-check
   bun run lint
   ```
