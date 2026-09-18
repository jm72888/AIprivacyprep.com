import { Link } from 'react-router-dom'
import { AIGP_SETUP_PATH } from '../data/certifications'
import { buttonClasses } from './Button'
import { CertBadge } from './CertBadge'
import { ArrowRight, Check } from './icons'

const SAMPLE_CHOICES = ['Data drift', 'Hallucination', 'Overfitting', 'Model collapse']

function SampleQuestion() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:mx-0">
      <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-gradient-to-br from-brand/15 via-amber-200/30 to-teal-200/25 blur-sm" />
      <div className="rounded-2xl bg-surface p-6 shadow-lift ring-1 ring-line">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <CertBadge certId="aigp" code="AIGP" />
            <span className="text-xs font-medium text-muted">AI Foundations</span>
          </span>
          <span className="text-xs font-medium text-muted tabular-nums">4 of 10</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
          <div className="h-full w-2/5 rounded-full bg-brand" />
        </div>
        <p className="mt-5 font-semibold leading-snug">
          An assistant grounded with retrieval augmentation still cites a court case that doesn&apos;t
          exist. What is this failure called?
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
          <span className="font-semibold text-good">Correct.</span> Retrieval augmentation lowers the risk of
          fabricated output, but it doesn&apos;t eliminate it.
        </p>
      </div>
    </div>
  )
}

export function Hero({ questionCount, domainCount }: { questionCount?: number; domainCount?: number }) {
  const stats = [
    { value: questionCount, label: 'practice questions' },
    { value: domainCount, label: 'exam domains' },
    { value: '100%', label: 'with explanations' },
  ]

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl sm:left-1/4" />
        <div className="absolute top-20 -right-20 h-[26rem] w-[26rem] rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-[20rem] w-[20rem] rounded-full bg-teal-200/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div className="animate-[fade-slide-up_400ms_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-good ring-1 ring-line">
            <span className="h-1.5 w-1.5 rounded-full bg-good" />
            Free &middot; No sign-up
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Get ready for the <span className="text-brand">AIGP exam</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Scenario-based questions on AI governance for the IAPP&rsquo;s Artificial Intelligence Governance
            Professional certification. Get an explanation after every answer and see which domains
            need more study.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={AIGP_SETUP_PATH} className={buttonClasses('primary', 'px-6 py-3 text-base')}>
              Start practicing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#domains" className={buttonClasses('secondary', 'px-6 py-3 text-base')}>
              See what&apos;s covered
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="text-2xl font-extrabold tabular-nums">{stat.value ?? '–'}</dd>
              </div>
            ))}
          </dl>
        </div>

        <SampleQuestion />
      </div>
    </section>
  )
}
