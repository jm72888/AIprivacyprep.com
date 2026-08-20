---
target: hero/landing page (src/pages/HomePage.tsx)
total_score: 17
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-20T17-31-22Z
slug: src-pages-homepage-tsx
---
# Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3/4 | Hover/press feedback clearly confirms interactivity |
| 2 | Match System / Real World | 3/4 | Real dollar figures ground it; CIPP/AIGP never expanded |
| 3 | User Control and Freedom | 3/4 | No traps; history escape hatch exists |
| 4 | Consistency and Standards | 2/4 | Hero h1 uses font-sans; every other heading uses font-display |
| 5 | Error Prevention | n/a | No forms/destructive actions on a static page |
| 6 | Recognition Rather Than Recall | 3/4 | Info co-located well; docked for unexplained acronyms |
| 7 | Flexibility and Efficiency | n/a | No meaningful power-user path on a single-decision page |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean structure; ValueProp/StatChips repeat the same numbers |
| 9 | Error Recovery | n/a | No error states exist |
| 10 | Help and Documentation | n/a | Appropriate to omit pre-task on a landing page |
| **Total** | | **17/24** | **Good (70.8%)** |

# Design Specificity Verdict

Partially authored for this product, undermined by one significant slip. ValueProp's real IAPP cost figures against a "$0 here" pitch is genuinely product-specific. But the Hero h1 uses font-sans while every other heading in the codebase uses font-display; context.md's brief calls for a serif display headline with an italic accent word, and Fraunces' italic weight is loaded but unused anywhere in the app.

Deterministic scan found 4 side-tab (colored left accent border) hits: CertCard.tsx, DomainBreakdown.tsx, DomainPicker.tsx, QuestionCard.tsx. Only CertCard is on this landing page. This is a detector/brief disagreement, not a defect: context.md explicitly specifies a colored left accent bar as the intended brief, so this finding is a false positive here. HomePage.tsx itself scanned clean.

Visual overlays: not available — no browser automation tool was exposed this session.

# Overall Impression

Solid bones, undercut by the Hero not following its own house style, and the landing page's own PillButton component — already built and used on three other pages — never appearing here.

# What's Working

1. ValueProp's cost-comparison framing is authentic, specific, persuasive copy.
2. CertCard's hover/press interaction is tuned, not default Tailwind boilerplate.
3. The warm paper/ink/bronze palette commits to a distinct identity.

# Priority Issues

[P1] Hero headline breaks the app's own typography rule — font-sans instead of font-display on Hero.tsx:19; no italic accent word anywhere despite the font being loaded. Fix: switch to font-display, add an italic accent word. Command: typeset

[P1] No CTA button in the Hero — PillButton is unused on this page despite being the brief's defined CTA component and already used elsewhere. Fix: add a primary PillButton in/below the Hero anchoring to the cert grid. Command: adapt

[P1] text-ink/50 fails WCAG AA contrast — "View your practice history" link (~3.2:1) and StatChip labels (~3.3:1), both under the 4.5:1 minimum. Fix: raise both to ink/70 (~6:1). Command: harden

[P2] "No signup / no account" positioning pillar never appears in the copy — PRODUCT.md states free + no-account as one claim; page argues only the free half. Fix: add a reassurance line near the cert grid. Command: clarify

[P2] Redundant number disclosure + zero acronym expansion — ValueProp prose and StatChips restate the same figures; CIPP/AIGP never spelled out. Fix: trim the paragraph, expand acronyms once in the Hero subtitle. Command: distill

# Persona Red Flags

Jordan (first-timer): Never learns what CIPP/AIGP stand for. No confirmation that clicking a card won't hit a signup wall. No guided default among three identical cards.

Riley (stress tester): Zero focus-visible styling anywhere in src/ despite elaborate hover/active choreography for mouse users. sm:grid-cols-3 jumps 1→3 columns with no 2-column step, cramping 640-767px viewports.

Casey (mobile): Must scroll past a dense pricing paragraph before the first tappable choice. Hover-only arrow micro-animation never fires on touch.

# Minor Observations

- Fraunces' italic weight loaded but unused anywhere in the app.
- Accent-on-white text computes to ~4.64:1 — passes AA but only barely.
- No focus-visible styling exists app-wide, not just this page.

# Questions to Consider

- If the real conversion action lives in the cert cards three sections down, why does the Hero exist as a separate, button-less section at all?
- PillButton already matches the brief and is used on three other pages — was withholding it from the homepage deliberate?
- ValueProp treats "free + no-signup" as one claim, but the copy only ever argues "free" — why did "no signup" never make it in?
