import { Link } from 'react-router-dom'
import { AIGP_SETUP_PATH } from '../data/certifications'
import type { Domain } from '../lib/types'
import { buttonClasses } from './Button'
import { DomainIcon } from './DomainIcon'
import { ArrowRight } from './icons'

export function Hero({ domains, questionCounts }: { domains: Domain[]; questionCounts: Record<string, number> }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:pb-20 lg:pt-20">
        <h1 className="max-w-5xl animate-[fade-slide-up_400ms_ease-out] text-[2.5rem] font-bold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
          Get ready for the <span className="text-brand">AI Governance Professional</span> exam
        </h1>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Practice questions for the IAPP AIGP exam, each with an explanation. Free, with no account.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link to="/practice" className={buttonClasses('primary', 'px-6 py-3 text-base')}>
                Start practicing
              </Link>
              <Link
                to="/developments"
                className="group inline-flex items-center gap-1.5 font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-brand"
              >
                This week&apos;s developments
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-muted">The five exam domains</h2>
            <ol className="mt-3 border-b border-line">
              {domains.map((domain) => (
                <li key={domain.id} className="border-t border-line">
                  <Link
                    to={AIGP_SETUP_PATH}
                    state={{ domainIds: [domain.id] }}
                    className="group grid grid-cols-[1.75rem_1fr_auto] items-center gap-3 py-3.5"
                  >
                    <DomainIcon domainId={domain.id} className="text-info" />
                    <span className="font-medium transition-colors group-hover:text-brand">{domain.name}</span>
                    <span className="text-sm text-muted tabular-nums">
                      {questionCounts[domain.id] ?? ''} questions
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
