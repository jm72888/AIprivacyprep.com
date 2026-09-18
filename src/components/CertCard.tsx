import { Link } from 'react-router-dom'
import type { Certification } from '../lib/types'
import { certTheme } from '../lib/certTheme'
import { ArrowRight } from './icons'

export function CertCard({
  certification,
  domainCount,
  questionCount,
}: {
  certification: Certification
  domainCount?: number
  questionCount?: number
}) {
  const theme = certTheme(certification.id)
  return (
    <Link
      to={`/quiz/${certification.id}/setup`}
      className="group flex flex-col gap-5 rounded-2xl bg-surface p-5 shadow-card ring-1 ring-line transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand/30 sm:flex-row sm:items-center sm:p-6"
    >
      <span
        className={`flex h-14 w-20 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold tracking-wide ${theme.tile}`}
      >
        {certification.code}
      </span>
      <span className="flex-1">
        <span className="block text-lg font-bold">{theme.fullName}</span>
        <span className="mt-1 block leading-relaxed text-muted">{certification.description}</span>
        {domainCount !== undefined && questionCount !== undefined && (
          <span className="mt-3 flex gap-4 text-sm font-medium text-muted tabular-nums">
            <span>{domainCount} domains</span>
            <span>{questionCount} questions</span>
          </span>
        )}
      </span>
      <span className="inline-flex items-center gap-1.5 self-start rounded-xl bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-strong transition-colors duration-200 group-hover:bg-brand group-hover:text-white sm:self-center">
        Practice
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
