const COSTS = [
  { label: 'AIGP exam fee', value: '$649-$799' },
  { label: 'Annual IAPP membership', value: '$275-$295' },
  { label: 'Formal AIGP training course', value: '$995-$1,195' },
]

export function ValueProp() {
  return (
    <section className="border-b border-info/15 bg-info-soft">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
          The AIGP isn&apos;t cheap. Practicing for it can be.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Prep can pass $2,000 before exam day. Test yourself here first and spend where you need it.
        </p>

        <dl className="mt-12 grid grid-cols-1 border-t-2 border-info sm:grid-cols-2 lg:grid-cols-4">
          {COSTS.map((cost) => (
            <div key={cost.label} className="border-b border-info/15 py-6 sm:pr-6 lg:border-b-0">
              <dt className="text-sm text-muted">{cost.label}</dt>
              <dd className="mt-2 text-2xl font-semibold tracking-tight">{cost.value}</dd>
            </div>
          ))}
          <div className="py-6">
            <dt className="text-sm font-semibold text-brand">Practicing here</dt>
            <dd className="mt-2 text-2xl font-bold tracking-tight text-brand">$0</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
