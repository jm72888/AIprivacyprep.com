import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { DomainBreakdown } from '../components/DomainBreakdown'
import { PillButton } from '../components/PillButton'
import { localDataClient } from '../lib/localDataClient'
import type { Attempt, Domain, DomainScore } from '../lib/types'

interface LocationState {
  attempt?: Attempt
}

export function ResultsPage() {
  const { certId = '' } = useParams()
  const location = useLocation()
  const attempt = (location.state as LocationState | null)?.attempt

  const [scores, setScores] = useState<DomainScore[]>([])

  useEffect(() => {
    if (!attempt) return
    localDataClient.listDomains(certId).then((domains: Domain[]) => {
      setScores(localDataClient.scoreByDomain(attempt, domains))
    })
  }, [attempt, certId])

  if (!attempt) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-12 text-center">
        <p className="text-ink/70">No results to show.</p>
        <Link to="/" className="mt-4 inline-block text-accent hover:underline">
          Back to home
        </Link>
      </div>
    )
  }

  const correct = attempt.answers.filter((a) => a.correct).length
  const total = attempt.answers.length
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <div className="rounded-lg border-l-4 border-accent bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-ink/50">Your score</p>
        <p className="mt-2 font-display text-5xl">{pct}%</p>
        <p className="mt-1 text-sm text-ink/70">
          {correct} of {total} correct
        </p>
      </div>

      <h2 className="mt-10 font-display text-xl">Breakdown by domain</h2>
      <div className="mt-4">
        <DomainBreakdown scores={scores} />
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link to={`/quiz/${certId}/setup`}>
          <PillButton variant="secondary">Try again</PillButton>
        </Link>
        <Link to="/">
          <PillButton>Back to home</PillButton>
        </Link>
      </div>
    </div>
  )
}
