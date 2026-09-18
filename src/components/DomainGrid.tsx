import { Link } from 'react-router-dom'
import { AIGP_SETUP_PATH } from '../data/certifications'
import type { Domain } from '../lib/types'
import { DomainIcon } from './DomainIcon'
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
    <ol className="border-b border-line">
      {domains.map((domain) => (
        <li key={domain.id} className="border-t border-line">
          <Link
            to={AIGP_SETUP_PATH}
            state={{ domainIds: [domain.id] }}
            className="group grid gap-x-8 gap-y-2 py-7 transition-colors hover:bg-surface sm:grid-cols-[3.5rem_1fr_auto] sm:items-center sm:px-3"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-info-soft text-info ring-1 ring-inset ring-info/15 transition-colors group-hover:ring-info/40">
              <DomainIcon domainId={domain.id} size={26} />
            </span>
            <span>
              <span className="block text-sm font-medium text-muted">Domain {domain.order}</span>
              <span className="mt-0.5 block text-xl font-semibold tracking-tight">{domain.name}</span>
              <span className="mt-1.5 block max-w-2xl leading-relaxed text-muted">{DOMAIN_SUMMARIES[domain.id]}</span>
            </span>
            <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold sm:mt-0">
              <span className="font-normal text-muted tabular-nums">{questionCounts[domain.id] ?? ''} questions</span>
              <ArrowRight className="h-4 w-4 text-brand transition-transform duration-150 group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  )
}
