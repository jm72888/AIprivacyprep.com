import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { DomainBreakdown } from '../components/DomainBreakdown'
import { buttonClasses } from '../components/Button'
import { CertBadge } from '../components/CertBadge'
import { PageShell } from '../components/SiteHeader'
import { certifications } from '../data/certifications'
import { localDataClient } from '../lib/localDataClient'
import type { Attempt, Domain, DomainScore } from '../lib/types'

interface LocationState {
  attempt?: Attempt
}

function ScoreRing({ pct }: { pct: number }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const strong = pct >= 70
  return (
    <div className="relative h-40 w-40 shrink-0">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="60" cy="60" r={radius} fill="none" strokeWidth="10" className="stroke-line" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - pct / 100)}
          className={`transition-[stroke-dashoffset] duration-700 ease-out ${strong ? 'stroke-good' : 'stroke-brand'}`}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold tabular-nums">
        {pct}%
      </span>
    </div>
  )
}

export function ResultsPage() {
  const { certId = '' } = useParams()
  const location = useLocation()
  const attempt = (location.state as LocationState | null)?.attempt
  const certification = certifications.find((c) => c.id === certId)

  const [scores, setScores] = useState<DomainScore[]>([])

  useEffect(() => {
    if (!attempt) return
    localDataClient.listDomains(certId).then((domains: Domain[]) => {
      setScores(localDataClient.scoreByDomain(attempt, domains))
    })
  }, [attempt, certId])

  if (!attempt) {
    return (
      <PageShell>
        <div className="mx-auto max-w-md px-4 py-20 text-center sm:px-6">
          <h1 className="text-2xl font-bold">No results to show</h1>
          <p className="mt-2 text-muted">Finish a quiz to see your score and domain breakdown here.</p>
          <Link to="/#certifications" className={buttonClasses('primary', 'mt-6')}>
            Choose a certification
          </Link>
        </div>
      </PageShell>
    )
  }

  const correct = attempt.answers.filter((a) => a.correct).length
  const total = attempt.answers.length
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const weakCount = scores.filter((s) => s.total > 0 && s.correct / s.total < 0.7).length

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="animate-[fade-slide-up_300ms_ease-out] rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line sm:p-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <ScoreRing pct={pct} />
            <div>
              {certification && <CertBadge certId={certification.id} code={certification.code} />}
              <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {pct >= 70 ? 'Strong result' : 'Keep practicing'}
              </h1>
              <p className="mt-2 text-muted tabular-nums">
                You answered {correct} of {total} questions correctly.
                {weakCount > 0 && ` ${weakCount} ${weakCount === 1 ? 'domain needs' : 'domains need'} more work.`}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line sm:p-8">
          <div className="mb-5 flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-bold">Breakdown by domain</h2>
            <span className="text-xs text-muted">Target: 70%</span>
          </div>
          <DomainBreakdown scores={scores} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to={`/quiz/${certId}/setup`} className={buttonClasses('primary')}>
            Try again
          </Link>
          <Link to="/history" className={buttonClasses('secondary')}>
            View history
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
