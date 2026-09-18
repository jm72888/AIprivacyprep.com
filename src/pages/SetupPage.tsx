import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { DomainPicker } from '../components/DomainPicker'
import { Button, buttonClasses } from '../components/Button'
import { CertBadge } from '../components/CertBadge'
import { PageShell } from '../components/SiteHeader'
import { ArrowLeft, ArrowRight } from '../components/icons'
import { certTheme } from '../lib/certTheme'
import { localDataClient, QUESTIONS_PER_DOMAIN } from '../lib/localDataClient'
import type { Certification, Domain } from '../lib/types'

export function SetupPage() {
  const { certId = '' } = useParams()
  const navigate = useNavigate()
  const requestedDomainIds = (useLocation().state as { domainIds?: string[] } | null)?.domainIds
  const [certification, setCertification] = useState<Certification | null>(null)
  const [domains, setDomains] = useState<Domain[]>([])
  const [selected, setSelected] = useState<Set<string>>(new Set())

  useEffect(() => {
    let cancelled = false
    Promise.all([localDataClient.listCertifications(), localDataClient.listDomains(certId)]).then(
      ([certs, domainList]) => {
        if (cancelled) return
        setCertification(certs.find((c) => c.id === certId) ?? null)
        setDomains(domainList)
        const requested = domainList.filter((d) => requestedDomainIds?.includes(d.id))
        setSelected(new Set((requested.length > 0 ? requested : domainList).map((d) => d.id)))
      },
    )
    return () => {
      cancelled = true
    }
    // Only apply the preselection on first load, not when navigating back from a quiz.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [certId])

  const allSelected = useMemo(() => selected.size === domains.length && domains.length > 0, [selected, domains])

  function toggleDomain(domainId: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(domainId)) next.delete(domainId)
      else next.add(domainId)
      return next
    })
  }

  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(domains.map((d) => d.id)))
  }

  function startQuiz() {
    navigate(`/quiz/${certId}/run`, { state: { domainIds: [...selected] } })
  }

  if (!certification) return null

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/practice"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to practice
        </Link>

        <div className="mt-6 animate-[fade-slide-up_300ms_ease-out]">
          <CertBadge certId={certification.id} code={certification.code} />
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{certTheme(certification.id).fullName}</h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{certification.description}</p>
        </div>

        <div className="mt-10 rounded-2xl bg-surface p-5 shadow-card ring-1 ring-line sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-semibold">Choose your domains</h2>
              <p className="mt-0.5 text-sm text-muted tabular-nums">
                {selected.size} of {domains.length} selected &middot; {selected.size * QUESTIONS_PER_DOMAIN} questions
              </p>
              <p className="mt-1 text-sm text-muted">
                Each run gives you {QUESTIONS_PER_DOMAIN} questions per domain that you haven&apos;t answered yet.
              </p>
            </div>
            <Button variant="ghost" onClick={toggleAll} className="px-3 py-2 text-brand hover:text-brand-strong">
              {allSelected ? 'Clear all' : 'Select all'}
            </Button>
          </div>

          <div className="mt-5">
            <DomainPicker
              domains={domains}
              selected={selected}
              onToggle={toggleDomain}
              progress={localDataClient.getRoundProgress(certId)}
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
            <Link to="/practice" className={buttonClasses('ghost')}>
              Cancel
            </Link>
            <Button disabled={selected.size === 0} onClick={startQuiz}>
              Start quiz
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
