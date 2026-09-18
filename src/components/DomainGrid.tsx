import { Link } from 'react-router-dom'
import { AIGP_SETUP_PATH } from '../data/certifications'
import type { Domain } from '../lib/types'
import { ArrowRight } from './icons'

const DOMAIN_SUMMARIES: Record<string, string> = {
  'aigp-foundations': 'How AI systems are built and used: training vs. inference, model types, and common failure modes.',
  'aigp-risks': 'Harms to individuals, groups, and society, from bias and discrimination to privacy and safety impacts.',
  'aigp-lifecycle': 'Governance checkpoints from design and data sourcing through testing, deployment, and monitoring.',
  'aigp-law': 'The EU AI Act, existing privacy and anti-discrimination law, and frameworks like the NIST AI RMF and ISO/IEC 42001.',
  'aigp-governance': 'Building an AI governance program: roles, policies, impact assessments, and ongoing risk management.',
}

export function DomainGrid({ domains, questionCounts }: { domains: Domain[]; questionCounts: Record<string, number> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {domains.map((domain) => (
        <Link
          key={domain.id}
          to={AIGP_SETUP_PATH}
          state={{ domainIds: [domain.id] }}
          className="group flex flex-col rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand/30"
        >
          <span className="flex items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-sm font-extrabold text-amber-800 tabular-nums">
              {domain.order}
            </span>
            {questionCounts[domain.id] !== undefined && (
              <span className="text-sm font-medium text-muted tabular-nums">{questionCounts[domain.id]} questions</span>
            )}
          </span>
          <span className="mt-4 text-lg font-bold leading-snug">{domain.name}</span>
          <span className="mt-2 flex-1 leading-relaxed text-muted">{DOMAIN_SUMMARIES[domain.id]}</span>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            Practice this domain
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
      <Link
        to={AIGP_SETUP_PATH}
        className="group flex flex-col justify-between rounded-2xl bg-brand p-6 text-white shadow-lift transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-strong"
      >
        <span>
          <span className="text-lg font-bold">Practice all domains</span>
          <span className="mt-2 block leading-relaxed text-white/85">
            Mix questions from across the exam outline, or pick the exact domains you want to drill.
          </span>
        </span>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
          Start a quiz
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  )
}
