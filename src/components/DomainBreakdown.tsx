import type { DomainScore } from '../lib/types'

export function DomainBreakdown({ scores }: { scores: DomainScore[] }) {
  return (
    <div className="flex flex-col gap-3">
      {scores.map((score) => {
        const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
        const isWeak = pct < 70
        return (
          <div
            key={score.domainId}
            className={`rounded-lg border-l-4 bg-white p-4 shadow-sm ${isWeak ? 'border-bad' : 'border-good'}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium">{score.domainName}</span>
              <span className="text-sm text-ink/70">
                {score.correct}/{score.total} ({pct}%)
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper">
              <div
                className={`h-full rounded-full ${isWeak ? 'bg-bad' : 'bg-good'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
