import { Link } from 'react-router-dom'
import { buttonClasses } from '../components/Button'
import { DomainGrid } from '../components/DomainGrid'
import { PageShell } from '../components/SiteHeader'
import { AIGP_SETUP_PATH } from '../data/certifications'
import { QUESTIONS_PER_DOMAIN } from '../lib/localDataClient'
import { useAigpDomains } from '../lib/useAigpDomains'

export function PracticePage() {
  const { domains, questionCounts } = useAigpDomains()

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl animate-[fade-slide-up_300ms_ease-out]">
            <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Practice by domain</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Each run gives you {QUESTIONS_PER_DOMAIN} new questions per domain, following the public AIGP exam
              outline.
            </p>
          </div>
          <Link to={AIGP_SETUP_PATH} className={buttonClasses('primary', 'px-6 py-3 text-base')}>
            Practice all domains
          </Link>
        </div>
        <div className="mt-12">
          <DomainGrid domains={domains} questionCounts={questionCounts} />
        </div>
      </div>
    </PageShell>
  )
}
