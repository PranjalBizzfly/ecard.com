# Design System

Tokens are defined in `src/app/globals.css` (Tailwind v4 `@theme`). See `brand-guidelines.md` for the colour meanings.

## Themes (light & dark)
Both themes come from the logo gradient: #BA6AFB → #7F19F7 → #3202B8. They're switched by the `dark` class on `<html>`:
- A script in `<head>` sets the class before the page first paints, using the saved choice or else the OS setting.
- `ThemeToggle` in the header changes it and saves the choice in `localStorage`.

The dark theme uses ecard.gg's own `.dark` design tokens, converted from HSL to hex (checked 2026-11-26).

| Token | Light | Dark (ecard.gg token) |
|---|---|---|
| page / surface | #ffffff / #ffffff | #0c0b14 (background) / #13111d (card) |
| ink-950, ink-900 (text) | #14102a, #1f1a36 | #f6f5fa (foreground) |
| ink-700 | #3d3757 | #d4d1e2 |
| ink-500 (muted) | #6b6685 | #b7b5c5 (muted-foreground) |
| ink-100 (borders) | #ebe7f7 | #262333 (border) |
| ink-50 (subtle bg) | #f7f5ff | #1f1d2b (muted) |
| brand-600 (primary) | #7f19f7 | #a35af6 (primary) |
| brand-700 (links/hover) | #5310d8 | #d9b8ff (accent-foreground) |
| brand-100 (tint) | #efe3ff | #2b1c40 (accent) |
| mint / amber | #0f9d77 / #e0901a | #31c471 (success) / #f6aa28 (warning) |
| night (always-dark sections) | #0f0b1f | #07050f (marketing night) |

Rules:
- Use `bg-surface`, not `bg-white`, for anything that should flip with the theme.
- Use `bg-night` for sections that stay dark in both themes.
- The QR code mock stays white in both themes, as a real QR code would.

## Foundations
- **Spacing:** Tailwind's 4px scale. Sections use `py-20 sm:py-28`. Containers use `.container-x`: max width 80rem, gutters of 16/24/32px.
- **Radius:** 12px (`rounded-xl`) for controls, 16px for cards, 24px for feature bands.
- **Elevation:** the `.card-surface` class, a hairline border with a soft two-layer shadow. Glassmorphism is used only on the sticky header.
- **Type scale:** H1 36→60px, H2 24→48px, body 16–18px with relaxed line height.
- **Motion:** a single `.reveal` fade-up animation, only when the user hasn't asked for reduced motion. Hover states move elements 2px at most.

## Components
| Pattern | Class / component |
|---|---|
| Primary button | `.btn-primary` |
| Secondary button | `.btn-ghost` |
| Eyebrow label | `.eyebrow` |
| Surface card | `.card-surface` |
| Product mocks | `components/Visuals.tsx` (13 kinds, all captioned as sample data) |
| Section types | prose, bullets, steps (timeline), cards, table, callout (info/tip/note), split |

## Layout variants
Each variant changes the hero and the reading layout:
- **feature / reference:** split hero with a product mock.
- **integration:** icon tile with the title.
- **solution:** dark hero with a mock.
- **guide / support / legal:** document hero with a sticky "On this page" table of contents.

The homepage and the pricing page are composed by hand.
