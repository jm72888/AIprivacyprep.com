import { Link } from 'react-router-dom'
import type { Certification } from '../lib/types'

export function CertCard({ certification }: { certification: Certification }) {
  return (
    <Link
      to={`/quiz/${certification.id}/setup`}
      className="block rounded-lg border-l-4 border-accent bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <h2 className="font-display text-2xl">{certification.name}</h2>
      <p className="mt-2 text-sm text-ink/70">{certification.description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-accent">Start practicing &rarr;</span>
    </Link>
  )
}
