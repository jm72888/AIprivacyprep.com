import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { ValueProp } from '../components/ValueProp'
import { DomainGrid } from '../components/DomainGrid'
import { PageShell } from '../components/SiteHeader'
import { localDataClient } from '../lib/localDataClient'
import type { Domain } from '../lib/types'

export function HomePage() {
  const location = useLocation()
  const [domains, setDomains] = useState<Domain[]>([])
  const [questionCounts, setQuestionCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    Promise.all([localDataClient.listDomains('aigp'), localDataClient.getQuestions('aigp', [])]).then(
      ([domainList, questions]) => {
        const counts: Record<string, number> = {}
        for (const question of questions) counts[question.domainId] = (counts[question.domainId] ?? 0) + 1
        setDomains(domainList)
        setQuestionCounts(counts)
      },
    )
  }, [])

  useEffect(() => {
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView()
  }, [location.hash])

  const totalQuestions = Object.values(questionCounts).reduce((sum, n) => sum + n, 0)

  return (
    <PageShell>
      <Hero
        questionCount={totalQuestions || undefined}
        domainCount={domains.length || undefined}
      />
      <ValueProp />
      <section id="domains" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand">What the exam covers</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Every AIGP domain, one quiz at a time
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Questions follow the domains in the public AIGP exam outline. Drill a single domain or mix them
            all together.
          </p>
        </div>
        <div className="mt-10">
          <DomainGrid domains={domains} questionCounts={questionCounts} />
        </div>
      </section>
    </PageShell>
  )
}
