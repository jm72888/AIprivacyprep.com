# CIPP / AIGP Practice Quiz

A practice quiz app for the IAPP CIPP/US, CIPP/E, and AIGP certifications:
instant feedback with explanations, domain filtering, and per-domain score
breakdowns. See `context.md` for full product context and `supabase/schema.sql`
for the planned Phase 2 backend.

## Development

```bash
npm install
npm run dev
```

## Status

Live at [aiprivacyprep.com](https://www.aiprivacyprep.com), auto-deployed
via Vercel on every push to `main`.

Phase 1 (current): fully working app against local data
(`src/data/`), with quiz attempt history stored in the browser's
`localStorage`.

Phase 2 (not yet started): swap `src/lib/localDataClient.ts` for a
Supabase-backed implementation of `src/lib/dataClient.ts`, add owner auth.
`supabase/schema.sql` already has the planned schema.
