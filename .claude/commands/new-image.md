Add a Cloudinary image to the project.

## Arguments

`$ARGUMENTS` — tour slug or context (e.g. `medellin`, `hero`)

## Steps

1. **Upload the image** to Cloudinary:
   - Account: `lesteban`
   - Folder: `roadmapcol/<tour-slug>/` (or `roadmapcol/general/` for shared assets)
   - Format: WebP preferred; JPEG acceptable for photos

2. **Copy the full URL** in the format:
   ```
   https://res.cloudinary.com/lesteban/image/upload/<transformations>/<public-id>
   ```

3. **Add the URL** to the relevant place:
   - Tour image → `image` or `images[].url` field in `src/lib/data.tsx`
   - Static asset → `src/lib/images.ts` (add a named export)

4. **No `next.config.ts` changes needed** — Cloudinary's `res.cloudinary.com` hostname is already in `remotePatterns`.
