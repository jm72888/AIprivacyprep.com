import { certifications } from '../data/certifications'
import { cippUsDomains } from '../data/domains/cipp-us'
import { cippEDomains } from '../data/domains/cipp-e'
import { aigpDomains } from '../data/domains/aigp'
import { cippUsQuestions } from '../data/questions/cipp-us'
import { cippEQuestions } from '../data/questions/cipp-e'
import { aigpQuestions } from '../data/questions/aigp'
import type { Attempt, Domain, DomainScore, Question } from './types'
import type { DataClient } from './dataClient'

const domainsByCert: Record<string, Domain[]> = {
  'cipp-us': cippUsDomains,
  'cipp-e': cippEDomains,
  aigp: aigpDomains,
}

const questionsByCert: Record<string, Question[]> = {
  'cipp-us': cippUsQuestions,
  'cipp-e': cippEQuestions,
  aigp: aigpQuestions,
}

const ATTEMPTS_KEY = 'privacy-quiz-attempts'

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export const localDataClient: DataClient = {
  async listCertifications() {
    return certifications
  },

  async listDomains(certificationId) {
    return domainsByCert[certificationId] ?? []
  },

  async getQuestions(certificationId, domainIds) {
    const all = questionsByCert[certificationId] ?? []
    const filtered = domainIds.length > 0 ? all.filter((q) => domainIds.includes(q.domainId)) : all
    return shuffle(filtered)
  },

  async saveAttempt(attempt) {
    const existing = readAttempts()
    existing.push(attempt)
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(existing))
  },

  async listAttempts() {
    return readAttempts().sort((a, b) => b.finishedAt.localeCompare(a.finishedAt))
  },

  scoreByDomain(attempt: Attempt, domains: Domain[]): DomainScore[] {
    const scores = new Map<string, DomainScore>()
    for (const domain of domains) {
      scores.set(domain.id, { domainId: domain.id, domainName: domain.name, correct: 0, total: 0 })
    }
    for (const answer of attempt.answers) {
      const existing = scores.get(answer.domainId)
      if (!existing) continue
      existing.total += 1
      if (answer.correct) existing.correct += 1
    }
    return [...scores.values()].filter((s) => s.total > 0)
  },
}

function readAttempts(): Attempt[] {
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY)
    return raw ? (JSON.parse(raw) as Attempt[]) : []
  } catch {
    return []
  }
}
