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
      <main className="mx-auto max-w-2xl px-6 py-12">
        <p className="font-mono text-xs uppercase tracking-widest text-ink/70">
          Docket &middot; Table of Contents
        </p>
        <div id="certifications" className="mt-4">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>
        <div className="mt-10 border-t border-rule/30 pt-6 text-center">
          <Link
            to="/history"
            className="font-mono text-xs uppercase tracking-wider text-ink/70 underline decoration-ink/20 underline-offset-4 transition-colors duration-150 hover:text-accent"
          >
            View practitioner docket
          </Link>
        </div>
      </main>
    </div>
  )
}
