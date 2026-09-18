import { Hero } from '../components/Hero'
import { ValueProp } from '../components/ValueProp'
import { PageShell } from '../components/SiteHeader'
import { useAigpDomains } from '../lib/useAigpDomains'

export function HomePage() {
  const { domains, totalQuestions } = useAigpDomains()

  return (
    <PageShell>
      <Hero questionCount={totalQuestions || undefined} domainCount={domains.length || undefined} />
      <ValueProp />
    </PageShell>
  )
}
