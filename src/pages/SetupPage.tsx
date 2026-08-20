import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { DomainPicker } from '../components/DomainPicker'
import { PillButton } from '../components/PillButton'
import { localDataClient } from '../lib/localDataClient'
import type { Certification, Domain } from '../lib/types'

export function SetupPage() {
  const { certId = '' } = useParams()
  const navigate = useNavigate()
  const [certification, setCertification] = useState<Certification | null>(null)
  const [domains, setDomains] = useState<Domain[]>([])
  const [selected, setSelected] = useState<Set<string>>(new Set())

  useEffect(() => {
    let cancelled = false
    Promise.all([localDataClient.listCertifications(), localDataClient.listDomains(certId)]).then(
      ([certs, domainList]) => {
        if (cancelled) return
        setCertification(certs.find((c) => c.id === certId) ?? null)
        setDomains(domainList)
        setSelected(new Set(domainList.map((d) => d.id)))
      },
    )
    return () => {
      cancelled = true
    }
  }, [certId])

  const allSelected = useMemo(() => selected.size === domains.length && domains.length > 0, [selected, domains])

  function toggleDomain(domainId: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(domainId)) next.delete(domainId)
      else next.add(domainId)
      return next
    })
  }

  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(domains.map((d) => d.id)))
  }

  function startQuiz() {
    navigate(`/quiz/${certId}/run`, { state: { domainIds: [...selected] } })
  }

  if (!certification) return null

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <Link to="/" className="text-sm text-ink/50 hover:text-ink/70">
        &larr; Back
      </Link>
      <h1 className="mt-4 font-display text-3xl">{certification.name}</h1>
      <p className="mt-2 text-sm text-ink/70">Choose which domains to practice.</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-medium text-ink/70">
          {selected.size} of {domains.length} domains selected
        </span>
        <button onClick={toggleAll} className="text-sm font-medium text-accent hover:underline">
          {allSelected ? 'Deselect all' : 'Select all'}
        </button>
      </div>

      <div className="mt-4">
        <DomainPicker domains={domains} selected={selected} onToggle={toggleDomain} />
      </div>

      <div className="mt-8 flex justify-end">
        <PillButton disabled={selected.size === 0} onClick={startQuiz}>
          Start quiz
        </PillButton>
      </div>
    </div>
  )
}
