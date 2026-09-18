import { Link } from 'react-router-dom'
import { certifications } from '../data/certifications'
import { buttonClasses } from './Button'
import { CertBadge } from './CertBadge'
import { ArrowRight, Check } from './icons'

const SAMPLE_CHOICES = ['24 hours', '72 hours', '7 days', '30 days']

function SampleQuestion() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:mx-0">
      <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-gradient-to-br from-brand/15 via-teal-300/20 to-amber-200/30 blur-sm" />
      <div className="rounded-2xl bg-surface p-6 shadow-lift ring-1 ring-line">
        <div className="flex items-center justify-between">
          <CertBadge certId="cipp-e" code="CIPP/E" />
          <span className="text-xs font-medium text-muted tabular-nums">Question 4 of 10</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
          <div className="h-full w-2/5 rounded-full bg-brand" />
        </div>
        <p className="mt-5 font-semibold leading-snug">
          Under the GDPR, how long does a controller have to notify the supervisory authority of a
          personal data breach?
        </p>
        <div className="mt-4 space-y-2">
          {SAMPLE_CHOICES.map((choice, i) => {
            const correct = i === 1
            return (
              <div
                key={choice}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ring-1 ring-inset ${
                  correct ? 'bg-good-soft font-semibold text-good ring-good/40' : 'text-muted ring-line'
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${
                    correct ? 'bg-good text-white' : 'bg-canvas text-muted'
                  }`}
                >
                  {correct ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : String.fromCharCode(65 + i)}
                </span>
                {choice}
              </div>
            )
          })}
        </div>
        <p className="mt-4 rounded-xl bg-canvas p-3 text-xs leading-relaxed text-muted">
          <span className="font-semibold text-good">Correct.</span> Article 33 requires notification without
          undue delay and, where feasible, within 72 hours of becoming aware of the breach.
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl sm:left-1/4" />
        <div className="absolute top-20 -right-20 h-[26rem] w-[26rem] rounded-full bg-teal-300/25 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-[20rem] w-[20rem] rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div className="animate-[fade-slide-up_400ms_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-good ring-1 ring-line">
            <span className="h-1.5 w-1.5 rounded-full bg-good" />
            Free &middot; No sign-up
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Get exam-ready for your <span className="text-brand">IAPP certification</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Practice multiple-choice questions for CIPP/US, CIPP/E, and AIGP. Every answer comes with an
            explanation, and your results show which domains need more work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#certifications" className={buttonClasses('primary', 'px-6 py-3 text-base')}>
              Start practicing
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/history" className={buttonClasses('secondary', 'px-6 py-3 text-base')}>
              View history
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-2 text-sm text-muted">
            <span className="mr-1">Covers</span>
            {certifications.map((cert) => (
              <CertBadge key={cert.id} certId={cert.id} code={cert.code} />
            ))}
          </div>
        </div>

        <SampleQuestion />
      </div>
    </section>
  )
}
