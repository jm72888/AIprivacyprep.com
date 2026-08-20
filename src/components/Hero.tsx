export function Hero() {
  return (
    <header className="border-b border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-16 text-center sm:py-20">
        <span className="mx-auto rounded-full border border-ink/15 bg-white px-4 py-1 text-sm text-ink/70">
          Free practice questions
        </span>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">
          Study for <span className="italic text-accent">CIPP</span> &amp;{' '}
          <span className="italic text-accent">AIGP</span>
        </h1>
        <p className="mx-auto max-w-xl text-base text-ink/70 sm:text-lg">
          Practice multiple-choice questions for CIPP/US, CIPP/E, and AIGP, with
          instant feedback and explanations for every answer.
        </p>
      </div>
    </header>
  )
}
