# Reference design spec — layout & section designs (from jupitor-two.vercel.app)

Source: raw HTML of `/`, `/features/live-execution-feed`, `/guides/sign-in-to-jupiter-step-by-step`,
`/use-cases/invoice-processing-and-mailing`, `/integrations/n8n-connection-overview`, `/about/our-story`,
`/deals/black-friday`, `/trust/security`, `/faq/signing-in-to-jupiter` (`/pricing` returns 404 — there is no pricing page)
plus its three CSS bundles. Every value below is copied from the compiled CSS. The site is Next.js + Tailwind v4,
so utility classes keep their standard Tailwind v4 meaning (`--spacing: .25rem`, so `p-5` = 1.25rem). Custom
component classes are written out in full.

**Copy layout, sizes, radii, shadows, type and motion. Do not copy colours.** Every colour is given as a ROLE
(see §8). Map the roles to our tokens with the table in §8.

---

## 0. Role tokens the reference uses (define these as aliases of our tokens)

| Ref var | Role | Light value (only to show contrast) | Map to ours |
|---|---|---|---|
| `--bg` | page background | very light grey | `page` |
| `--bg-alt` | slightly darker, alternate band / table head / bar | light grey | `ink-50` |
| `--surface` | card / panel surface | white | `surface` |
| `--ink` | headings, strong text | near-black | `ink-950` |
| `--ink-soft` | body text | dark grey (a little lighter than ink) | `ink-700` |
| `--ink-mute` | meta, captions, placeholders | mid grey | `ink-500` |
| `--line` | all 1px borders and dividers | light grey | `ink-100` |
| `--brand` | primary accent: links, icons, dots, active states | brand green | `brand-600` |
| `--brand-strong` | darker brand: pill text, gradient end | darker green | `brand-700` (gradient end `brand-800`) |
| `--brand-soft` | brand tint at ~10% alpha: icon wells, chips, callouts | — | `brand-50` (or `brand-600` at 10%) |
| `--accent` / `--accent-soft` | secondary highlight (gold): gradient mix, warning callout | gold | `amber` (soft = amber at 13%) |
| `--navy` / `--night` | dark CTA band, footer | very dark navy | `night` |
| `--on-brand` | text on brand fill | white | white |
| `--grad` | `linear-gradient(135deg, brand, brand-strong)` | — | `brand-600 → brand-800` |
| `--grid` | grid-line colour = brand at ~7% alpha | — | `brand-600` / 7% |
| `--ring` | focus ring = brand at 30% alpha | — | `brand-400` / 30% |
| `--shadow` | `0 12px 32px rgb(16 24 40 / .10), 0 2px 6px rgb(16 24 40 / .04)` | — | keep |
| `--shadow-lg` | `0 24px 60px -20px rgb(13 27 42 / .35)` | — | keep (uses night) |
| success "bright green" in the hero | — | — | `mint` |
| error red `#e5484d`, running blue `#3b82f6` | status only | — | keep as literal status colours |

Dark mode swaps the values only. Shadows get darker: `--shadow: 0 18px 40px rgb(0 0 0/.45), 0 4px 10px rgb(0 0 0/.25)`.

---

## 1. Global layout

### Fonts
- **Body:** Inter (`font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif`), with `-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility`.
- **Headings:** `h1,h2,h3` and the `.font-display` logo wordmark use Manrope, falling back to Inter.
- **Homepage hero only:** the hero `<section>` sets Plus Jakarta Sans (weights 400–800) on everything inside it.
- **Mono:** ui-monospace stack. Used for key strings and durations in mock-ups.
- Base font size: browser default 16px (no override). Weights in use: 400/500/600/700/800 (Tailwind `font-extrabold` = 800).

### Container
```css
.container-x { width:100%; max-width:98rem /*1568px*/; margin-inline:auto; padding-inline:1.25rem /*20px*/; }
@media (min-width:640px){ .container-x{ padding-inline:2rem /*32px*/ } }
```
Other globals: `--maxw:1568px`, `--gutter: clamp(16px, 4vw, 32px)` (footer only), `--nav-h:76px` (62px once scrolled).
`html, body { overflow-x: clip }`, `scroll-behavior: smooth`.

### Breakpoints (standard Tailwind v4)
`sm 640` · `md 768` · `lg 1024` · `xl 1280` (desktop nav appears) · `2xl 1536` (Contact and Sign-in links appear in the header).
Custom: `max-width:560px` (data table), `640` (CTA shapes hidden), `480` (hero window), `360` and `300` (tiny-phone font clamps; see §7).

### Section rhythm
```css
.sec      { padding-block: 5.5rem; }   /* 88px — default homepage section */
.sec-band { padding-block: 6rem; }     /* 96px — tinted full-bleed band */
```
- Homepage sections alternate: **plain** (`<section class="container-x sec">` on the page bg) → **band** (`<section class="band sec-band"><div class="container-x relative">`), which is a full-bleed brand-tinted gradient with a masked grid. Order: hero, stats, plain, plain, **band**, plain, plain, **band**, plain, plain, plain, CTA.
- Inner pages: hero `py-10 sm:py-14`, then body `container-x mt-12`, related `mt-16`, CTA `mt-20`. The footer has `margin-top:6rem`.
- `body` is `flex min-h-screen flex-col`. `main` is `flex-1`.

### Decorative backgrounds
```css
/* Full-bleed band */
.band{ position:relative; overflow:hidden; isolation:isolate;
  background:
   radial-gradient(60% 50% at 15% 20%, brand/16%, transparent 70%),
   radial-gradient(50% 60% at 90% 90%, brand/14%, transparent 70%),
   linear-gradient(180deg, mix(brand 9%, page), mix(brand 14%, page)); }
.band:before{ content:""; position:absolute; inset:0; z-index:-1;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size:56px 56px;
  mask-image: linear-gradient(transparent, #000 20% 80%, transparent); }

/* Inner-page hero background */
.hero-bg{ background-color:var(--bg);
  background-image: linear-gradient(to right, var(--grid) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--grid) 1px, transparent 1px), var(--hero);
  background-size:56px 56px, 56px 56px, auto; }       /* --hero = 180deg bg-alt → bg */
.hero-bg:before{ /* soft brand glow that follows the mouse */ content:""; position:absolute; top:46%; left:50%;
  width:760px; height:760px; margin:-380px 0 0 -380px; pointer-events:none;
  background: radial-gradient(circle, var(--brand-soft), transparent 68%); }
```
- `.mote`: 3×3px dots (brand, some gold/accent) scattered in the inner hero. They float up and fade over 12s. Optional.
- `.bokeh`: blurred circles (`filter: blur(26px)`, opacity .5, ×0.4 in light mode) in the homepage hero. Sizes range from 26px to 210px. Optional.

### Base interaction rules
- `:focus-visible { outline: 2px solid brand; outline-offset: 3px; border-radius: 6px }`
- `::selection { background: brand-soft }`
- Scroll progress bar: `position:fixed; top:0; height:3px; background:var(--grad); transform-origin:0; z-index:80`, scaled on X by scroll.
- Reveal-on-scroll (`.r3d` → `.in`): `opacity 0 → 1`, `translate 0 44px → 0`, `rotate x -18deg → 0`, over .7–.85s `cubic-bezier(.2,.7,.2,1)`, staggered with `--rd`. Simplest version: fade + rise 44px.
- Every animation sits inside `@media (prefers-reduced-motion: no-preference)`. Under `reduce`, all durations are set to .01ms.

---

## 2. Header / navigation

```html
<header class="site-header">                       <!-- sticky top:0; z-index:100 -->
  <div class="nav-wrap">                           <!-- flex, h=76px, max-w 1568, gap 18px, px 20 → 32 @sm -->
    <a class="logo" href="/">  <img 36×36> <span class="font-display text-lg font-extrabold tracking-tight">Name</span> </a>
    <nav aria-label="Primary" class="contents">
      <ul class="nav">                              <!-- hidden < 1280px; flex gap 2px; margin 0 auto (centred) -->
        <li><a class="nav-link current">Home</a></li>
        <li class="mega-host"><a class="nav-link">Platform <svg chevron 11px/></a>
          <div class="mega"> <div class="mega-cols" style="--cols:6"> <div class="mg"><h3><span>icon</span>Group</h3><ul><li><a>…</a></li>…<li><a class="mg-all">All 24 pages</a></li></ul></div>… </div>
            <div class="mega-foot"><span>blurb</span><a>Section →</a></div>
          </div>
        </li> …
      </ul>
    </nav>
    <div class="nav-actions">                       <!-- flex gap 8px; margin-left:auto (0 at ≥1280) -->
      <button class="hdr-search">🔍 <span class="hdr-search-text">Search</span><kbd class="hdr-search-key">/</kbd></button>
      <button class="icon-btn">theme</button>
      <a class="hdr-contact hidden 2xl:inline-block">Contact</a>
      <a class="hdr-login hidden 2xl:inline-flex">Sign In</a>
      <a class="hdr-cta hidden sm:inline-flex">Talk To Sales <span class="hdr-cta-ic">→</span></a>
      <button class="icon-btn xl:hidden">menu</button>
    </div>
  </div>
</header>
```

```css
.site-header{ position:sticky; top:0; z-index:100;
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: saturate(1.4) blur(14px); border-bottom:1px solid var(--line); transition: box-shadow .3s; }
:root[data-scrolled] .site-header{ box-shadow: 0 6px 24px rgb(0 0 0/.12); }   /* and --nav-h: 62px */
.site-header .nav-wrap{ height:var(--nav-h); max-width:1568px; margin:0 auto; display:flex; align-items:center; gap:18px;
  padding-inline:20px; transition: height .3s; position:relative; }   /* 32px at ≥640 */
.site-header .nav>li{ height:var(--nav-h); display:flex; align-items:center; position:static; }  /* static, so the mega centres on the header */

.nav-link{ display:inline-flex; align-items:center; gap:4px; padding:10px 8px; font-size:.9rem; font-weight:500; line-height:1;
  color:ink; white-space:nowrap; position:relative; transition: color .2s; }
.nav-link:after{ content:""; position:absolute; left:12px; right:12px; bottom:2px; height:2px; border-radius:2px;
  background:brand; transform:scaleX(0); transition: transform .25s; }
.nav-link:hover, .mega-host:hover>.nav-link { color:brand; }  .nav-link:hover:after { transform:scaleX(1); }
.nav-link.current{ color:brand; background:brand-soft; border-radius:10px; }  /* underline is also shown */
.nav-link svg{ width:11px; height:11px; transition: transform .25s }   /* rotates 180deg while the host is hovered or focused */

.mega{ position:absolute; top:calc(100% - 4px); left:50%; transform:translate(-50%, 8px);
  width:min(1240px, 100vw - 32px); max-height: calc(100vh - var(--nav-h) - 24px); overflow-y:auto;
  background:surface; border:1px solid line; border-radius:20px; box-shadow: var(--shadow-lg);
  opacity:0; visibility:hidden; transition: opacity .25s, transform .25s, visibility .25s; z-index:120; }
.mega-host:hover>.mega, .mega-host:focus-within>.mega{ opacity:1; visibility:visible; transform:translate(-50%, 0); }
.mega-cols{ display:grid; grid-template-columns: repeat(var(--cols,4), minmax(0,1fr)); gap: 8px 28px; padding: 26px 28px 18px; }
.mg h3{ display:flex; align-items:center; gap:10px; margin:0 0 10px; padding-bottom:12px; border-bottom:1px solid line;
  font: 700 .86rem/1.2 Inter; color: ink; }
.mg h3>span{ width:30px; height:30px; border-radius:9px; display:grid; place-items:center; background:brand-soft; color:brand; } /* svg 16px */
.mg a{ display:block; padding:7px 0; font-size:.84rem; font-weight:500; line-height:1.35; color:ink-soft; transition: color .2s, padding .2s; }
.mg a:hover{ color:brand; padding-left:5px; }
.mg a.mg-all{ color:brand-strong; font-weight:700; margin-top:4px; }
.mega-foot{ display:flex; justify-content:space-between; align-items:center; gap:16px; padding:14px 28px; font-size:.85rem;
  border-top:1px solid line; background:bg-alt; color:ink-mute; border-radius:0 0 20px 20px; }
.mega-foot a{ color:brand-strong; font-weight:600; display:inline-flex; gap:4px; align-items:center; }

.hdr-search{ height:42px; display:inline-flex; align-items:center; gap:8px; padding:0 8px 0 14px; border-radius:999px;
  border:1px solid line; background:surface; color:ink-soft; font-size:.9rem; font-weight:500; }   /* hover: border+text brand */
  /* < 768px: 42×42 circle with the icon only. Text and kbd show only at ≥1536px. kbd: 26×24, radius 7px, border line, bg page, 600 .75rem, ink-mute */
.icon-btn{ width:42px; height:42px; border-radius:50%; border:1px solid line; background:surface; color:ink; display:inline-grid; place-items:center; } /* svg 19px; hover border+text brand */
.hdr-contact{ padding:10px 12px; font-size:.9rem; font-weight:500; color:ink; }  /* hover brand */
.hdr-login{ min-height:42px; padding:0 22px; border-radius:999px; border:1px solid color-mix(ink 22%, transparent);
  font-size:.9rem; font-weight:600; color:ink; display:inline-flex; align-items:center; }
.hdr-login:hover{ border-color:brand; color:brand; background: brand/8%; }
.hdr-cta{ min-height:44px; padding:5px 5px 5px 20px; gap:10px; border-radius:999px; background:var(--grad); color:on-brand;
  font-size:.9rem; font-weight:700; display:inline-flex; align-items:center;
  box-shadow: inset 0 1px 0 rgb(255 255 255/.2), 0 8px 22px -6px brand; transition: transform .25s, box-shadow .25s; }
.hdr-cta:hover{ transform:translateY(-2px); box-shadow: inset 0 1px 0 rgb(255 255 255/.2), 0 12px 28px -6px brand; }
.hdr-cta-ic{ width:32px; height:32px; border-radius:50%; background: rgb(255 255 255/.22); display:grid; place-items:center; } /* svg 16px */
```
The logo image rotates 360deg on hover (`.9s cubic-bezier(.2,.8,.2,1)`).
**Mobile menu** (<1280px): a burger `icon-btn` opens a client-rendered panel. The backdrop fades in over .2s and the panel slides in over .25s `cubic-bezier(.2,.8,.2,1)`. Render it as a full-height side sheet on surface, with accordion groups that mirror the mega columns.

---

## 3. Buttons, eyebrows, links, chips

```css
/* Base button (inner pages, CTA panels) */
.btn{ display:inline-flex; align-items:center; justify-content:center; gap:.5rem; padding:.75rem 1.2rem; border-radius:.875rem /*14px*/;
  font-size:.9375rem /*15px*/; font-weight:700; line-height:1.2; position:relative; overflow:hidden;
  transition: transform .15s, background-color .15s, border-color .15s, box-shadow .15s; }
.btn-primary{ background:var(--grad); color:on-brand; box-shadow: 0 10px 22px -10px brand; }
.btn-primary:hover{ box-shadow: 0 14px 28px -10px brand; transform: translateY(-2px) scale(1.02); }
.btn-primary:active{ transform: translateY(1px) scale(.98); }
.btn-primary:before{ /* sheen sweep */ content:""; position:absolute; inset:0; pointer-events:none;
  background: linear-gradient(110deg, transparent 30%, rgb(255 255 255/.5) 50%, transparent 70%); translate:-130%; transition: translate .75s; }
.btn-primary:hover:before{ translate:130%; }
.btn-secondary{ border:1px solid line; background:surface; color:ink; }   .btn-secondary:hover{ border-color:brand; }
.btn svg{ transition: translate .25s cubic-bezier(.34,1.56,.64,1) }  .btn:hover svg:last-child{ translate:4px }   /* trailing arrow nudges right */
/* Optional "breathing" ring on primary: keyframe 50% { box-shadow: 0 0 0 6px brand/16% } over 3.2s */

/* Outline button (homepage "See all …") */
.btn-outline{ display:inline-flex; align-items:center; gap:.45rem; padding:.85rem 1.4rem; border-radius:.85rem;
  border:1px solid line; background:surface; color:ink; font-weight:700; transition: border-color .2s, transform .2s, box-shadow .2s; }
.btn-outline:hover{ border-color:brand; box-shadow:var(--shadow); transform:translateY(-2px); }

/* Pill buttons — HOMEPAGE HERO ONLY */
.hr-btn{ display:inline-flex; align-items:center; gap:.5rem; padding:.85rem 1.55rem; border-radius:999px; font-size:1rem; font-weight:700;
  transition: transform .2s, background-color .2s, border-color .2s, box-shadow .2s; }
.hr-btn-primary{ background:brand; color:#fff; box-shadow: 0 10px 28px -12px brand; }
.hr-btn-primary:hover{ transform:translateY(-2px); box-shadow: 0 16px 34px -12px brand; }   /* svg translates 4px */
.hr-btn-ghost{ border:1px solid line; color:ink; background: color-mix(surface 60%, transparent); }  .hr-btn-ghost:hover{ border-color:brand; transform:translateY(-2px) }
/* On the dark CTA band (inner pages): .btn with bg white, text night, hover bg white/90 */
```

**Eyebrows / badges**
```css
/* Inner-page hero eyebrow */
.eyebrow{ display:inline-flex; align-items:center; gap:.5rem; padding:.3rem .75rem; border-radius:999px; border:1px solid line; background:surface;
  font-size:.7rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; color:brand-strong; }
.eyebrow:before{ content:""; width:.4rem; height:.4rem; border-radius:999px; background:brand; animation: pulse-dot 2.4s infinite; }
/* pulse-dot: 50% { opacity:.55; box-shadow: 0 0 0 7px transparent } from 0 0 0 0 var(--ring) */

/* Homepage section pill */
.sec-pill{ display:inline-flex; align-items:center; gap:.4rem; padding:.32rem .95rem; border-radius:999px;
  border:1px solid brand/30%; background:brand-soft; color:brand-strong; font-size:.72rem; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }

/* Homepage hero pill (mixed case, with a status dot) */
.hr-pill{ display:inline-flex; align-items:center; gap:.55rem; padding:.38rem .95rem .38rem .5rem; border-radius:999px;
  border:1px solid line; background: surface/70%; color:ink-soft; font-size:.86rem; font-weight:600; }
.hr-pill-dot{ width:1.1rem; height:1.1rem; border-radius:999px; background: brand/22%; position:relative }
.hr-pill-dot:after{ content:""; position:absolute; inset:.32rem; border-radius:999px; background:brand }

/* Small chips (inside bento cards / lists) */
.chip-sm{ display:inline-flex; align-items:center; padding:.22rem .7rem; border-radius:999px; font-size:.78rem; font-weight:700;
  border:1px solid color-mix(brand 22%, line); background: color-mix(surface 70%, brand-soft); color:brand-strong; }
.chip-sm.is-on{ background:brand; border-color:brand; color:on-brand; }
/* Card kicker (related cards) */  font-size:.7rem; font-weight:700; text-transform:uppercase; letter-spacing:.12em; color:brand;
/* Content-section kicker */        text-xs font-bold uppercase tracking-[0.14em] text-brand
```

**Links**
- Text "Learn more →" links: `inline-flex items-center gap-1 font-bold text-brand` (`text-sm` inside cards) with a lucide arrow. On card hover the arrow moves `translate: 4px` (.2s).
- Breadcrumb and footer links get an animated underline: `background: linear-gradient(currentColor,currentColor) 0 100% / 0 1.5px no-repeat; transition: background-size .3s;` and on hover `background-size: 100% 1.5px`.
- Gradient text accent (`.sec-accent`, `.grad-text`): `background: linear-gradient(90deg, brand, color-mix(brand 55%, accent)); background-clip:text; color:transparent`, with `background-size:250%` and a 6–7s sheen animation. Add `padding-bottom:.16em; margin-bottom:-.16em` so descenders are not clipped.

---

## 4. Homepage — sections in order

Section-heading pattern (used by every plain/band section):
```html
<div class="mx-auto max-w-3xl text-center">           <!-- max-w 48rem -->
  <span class="sec-pill">Label</span>
  <h2 class="sec-title mt-5">Plain words <span class="sec-accent">accent words</span></h2>
  <p class="sec-lead mt-5 mx-auto max-w-2xl">Lead…</p>  <!-- max-w 42rem -->
</div>
<!-- content starts at mt-14 (3.5rem) -->
```
```css
.sec-title{ font-size: clamp(2rem, 4.2vw, 3.4rem); font-weight:800; line-height:1.08; letter-spacing:-.03em; color:ink; text-wrap:balance; }
.sec-lead { font-size:1.12rem; line-height:1.75; color:ink-mute; }
```
Headings type themselves out letter by letter with a blinking caret. This is optional, and a plain fade-up is fine.
Split sections (text plus visual) left-align the same pattern inside `max-w-xl`.

### 4.1 Hero (`section.hero-ref`)
Purpose: headline, pitch, 2 CTAs, 3 proof points, plus a large animated illustration on the right.
```html
<section class="hero-ref relative overflow-hidden border-b border-line">     <!-- bg: page. Plus Jakarta Sans -->
  <div class="pointer-events-none absolute inset-0 overflow-hidden"> <span class="bokeh" …>×8 </div>
  <div class="container-x relative z-10 grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.12fr]">
    <div>
      <span class="hr-pill"><span class="hr-pill-dot"></span>Label</span>
      <h1 class="hr-title mt-5">Line one <span class="hr-accent">Accent.</span></h1>
      <p class="hr-lead mt-6">…</p>
      <div class="mt-9 flex flex-wrap gap-3"> <a class="hr-btn hr-btn-primary">Primary →</a> <a class="hr-btn hr-btn-ghost">Secondary</a> </div>
      <ul class="mt-9 flex flex-wrap gap-x-6 gap-y-2.5"> <li class="hr-proof"><svg check/>Proof</li> ×3 </ul>
    </div>
    <div> <figure class="ob"> visual (square stage max-w 560px) + floating stat cards + ticker list + key + caption </figure> </div>
  </div>
</section>
```
```css
.hr-title{ font-size: clamp(2.6rem, 5.6vw, 4.5rem); font-weight:800; line-height:1.04; letter-spacing:-.035em; max-width:12ch; color:ink; }
.hr-accent{ gradient text: 90deg brand(bright) → brand mixed 70% with very light mint }
.hr-lead{ max-width:34rem; font-size:1.12rem; line-height:1.7; color:ink-soft; }
.hr-proof{ display:inline-flex; align-items:center; gap:.45rem; font-size:.92rem; font-weight:600; color:ink-soft; }  /* svg colour brand */
```
Visual (for an equivalent, use our own illustration): `.ob-stage { aspect-ratio:1; max-width:560px; margin:0 auto }`.
- Floating stat cards `.ob-stat`: absolutely positioned (top-left `top:4%; left:0`, bottom-right `bottom:6%; right:0`), with `border:1px line; background: surface/90%; backdrop-filter: blur(8px); border-radius:14px; padding:10px 14px; box-shadow: 0 16px 36px -18px rgb(0 0 0/.5)`. The number `b` is 20px/900 (brand or amber), and the label `small` is 11px/600 ink-mute.
- Ticker `.ob-ticker`: a grid, gap 6px, max-w 520px. Each row has `border 1px line; bg surface; radius 12px; padding 9px 12px; font-size 12.5px; gap 9px`, and the rows fade by opacity 1 / .8 / .55.
- Key row: 11.5px/600 ink-mute, centred, gap 6px 16px. Caption: 11.5px ink-mute, centred.

Alternative hero visual (`.hr-window`: dashboard window): `border 1px line; bg surface; radius 1.25rem; shadow 0 30px 70px -30px rgb(0 0 0/.45)`.
- Bar: `padding .9rem 1.1rem; border-bottom 1px line`, 3 dots of .6rem, and a live badge (`.hr-live`: pill, padding .22rem .65rem, .75rem/700, brand on brand/14%).
- Body padding is 1rem. Tiles (`.hr-tile`) use bg-alt, radius .85rem, padding .85rem .9rem. Label .74rem ink-mute; value `clamp(1.15rem,2.4vw,1.55rem)`/800, tracking -.02em; delta .7rem/600 brand. Meter is .3rem tall.

### 4.2 Stats strip (`section.stats-wash`)
```html
<section class="stats-wash">        <!-- bg: radial-gradient(60% 120% at 50% 0%, brand/12%, transparent 75%) -->
  <ul class="container-x grid grid-cols-2 gap-3 py-12 sm:gap-5 lg:grid-cols-4">
    <li class="stat-cell"><span class="stat-ic"><svg/></span><p class="stat-num">6</p>
      <p class="mt-2 font-bold text-ink">Label</p><p class="mt-1 text-sm text-ink-mute">Sub</p></li> ×4
  </ul>
</section>
```
```css
.stat-cell{ position:relative; overflow:hidden; text-align:center; border-radius:1.25rem; padding:1.5rem 1rem 1.6rem;
  border:1px solid color-mix(line 70%, transparent);
  background: linear-gradient(180deg, surface/80%, surface/35%); backdrop-filter: blur(6px);
  transition: transform .35s cubic-bezier(.2,.8,.2,1), border-color .35s, box-shadow .35s; }
.stat-cell:before{ /* top hairline */ content:""; position:absolute; top:0; left:50%; translate:-50%; width:36%; height:2px;
  background: linear-gradient(90deg, transparent, brand, transparent); transition: width .45s; }   /* hover → 90% */
.stat-cell:after{ /* glow blob */ content:""; position:absolute; top:-40%; left:50%; translate:-50%; width:70%; aspect-ratio:1; border-radius:50%;
  background: radial-gradient(closest-side, brand/16%, transparent); opacity:.5; }        /* hover → 1 */
.stat-cell:hover{ transform:translateY(-6px); border-color: color-mix(brand 45%, line); box-shadow: 0 20px 44px -22px brand/55%; }
.stat-ic{ display:inline-grid; place-items:center; width:2.5rem; height:2.5rem; border-radius:.8rem; margin-bottom:.85rem;
  border:1px solid brand/30%; background: brand/12%; color:brand; }  /* svg 1.15rem. On hover: bg brand, colour on-brand, rotate(-8deg) scale(1.1) */
.stat-num{ font-size: clamp(2.6rem, 5vw, 3.6rem); font-weight:800; line-height:1; letter-spacing:-.03em;
  background: linear-gradient(180deg, brand, brand-strong); background-clip:text; color:transparent; }  /* counts up when it enters view */
```

### 4.3 "Inside" — tabbed product tour (plain section)
Layout: section heading, then `div.in-tabs.mt-14.grid.items-start.gap-8.lg:gap-12`. Columns are `minmax(0,1fr)` below lg and `minmax(0,.85fr) minmax(0,1.15fr)` at ≥1024px.
```html
<div class="in-tabs …">
  <div role="tablist" class="grid gap-2">
    <button role="tab" class="in-tab" aria-selected="true">
      <span class="in-tab-ic"><svg/></span>
      <span class="min-w-0"><span class="block font-bold text-ink">Title</span><span class="in-tab-text">Description</span></span>
      <span class="in-tab-progress"><i style="--dur:6000ms"></i></span>
    </button> ×4
  </div>
  <div role="tabpanel">
    <div class="mk-stage"> <span class="mk-orb"/> <span class="mk-orb b"/> <div class="mk-swap"><div class="mk-card">mock UI</div></div> </div>
    <div class="mt-5 flex flex-wrap items-center justify-between gap-3"><p class="text-xl font-bold text-ink">Caption</p><a class="… font-bold text-brand">Link →</a></div>
  </div>
</div>
```
```css
.in-tab{ display:flex; gap:1rem; width:100%; text-align:left; padding:1rem 1.1rem; border-radius:1rem; border:1px solid transparent;
  position:relative; overflow:hidden; transition: background-color .2s, border-color .2s, box-shadow .2s; }
.in-tab:hover{ background: brand-soft/50%; }
.in-tab[aria-selected=true]{ border-color: color-mix(brand 40%, line); background:surface; box-shadow:var(--shadow); }
.in-tab-ic{ width:2.5rem; height:2.5rem; border-radius:.75rem; background:brand-soft; color:brand; display:grid; place-items:center; flex-shrink:0; } /* selected: bg brand, colour on-brand */
.in-tab-text{ display:none; margin-top:.3rem; font-size:.92rem; line-height:1.6; color:ink-soft; }  /* shown only when selected */
.in-tab-progress{ position:absolute; left:1.1rem; right:1.1rem; bottom:.45rem; height:3px; border-radius:999px; background:brand-soft; overflow:hidden; }
.in-tab-progress i{ display:block; height:100%; background:brand; transform-origin:0; animation: tab-progress var(--dur) linear forwards; } /* scaleX 0→1, then auto-advance */

.mk-stage{ position:relative; overflow:hidden; display:grid; place-items:center; min-height:27rem; padding:2.5rem 1.25rem; border-radius:1.75rem;
  border:1px solid color-mix(brand 18%, line);
  background: radial-gradient(70% 60% at 50% 0%, brand/22%, transparent 75%), linear-gradient(180deg, mix(brand 10%, page), page); }
.mk-stage:before{ grid 44px × 44px lines in --grid, mask: radial-gradient(70% 70% at 50% 40%, #000, transparent) }
.mk-orb{ position:absolute; top:14%; left:12%; width:7rem; height:7rem; border-radius:999px; opacity:.45; filter:blur(2px);
  background: radial-gradient(circle at 35% 30%, mix(brand 55%, #fff), brand/25% 70%); }   /* .b variant: amber, 4.5rem, bottom 12% right 10% */
.mk-card{ width:min(100%, 27rem); display:grid; gap:.7rem; padding:1.1rem; border-radius:1.25rem; border:1px solid line; background:surface;
  font-size:.9rem; color:ink; box-shadow: 0 30px 60px -28px color-mix(brand 45%, rgb(0 0 0/.35)); }
```
Mock-UI atoms, reusable inside any `mk-card`:
- `.mk-head`: flex, gap .55rem, .92rem/700.
- `.mk-drop`: 1.5px dashed brand/45% border, bg brand-soft, radius .9rem, padding .85rem, gap .8rem. Its icon box is 2.6rem, radius .75rem, bg brand.
- `.mk-row`: border 1px line, radius .8rem, padding .65rem .8rem, gap .7rem.
- `.mk-bar`: height .45rem, pill, ink-mute/18%, fills with brand.
- `.mk-badge`: pill, padding .15rem .55rem, .7rem/700. Variants: ok = brand-strong on brand-soft; bad = red; run = blue.
- `.mk-dot`: .6rem dot.
- `.mk-kv`: 2-col dl, gap .4rem 1rem, padding .8rem, .82rem.
- `.mk-tile`: radius .75rem, padding .65rem, bg brand-soft 60% on page. Label .7rem; value 1rem/800.
- `.mk-bars`: bar chart, height 4.5rem (tall: 8rem), gap .4rem, bars radius .3rem .3rem .15rem .15rem, gradient brand → brand/45%.
- `.mk-trace`: a code block on night, mono .72rem/1.6, radius .8rem.

### 4.4 Features bento (plain section)
```html
<ul class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
  <li class="lg:col-span-2"><a class="bento is-wide"> <span class="ic-tile"><svg/></span>
      <h3 class="mt-6 text-xl font-bold text-ink">Title</h3>
      <p class="mt-3 max-w-xl leading-relaxed text-ink-soft">…</p>
      <span class="mt-5 flex flex-wrap gap-2"><span class="chip-sm">tag</span>…</span>
      <span class="mt-auto inline-flex items-center gap-1 pt-6 font-bold text-brand">Learn More →</span></a></li>
  <li><a class="bento">… (no chips)</a></li>
  …  pattern: [wide][1] / [1][wide] / [wide][1]  → 6 cards in 3 rows of 2+1
</ul>
<div class="mt-10 text-center"><a class="btn-outline">See All →</a></div>
```
```css
.bento{ display:flex; flex-direction:column; height:100%; padding:1.9rem; border-radius:1.5rem; border:1px solid line; background:surface;
  transition: transform .25s, box-shadow .25s, border-color .25s; position:relative; isolation:isolate; }
.bento.is-wide{ border-color: color-mix(brand 28%, line); background: linear-gradient(135deg, mix(brand 13%, surface), mix(brand 5%, surface)); }
.bento:hover{ border-color:brand; box-shadow:var(--shadow); transform:translateY(-4px); }   /* arrow translate 4px; chips pop in with a stagger */
.ic-tile{ width:2.9rem; height:2.9rem; border-radius:.85rem; display:grid; place-items:center;
  background: linear-gradient(135deg, brand, brand-strong); color:on-brand; box-shadow: 0 10px 22px -10px brand; }
```
Cursor spotlight, shared by bento, step-card, team-card, ben-card and mini-card. A `:before` layer holds `radial-gradient(420px circle at var(--mx) var(--my), brand/16%, transparent 60%)`, and its opacity goes from 0 to 1 while the cursor is over the card. Optional 3D tilt: `perspective(1000px) rotateX/Y(±~6deg) translateY(-4px)`.

### 4.5 How it works (BAND section)
```html
<section class="band sec-band"><div class="container-x relative">
  heading block
  <ol class="mt-14 grid gap-5 md:grid-cols-3">
    <li class="step-card"><span class="ic-tile"><svg/></span><h3 class="mt-6 text-xl font-bold text-ink">…</h3>
      <p class="mt-3 leading-relaxed text-ink-soft">…</p><a class="mt-6 inline-flex items-center gap-1 font-bold text-brand">Link →</a></li> ×3
  </ol>
  <div class="mt-12 text-center"><a class="btn btn-primary">CTA →</a></div>
</div></section>
```
```css
.step-card{ display:flex; flex-direction:column; padding:1.9rem; border-radius:1.5rem; background:surface; /* NO border */
  box-shadow: 0 24px 50px -30px color-mix(brand 55%, rgb(0 0 0/.3)); transition: transform .25s; }
.step-card:hover{ transform:translateY(-4px); }
.step-num{ font-size:2.4rem; font-weight:800; line-height:1; color: brand/28%; }  /* optional big "01". Hover: colour brand, scale 1.12, rotate -4deg */
```

### 4.6 Split: checklist and data table (plain)
`<section class="container-x sec grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">`
- Left column: `div.max-w-xl` holding the left-aligned heading block, then `ul.mt-8.grid.gap-4` of `li.flex.items-start.gap-3.text-ink-soft` items, each starting with `span.tick-dot`, then a `mt-8` brand text link.
  `.tick-dot{ width:1.4rem; height:1.4rem; border-radius:999px; background:brand; color:on-brand; display:grid; place-items:center; flex-shrink:0; margin-top:.1rem }`
- Right column: `div.tbl-card` (role=table), a styled "app window" table.
```css
.tbl-card{ border:1px solid line; background:surface; box-shadow:var(--shadow); border-radius:1.5rem; overflow:hidden; font-size:1rem; position:relative; }
.tbl-bar{ display:flex; align-items:center; gap:1rem; padding:.9rem 1.6rem; border-bottom:1px solid line; background:bg-alt; color:ink-soft; font-size:.82rem; }
.tbl-lights i{ width:.65rem; height:.65rem; border-radius:999px; background:line; }  /* 3 dots, gap .4rem */
.tbl-title{ flex:1; font-weight:700; color:ink; }
.tbl-live{ pill, border 1px line, colour brand, padding .2rem .7rem, 700, gap .45rem }
.tbl-row{ display:grid; grid-template-columns: 1.8fr repeat(4, 1fr); align-items:center; gap:.75rem; padding:1.35rem 1.6rem; border-top:1px solid line; }
.tbl-row:not(.tbl-head):hover{ background: brand/5%; }
.tbl-row.is-bad{ box-shadow: inset 3px 0 #e5484d; }
.tbl-head{ border-top:0; font-size:.74rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:ink-mute; }
.tbl-yes{ width:1.75rem; height:1.75rem; border-radius:999px; background:brand-soft; color:brand; display:inline-grid; place-items:center; }  /* "not applicable" = an ink-mute dash */
.tbl-foot{ display:flex; justify-content:space-between; padding:1rem 1.6rem; border-top:1px solid line; background:bg-alt; color:ink-mute; font-size:.82rem; font-weight:600; }
/* Optional scan line: a :after band 30% tall, brand/10% gradient, translating down every 5s */
@media (max-width:560px){ .tbl-row{ grid-template-columns:1.4fr repeat(4,1fr); gap:.4rem; padding:1rem .8rem; font-size:.8rem }
  .tbl-head{ font-size:.6rem; letter-spacing:.02em } .tbl-bar,.tbl-foot{ padding-inline:.8rem } .tbl-yes{ width:1.4rem; height:1.4rem } }
```
Row header cell: `flex items-center gap-3`, holding a status dot and a `min-w-0` block with `font-semibold text-ink` (truncate) and a `text-xs text-ink-mute` sub-line.

### 4.7 Who it's for: team cards and use-case panel (plain)
```html
<ul class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
  <li><a class="team-card group"><span class="ic-soft"><svg/></span>
     <h3 class="mt-5 min-h-[2.75rem] font-bold leading-snug text-ink">…</h3>
     <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">…</p>
     <span class="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-brand">Read →</span></a></li> ×5
</ul>
<div class="uc-panel mt-6">
  <div class="flex flex-wrap items-end justify-between gap-3">
    <div><p class="text-xs font-bold uppercase tracking-[0.14em] text-brand">Kicker</p><h3 class="mt-2 text-xl font-bold text-ink">Title</h3></div>
    <a class="inline-flex items-center gap-1 text-sm font-bold text-brand">All →</a></div>
  <ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <li><a class="uc-item group"><span class="uc-num">01</span>
      <span class="mt-4 block font-bold leading-snug text-ink group-hover:text-brand">…</span>
      <span class="mt-2 line-clamp-3 block text-sm leading-relaxed text-ink-soft">…</span>
      <span class="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-brand">Read →</span></a></li> ×4
  </ul>
</div>
```
```css
.team-card{ display:flex; flex-direction:column; height:100%; padding:1.6rem; border-radius:1.25rem; border:1px solid line;
  background: linear-gradient(180deg, mix(brand 4%, surface), surface 45%); transition: transform .25s, border-color .25s, box-shadow .25s; }
.team-card:hover{ border-color:brand; box-shadow:var(--shadow); transform:translateY(-4px); }
.ic-soft{ width:2.5rem; height:2.5rem; border-radius:.75rem; background:brand-soft; color:brand; display:grid; place-items:center; flex-shrink:0; }
.uc-panel{ border:1px solid line; background:bg-alt; border-radius:1.5rem; padding:1.8rem; }
.uc-item{ display:flex; flex-direction:column; height:100%; padding:1.35rem; border-radius:1.1rem; border:1px solid line; background:surface;
  transition: transform .25s, background .2s, border-color .2s, box-shadow .25s; }
.uc-item:hover{ border-color:brand; box-shadow:var(--shadow); transform:translateY(-3px); }
.uc-num{ width:2.25rem; height:2.25rem; border-radius:.7rem; background:brand-soft; color:brand; font-size:.8rem; font-weight:800; display:inline-grid; place-items:center; }
```

### 4.8 Reports showcase (BAND section)
```html
<div class="mt-14 grid gap-6 lg:grid-cols-2">
  <article class="show-card"><div class="show-stage"><span class="mk-orb"/><div class="mk-card">mock</div></div>
    <div class="p-8"><h3 class="text-2xl font-bold text-ink">…</h3><p class="mt-3 leading-relaxed text-ink-soft">…</p>
      <a class="mt-6 inline-flex items-center gap-1 font-bold text-brand">Link →</a></div></article> ×2
</div>
<ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <li class="mini-card"><span class="ic-soft"><svg/></span><span><b class="block text-sm text-ink">…</b><span class="text-sm text-ink-soft">…</span></span></li> ×4
</ul>
```
```css
.show-card{ border:1px solid line; background:surface; border-radius:1.5rem; overflow:hidden; box-shadow: 0 24px 50px -34px rgb(0 0 0/.35); }
.show-stage{ /* = .mk-stage */ border:0; border-bottom:1px solid line; border-radius:0; min-height:22rem; }
.mini-card{ display:flex; gap:.85rem; padding:1.1rem; border-radius:1.1rem; border:1px solid line; background:surface; }
```

### 4.9 Split: roles/team with a mock card (plain)
`<section class="container-x sec grid items-center gap-12 lg:grid-cols-2">`
- Left: heading block (`max-w-xl`), then a `mt-6 flex flex-wrap gap-2` row of `chip-sm`, then `ul.mt-8.grid.gap-6` of `li.flex.gap-4` items, each `span.ic-tile.shrink-0` plus `b.block.text-ink` and `span.mt-1.block.text-sm.leading-relaxed.text-ink-soft`. Ends with `a.btn-outline.mt-9`.
- Right: `div.flex.justify-center.lg:justify-end` holding `.mk-card.role-card` (`width:min(100%,28rem); padding:1.4rem`).
  - It contains `.role-row`s: `border 1px line; radius .85rem; padding .7rem .8rem; gap .8rem; flex`. Each has an avatar `.role-av` (2rem circle, grad bg, .8rem/800 initials), a name, and a `mk-badge`. The rows highlight one after another, every 2s.
  - Below them is a 2-col grid of `.co-box` (1.5px dashed brand/40% border, bg brand-soft, radius .75rem, padding .55rem .75rem, .8rem/600).

### 4.10 Benefits (plain)
```html
<ul class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
  <li><a class="ben-card group"><span class="ic-tile shrink-0"><svg/></span>
    <span><b class="block text-ink">Title</b><span class="mt-1.5 block text-sm leading-relaxed text-ink-soft">…</span>
      <span class="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">Learn →</span></span></a></li> ×6
</ul>
<div class="mt-10 text-center"><a class="btn-outline">See all →</a></div>
```
`.ben-card{ display:flex; gap:1.1rem; height:100%; padding:1.7rem; border-radius:1.4rem; border:1px solid line; background:surface; }` On hover the border turns brand, it gets `var(--shadow)`, and it moves `translateY(-4px)`. The icon sits to the LEFT of the text.

### 4.11 FAQ (plain)
Heading block, then `div.faq-center.mx-auto.mt-10.max-w-3xl` containing the accordion from §5.8. Inside `.faq-center` the accordion's own h2 is visually hidden and its top border/padding are removed. Below it: `div.text-center > a.btn-outline` "All FAQs".

### 4.12 Closing CTA panel (plain, `container-x sec pb-20`)
```html
<div class="cta-panel">
  <span class="cta-shape a"></span><span class="cta-shape b"></span>
  <h2 class="sec-title relative mx-auto max-w-3xl text-center">Headline <span class="sec-accent">accent</span></h2>
  <p class="sec-lead relative mx-auto mt-5 max-w-xl text-center">…</p>
  <div class="relative mt-9 flex flex-wrap justify-center gap-3"><a class="btn btn-primary">Primary →</a><a class="btn-outline">Secondary</a></div>
  <ul class="relative mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-soft"><li class="flex items-center gap-1.5"><svg check/>Point</li> ×2-3</ul>
</div>
```
```css
.cta-panel{ position:relative; overflow:hidden; isolation:isolate; border-radius:2rem; padding: clamp(3rem, 7vw, 5.5rem) 1.5rem;
  border:1px solid color-mix(brand 25%, line);
  background: radial-gradient(60% 80% at 85% 100%, brand/24%, transparent 70%), radial-gradient(50% 70% at 10% 0%, accent/14%, transparent 70%),
              linear-gradient(135deg, mix(brand 8%, page), mix(brand 16%, page)); }
.cta-panel:before{ grid lines 48px × 48px in --grid, full (no mask), z-index:-1 }
.cta-shape{ position:absolute; z-index:-1; border:1px solid brand/25%; background: mix(brand 14%, surface); box-shadow: 0 18px 40px -20px brand; }
.cta-shape.a{ width:3.6rem; height:3.6rem; border-radius:1rem; top:16%; left:8%; }
.cta-shape.b{ width:5rem; height:5rem; border-radius:999px; bottom:14%; right:7%; }   /* float ±14px, rotate 6deg, 7s. Hidden ≤640px */
```

### 4.13 Footer (all pages)
- Shell: `.site-footer{ background:night; color: light-grey #9ba3b4; border-top:1px solid white/8%; margin-top:6rem }`.
- Optional centred "tab" hanging from the top edge: an italic Manrope 700 .95rem label on a brand gradient, radius `0 0 22px 22px`, padding 11px 36px.
- Main grid `.foot-main`: padding `56px max(gutter, 3.5vw) 52px`, gap 40px. At ≥1280px the columns are `clamp(300px,22vw,380px) minmax(0,1fr) clamp(220px,15vw,260px)` with gap 0, and white/10% vertical dividers. The brand column has padding-right 40px, the middle has padding-inline 40px, and the CTA column has padding-left 32px.
- **Brand column:**
  - Logo (white wordmark).
  - `.foot-about`: .95rem/1.75, colour #c3c9d6, max 46ch, margin-top 18px.
  - `.foot-label`: .72rem/700, uppercase, tracking .12em, white, margin 24px 0 10px.
  - Social row: 40px circles, white/4% bg, white/18% border. On hover they fill brand and lift 2px.
  - Feature cards `.fcard`: radius 14px, white/3% bg, white/10% border, padding 11px 13px, gap 12px. Icon well 36px radius 10px (mint on mint/14%). Small tag pill (.68rem/700). Hover: border mint, `translateX(4px)`.
  - Contact block (border-top white/10%, 17px mint icons, .9rem text #d7dbe5).
- **Link columns** `.foot-flow`: CSS columns 2 → 3 (≥768) → 4 (≥1280), column-gap 28px, each `.foot-col` avoids breaking inside and has margin-bottom 36px.
  - `.foot-col h2`: Inter 700 .76rem/1.35, uppercase, tracking .12em, white, border-bottom white/10%, padding-bottom 14px, margin-bottom 16px, plus a 30×2px mint underline at bottom-left.
  - Links: .86rem/1.4, #9ba3b4, padding 5px 0. Hover: white, padding-left 4px.
  - "More" pill: mint text, mint/45% border, .78rem/700, padding 5px 13px.
- **CTA column:**
  - `.foot-points` li cards: radius 12px, white/3% bg, padding 11px 13px, .84rem/600.
  - Big pill button `.foot-enroll2`: uppercase, tracking .1em, brand gradient, padding 18px 22px, .86rem/800, shadow `0 10px 26px brand-800/55%`.
  - Outline pill `.foot-pill2`: white/18% border, padding 12px 16px.
- **Bottom bar** `.foot-bottom`: background pure black, border-top white/8%. Inner padding `18px max(gutter,3.5vw)`, flex space-between, .84rem. Links are separated by 4px dots (dots hidden <640). The legal row is centred, .8rem, #7d8595.
- Colour roles: `night` bg, `ink-300`-ish text, white headings, `mint` accents, `brand-600→brand-800` gradient buttons.

---

## 5. Inner page template (features, guides, use-cases, integrations, about, deals, trust, faq)

All page types share ONE template. Overall skeleton:
```html
<main>
 <header class="hero-bg relative overflow-hidden border-b border-line">
   <div class="particles pointer-events-none absolute inset-0 overflow-hidden"> .mote ×16 </div>
   <div class="container-x relative z-10 py-10 sm:py-14">
     <nav aria-label="Breadcrumb" class="text-sm text-ink-mute"><ol class="flex flex-wrap items-center gap-1.5">
        <li class="flex items-center gap-1.5"><a class="hover:text-brand">Home</a><svg chevron-right 14px/></li>
        <li …><a>Section</a><svg/></li>
        <li><span class="max-w-[16rem] truncate font-semibold text-ink-soft">Current</span></li></ol></nav>
     <div class="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] xl:gap-16">
       <div class="min-w-0">
         <span class="eyebrow">Feature</span>                     <!-- page-type label -->
         <h1 class="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">Title</h1>
         <p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">Intro</p>
         <p class="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-mute">3 min read</p>
         <div class="mt-7 flex flex-wrap gap-3"><a class="btn btn-primary">Primary →</a><a class="btn btn-secondary">Secondary</a></div>
       </div>
       <div> <figure class="pm pm-tilt-r"> product mock window (see 5.2) </figure> </div>
     </div>
   </div>
 </header>

 <div class="container-x mt-12">
   <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">    <!-- OR: <div class="mx-auto max-w-3xl"> with no TOC (about, faq) -->
     <article class="min-w-0"> section.content ×N … section#faqs </article>
     <aside class="hidden lg:block"><div class="sticky top-24 space-y-8"> nav "On this page" </div></aside>
   </div>
   <section class="mt-16"> related cards </section>
 </div>

 <section class="container-x mt-20"> dark CTA band </section>
</main>
```

### 5.1 Hero type sizes
- h1: `text-3xl` (1.875rem / lh 2.25rem) → `sm:text-5xl` (3rem / lh 1), weight 800, tracking -.025em, `text-wrap:balance`, colour ink. At ≤360px it is forced to 1.9rem (≤300px: 1.7rem).
- Intro: `text-lg` (1.125rem / 1.75rem), relaxed leading (1.625), ink-soft, max-w 42rem.
- Read-time meta: .75rem, 600, uppercase, tracking .05em, ink-mute.
- Breadcrumb: .875rem ink-mute, gap .375rem, chevron separators. The current crumb is semibold ink-soft and truncated at 16rem.
- Buttons: `.btn` (14px radius, NOT pill). Deals pages have a single primary button that anchors to `#form`.

### 5.2 Hero side visual (`figure.pm`): a browser-window product mock
```css
.pm{ position:relative; margin:0; padding:28px 18px 30px; font-size:13px; color:ink; }
.pm-glow{ position:absolute; inset:10% 6% 6%; z-index:0; border-radius:40px; filter:blur(28px);
  background: radial-gradient(60% 60% at 70% 30%, brand-soft, transparent 70%), radial-gradient(50% 50% at 20% 80%, mint/22%, transparent 70%); }
.pm-window{ position:relative; z-index:1; overflow:hidden; border-radius:20px; border:1px solid color-mix(brand 22%, line);
  background: surface/92%; backdrop-filter: blur(10px);
  box-shadow: inset 0 1px 0 rgb(255 255 255/.6), 0 30px 70px -28px color-mix(brand 55%, night/50%), 0 8px 24px -12px night/25%;
  transition: transform .6s cubic-bezier(.2,.8,.2,1); }
.pm-tilt-r .pm-window{ transform: perspective(1400px) rotateY(-6deg) rotateX(2deg); }   /* pm-tilt-l: rotateY(6deg). On hover: flat */
.pm-bar{ display:flex; align-items:center; gap:10px; padding:10px 14px; border-bottom:1px solid line; background: bg-alt/80%; }
.pm-dots i{ 9px circles, gap 5px: red #ff5f57 / yellow #febc2e / green #28c840 (macOS traffic lights) }
.pm-url{ flex:1; padding:4px 10px; border-radius:8px; background:page; color:ink-mute; font-size:11px; }
.pm-chip{ pill, padding 3px 9px, 10.5px/700, colour brand on brand/12% }
.pm-head{ display:flex; gap:10px; align-items:center; padding:14px 16px 4px; }  b{14px/800}  small{11px ink-mute}
.pm-ico{ 32×32, radius 10px, gradient brand→mint, white icon, shadow 0 6px 14px -6px brand }
.pm-body{ padding:12px 16px 18px; }
.pm-kpis{ grid 3 cols, gap 8px, mb 12px }  .pm-kpi{ border 1px line; bg page; radius 12px; padding 10px }  small 10.5px ink-mute; b 18px/800 brand
.pm-rows{ grid gap 6px }  .pm-row{ flex; gap 9px; padding 8px 10px; border 1px line; bg page; radius 10px }  mono value 600 11px ink-mute
.pm-float{ position:absolute; z-index:2; display:flex; align-items:center; gap:9px; max-width:230px; padding:9px 12px 9px 9px; border-radius:14px;
  border:1px solid line; background: surface/94%; backdrop-filter: blur(8px); box-shadow: 0 18px 40px -18px night/45%; animation: float 6s infinite; }
.pm-tr{ top:-26px; right:-18px }  .pm-bl{ bottom:6px; left:-10px; animation-delay:-3s }   /* b 12px; small 10.5px; icon 28px radius 9px */
.pm figcaption{ margin-top:14px; text-align:center; font-size:11px; color:ink-mute; }
@media (max-width:639px){ .pm{ padding:8px 0 4px } .pm-float{ display:none } .pm-window{ transform:none } }
```
Body content varies by page type: KPI row and run list (feature), checklist/steps (guide), timeline with an `li.now` marker (about), and so on. Keep the window chrome identical.

### 5.3 Body sections (`article`)
```html
<section id="slug" class="scroll-mt-24 border-t border-line py-9 first:border-t-0 first:pt-0">
  <h2 class="text-2xl font-extrabold tracking-tight text-ink">Heading</h2>     <!-- 1.5rem / 2rem lh, 800, -.025em -->
  <div class="prose-j"><p>…</p><ul><li>…</li></ul></div>
  [optional block: steps | card grid | table | callout | form]
</section>
```
Sections are separated by 1px top borders with 36px (py-9 = 2.25rem) vertical padding. They are not boxed.
```css
.prose-j p{ margin-top:.9rem; line-height:1.75; color:ink-soft; }          /* 16px */
.prose-j ul{ display:grid; gap:.6rem; margin-top:1rem; }
.prose-j ul li{ position:relative; padding-left:1.5rem; line-height:1.65; color:ink-soft; }
.prose-j ul li:before{ content:""; position:absolute; left:.15rem; top:.7em; width:.45rem; height:.45rem; border-radius:999px; background:brand; }
```
"Checklist" sections (e.g. "Monitoring checklist", "Checks after your first sign-in") use this same dotted `prose-j ul`.

### 5.4 Step list (numbered cards): guides, use-cases, about timeline, deals, faq
```html
<ol class="mt-6 space-y-4">
  <li class="card flex gap-4 p-5">
    <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-sm font-extrabold text-[color:var(--on-brand)]">1</span>
    <div><h3 class="font-bold text-ink">Step title</h3><p class="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">…</p></div>
  </li>
</ol>
```
Number badge: 36×36, radius .75rem, solid brand, white 800 .875rem. Card padding 1.25rem, gap 1rem, 1rem between items.

### 5.5 Card grid ("questions people ask", scenarios, "what it brings in")
```html
<ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <li class="card p-5"><h3 class="font-bold leading-snug text-ink">Question / title</h3><p class="mt-2 text-sm leading-relaxed text-ink-soft">…</p></li>
</ul>
```
(On pages without a TOC, e.g. about, the grid sits in the 48rem column, so it is effectively 2–3 narrow columns.)

### 5.6 Table (comparison / "questions to ask" / roles)
```html
<div class="relative mt-6 overflow-x-auto rounded-2xl border border-line">          <!-- radius 1rem -->
  <table class="w-full min-w-[34rem] border-collapse text-left text-sm">
    <thead class="bg-bg-alt"><tr><th class="px-4 py-3 font-bold text-ink">Col</th>…</tr></thead>
    <tbody class="divide-y divide-line">
      <tr><th class="px-4 py-3 align-top font-semibold text-ink">Row label</th><td class="px-4 py-3 align-top leading-relaxed text-ink-soft">…</td></tr>
    </tbody>
  </table>
</div>
```
Cells are 1rem × .75rem padding at .875rem. The table scrolls horizontally below 34rem. There is no zebra striping.

### 5.7 Callouts
```html
<aside class="mt-6 flex gap-3 rounded-2xl border p-5 {tone}">
  <svg 20px class="mt-0.5 shrink-0 text-ink"/>     <!-- lucide icon: lightbulb / info / alert -->
  <div><p class="font-bold text-ink">Title</p><p class="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">Body</p></div>
</aside>
```
Tones:
- **info/tip** `border-brand/30 bg-brand-soft`
- **note/caution** `border-accent/40 bg-accent-soft` (→ amber)
- **warning/danger** `border-red-500/30 bg-red-500/10`

Radius 1rem, padding 1.25rem, gap .75rem.

### 5.8 FAQ accordion (`section#faqs`, last block in the article)
```html
<section id="faqs" class="faq-block mx-auto w-full max-w-3xl scroll-mt-24 border-t border-line py-9">
  <h2 class="text-center text-2xl font-extrabold tracking-tight text-ink">Questions</h2>
  <div class="mt-6 divide-y divide-line rounded-2xl border border-line bg-surface text-left">
    <div class="px-5">
      <h3 class="m-0"><button aria-expanded class="flex w-full cursor-pointer items-start justify-between gap-4 py-4 text-left font-bold text-ink">
        Question <span aria-hidden class="mt-0.5 text-xl leading-none text-brand transition-transform [open: rotate-45]">+</span></button></h3>
      <div role="region"><p class="pb-4 leading-relaxed text-ink-soft">Answer</p></div>
    </div> ×4-6
  </div>
</section>
```
It is one bordered surface box (radius 1rem) with hairline dividers between items. Each row is padded 1.25rem horizontally and 1rem vertically. The "+" glyph is brand and 1.25rem, and it rotates 45deg into "×" when open (`.3s cubic-bezier(.34,1.56,.64,1)`). The answer height animates (`.35s`).

### 5.9 Enquiry form (deals, contact-type pages): `section#form`
```html
<section id="form" class="scroll-mt-24 py-9 border-t border-line">
  <h2 class="text-2xl font-extrabold tracking-tight text-ink">Ask about this offer</h2>
  <p class="mt-3 leading-relaxed text-ink-soft">…</p>
  <div class="mt-6"><form class="card space-y-5 p-5 sm:p-8">
    <div class="grid gap-5 sm:grid-cols-2"> field(Name) field(Email) </div>
    field(Phone: [country button | input] in "relative flex gap-2")
    field(Company <span class="font-normal text-ink-mute">(optional)</span>) …
    field(Message: textarea)
    honeypot (absolute -left-[9999px])
    <div id="form-status"></div>
    <button class="btn btn-primary disabled:opacity-60">Send <svg/></button>
  </form></div>
</section>
```
- Label: `mb-1.5 block text-sm font-bold text-ink`.
- Control: `w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink outline-none transition placeholder:text-ink-mute focus:border-brand focus:ring-4 focus:ring-[var(--ring)]`. That is a 12px radius, 16px × 12px padding, and a 4px soft brand focus ring.
- The form itself is a `.card` (radius 1.1rem), padded 1.25rem → 2rem at ≥640px, with 1.25rem between fields.

### 5.10 "On this page" TOC (right rail, ≥1024px only)
```html
<aside class="hidden lg:block"><div class="sticky top-24 space-y-8">
  <nav aria-label="On this page">
    <h2 class="text-xs font-bold uppercase tracking-[0.12em] text-ink">On this page</h2>
    <ul class="mt-3 space-y-2 border-l border-line">
      <li><a class="-ml-px block border-l border-transparent pl-4 text-sm text-ink-soft hover:border-brand hover:text-brand" href="#id">…</a></li>
    </ul></nav></div></aside>
```
The rail is 17rem wide and sticky at top 6rem. The active link (`aria-current`, set by scroll-spy) gets `border-color:brand; color:brand; font-weight:700; padding-left:1.25rem`, with transitions on colour, border and padding. The FAQ and form anchors are not listed.

### 5.11 Related pages
```html
<section class="mt-16">
  <h2 class="mb-5 text-2xl font-extrabold tracking-tight">Related</h2>
  <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <li><a class="card group flex h-full flex-col p-5">
      <span class="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand">Section</span>
      <h3 class="mt-2 text-lg font-extrabold leading-snug text-ink">Title</h3>
      <p class="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">Summary</p>
      <span class="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">Read →</span></a></li> ×3-5
  </ul>
</section>
```
This sits OUTSIDE the article/TOC grid, so it spans the full container width.

### 5.12 Final CTA band (inner pages; NOT the homepage cta-panel)
```html
<section class="container-x mt-20">
  <div class="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-12">   <!-- radius 1.5rem, bg night -->
    <div class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/30 blur-3xl glow-pulse"></div>
    <div class="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl glow-pulse"></div>
    <h2 class="relative text-2xl font-extrabold text-white sm:text-3xl">Headline</h2>
    <p class="relative mx-auto mt-3 max-w-xl text-white/75">Sub</p>
    <div class="relative mt-7"><a class="btn bg-white text-navy hover:bg-white/90">CTA →</a></div>
  </div>
</section>
```
The glow blobs are 14rem circles with 64px blur, pulsing (`scale .9 ↔ 1.25`, opacity .8 ↔ 1, 6s). The footer follows with its own 6rem top margin.

### 5.13 Differences by page type
| Type | Eyebrow | Body column | TOC | Typical blocks | Hero buttons |
|---|---|---|---|---|---|
| Feature | "Feature" | 2-col grid | yes | prose, bullets | Sign in + Explore product |
| Guide | "Guide" | 2-col | yes | **step list**, tip callout, checklist | Sign in + secondary |
| Use case | "Use case" | 2-col | yes | bullets, step list ("how it runs"), checklist | Sign in + Contact |
| Integration | "Integration" | 2-col | yes | callout, 3-up card grid | Sign in + Contact |
| About / story | "About" | **single centred column `mx-auto max-w-3xl`** | **no** | 5-card "questions people kept asking" grid, timeline step list, callout | Sign in + Contact |
| Deal | "Deal" | 2-col | yes | card grid, 2 step lists, table, callout, **enquiry form** | single primary → `#form` |
| Trust | "Trust" | 2-col | yes | **table**, amber callout | Sign in + Support |
| FAQ | "FAQ" | **single centred column** | **no** | table, step list, red callout | Sign in + Contact |

All types share the same hero, breadcrumb, read-time, FAQ accordion, related cards and dark CTA band.

---

## 6. Card catalogue

All cards use `background: surface` and a `1px line` border unless noted. Every one has `position:relative`.

| Class | Radius | Padding | Border / bg | Rest shadow | Hover |
|---|---|---|---|---|---|
| `.card` (generic, inner pages) | 1.1rem | p-5 (1.25rem) | line / surface | none | (`a.card` only) border brand, `--shadow`, translateY -3px; `.3s`. Icon spans inside rotate -8deg and scale 1.14. Optional mouse sheen `:after` (radial white 260px, soft-light) |
| `.bento` | 1.5rem | 1.9rem | line / surface | none | border brand, `--shadow`, -4px |
| `.bento.is-wide` | 1.5rem | 1.9rem | brand 28% / gradient brand 13% → 5% on surface | none | same |
| `.step-card` | 1.5rem | 1.9rem | **no border** / surface | `0 24px 50px -30px brand/55%` | -4px |
| `.team-card` | 1.25rem | 1.6rem | line / gradient brand 4% → surface 45% | none | border brand, `--shadow`, -4px |
| `.uc-item` | 1.1rem | 1.35rem | line / surface (inside a bg-alt `.uc-panel`, radius 1.5rem, padding 1.8rem) | none | border brand, `--shadow`, -3px |
| `.ben-card` | 1.4rem | 1.7rem | line / surface; icon left | none | border brand, `--shadow`, -4px |
| `.mini-card` | 1.1rem | 1.1rem | line / surface; icon left | none | spotlight only |
| `.show-card` | 1.5rem | stage + p-8 (2rem) | line / surface | `0 24px 50px -34px rgb(0 0 0/.35)` | none |
| `.stat-cell` | 1.25rem | 1.5rem 1rem 1.6rem | line/70% / translucent surface + blur 6px | none | -6px, brand-tinted shadow, top hairline grows |
| `.tbl-card` | 1.5rem | — | line / surface | `--shadow` | row hover brand/5% |
| `.mk-card` | 1.25rem | 1.1rem | line / surface | `0 30px 60px -28px brand/45%` | — |
| `.mk-stage` | 1.75rem | 2.5rem 1.25rem | brand 18% / brand gradient + grid | none | — |
| `.cta-panel` | 2rem | clamp(3rem,7vw,5.5rem) 1.5rem | brand 25% / brand+accent gradients + grid | none | — |
| Dark CTA band | 1.5rem | py 3rem, px 1.5rem → 3rem | none / night | none | — |
| FAQ box | 1rem | rows px 1.25rem | line / surface | none | — |
| Callout | 1rem | 1.25rem | tone/30% / tone-soft | none | — |
| Footer `.fcard` | 14px | 11px 13px | white/10% / white/3% | none | border mint, translateX 4px |

Global hover override for all of bento/step/team/ben/mini/fcard/card: `transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s, border-color .35s`. On hover the border becomes `color-mix(brand 40%, line)` and the shadow becomes `0 18px 40px -18px brand/45%`. Use this softer brand-tinted variant as the standard.

Icon wells:
- `.ic-tile`: 2.9rem, radius .85rem, brand gradient, white icon, brand drop shadow.
- `.ic-soft`: 2.5rem, radius .75rem, brand-soft bg, brand icon.
- `.stat-ic`: 2.5rem, radius .8rem, brand/12% bg + brand/30% border.
- Mega-menu icon: 30px, radius 9px.
- Step number: 2.25rem (h-9), radius .75rem, solid brand.
- `.uc-num`: 2.25rem, radius .7rem, brand-soft.

---

## 7. Responsive behaviour

| Element | <640 | ≥640 (sm) | ≥768 (md) | ≥1024 (lg) | ≥1280 (xl) | ≥1536 (2xl) |
|---|---|---|---|---|---|---|
| Container padding | 20px | 32px | | | | |
| Header | logo · search circle · theme · burger | + "Talk to sales" CTA pill | search becomes a pill (no text) | | **inline nav + mega menus**; burger hidden | + search text & kbd, Contact, Sign In |
| Home hero | 1 col, py 4rem, visual below text | py 6rem | | 2 cols `1fr 1.12fr`, gap 3rem | | |
| `hr-title` | clamp min 2.6rem (≤360: 2.15rem; ≤300: 1.9rem) | | | | max 4.5rem at ~1286px viewport | |
| `sec-title` | 2rem (≤360: 1.75rem; ≤300: 1.55rem) | | | fluid 4.2vw | max 3.4rem at ~1295px | |
| Stats | 2 cols, gap .75rem | gap 1.25rem | | 4 cols | | |
| Inside tabs | stacked (tabs above stage) | | | `.85fr 1.15fr`, gap 3rem | | |
| Bento | 1 col | | 2 cols (wide cards still 1 col) | 3 cols; wide = span 2 | | |
| Steps | 1 col | | 3 cols | | | |
| Split sections | stacked, gap 3rem | | | 2 cols (`.75fr 1.25fr` or `1fr 1fr`) | | |
| Data table | compact grid (see §4.6) | | | | | |
| Team cards | 1 | 2 | | 5 | | |
| Use-case items / mini cards | 1 | 2 | | 4 | | |
| Showcase | 1 | | | 2 | | |
| Benefits | 1 | | 2 | 3 | | |
| CTA panel shapes | hidden (≤640) | shown | | | | |
| Inner hero | 1 col, py 2.5rem; `.pm` floats hidden, no tilt | py 3.5rem; h1 3rem | | 2 cols `1.05fr 1fr`, gap 2.5rem | gap 4rem | |
| Inner body | 1 col, no TOC | | | `1fr 17rem`, gap 3rem, sticky TOC | | |
| Related cards | 1 | 2 | | 3 | | |
| Card grid / form 2-col | 1 | 2 (form fields) | | 3 (cards) | | |
| Table | horizontal scroll (min 34rem) | | | | | |
| Footer | link columns 2, gaps 28/18px, padding 36/28px | | link columns 3 | | 3-zone grid with dividers, link columns 4 | |

Touch (`pointer:coarse`): breadcrumb, footer and TOC links get a minimum 24×24px target.
Every grid child gets `min-width:0`, and headings use `overflow-wrap:break-word`.

---

## 8. Colour roles per element → our tokens

| Element | Role(s) used | Our token |
|---|---|---|
| Page background | bg | `page` |
| Alternating bands (`.band`, stats wash, `.mk-stage`, `.cta-panel`) | brand tints over bg, grid in brand/7% | `brand-50` / `brand-100` washes over `page`; grid `brand-600`/7% |
| Table head, `.tbl-bar`/foot, `.uc-panel`, `.mega-foot`, pm url bar | bg-alt | `ink-50` |
| Cards, header pills, mega panel, FAQ box, form | surface | `surface` |
| Borders and dividers | line | `ink-100` |
| H1/H2/H3, card titles, nav links | ink | `ink-950` (`ink-900` for nav) |
| Body text, list text, TOC links | ink-soft | `ink-700` |
| Leads (`.sec-lead`), meta, breadcrumb, captions, placeholders | ink-mute | `ink-500` |
| Disabled dots, `.tbl-lights` | line | `ink-300` |
| Links, icons, bullets, active nav, TOC active, FAQ "+", tick dots, step numbers | brand | `brand-600` |
| Eyebrow and pill text, `mg-all`, chips | brand-strong | `brand-700` |
| Icon wells, chips, tab hover, info callout | brand-soft | `brand-50` (borders `brand-100`) |
| Primary buttons, header CTA, `ic-tile`, `stat-num` gradient | grad (brand → brand-strong) | `brand-600 → brand-800` |
| Gradient text accents | brand → brand mixed with accent | `brand-600 → brand-400` (optional `amber` hint) |
| Focus ring | ring (brand 30%) | `brand-400`/30% |
| Hero "live" green, success badge, footer accent, `.pm-ico` gradient end | bright green | `mint` |
| Secondary orb, CTA radial, caution callout, gold motes, footer tag | accent / accent-soft | `amber` (soft = amber/13%) |
| Dark CTA band, footer, code trace | navy / night | `night` |
| Footer text | light grey on night | `ink-300` (headings white, links `ink-300` → white) |
| Footer bottom bar | black | `night` darkened (or `ink-950`) |
| Error / running status | red #e5484d / blue #3b82f6 | literal status colours |
| Text on brand fill | on-brand | white |

Dark mode: the same roles. Surfaces become dark greys, brand becomes a lighter green (`brand-400`), and on-brand becomes very dark green, so text on the brand fill flips to dark.
