import { Link } from 'react-router-dom'
import type { Certification } from '../lib/types'

export function CertCard({ certification, index }: { certification: Certification; index: number }) {
  return (
    <Link
      to={`/quiz/${certification.id}/setup`}
      className="group flex items-baseline gap-4 border-t border-rule/40 py-5 transition-colors duration-150 ease-out first:border-t-0 hover:bg-accent-soft/30 sm:gap-6 sm:px-2"
    >
      <span className="font-mono text-sm text-ink/70">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="font-mono text-xs uppercase tracking-wider text-accent">
        {certification.code}
      </span>
      <span className="flex-1">
        <span className="font-display text-[1.40625rem] italic">{certification.name}</span>
        <span className="mt-1 block text-[1.09375rem] text-ink/70">{certification.description}</span>
      </span>
      <span className="self-center font-mono text-lg text-ink/50 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-accent">
        &rarr;
      </span>
    </Link>
  )
}
