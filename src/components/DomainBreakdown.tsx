import type { DomainScore } from '../lib/types'

export function DomainBreakdown({ scores }: { scores: DomainScore[] }) {
  return (
    <ul className="divide-y divide-line">
      {scores.map((score) => {
        const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
        const isWeak = pct < 70
        return (
          <li key={score.domainId} className="py-4 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between gap-4">
              <span className="flex min-w-0 items-center gap-2 font-medium">
                <span className="truncate">{score.domainName}</span>
                {isWeak && (
                  <span className="shrink-0 rounded-md bg-bad-soft px-1.5 py-0.5 text-xs font-semibold text-bad">
                    Needs work
                  </span>
                )}
              </span>
              <span className="shrink-0 text-sm tabular-nums text-muted">
                {score.correct}/{score.total}
                <span className={`ml-2 font-semibold ${isWeak ? 'text-bad' : 'text-good'}`}>{pct}%</span>
              </span>
            </div>
            <div className="relative mt-2 h-2 overflow-hidden rounded-full bg-line">
              <div
                className={`h-full rounded-full ${isWeak ? 'bg-bad' : 'bg-good'}`}
                style={{ width: `${pct}%` }}
              />
              <div className="absolute inset-y-0 left-[70%] w-0.5 bg-surface" aria-hidden="true" />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
