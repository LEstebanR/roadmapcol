Add a new tour to the Road Map Col site.

## Arguments

`$ARGUMENTS` — tour name/slug (e.g. `cartagena` or `ciudad-perdida`)

## Steps

1. **Gather tour data** — ask the user for any missing fields:
   - `place`: city/region name
   - `title`: marketing title
   - `description`: 1–2 sentence teaser
   - `image`: Cloudinary URL (upload first if needed — see `/new-image`)
   - `images`: optional gallery array `[{type: 'image'|'video', url, alt}]`
   - `duration`: e.g. `"2 days / 1 night"`
   - `highlights`: array of bullet strings
   - `price`: base price per person (number)
   - `href`: `/tours/<slug>` — slug must be URL-safe, lowercase, hyphenated
   - `activities`: array of `{title, description, image, duration?, includes?, price?}`

2. **Add the tour entry** to the `TOURS` array in `src/lib/data.tsx`, maintaining alphabetical or logical order.

3. **Optionally add a carousel entry** to `LANDING_LINKS` in the same file if the tour should be featured on the homepage.

4. **Verify** the tour page renders by checking the dynamic route `src/app/tours/[name]/page.tsx` (no new file needed).

5. **Run checks**:
   ```
   bun run type-check
   bun run lint
   ```
