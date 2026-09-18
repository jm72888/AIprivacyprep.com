// Weekly "This week's developments" agent.
//
// Runs every Monday from .github/workflows/weekly-developments.yml. Step 1 has
// Claude research the past week's AI data governance and privacy news with web
// search and web fetch. Step 2 turns those research notes into validated JSON.
// The two steps are separate calls because web search citations can't be
// combined with structured JSON output in a single request. The result is
// written to src/data/developments/<weekOf>.json, which the site reads at
// build time.
//
// Usage: ANTHROPIC_API_KEY=... node scripts/weekly-developments.ts

import Anthropic from '@anthropic-ai/sdk'
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod'
import { z } from 'zod'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { DEVELOPMENT_CATEGORIES, type Development, type WeeklyDevelopments } from '../src/lib/types.ts'

const MODEL = 'claude-opus-5'
const DATA_DIR = 'src/data/developments'
const MAX_CONTINUATIONS = 8
const URL_CHECK_TIMEOUT_MS = 15_000

const client = new Anthropic()

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}

function addDays(date: Date, days: number): Date {
  const copy = new Date(date)
  copy.setUTCDate(copy.getUTCDate() + days)
  return copy
}

// The digest is labeled by the Monday it runs on and covers the 7 days before it.
const today = new Date()
const weekOfDate = new Date(
  Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - ((today.getUTCDay() + 6) % 7)),
)
const weekOf = isoDate(weekOfDate)
const periodStart = isoDate(addDays(weekOfDate, -7))
const periodEnd = isoDate(addDays(weekOfDate, -1))

async function readPreviousUrls(): Promise<Set<string>> {
  const urls = new Set<string>()
  let files: string[] = []
  try {
    files = await readdir(DATA_DIR)
  } catch {
    return urls
  }
  for (const file of files) {
    if (!file.endsWith('.json') || file === `${weekOf}.json`) continue
    const week = JSON.parse(await readFile(path.join(DATA_DIR, file), 'utf8')) as WeeklyDevelopments
    for (const item of week.items) urls.add(normalizeUrl(item.url))
  }
  return urls
}

function normalizeUrl(url: string): string {
  try {
    const parsed = new URL(url)
    parsed.hash = ''
    for (const key of [...parsed.searchParams.keys()]) {
      if (key.startsWith('utm_')) parsed.searchParams.delete(key)
    }
    return parsed.toString().replace(/\/$/, '')
  } catch {
    return url
  }
}

const RESEARCH_SYSTEM = `You are the research editor for a free study site for the IAPP AIGP (Artificial Intelligence Governance Professional) exam. Each week you compile the most important developments in AI data governance and privacy for readers who work in, or are studying for, AI governance roles.

In scope:
- Laws and regulations: AI-specific and privacy/data protection laws or rules that were proposed, passed, amended, took effect, or received official guidance (for example the EU AI Act, GDPR guidance, US state AI and privacy laws, federal agency rules, UK, Canada, China, and other jurisdictions).
- Enforcement: fines, orders, settlements, investigations, and court rulings involving AI systems or personal data used in AI.
- Government: executive actions, agency policy, standards work (NIST, ISO), and international agreements on AI governance.
- Industry: major private-sector news such as company AI or data-use policy changes, significant lawsuits, AI-related data incidents, and industry frameworks or commitments.

Standards:
- Only include developments that happened or were first reported within the requested date range.
- Prefer primary sources (regulators, legislatures, courts, official company announcements) and established news outlets. Open each source with web fetch to confirm the details and the date before including it.
- Newsletters, daily digests, and roundup pages (for example The Neuron or other "everything that happened in AI" posts) can help you find stories, but never cite them. Cite the original announcement or an established outlet's article about that specific story. If you cannot open any such source, leave the story out.
- Each development needs its own source URL. Never use the same URL for two developments.
- Leave out opinion pieces, vendor marketing, and minor updates. Pick the developments a governance professional would most need to know about.
- Report facts neutrally. Do not speculate about outcomes.
- Each summary is shown on its own card, so it must stand alone. Never refer to other items (for example "see item 8" or "as noted above").`

async function research(previousUrls: Set<string>): Promise<string> {
  const skipList = previousUrls.size > 0 ? `\n\nThese sources were already covered in earlier weeks. Do not include them again:\n${[...previousUrls].join('\n')}` : ''
  const messages: Anthropic.Beta.BetaMessageParam[] = [
    {
      role: 'user',
      content: `Find the 6 to 12 most important AI data governance and privacy developments from ${periodStart} to ${periodEnd} (inclusive). Cover a mix of the categories if the week's news allows it, but do not pad the list with minor items.

For each development, write:
- A short headline
- A 2 to 3 paragraph factual summary of what happened and why it matters for AI governance
- Category (one of: ${DEVELOPMENT_CATEGORIES.join(', ')})
- Region or jurisdiction (for example "EU", "United States", "California", "United Kingdom", "Global")
- Source: just the publication or organization name (for example "Reuters", "European Commission", "Office of the Governor of California"), and the exact URL you opened
- The date it happened or was published (YYYY-MM-DD)${skipList}`,
    },
  ]

  for (let attempt = 0; attempt <= MAX_CONTINUATIONS; attempt++) {
    const response = await client.beta.messages
      .stream({
        model: MODEL,
        max_tokens: 64000,
        betas: ['server-side-fallback-2026-07-01'],
        fallbacks: 'default',
        thinking: { type: 'adaptive' },
        output_config: { effort: 'high' },
        system: RESEARCH_SYSTEM,
        tools: [
          { type: 'web_search_20260209', name: 'web_search', max_uses: 25 },
          { type: 'web_fetch_20260209', name: 'web_fetch', max_uses: 30 },
        ],
        messages,
      })
      .finalMessage()

    if (response.stop_reason === 'pause_turn') {
      messages.push({ role: 'assistant', content: response.content })
      continue
    }
    if (response.stop_reason === 'refusal') {
      throw new Error(`Research request was declined: ${response.stop_details?.explanation ?? 'no explanation'}`)
    }
    if (response.stop_reason === 'max_tokens') {
      throw new Error('Research response hit max_tokens before finishing')
    }

    const notes = response.content
      .filter((block): block is Anthropic.Beta.BetaTextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('')
      .trim()
    console.log(`Research usage: ${JSON.stringify(response.usage)}`)
    if (!notes) throw new Error('Research step returned no text')
    return notes
  }
  throw new Error(`Research did not finish after ${MAX_CONTINUATIONS} continuations`)
}

const DigestSchema = z.object({
  items: z.array(
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(DEVELOPMENT_CATEGORIES),
      region: z.string(),
      source: z.string(),
      url: z.string(),
      publishedDate: z.string(),
    }),
  ),
})

async function format(notes: string): Promise<Development[]> {
  const response = await client.messages.parse({
    model: MODEL,
    max_tokens: 16000,
    system:
      'Convert research notes into structured data. Copy facts, URLs, and dates exactly as they appear in the notes. Do not add developments, details, or links that are not in the notes. Write publishedDate as YYYY-MM-DD. The source field must be only the publication or organization name, with no description or commentary. Keep each summary as the 2 or 3 paragraphs from the notes, in plain, neutral language, with paragraphs separated by a blank line.',
    messages: [{ role: 'user', content: `Research notes:\n\n${notes}` }],
    output_config: { format: zodOutputFormat(DigestSchema) },
  })
  console.log(`Formatting usage: ${JSON.stringify(response.usage)}`)
  if (response.stop_reason === 'refusal') throw new Error('Formatting request was declined')
  if (!response.parsed_output) throw new Error(`Formatting step returned no parseable output (stop_reason: ${response.stop_reason})`)
  return response.parsed_output.items
}

// Drop links that clearly do not exist. Sites that block automated requests
// (403, 429, timeouts) are kept, since the research step already opened them.
async function urlExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(URL_CHECK_TIMEOUT_MS),
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; AIGPPrepBot/1.0; +https://www.aiprivacyprep.com)' },
    })
    return response.status !== 404 && response.status !== 410
  } catch (error) {
    return error instanceof Error && error.name === 'TimeoutError'
  }
}

async function validate(items: Development[], previousUrls: Set<string>): Promise<Development[]> {
  // Allow a little slack on dates for time zones and late reporting.
  const earliest = isoDate(addDays(new Date(`${periodStart}T00:00:00Z`), -2))
  const seen = new Set<string>()
  const kept: Development[] = []

  for (const item of items) {
    const url = normalizeUrl(item.url)
    const reasons: string[] = []
    if (!/^https?:\/\//.test(url)) reasons.push('invalid URL')
    if (seen.has(url) || previousUrls.has(url)) reasons.push('duplicate')
    if (!/^\d{4}-\d{2}-\d{2}$/.test(item.publishedDate)) reasons.push('invalid date')
    else if (item.publishedDate < earliest || item.publishedDate > weekOf) reasons.push(`date ${item.publishedDate} outside window`)
    if (reasons.length === 0 && !(await urlExists(url))) reasons.push('link not found')

    if (reasons.length > 0) {
      console.warn(`Dropped "${item.title}": ${reasons.join(', ')}`)
      continue
    }
    seen.add(url)
    kept.push({ ...item, url })
  }
  return kept.sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
}

async function main() {
  console.log(`Building developments for the week of ${weekOf} (${periodStart} to ${periodEnd})`)
  const previousUrls = await readPreviousUrls()

  const notes = await research(previousUrls)
  console.log(`Research notes:\n${notes}\n`)

  const items = await validate(await format(notes), previousUrls)
  if (items.length === 0) {
    console.warn('No developments passed validation. Leaving the site unchanged.')
    return
  }

  const digest: WeeklyDevelopments = {
    weekOf,
    periodStart,
    periodEnd,
    generatedAt: new Date().toISOString(),
    items,
  }
  await mkdir(DATA_DIR, { recursive: true })
  const outPath = path.join(DATA_DIR, `${weekOf}.json`)
  await writeFile(outPath, `${JSON.stringify(digest, null, 2)}\n`)
  console.log(`Wrote ${items.length} developments to ${outPath}`)
}

main().catch((error) => {
  if (error instanceof Anthropic.AuthenticationError) {
    console.error('Anthropic API key is missing or invalid. Set the ANTHROPIC_API_KEY secret.')
  } else if (error instanceof Anthropic.RateLimitError) {
    console.error('Rate limited by the Anthropic API. Re-run the workflow later.')
  } else if (error instanceof Anthropic.APIError) {
    console.error(`Anthropic API error ${error.status}: ${error.message}`)
  } else {
    console.error(error)
  }
  process.exit(1)
})
