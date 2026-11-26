# Design System

Tokens are defined in `src/app/globals.css` (Tailwind v4 `@theme`). See `brand-guidelines.md` for the colour meanings.

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
