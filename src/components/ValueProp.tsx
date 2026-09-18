const COSTS = [
  { label: 'AIGP exam fee', value: '$649–$799' },
  { label: 'Annual IAPP membership', value: '$275–$295' },
  { label: 'Formal AIGP training course', value: '$995–$1,195' },
]

export function ValueProp() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold text-brand">Why it&apos;s free</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            The AIGP isn&apos;t cheap. Practicing for it can be.
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
            Between the exam fee, membership, and an official training course, AIGP prep can pass $2,000
            before you sit the exam. Test yourself here first and spend your study budget where you
            actually need it.
          </p>
        </div>

        <div className="rounded-2xl bg-canvas p-2 ring-1 ring-line">
          <dl className="divide-y divide-line rounded-xl bg-surface px-5 shadow-card">
            {COSTS.map((cost) => (
              <div key={cost.label} className="flex items-center justify-between gap-4 py-4">
                <dt className="text-muted">{cost.label}</dt>
                <dd className="font-semibold tabular-nums">{cost.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-2 flex items-center justify-between gap-4 rounded-xl bg-good px-5 py-4 text-white">
            <span className="font-semibold">Practicing here</span>
            <span className="text-2xl font-extrabold tabular-nums">$0</span>
          </div>
        </div>
      </div>
    </section>
  )
}
