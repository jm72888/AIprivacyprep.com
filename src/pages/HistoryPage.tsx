import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { certifications } from '../data/certifications'
import { localDataClient } from '../lib/localDataClient'
import type { Attempt } from '../lib/types'

export function HistoryPage() {
  const [attempts, setAttempts] = useState<Attempt[] | null>(null)

  useEffect(() => {
    localDataClient.listAttempts().then(setAttempts)
  }, [])

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <Link to="/" className="font-mono text-xs uppercase tracking-wider text-ink/70 hover:text-accent">
        &larr; Back
      </Link>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-accent">Docket</p>
      <h1 className="mt-1 font-display text-3xl italic">Practice history</h1>
      <p className="mt-2 text-sm text-ink/70">
        Stored in this browser only. This will move to a synced account in a future update.
      </p>

      <div className="mt-6 border-t border-rule/40">
        {attempts?.length === 0 && (
          <p className="border-b border-rule/40 py-4 text-sm text-ink/70">No attempts yet.</p>
        )}
        {attempts?.map((attempt) => {
          const cert = certifications.find((c) => c.id === attempt.certificationId)
          const correct = attempt.answers.filter((a) => a.correct).length
          const total = attempt.answers.length
          const pct = total > 0 ? Math.round((correct / total) * 100) : 0
          return (
            <div key={attempt.id} className="flex items-center justify-between border-b border-rule/40 py-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {cert?.code ?? attempt.certificationId}
                </p>
                <p className="mt-1 text-xs text-ink/70">{new Date(attempt.finishedAt).toLocaleString()}</p>
              </div>
              <p className="font-display text-xl italic">{pct}%</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
