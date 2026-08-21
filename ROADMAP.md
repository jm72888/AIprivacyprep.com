# Roadmap

Tracks what's actually been built, what's left, and the decisions still
open. `README.md` stays a short pointer; this is the detailed record —
update it whenever a phase of work lands or a plan changes, not just at
milestones.

**Live:** [aiprivacyprep.com](https://www.aiprivacyprep.com) (Vercel,
auto-deploys on every push to `main`)
**Repo:** `github.com/jm72888/AIprivacyprep.com`

---

## Phase 1 — Core app (done)

### Product & content
- [x] Core quiz loop: pick a certification → filter by domain → answer
  multiple-choice questions with instant feedback → see a per-domain
  score breakdown. (`src/pages/HomePage.tsx`, `SetupPage.tsx`,
  `QuizPage.tsx`, `ResultsPage.tsx`)
- [x] Three certifications live: CIPP/US, CIPP/E, AIGP
  (`src/data/certifications.ts`, `src/data/domains/*.ts`).
- [x] 128 questions total — 40 CIPP/US, 48 CIPP/E, 40 AIGP
  (`src/data/questions/*.ts`), originally Claude-generated from public
  IAPP exam outlines, then **rewritten to exam-realistic difficulty**
  (scenario-based prompts, close/plausible distractors, explanations
  that also debunk the strongest wrong answer) — see commit `0da3481`.
  **Not yet reviewed by a subject-matter expert for accuracy** — see
  Known Gaps below.
- [x] Persistent local score history via `localStorage`
  (`src/lib/localDataClient.ts`), viewable on `HistoryPage.tsx`.
- [x] Public visitors are fully anonymous/session-only; no login, no
  leaderboard, no cross-visit tracking — matches `PRODUCT.md`.

### Design system
- [x] Full visual redesign from the original "warm editorial" look
  (cream, Fraunces serif, pill buttons, colored-accent-bar cards) to
  **"The Regulatory Gazette"** — a document-typesetting world (docket
  rows, ink-stamp verdicts, hairline rules, one red accent), chosen via
  the impeccable skill's dice-rolled direction process and confirmed by
  user pick. Recorded as a direction contract in `index.html` and fully
  documented in `DESIGN.md`. (commit `87305af`)
- [x] Signature components: docket-row lists (replacing cards),
  Verdict Box (correct/incorrect), instrument-style graduated accuracy
  Scale, Selection Blue pending-answer state, red `§` glyph convention,
  Home-link breadcrumb pattern.
- [x] Multiple rounds of user-driven polish after the redesign: hero/
  landing sizing and copy, domain-selection header restructure (US/E
  colored red, Back button moved and restyled), question-UI overhaul
  (non-italic prompt for readability, select-then-submit flow instead of
  instant grading, plain Verdict Box instead of a rotated stamp,
  saturated correct-answer green, persistent Home link + module
  breadcrumb, question text sized down 10%). See commits `b7193d9`
  through `8c08919`.
- [x] WCAG AA contrast verified by hand (documented in `DESIGN.md`'s
  Do's/Don'ts) for every text/background color combination introduced
  during the redesign.

### Engineering
- [x] React 19 + Vite + TypeScript + Tailwind v4, `react-router-dom` for
  client-side routing.
- [x] `impeccable` design skill installed at `.agent/skills/impeccable`,
  `PRODUCT.md` and `DESIGN.md` maintained as the durable product/design
  record.
- [x] Deployed to Vercel with a custom domain (`aiprivacyprep.com`, DNS
  on GoDaddy, SSL auto-issued). `vercel.json` added for SPA rewrites so
  client-side routes (`/quiz/:certId/setup`, etc.) don't 404 on direct
  load/refresh — verified in production, not just locally.
- [x] Every commit in this phase verified with `tsc -b`, `oxlint`, and
  the impeccable skill's bundled slop/contrast detector before shipping.

---

## Phase 2 — Backend & durable owner history (not started)

The goal: the app owner's quiz history should survive clearing browser
data or switching devices. Public visitors stay anonymous/local — this
phase doesn't change their experience.

- [ ] Stand up a Supabase project and apply `supabase/schema.sql`
  (already drafted: `certifications`, `domains`, `questions`,
  `attempts`, `attempt_answers` tables with row-level security —
  public read on content tables, owner-only read/write on attempts).
- [ ] Migrate the question bank from `src/data/questions/*.ts` into the
  Supabase `questions` table (one-time seed script, not yet written).
- [ ] Implement a Supabase-backed `DataClient`
  (`src/lib/dataClient.ts` defines the interface;
  `src/lib/localDataClient.ts` is the current local implementation to
  be swapped out — the interface was deliberately kept small so this
  swap doesn't ripple through the UI layer).
- [ ] Add light single-user auth (Supabase auth, one account) so the
  owner's attempts are attributable and RLS can enforce owner-only
  access — no multi-user system needed.
- [ ] Wire owner auth into `HistoryPage.tsx` and attempt-saving in
  `QuizPage.tsx` so a logged-in owner's history reads/writes to
  Supabase instead of `localStorage`; anonymous visitors keep the
  current local-only behavior unchanged.
- [ ] Decide and build the question-bank editing mechanism — **open
  decision, unresolved in `PRODUCT.md`**: a simple admin UI vs. editing
  the Supabase table directly. Needs a decision before this phase can
  be called done.

---

## Known gaps / technical debt

Carried over from `DESIGN.md`'s "Known gaps" section plus a few found
along the way. None of these block the current live site; they're
listed so they don't get silently forgotten.

- **No automated tests.** `package.json` has no test script — `lint`
  (oxlint) and `tsc -b` are the only automated checks. Nothing catches
  a regression in scoring logic, domain filtering, or attempt
  persistence except manual testing.
- **No visual/screenshot QA tooling available in this environment.**
  Every design change this session was verified by contrast math,
  TypeScript, lint, and the bundled slop detector, plus a live
  dev-server smoke test — never an actual rendered screenshot
  comparison, because no browser-automation tool was available. Worth
  a manual pass across real devices/browsers before treating the
  current design as finished.
- **Question accuracy is unreviewed.** The full question bank (starter
  set and the harder rewrite) was authored by Claude from public IAPP
  outlines and general subject knowledge. `PRODUCT.md` already flags
  this: no official IAPP affiliation, accuracy not guaranteed until a
  human with real CIPP/AIGP knowledge reviews it.
- **Browser-surface theming untouched.** Text selection color, caret,
  focus rings, and scrollbars are still unstyled browser defaults —
  in particular, **no visible `:focus-visible` styling exists anywhere
  in the app**, which is a real keyboard/screen-reader accessibility
  gap, not just a cosmetic one.
- **The settled-vs-contested typography idea has no content to use it.**
  One raise from the redesign's direction round (solid type for settled
  fact vs. hairline type for contested nuance in explanations) has no
  data-model support — `Question.explanation` is a single plain string.
  Would need per-clause certainty markers in the content model to use.
- **Timed exam simulation mode** is explicitly deferred (noted in
  `context.md`/`PRODUCT.md` from the start) — not a bug, just not built.
- **Minor lint warning**: `QuizPage.tsx`'s `useEffect` has an
  exhaustive-deps warning on `domainIds` (it's a new array reference
  every render). Harmless today but worth a `useMemo`/`useRef` cleanup.

---

## Open product decisions

Things intentionally left unresolved rather than guessed at — see
`PRODUCT.md` for the full record:

- **Brand name**: "CIPP/AIGP Practice Quiz" is still a working title,
  not a locked name.
- **Question-editing mechanism** (see Phase 2 above): admin UI vs.
  direct database editing.
