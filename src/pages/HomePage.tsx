import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { ValueProp } from '../components/ValueProp'
import { CertCard } from '../components/CertCard'
import { PageShell } from '../components/SiteHeader'
import { certifications } from '../data/certifications'
import { localDataClient } from '../lib/localDataClient'

type Counts = Record<string, { domains: number; questions: number }>

export function HomePage() {
  const location = useLocation()
  const [counts, setCounts] = useState<Counts>({})

  useEffect(() => {
    Promise.all(
      certifications.map(async (cert) => {
        const [domains, questions] = await Promise.all([
          localDataClient.listDomains(cert.id),
          localDataClient.getQuestions(cert.id, []),
        ])
        return [cert.id, { domains: domains.length, questions: questions.length }] as const
      }),
    ).then((entries) => setCounts(Object.fromEntries(entries)))
  }, [])

  useEffect(() => {
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView()
  }, [location.hash])

  return (
    <PageShell>
      <Hero />
      <ValueProp />
      <section id="certifications" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand">Certifications</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Pick where to start</h2>
          <p className="mt-3 text-lg text-muted">
            Choose a certification, narrow it to the domains you want, and start answering.
          </p>
        </div>
        <div className="mt-10 grid gap-4">
          {certifications.map((cert) => (
            <CertCard
              key={cert.id}
              certification={cert}
              domainCount={counts[cert.id]?.domains}
              questionCount={counts[cert.id]?.questions}
            />
          ))}
        </div>
      </section>
    </PageShell>
  )
}
