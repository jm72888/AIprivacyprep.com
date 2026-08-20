import type { DomainScore } from '../lib/types'

function Scale({ pct, weak }: { pct: number; weak: boolean }) {
  const ticks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  return (
    <div className="relative mt-2 h-4 border border-rule/50">
      <div
        className={`absolute inset-y-0 left-0 ${weak ? 'bg-bad-soft' : 'bg-good-soft'}`}
        style={{ width: `${pct}%` }}
      />
      {ticks.map((t) => (
        <div
          key={t}
          className="absolute top-0 h-full border-l border-rule/40"
          style={{ left: `${t}%` }}
        />
      ))}
      <div
        className={`absolute top-0 h-full w-px ${weak ? 'bg-bad' : 'bg-good'}`}
        style={{ left: `${pct}%` }}
      />
    </div>
  )
}

export function DomainBreakdown({ scores }: { scores: DomainScore[] }) {
  return (
    <div>
      {scores.map((score) => {
        const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
        const isWeak = pct < 70
        return (
          <div key={score.domainId} className="border-t border-rule/30 py-4 first:border-t-0">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium">{score.domainName}</span>
              <span className="font-mono text-sm text-ink/70">
                {score.correct}/{score.total} &middot; {pct}%
              </span>
            </div>
            <Scale pct={pct} weak={isWeak} />
          </div>
        )
      })}
    </div>
  )
}
