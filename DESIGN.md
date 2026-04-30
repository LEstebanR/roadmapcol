---
version: 1.0
name: Road Map Col Design System
description: Adapted from Airbnb's Design Language System (DLS). Keeps Road Map Col's brand colors (#ff3314 primary, #ffc600 secondary) and typefaces (oneBrush for display, Geist Sans for UI). Inherits Airbnb's spatial scale, component patterns, shape language, and interaction principles.

colors:
  primary: "#ff3314"
  primary-active: "#d92200"
  primary-disabled: "#ffc4bb"
  secondary: "#ffc600"
  secondary-active: "#e6b200"
  secondary-disabled: "#fff0a3"
  ink: "#222222"
  body: "#3f3f3f"
  muted: "#6a6a6a"
  muted-soft: "#929292"
  hairline: "#dddddd"
  hairline-soft: "#ebebeb"
  border-strong: "#c1c1c1"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#ffffff"
  surface-strong: "#f2f2f2"
  on-primary: "#ffffff"
  on-secondary: "#222222"
  on-dark: "#ffffff"
  star-rating: "#222222"
  scrim: "#000000"

typography:
  display-hero:
    fontFamily: "'oneBrush', cursive"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  display-xl:
    fontFamily: "'oneBrush', cursive"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0
  display-lg:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.5px
  display-md:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  display-sm:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.18px
  title-md:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  title-sm:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  rating-display:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  body-md:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  caption:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  caption-sm:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0
  badge:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: 0
  micro-label:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0
  uppercase-tag:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 8px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.32px
    textTransform: uppercase
  button-md:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  link:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  nav-link:
    fontFamily: "'Geist Sans', -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 14px
  lg: 20px
  xl: 32px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    height: 48px
  button-secondary-active:
    backgroundColor: "{colors.secondary-active}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.full}"
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 13px 23px
    height: 48px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
  button-pill-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  button-pill-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  search-orb:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    height: 48px
  icon-button-circle:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 32px
  icon-button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 40px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 80px
  search-bar-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    height: 64px
  search-field-segment:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: 8px 24px
  category-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button-sm}"
  category-tab-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
  tour-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
  tour-card-photo:
    rounded: "{rounded.md}"
    aspectRatio: "4/3"
  price-display:
    typography: "{typography.display-md}"
    textColor: "{colors.secondary}"
  guest-favorite-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  rating-display-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.rating-display}"
  amenity-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 12px 0
  reviews-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  reservation-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  date-picker-day:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
  date-picker-day-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px 12px
    height: 56px
  footer-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 48px 80px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  legal-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption-sm}"
---

## Overview

Road Map Col's design system is adapted from Airbnb's Design Language System (DLS). The base canvas is **pure white** (`{colors.canvas}`) with near-black ink (`{colors.ink}` — #222222) for headings and body, and two brand voltages: **primary red** (`{colors.primary}` — #ff3314) for primary CTAs and active states, and **secondary yellow** (`{colors.secondary}` — #ffc600) for card CTAs and price display — both inspired by Colombia's flag.

Type runs **oneBrush** (local brush script) for all hero and display headlines, and **Geist Sans** for every UI element — navigation, buttons, labels, body copy. This combination distinguishes editorial moments from functional UI without introducing extra typefaces.

Shape language is **soft** following Airbnb. Primary CTAs are pill-shaped (`{rounded.full}`). Tour cards use `{rounded.md}` (~14px). Inputs use `{rounded.sm}` (8px). No hard corners on interactive elements.

**Key characteristics:**
- Two brand colors: red `#ff3314` for primary CTAs; yellow `#ffc600` for secondary CTAs and price emphasis.
- Two typefaces: `oneBrush` for display/hero moments; `Geist Sans` for all UI text.
- No visible card borders — elevation via shadow only.
- Pill-shaped primary and secondary buttons (`{rounded.full}`).
- 8px base spacing grid, major sections at 64px vertical padding.
- Photography-led layout — imagery carries visual weight, type stays modest.

---

## Colors

### Brand

- **Primary Red** (`{colors.primary}` — #ff3314): All primary CTAs (Book, Contact, Reserve), the search orb, active states, and brand highlights. Used scarcely — one or two moments per page.
- **Primary Red Active** (`{colors.primary-active}` — #d92200): Press/hover variant of the primary color. Used on `{component.button-primary-active}`.
- **Primary Red Disabled** (`{colors.primary-disabled}` — #ffc4bb): Pale tint on disabled primary CTAs.
- **Secondary Yellow** (`{colors.secondary}` — #ffc600): Secondary CTAs on cards ("See details"), price display, and accent moments. Dark text on yellow (`{colors.on-secondary}` — #222222).
- **Secondary Yellow Active** (`{colors.secondary-active}` — #e6b200): Hover/press state for secondary buttons.

### Surface

- **Canvas** (`{colors.canvas}` — #ffffff): Default page background. All public pages sit on white.
- **Surface Soft** (`{colors.surface-soft}` — #f7f7f7): Disabled fields, hover backgrounds, filter bands.
- **Surface Strong** (`{colors.surface-strong}` — #f2f2f2): Icon button surfaces, skeleton fills.

### Hairlines & Borders

- **Hairline** (`{colors.hairline}` — #dddddd): Default 1px border — search bar dividers, separators, footer column splitters.
- **Hairline Soft** (`{colors.hairline-soft}` — #ebebeb): Lighter divider for editorial body separators.
- **Border Strong** (`{colors.border-strong}` — #c1c1c1): Heavier stroke for disabled outline buttons and focused input outlines.

### Text

- **Ink** (`{colors.ink}` — #222222): All headings, body text, primary nav links. Never pure black.
- **Body** (`{colors.body}` — #3f3f3f): Long-form description and review copy.
- **Muted** (`{colors.muted}` — #6a6a6a): Metadata, captions, inactive tabs, secondary labels.
- **Muted Soft** (`{colors.muted-soft}` — #929292): Disabled link text. Used sparingly.
- **Star Rating** (`{colors.star-rating}` — #222222): Rating numbers and star icons render in ink, not gold — keeps the visual register clean.

### Semantic

- **Scrim** (`{colors.scrim}` — #000000 at 50% opacity): Modal/overlay backdrop.

---

## Typography

### Font families

| Role | Font | Source |
|---|---|---|
| Display / Hero | `oneBrush` | Local — `src/components/ui/typography/oneBrush.ttf` |
| UI / Body | `Geist Sans` | Google Fonts via `next/font/google` |
| Mono | `Geist Mono` | Google Fonts — code only |

> `frabk.ttf` and `grotters.ttf` are available in `src/components/ui/typography/` and reserved for future decorative use. Do not introduce them until there is a specific, approved use case.

### Type scale

| Token | Size | Weight | Line-height | Letter-spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-hero}` | 96px | 400 | 1.0 | 0 | Full-screen hero title (`oneBrush`) |
| `{typography.display-xl}` | 64px | 400 | 1.05 | 0 | Section landing titles (`oneBrush`) |
| `{typography.display-lg}` | 36px | 700 | 1.1 | -0.5px | Page section headings (Geist Sans) |
| `{typography.display-md}` | 24px | 700 | 1.2 | 0 | Card titles, subsection heads |
| `{typography.display-sm}` | 20px | 600 | 1.25 | -0.18px | Grouped sub-titles |
| `{typography.title-md}` | 16px | 600 | 1.25 | 0 | Tour names in compact contexts |
| `{typography.title-sm}` | 16px | 500 | 1.25 | 0 | Footer column heads |
| `{typography.rating-display}` | 64px | 700 | 1.1 | -1px | Large rating number (if used) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body / descriptions |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | Card metadata, dates, distances |
| `{typography.caption}` | 14px | 500 | 1.29 | 0 | Search field segment labels |
| `{typography.caption-sm}` | 13px | 400 | 1.23 | 0 | Footer legal copy |
| `{typography.badge}` | 11px | 600 | 1.18 | 0 | "Featured" badge text |
| `{typography.micro-label}` | 12px | 700 | 1.33 | 0 | Tags, micro-labels |
| `{typography.uppercase-tag}` | 8px | 700 | 1.25 | 0.32px | "NEW" / "HOT" pill badges, uppercase |
| `{typography.button-md}` | 16px | 500 | 1.25 | 0 | Standard button labels |
| `{typography.button-sm}` | 14px | 500 | 1.29 | 0 | Compact pill button labels |
| `{typography.link}` | 14px | 400 | 1.43 | 0 | Inline text links |
| `{typography.nav-link}` | 16px | 600 | 1.25 | 0 | Header navigation labels |

### Principles

`oneBrush` appears only on display/hero moments — the `<Title>` and `<TitleCard>` components. The rest of the system runs Geist Sans exclusively. The contrast between the expressive brush script and the clean geometric sans creates brand personality without typeface noise.

Display sizes in Geist Sans stay modest (36px max for section heads). Photography, layout, and color carry visual weight — type supports it.

---

## Spacing

8px base grid — same scale Airbnb uses internally.

| Token | Value | Tailwind | Use |
|---|---|---|---|
| `{spacing.xxs}` | 2px | `gap-0.5` | Icon nudges |
| `{spacing.xs}` | 4px | `p-1 / gap-1` | Tight inline gaps |
| `{spacing.sm}` | 8px | `p-2 / gap-2` | Component internal gaps |
| `{spacing.md}` | 12px | `p-3 / gap-3` | Card internal paddings |
| `{spacing.base}` | 16px | `p-4 / gap-4` | Default inner padding |
| `{spacing.lg}` | 24px | `p-6 / gap-6` | Card content blocks |
| `{spacing.xl}` | 32px | `p-8 / gap-8` | Section separators |
| `{spacing.xxl}` | 48px | `p-12 / gap-12` | Large section gaps |
| `{spacing.section}` | 64px | `py-16` | Major page band vertical padding |

**Section vertical padding:** `py-12` mobile → `py-16` desktop.
**Content max width:** `max-w-7xl mx-auto px-4 md:px-8`.

---

## Border radius

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Dividers, separators |
| `{rounded.xs}` | 4px | Micro badges, inner chips |
| `{rounded.sm}` | 8px | Inputs, form controls |
| `{rounded.md}` | 14px | Cards, modals, large surfaces |
| `{rounded.lg}` | 20px | Floating overlays |
| `{rounded.xl}` | 32px | Category strip tabs |
| `{rounded.full}` | 9999px | Pill CTAs, search bar, badges, avatars |

> Primary and secondary CTAs are **always** pill-shaped (`{rounded.full}`). Form controls use `{rounded.sm}`. Cards use `{rounded.md}`. No hard corners on interactive elements.

---

## Elevation

No visible borders on cards. Depth via shadow only — same as Airbnb.

| Level | CSS / Tailwind | Use |
|---|---|---|
| 0 — Flat | none | Body, hero, footer, all editorial bands |
| 1 — Resting | `shadow-sm` | Tour cards at rest, search bar, inputs |
| 2 — Hover | `shadow-md` | Tour cards on pointer hover |
| 3 — Overlay | `shadow-lg` | Dropdowns, date pickers, reservation card |
| 4 — Modal | `shadow-xl` | Full modal dialogs |

The exact Airbnb hover shadow:
```css
box-shadow:
  rgba(0,0,0,0.02) 0 0 0 1px,
  rgba(0,0,0,0.04) 0 2px 6px,
  rgba(0,0,0,0.10) 0 4px 8px;
```

Transition: `transition-shadow duration-200`.

---

## Grid system

| Breakpoint | Columns | Use |
|---|---|---|
| Mobile `< md` | 1 | Stacked cards |
| Tablet `md` | 2 | Tour grid |
| Desktop `lg` | 3 | Tour grid |
| Wide `xl` | 4 | Full catalog |

```html
<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
```

City/region link grid: 2-col mobile → 3-col tablet → 6-col desktop.

---

## Components

### Buttons

| Variant | Shape | Background | Text | Use |
|---|---|---|---|---|
| `button-primary` | pill (`{rounded.full}`) | `{colors.primary}` #ff3314 | white | Main CTA — Book, Contact, Reserve |
| `button-secondary` | pill (`{rounded.full}`) | `{colors.secondary}` #ffc600 | black | Card CTA — See details |
| `button-outline` | `{rounded.sm}` | transparent | ink | Ghost/secondary actions |
| `button-ghost` | `{rounded.sm}` | transparent | ink | Nav actions, icon buttons |
| Link | — | transparent | `{colors.primary}` | Inline text links |

Sizes:

| Size | Height | Padding | Use |
|---|---|---|---|
| `sm` | 32px | `px-4` | Compact — filters, tags |
| `default` | 40px | `px-6` | Standard buttons |
| `lg` | 48px | `px-8` | Hero CTAs |

### Tour card (`tour-card`)

Airbnb-style: no border, shadow elevation, full-bleed image with fixed aspect ratio.

- No border (`border-none`)
- Resting: `{component.tour-card}` → `shadow-sm`; hover: `shadow-md` + optional `scale-[1.01]`
- Image: `aspect-[4/3]`, `object-cover`, `rounded-t-[14px]`
- Image hover: `scale-105` with `overflow-hidden` on the parent wrapper
- Inner padding: `p-4`
- Location chip: `{typography.body-sm}` muted + `MapPin` icon
- Title: `{typography.display-md}` (24px / 700)
- Duration: `{typography.body-sm}` muted + `Clock` icon
- Price: `{typography.display-md}` in `{colors.secondary}` (#ffc600), with a small "per person" micro-label
- CTA: `{component.button-pill-secondary}` — yellow pill, bottom-right aligned

```
┌─────────────────────────────┐  ← no border, shadow-sm
│   Image (4:3, full-bleed)   │  ← rounded-t-[14px]
├─────────────────────────────┤
│ 📍 Place           ⭐ 4.9   │  ← body-sm muted
│ Tour Title                  │  ← display-md / 700
│ ⏱ Duration                  │  ← body-sm muted
│ Short description…          │  ← body-md
│                             │
│ $XXX,XXX/person  [See →]   │  ← secondary color + pill CTA
└─────────────────────────────┘
```

### Badge / tag

Pills for categories, duration, and highlight labels.

```html
<span class="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
  2 days
</span>
```

Active/selected: `bg-foreground text-background`.

### Search bar (`search-bar-pill`)

White surface, `shadow-md`, `{rounded.full}`, single prominent bar with a primary red orb.

```html
<div class="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">
  <Search class="text-muted-foreground" />
  <input placeholder="Where to?" class="flex-1 outline-none" />
  <button class="rounded-full bg-primary px-4 py-2 text-white">Search</button>
</div>
```

### Header (`top-nav`)

- Sticky with `backdrop-blur-md bg-white/80`
- Height: 80px
- Logo left, nav links center/right
- WhatsApp CTA: `{component.button-pill-secondary}` (yellow pill)
- Nav links: `{typography.nav-link}` in ink

### Footer (`footer-light`)

- White canvas — matches the page background
- 3-column link list (Experiences / Contact / Legal)
- 48px vertical padding, 80px horizontal on desktop
- Footer links: `{typography.body-sm}` in ink
- Legal band: `{typography.caption-sm}` in `{colors.muted}`

---

## Imagery

- All images on Cloudinary: `lesteban/roadmapcol/<tour-slug>/`
- Tour cards: `aspect-[4/3]`, `object-cover`, `rounded-t-[14px]`
- Hero/banner: `aspect-[16/9]` or full-bleed with text overlay
- Gallery: consistent grid cells, `object-cover`, mixed ratios per art direction
- Always provide descriptive `alt` text

---

## Motion & Interaction

| Interaction | Transition |
|---|---|
| Button hover | `transition-colors duration-150` |
| Card hover | `transition-shadow duration-200` + optional `scale-[1.01]` |
| Card image hover | `scale-105` with `overflow-hidden` on parent |
| WhatsApp FAB | `hover:scale-110 transition-transform duration-300` |
| Page navigation | Default Next.js (no custom animation) |

Keep transitions fast and non-distracting. No spring physics, no slide-in panels.

---

## Icons

`lucide-react` exclusively. Default size: `size-4` (16px) inline, `size-5` (20px) standalone. Common: `MapPin`, `Clock`, `ArrowRight`, `Search`, `Menu`, `X`, `Phone`.

---

## Responsive behavior

| Breakpoint | Width | Key changes |
|---|---|---|
| Mobile | `< 768px` | Header collapses to logo + hamburger; cards 1-up; section padding `py-12` |
| Tablet | `768–1024px` | Cards 2-up; nav links visible |
| Desktop | `1024–1280px` | Cards 3-up; full nav |
| Wide | `> 1280px` | Cards 4-up; content capped at `max-w-7xl` |

Touch targets: minimum 48×48px for primary CTAs; 40×40px for icon buttons.

---

## Accessibility

- All interactive elements keyboard-focusable with `focus-visible` ring (`outline-ring/50`)
- Images require descriptive `alt`
- Color contrast WCAG AA minimum — verify `#ff3314` on white for body-size text
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- No color as the sole means of conveying information

---

## WhatsApp integration

```ts
`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`
```

Import `CONTACT` from `src/lib/data.tsx`. Never hardcode the phone number.
