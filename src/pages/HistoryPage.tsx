import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { buttonClasses } from '../components/Button'
import { CertBadge } from '../components/CertBadge'
import { PageShell } from '../components/SiteHeader'
import { certifications } from '../data/certifications'
import { localDataClient } from '../lib/localDataClient'
import type { Attempt } from '../lib/types'

const dateFormat = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' })

export function HistoryPage() {
  const [attempts, setAttempts] = useState<Attempt[] | null>(null)

  useEffect(() => {
    localDataClient.listAttempts().then(setAttempts)
  }, [])

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Practice history</h1>
        <p className="mt-2 text-muted">Saved in this browser only. Synced history is coming in a future update.</p>

        {attempts?.length === 0 && (
          <div className="mt-8 rounded-2xl border-2 border-dashed border-line px-6 py-14 text-center">
            <h2 className="text-lg font-semibold">No quizzes yet</h2>
            <p className="mt-1 text-muted">Your scores will show up here after you finish your first quiz.</p>
            <Link to="/#certifications" className={buttonClasses('primary', 'mt-6')}>
              Start practicing
            </Link>
          </div>
        )}

        {attempts && attempts.length > 0 && (
          <ul className="mt-8 divide-y divide-line overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-line">
            {attempts.map((attempt) => {
              const cert = certifications.find((c) => c.id === attempt.certificationId)
              const correct = attempt.answers.filter((a) => a.correct).length
              const total = attempt.answers.length
              const pct = total > 0 ? Math.round((correct / total) * 100) : 0
              const strong = pct >= 70
              return (
                <li key={attempt.id} className="flex items-center gap-4 px-5 py-4 sm:px-6">
                  <div className="min-w-0 flex-1">
                    <CertBadge certId={attempt.certificationId} code={cert?.code ?? attempt.certificationId} />
                    <p className="mt-1.5 text-sm text-muted">
                      {dateFormat.format(new Date(attempt.finishedAt))} &middot;{' '}
                      <span className="tabular-nums">
                        {correct}/{total} correct
                      </span>
                    </p>
                  </div>
                  <span
                    className={`rounded-lg px-3 py-1.5 text-lg font-bold tabular-nums ${
                      strong ? 'bg-good-soft text-good' : 'bg-bad-soft text-bad'
                    }`}
                  >
                    {pct}%
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </PageShell>
  )
}
