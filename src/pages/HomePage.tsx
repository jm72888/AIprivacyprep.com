import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { CertCard } from '../components/CertCard'
import { certifications } from '../data/certifications'

export function HomePage() {
  return (
    <div>
      <Hero />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {certifications.map((cert) => (
            <CertCard key={cert.id} certification={cert} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/history" className="text-sm text-ink/50 underline decoration-ink/20 underline-offset-4 hover:text-ink/70">
            View your practice history
          </Link>
        </div>
      </main>
    </div>
  )
}
