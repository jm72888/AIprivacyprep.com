import { Link } from 'react-router-dom'
import type { Certification } from '../lib/types'

export function CertCard({ certification }: { certification: Certification }) {
  return (
    <Link
      to={`/quiz/${certification.id}/setup`}
      className="group block rounded-lg border-l-4 border-accent bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-sm active:duration-75"
    >
      <h2 className="font-display text-2xl">{certification.name}</h2>
      <p className="mt-2 text-sm text-ink/70">{certification.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Start practicing
        <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">&rarr;</span>
      </span>
    </Link>
  )
}
