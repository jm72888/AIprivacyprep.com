import { useState } from 'react'
import { PageShell } from '../components/SiteHeader'
import { weeklyDevelopments } from '../data/developments'
import { DEVELOPMENT_CATEGORIES, type Development, type DevelopmentCategory } from '../lib/types'

const CATEGORY_STYLES: Record<DevelopmentCategory, string> = {
  'Law & regulation': 'bg-brand-soft text-brand-strong',
  Enforcement: 'bg-bad-soft text-bad',
  Government: 'bg-teal-50 text-teal-800',
  Industry: 'bg-amber-50 text-amber-800',
}

const longDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
const shortDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })

function formatDate(iso: string, format: Intl.DateTimeFormat) {
  return format.format(new Date(`${iso}T00:00:00Z`))
}

function DevelopmentCard({ item }: { item: Development }) {
  return (
    <article className="rounded-2xl bg-surface p-5 shadow-card ring-1 ring-line sm:p-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
        <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${CATEGORY_STYLES[item.category]}`}>
          {item.category}
        </span>
        <span className="font-medium text-muted">{item.region}</span>
        <span className="text-muted" aria-hidden="true">
          &middot;
        </span>
        <time dateTime={item.publishedDate} className="text-muted tabular-nums">
          {formatDate(item.publishedDate, shortDate)}
        </time>
      </div>
      <h3 className="mt-3 text-xl font-bold leading-snug">{item.title}</h3>
      <div className="mt-2 space-y-3 leading-relaxed text-muted">
        {item.summary.split(/\n\s*\n/).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-strong hover:underline"
      >
        Read at {item.source}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true">
          <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </article>
  )
}

export function DevelopmentsPage() {
  const [weekOf, setWeekOf] = useState(weeklyDevelopments[0]?.weekOf)
  const [category, setCategory] = useState<DevelopmentCategory | 'All'>('All')

  const week = weeklyDevelopments.find((w) => w.weekOf === weekOf)
  const items = week?.items.filter((item) => category === 'All' || item.category === category) ?? []
  const categoriesThisWeek = DEVELOPMENT_CATEGORIES.filter((c) => week?.items.some((item) => item.category === c))

  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-sm font-semibold text-brand">Updated every Monday</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">This week&apos;s developments</h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">
          The week&apos;s most important news in AI data governance and privacy law, from regulators,
          legislatures, courts, and industry.
        </p>

        {!week && (
          <div className="mt-8 rounded-2xl border-2 border-dashed border-line px-6 py-14 text-center">
            <h2 className="text-lg font-semibold">The first roundup is on its way</h2>
            <p className="mt-1 text-muted">New developments are posted every Monday. Check back soon.</p>
          </div>
        )}

        {week && (
          <>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
              <div>
                <h2 className="text-lg font-bold">Week of {formatDate(week.weekOf, longDate)}</h2>
                <p className="mt-0.5 text-sm text-muted">
                  Covering {formatDate(week.periodStart, shortDate)} to {formatDate(week.periodEnd, shortDate)}
                </p>
              </div>
              {weeklyDevelopments.length > 1 && (
                <label className="flex items-center gap-2 text-sm font-medium text-muted">
                  Past weeks
                  <select
                    value={weekOf}
                    onChange={(e) => {
                      setWeekOf(e.target.value)
                      setCategory('All')
                    }}
                    className="rounded-lg bg-surface px-3 py-2 text-ink ring-1 ring-line"
                  >
                    {weeklyDevelopments.map((w) => (
                      <option key={w.weekOf} value={w.weekOf}>
                        {formatDate(w.weekOf, longDate)}
                      </option>
                    ))}
                  </select>
                </label>
              )}
            </div>

            {categoriesThisWeek.length > 1 && (
              <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                {(['All', ...categoriesThisWeek] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                      category === c ? 'bg-ink text-white' : 'bg-surface text-muted ring-1 ring-line hover:text-ink'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-6 grid gap-4">
              {items.map((item) => (
                <DevelopmentCard key={item.url} item={item} />
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-muted">
              Summaries are written by AI from the linked sources and may contain errors. Check the original
              source before relying on any detail.
            </p>
          </>
        )}
      </div>
    </PageShell>
  )
}
