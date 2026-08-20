-- Phase 2 schema — not applied yet. Run this against a Supabase project once
-- one exists, then swap src/lib/localDataClient.ts for a Supabase-backed
-- implementation of the DataClient interface (src/lib/dataClient.ts).

create table certifications (
  id text primary key,
  code text not null,
  name text not null,
  description text not null
);

create table domains (
  id text primary key,
  certification_id text not null references certifications (id) on delete cascade,
  name text not null,
  "order" integer not null
);

create table questions (
  id text primary key,
  domain_id text not null references domains (id) on delete cascade,
  prompt text not null,
  choices jsonb not null,
  correct_index integer not null,
  explanation text not null
);

-- Owner-only data. user_id is the Supabase auth user id of the app owner.
create table attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  certification_id text not null references certifications (id),
  domain_ids text[] not null,
  started_at timestamptz not null,
  finished_at timestamptz not null
);

create table attempt_answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references attempts (id) on delete cascade,
  question_id text not null references questions (id),
  domain_id text not null references domains (id),
  selected_index integer not null,
  correct boolean not null
);

alter table certifications enable row level security;
alter table domains enable row level security;
alter table questions enable row level security;
alter table attempts enable row level security;
alter table attempt_answers enable row level security;

-- Question bank is public read (anonymous visitors take quizzes without login).
create policy "public read certifications" on certifications for select using (true);
create policy "public read domains" on domains for select using (true);
create policy "public read questions" on questions for select using (true);

-- Attempt history is owner-only.
create policy "owner reads own attempts" on attempts for select using (auth.uid() = user_id);
create policy "owner inserts own attempts" on attempts for insert with check (auth.uid() = user_id);

create policy "owner reads own attempt answers" on attempt_answers for select using (
  exists (select 1 from attempts where attempts.id = attempt_answers.attempt_id and attempts.user_id = auth.uid())
);
create policy "owner inserts own attempt answers" on attempt_answers for insert with check (
  exists (select 1 from attempts where attempts.id = attempt_answers.attempt_id and attempts.user_id = auth.uid())
);
