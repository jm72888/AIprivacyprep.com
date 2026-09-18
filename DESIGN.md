---
name: AIGP Practice Quiz
description: A bright, modern practice tool for the IAPP AIGP (AI governance) exam
colors:
  canvas: "#f5f7fb"
  surface: "#ffffff"
  ink: "#0b1733"
  muted: "#4f5d77"
  line: "#e2e8f2"
  brand: "#2456e8"
  brand-strong: "#1a43c4"
  brand-soft: "#eaf0ff"
  good: "#0b7f57"
  good-soft: "#e2f6ed"
  bad: "#c8322f"
  bad-soft: "#fdeceb"
typography:
  family: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
  display: "800, 2.25rem -> 3.75rem, tracking-tight, leading 1.05"
  title: "700, 1.875rem -> 2.25rem, tracking-tight"
  body: "400, 1rem-1.125rem, leading-relaxed"
radius:
  control: "12px (rounded-xl)"
  container: "16px (rounded-2xl)"
---

# Design System: AIGP Practice Quiz

## Overview

**North star: "Clear, bright, confident."** A modern study tool, not a legal
document. Light cool-white canvas, white cards with soft tinted shadows, one
confident cobalt brand color, and amber as the AIGP accent. The site is
focused on the AIGP exam only; CIPP content was removed from the UI.

This replaced the earlier "Regulatory Gazette" direction (paper background,
Newsreader serif italics, mono uppercase labels, § markers, stamp red, sharp
corners). None of those elements should come back.

## Colors

- **Brand cobalt** (`brand`): primary buttons, links, selected state, progress.
  White text on `brand` passes WCAG AA.
- **Neutrals**: `canvas` page background, `surface` cards, `ink` text,
  `muted` secondary text (AA on both canvas and surface), `line` borders and
  dividers.
- **Semantic**: `good` / `good-soft` for correct answers and scores >= 70%;
  `bad` / `bad-soft` for wrong answers and scores < 70%.
- **AIGP amber**: the AIGP code badge (`CertBadge`) and the numbered tiles on
  domain cards. `src/lib/certTheme.ts` still holds CIPP colors so older
  history entries render correctly.
- The hero uses soft blurred brand/teal/amber glows for depth; everywhere
  else stays flat and bright.

## Typography

Plus Jakarta Sans for everything. Weights 400/500/600/700/800 carry the
hierarchy. Use sentence case, no all-caps labels. Numbers that change or get
compared (scores, counts, prices) use `tabular-nums`. Headings get
`text-wrap: balance` globally.

## Layout

- Home: `max-w-6xl` sections. Hero is two columns on large screens (copy,
  stats, and a sample AIGP question card), stacking on mobile. Then a domain
  grid (one card per AIGP domain, linking to setup with that domain
  preselected, plus a cobalt "Practice all domains" card), then the cost
  comparison.
- Inner pages (setup, quiz, results, history): `max-w-3xl`, content in white
  cards (`rounded-2xl bg-surface shadow-card ring-1 ring-line`).
- Every page is wrapped in `PageShell` (sticky blurred top nav + footer with
  the IAPP non-affiliation note).

## Components

- **Button** (`Button` / `buttonClasses`): `primary` (cobalt, tinted shadow),
  `secondary` (white with ring), `ghost` (text-only). Use `buttonClasses` on
  `<Link>` rather than nesting a `<button>` inside a link.
- **CertBadge**: small rounded code chip in the cert's color.
- **Choice buttons** (quiz): lettered key (A-D) + text. States: default,
  pending (cobalt ring + soft fill), graded correct (green with check),
  graded wrong (red with cross), others dimmed. Selecting never grades; only
  "Check answer" does.
- **Feedback panel**: soft green/red panel with icon, "Correct" / "Not quite",
  and the explanation.
- **Score ring** (results): SVG ring, green at >= 70%, cobalt below.
- **Domain bars**: rounded bars with a subtle 70% target notch and a
  "Needs work" tag under 70%.

## Interaction

Transitions 200ms ease-out. Buttons press to `scale(0.98)`. Cards lift
slightly on hover. Global `:focus-visible` cobalt outline. All motion is
disabled under `prefers-reduced-motion`.

## Don'ts

- No serif or monospace display type, no § glyphs, no "docket" /
  "determination" style wording.
- No purple/blue gradients on text or buttons.
- Don't add new accent hues outside brand, semantic, and AIGP amber.
- Don't drop `muted` text below its current darkness; lighter grays fail AA.
