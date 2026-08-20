function StatChip({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-full border px-4 py-2 text-sm transition-transform duration-150 ease-out hover:-translate-y-0.5 ${
        accent ? 'border-accent bg-accent-soft text-accent' : 'border-ink/15 bg-white text-ink/80'
      }`}
    >
      <span className="font-semibold">{value}</span> <span className="text-ink/70">{label}</span>
    </div>
  )
}

export function ValueProp() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-16 text-center">
      <h2 className="font-display text-2xl sm:text-3xl">Certification isn&apos;t cheap. Practice is free.</h2>
      <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
        Exam fees are just the start. Add optional extras like annual IAPP
        membership (~$275&ndash;$295), textbooks ($75&ndash;$95), or digital
        practice exams (~$55), and prep can easily top $1,000 before exam
        day. Get comfortable with the material here first &mdash; it
        won&apos;t cost you anything.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <StatChip value="$550" label="CIPP exam" />
        <StatChip value="$649–$799" label="AIGP exam" />
        <StatChip value="$995–$1,195" label="training course" />
        <StatChip value="$0" label="practicing here" accent />
      </div>
    </section>
  )
}
