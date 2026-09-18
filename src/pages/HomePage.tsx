import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { ValueProp } from '../components/ValueProp'
import { PageShell } from '../components/SiteHeader'
import { ArrowRight } from '../components/icons'
import { weeklyDevelopments } from '../data/developments'
import { useAigpDomains } from '../lib/useAigpDomains'

const shortDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })

function LatestDevelopments() {
  const week = weeklyDevelopments[0]
  if (!week) return null
  const items = week.items.slice(0, 4)

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-[-0.025em] sm:text-4xl">In AI governance this week</h2>
          <Link
            to="/developments"
            className="group inline-flex items-center gap-1.5 font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-brand"
          >
            All developments
            <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.url} className="border-t border-line py-5">
              <p className="text-sm text-muted">
                <span className="font-semibold text-info">{item.category}</span>
                <span className="mx-2 text-line" aria-hidden="true">|</span>
                {item.region}, {shortDate.format(new Date(`${item.publishedDate}T00:00:00Z`))}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold leading-snug tracking-tight transition-colors hover:text-info"
              >
                {item.title}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function HomePage() {
  const { domains, questionCounts } = useAigpDomains()

  return (
    <PageShell>
      <Hero domains={domains} questionCounts={questionCounts} />
      <ValueProp />
      <LatestDevelopments />
    </PageShell>
  )
}
