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
      <Link to="/" className="text-sm text-ink/50 hover:text-ink/70">
        &larr; Back
      </Link>
      <h1 className="mt-4 font-display text-3xl">Practice history</h1>
      <p className="mt-2 text-sm text-ink/70">
        Stored in this browser only. This will move to a synced account in a future update.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {attempts?.length === 0 && <p className="text-sm text-ink/50">No attempts yet.</p>}
        {attempts?.map((attempt) => {
          const cert = certifications.find((c) => c.id === attempt.certificationId)
          const correct = attempt.answers.filter((a) => a.correct).length
          const total = attempt.answers.length
          const pct = total > 0 ? Math.round((correct / total) * 100) : 0
          return (
            <div key={attempt.id} className="flex items-center justify-between rounded-lg border-l-4 border-accent bg-white p-4 shadow-sm">
              <div>
                <p className="text-sm font-medium">{cert?.name ?? attempt.certificationId}</p>
                <p className="text-xs text-ink/50">{new Date(attempt.finishedAt).toLocaleString()}</p>
              </div>
              <p className="font-display text-xl">{pct}%</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
