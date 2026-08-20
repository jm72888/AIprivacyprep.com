import { Button } from './Button'

function scrollToCertifications() {
  document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <header className="bg-hero px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-paper/60">
          Practice Docket &middot; No. 2026&ndash;01
        </p>
        <h1 className="mt-4 font-display text-4xl italic tracking-tight text-paper sm:text-5xl">
          <span className="text-accent not-italic">&sect;</span> CIPP &middot; CIPP/E &middot; AIGP
        </h1>
        <div className="mt-6 border-t border-paper/20" />
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <p className="text-sm leading-relaxed text-paper/70 sm:text-base">
            Practice multiple-choice questions for the IAPP&rsquo;s CIPP/US,
            CIPP/E, and AIGP certifications &mdash; Certified Information
            Privacy Professional and Artificial Intelligence Governance
            Professional &mdash; with an explanation issued after every
            answer.
          </p>
          <p className="text-sm leading-relaxed text-paper/70 sm:text-base">
            No account, no email, no filing required. Public determinations
            are session-only; the practitioner of record keeps a durable
            docket of past attempts.
          </p>
        </div>
        <Button variant="invert" onClick={scrollToCertifications} className="mt-8">
          &sect; Begin practicing
        </Button>
      </div>
    </header>
  )
}
