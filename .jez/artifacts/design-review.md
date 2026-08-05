# Design Review: Burst Digital

**Date**: 2026-08-05
**URL**: https://www.theburstdigital.co.uk/
**Method**: Source-code audit (see Limitations)

## Limitations

This review was performed against the **source code**, not the rendered page. Browser
navigation to the live domain was declined during the session, so no screenshots were
captured and no runtime checks were made.

Consequently this review **does** cover: breakpoint logic, spacing/typography scales,
colour token usage, focus and hover states, component consistency, tap-target sizing.

It **does not** cover: optical alignment, trapped whitespace, real contrast rendering,
dark-mode appearance in practice, font loading behaviour, or layout shift. Those need a
visual pass and are still outstanding.

## Overall Impression

Strong, coherent brand foundation — the navy/red UK palette is disciplined and the
Manrope/Inter pairing is a good choice. Undermined by developer-UI tells: a tablet
breakpoint gap that removes all navigation, focus states switched off across the site,
and a type scale that leans far too small for body copy.

## Findings

### High

- **No navigation at 768–1023px** at `Header.tsx` — desktop nav was `hidden lg:flex`
  (shows ≥1024px) while the hamburger was `flex md:hidden` (shows <768px). Every tablet
  and small-laptop width rendered a header with a logo and nothing else.
  → Moved both to the `lg` breakpoint so the hamburger covers the gap. **Fixed.**

- **Logo had zero vertical breathing room** at `Header.tsx` — header bar was `h-20` (80px)
  and the logo was also `h-20`, so the logo exactly filled its container edge to edge.
  This is why it read as cramped rather than large.
  → Header to `h-24`, logo to `h-16`. **Fixed.**

- **Focus states disabled site-wide** at `Header.tsx`, `ContactSection.tsx` —
  `focus:outline-none` on the logo button and all 7 form fields, with no visible
  replacement. Keyboard users had no indication of position. WCAG 2.4.7 failure.
  → Added `focus-visible` rings on controls and `focus:ring-2` on inputs. **Fixed.**

### Medium

- **Mobile menu missing BLOG** at `Header.tsx` — desktop nav had 7 items, mobile drawer
  had 6. Blog was unreachable on mobile.
  → Refactored to a single array so both render from one source. **Fixed.**

- **Form inputs at 12px** at `ContactSection.tsx` — `text-xs` on every field. Below 16px,
  iOS Safari auto-zooms on focus and does not zoom back out.
  → Inputs to `text-base`. **Fixed.**

- **Off-brand accent red** at `Footer.tsx` — headings used Tailwind `text-red-400`
  (#F87171) against `#012169`, while brand accent is `#C8102E`. Two different reds.
  → Unified to a single accent tint. **Fixed.**

- **Inconsistent logo sizing** — header `h-20`, footer `h-24`. Same mark, two sizes.
  → Both to `h-16`. **Fixed.**

- **Sub-44px tap targets** at `Header.tsx` — mobile theme and menu buttons were `p-2`
  with `w-4` icons (~32px). Below the 44px minimum.
  → Increased to `p-3` with `w-5` icons, nav items `min-h-11`. **Fixed.**

### Low

- **Design tokens defined but unused** — `index.css` declares `--color-primary`,
  `--color-accent`, `--color-bg-light`, `--color-text-dark`, but every component
  hardcodes `#012169` / `#C8102E`. A rebrand means a find-and-replace across ~20 files.
  **Not fixed** — worth doing as a dedicated pass.

- **Border-radius scale is loose** — `rounded-lg`, `-xl`, `-2xl`, `-3xl` all in play with
  no clear rule for which applies to what. **Not fixed.**

- **Body copy at 12px** — `text-xs` used for paragraph text in Footer and Contact, not
  just labels. Legible but below comfortable reading size. **Not fixed** — changing this
  shifts layout broadly and should be a deliberate decision.

## What Looks Good

- Consistent navy/red/neutral palette with no colour sprawl
- Manrope headings vs Inter body gives genuine typographic hierarchy
- Single icon family (Lucide) at consistent sizes throughout
- Hover transitions are present and consistently timed
- Dark-mode variants are declared on essentially every element
- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container pattern applied uniformly

## Top 3 Fixes

1. Restore navigation at tablet widths — was fully broken, highest impact **(done)**
2. Give the logo breathing room in the header — root cause of "logo looks small" **(done)**
3. Restore visible focus states — accessibility failure across every interactive element **(done)**

## Outstanding

- Visual pass with screenshots in both light and dark mode
- Migrate hardcoded hex values onto the CSS custom properties already defined
- Decide on a body-copy size floor (current 12px is small for prose)
- `logo.png` ships at 2.1MB — larger than the entire JS bundle. Compress or convert to SVG.
