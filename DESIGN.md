---
name: CIPP/AIGP Practice Quiz
description: A regulatory-gazette-styled practice tool for the IAPP CIPP/US, CIPP/E, and AIGP certifications
colors:
  paper: "#f2ede0"
  ink: "#1a1a1a"
  rule: "#8a8578"
  accent: "#b3271e"
  accent-soft: "#f1ded9"
  good: "#2f5233"
  good-soft: "#e2e8df"
  bad: "#b3271e"
  bad-soft: "#f1ded9"
  hero: "#161514"
typography:
  display:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "clamp(1.5rem, 4vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.08em"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "0px"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "10px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: CIPP/AIGP Practice Quiz

## Overview

**Creative North Star: "The Regulatory Gazette"**

The product tests you on the actual language of privacy statutes, GDPR text,
and AI governance frameworks — official documents that treat every clause as
consequential. This system borrows that register directly: docket headers,
numbered clauses, ink-stamped verdicts, hairline rules, and a single red
accent used the way an official stamp is used, sparingly and with intent. It
refuses the category default for practice-quiz apps — rounded cards, playful
multi-color accents, gamified whitespace — because a tool asking to be
trusted with real exam prep should read with the same formality as the
material it tests.

This is a replacement of the app's original "warm editorial" world (cream
background, Fraunces serif, pill buttons, colored-accent-bar cards), chosen
deliberately during a redesign — the old world is not preserved anywhere in
this file.

**Key Characteristics:**
- Document typesetting, not app chrome: hairline rules instead of shadows, sharp corners instead of radius, numbered/mono chrome instead of icons.
- One accent color (stamp red), used only for status, emphasis, and the single primary action per screen.
- Two-family type system: a serif for reading, a monospace for citation-like chrome (docket numbers, labels, timestamps).

## Colors

A gazette palette: aged paper, near-black ink, and one red ink-stamp accent. No secondary or tertiary hue — the restraint is the point.

### Primary
- **Ink Stamp Red** (`#b3271e`): the only saturated color in the system. Used for the primary CTA, docket/cert codes, "Notice" labels, and the incorrect-answer stamp. Also serves as `good`/`bad`'s red half — see Named Rule below.

### Neutral
- **Gazette Paper** (`#f2ede0`): page background throughout.
- **Ink** (`#1a1a1a`): body text, headings, primary button fill. Always used at ≥70% opacity for text (`text-ink/70` or higher) — anything lower fails WCAG AA on this paper.
- **Rule Gray** (`#8a8578`): hairline dividers between sections, list rows, and table-like breakdowns. Never used for text.
- **Cover-Sheet Black** (`#161514`): the Hero's full-bleed background, standing in for a docket cover sheet.

### Semantic
- **Approved Green** (`#2f5233` / soft `#e2e8df`): correct answers, domain scores ≥70%.
- **Overruled Red** (`#b3271e` / soft `#f1ded9`): incorrect answers, domain scores <70%. Intentionally the same hex as the primary accent — a stamp is a stamp, whether it is marking a CTA or marking a wrong answer.

### Named Rules
**The One Stamp Rule.** Red appears in exactly one register per screen: either the single primary action, or a single correctness verdict. It never decorates.

## Typography

**Display/Body Font:** Newsreader (with ui-serif, Georgia, serif fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular fallback)

**Character:** Newsreader carries the reading register — this is prose meant to be read at length, the way a regulation is read. IBM Plex Mono marks anything that behaves like a citation, docket number, or instrument readout: it signals "this is structural metadata," never body content.

### Hierarchy
- **Display** (400, italic, `text-4xl`–`text-6xl`): Hero headline and page/result headlines. Italic is load-bearing — it's the one typographic accent the brief called for.
- **Title** (400, italic, `text-xl`–`text-3xl`): section and card headings (cert names, "Breakdown by domain").
- **Body** (400, `text-sm`–`text-base`, line-height 1.6): explanatory prose, question prompts, notices. Max measure ~65ch via `max-w-2xl` containers.
- **Label** (500, `text-xs`, tracking 0.08em, uppercase): docket numbers, cert codes, section markers (`§ 1 of 10`), timestamps.

### Named Rules
**The Italic-Is-Accent Rule.** Italic Newsreader marks a heading as the display voice; regular-weight Newsreader is always body. No third typographic register exists.

## Layout

Single-column, `max-w-2xl` (Hero uses `max-w-3xl`) containers throughout, centered. Sections stack with hairline `border-t` dividers rather than card gaps — the page reads as one continuous document, not a shelf of cards. Certification and history lists are rows (docket entries), not a grid. Domain lists (picker, breakdown) are also rows, divided by hairline rule, edge-to-edge within their container.

## Elevation & Depth

**The Flat Document Rule.** No shadows anywhere in the system. Depth is conveyed by ink density and hairline rule weight, not elevation — this is a document, and documents don't float.

## Shapes

Sharp corners everywhere (`0px` radius) — cards, buttons, inputs, containers. Borders are 1px hairlines in `rule` gray or `ink`; the one exception is the ink-stamp mark on question feedback, which uses a heavier 2px border and a slight rotation to read as a physical stamp rather than a UI chip.

## Components

### Buttons
- **Shape:** rectangular, 0px radius, 1px border.
- **Primary:** `accent` background, `paper` text, hover inverts to `ink` background.
- **Secondary:** transparent, `ink` border and text, hover inverts to `ink` background with `paper` text.
- **Invert (Hero only):** transparent, `paper/40` border and `paper` text for use on the dark Hero background; hover inverts to solid `paper` with `ink` text.
- **Label style:** IBM Plex Mono, uppercase, `0.08em` tracking, `text-xs` — buttons read as form-stamp actions, not soft app buttons.

### Cards / Containers
- **Corner Style:** 0px radius throughout.
- **Background:** `paper` (default) or transparent within a `paper` page.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** 1px `rule/30`–`rule/50` hairline, or a `border-t`/`border-b` divider between list rows rather than a full card outline.

### List Rows (Docket Rows) — signature component
The certification picker, domain picker, domain breakdown, and history list all share one grammar: a horizontal row, hairline `border-t` divider (first row has none), a mono label or index on the left, content in the middle, and an optional mono value or arrow on the right. This replaced the original per-item card with a colored left accent bar; the docket-row list is what makes many small items feel like a table of contents rather than a stack of cards.

### Stamp Mark (signature component)
Correct/incorrect feedback on a question renders as a small rotated (`-3deg`) 2px-bordered label reading "CORRECT" or "OVERRULED" in mono uppercase, in `good` or `bad` color — a literal ink-stamp motif standing in for a green/red pill.

### Instrument Scale (signature component)
Domain accuracy in the results breakdown renders as a graduated horizontal scale (tick marks every 10%) with a filled region up to the score and a single marker line at the exact percentage, rather than a rounded progress bar — borrowed from oscilloscope/instrument-readout precision.

## Do's and Don'ts

### Do:
- **Do** use IBM Plex Mono for anything that is metadata about the content (docket numbers, § markers, timestamps, labels) — never for body prose.
- **Do** use hairline `border-t`/`border-b` dividers between list items instead of card gaps or shadows.
- **Do** keep the accent color to one register per screen (one CTA, or one correctness verdict) — see The One Stamp Rule.
- **Do** italicize Newsreader for any display/title-level heading; this is the system's one typographic accent.

### Don't:
- **Don't** reintroduce rounded corners, pill-shaped buttons, or drop shadows — they belong to the previous "warm editorial" world this redesign replaced.
- **Don't** use a colored left `border-l` accent bar on cards — replaced system-wide by hairline row dividers and mono docket numbers.
- **Don't** use `text-ink` below 70% opacity on the `paper` background — it fails WCAG AA contrast at this system's text sizes (verified: `ink/40` ≈2.5:1, `ink/50` ≈3.2:1, `ink/60` ≈4.3:1, all below the 4.5:1 minimum; `ink/70` ≈6:1 passes).
- **Don't** add a second saturated accent color; the red ink-stamp is deliberately the only one.

## Known gaps (disclosed, not silently dropped)

- **Settled-vs-contested explanation typography** (a raise from the direction round's provenance-ribbon challenger — solid type for settled fact, hairline/lighter type for contested nuance) has no data-model support yet: `Question.explanation` is a single plain string with no per-clause certainty markers. The system is ready to express this distinction: apply it once question content is authored with that granularity.
- **Browser-surface theming** (selection color, caret, focus rings, scrollbar) was not touched in this pass — carried over from browser defaults, same as before this redesign.
- **No visual QA screenshots**: this build ran without a browser-automation tool available in-session, so verification was code-level (contrast math, TypeScript, lint, the bundled slop detector) plus a live dev-server smoke test, not a rendered-pixel comparison. Confirm the rendered result in your own browser before treating this as finished.
