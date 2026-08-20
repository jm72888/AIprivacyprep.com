import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { ValueProp } from '../components/ValueProp'
import { CertCard } from '../components/CertCard'
import { certifications } from '../data/certifications'

export function HomePage() {
  return (
    <div>
      <Hero />
      <ValueProp />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <p className="mb-6 text-center text-sm text-ink/70">
          No account, no email, no time limit &mdash; just pick a certification
          and go.
        </p>
        <div id="certifications" className="grid gap-6 sm:grid-cols-3">
          {certifications.map((cert) => (
            <CertCard key={cert.id} certification={cert} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/history"
            className="text-sm text-ink/70 underline decoration-ink/20 underline-offset-4 transition-colors duration-150 hover:text-accent"
          >
            View your practice history
          </Link>
        </div>
      </main>
    </div>
  )
}
