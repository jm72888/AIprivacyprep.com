function Citation({ n, label, value }: { n: number; label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3 border-t border-rule/30 py-2 first:border-t-0">
      <span className="font-mono text-xs text-ink/70">REF.{n}</span>
      <span className="flex-1 text-sm text-ink/70">{label}</span>
      <span className="font-mono text-sm font-medium">{value}</span>
    </div>
  )
}

export function ValueProp() {
  return (
    <section className="mx-auto max-w-2xl border-b border-rule/30 px-6 pb-10 pt-12">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Notice</p>
      <h2 className="mt-2 font-display text-2xl italic sm:text-3xl">
        Certification isn&apos;t cheap. Practice is free.
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
        Exam fees are just the start. Add optional extras like annual IAPP
        membership, textbooks, or digital practice exams, and prep can
        easily top $1,000 before exam day. Get comfortable with the
        material here first &mdash; it won&apos;t cost you anything.
      </p>
      <div className="mt-6">
        <Citation n={1} label="CIPP exam fee" value="$550" />
        <Citation n={2} label="AIGP exam fee" value="$649–$799" />
        <Citation n={3} label="Annual IAPP membership" value="$275–$295" />
        <Citation n={4} label="Formal training course" value="$995–$1,195" />
        <Citation n={5} label="Practicing here" value="$0" />
      </div>
    </section>
  )
}
