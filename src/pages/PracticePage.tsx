import { DomainGrid } from '../components/DomainGrid'
import { PageShell } from '../components/SiteHeader'
import { useAigpDomains } from '../lib/useAigpDomains'

export function PracticePage() {
  const { domains, questionCounts } = useAigpDomains()

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="max-w-2xl animate-[fade-slide-up_300ms_ease-out]">
          <p className="text-sm font-semibold text-brand">What the exam covers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Every AIGP domain, one quiz at a time
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Questions follow the domains in the public AIGP exam outline. Drill a single domain or mix them
            all together.
          </p>
        </div>
        <div className="mt-10">
          <DomainGrid domains={domains} questionCounts={questionCounts} />
        </div>
      </div>
    </PageShell>
  )
}
