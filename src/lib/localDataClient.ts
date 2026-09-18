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
const SEEN_KEY = 'privacy-quiz-seen'

// Each quiz run shows this many questions per selected domain.
export const QUESTIONS_PER_DOMAIN = 8

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

  // Picks the next QUESTIONS_PER_DOMAIN questions this browser hasn't answered in
  // each domain's current round. When a domain runs out, its round starts over.
  async drawQuestions(certificationId, domainIds) {
    const all = questionsByCert[certificationId] ?? []
    const seen = readSeen()
    const drawn: Question[] = []

    for (const domainId of domainIds) {
      const pool = all.filter((q) => q.domainId === domainId)
      const seenIds = new Set(seen[domainId] ?? [])
      const picked = shuffle(pool.filter((q) => !seenIds.has(q.id))).slice(0, QUESTIONS_PER_DOMAIN)

      if (picked.length < QUESTIONS_PER_DOMAIN) {
        seen[domainId] = []
        const pickedIds = new Set(picked.map((q) => q.id))
        const refill = shuffle(pool.filter((q) => !pickedIds.has(q.id)))
        picked.push(...refill.slice(0, QUESTIONS_PER_DOMAIN - picked.length))
      }
      drawn.push(...picked)
    }

    writeSeen(seen)
    return shuffle(drawn).map(shuffleChoices)
  },

  markSeen(question) {
    const seen = readSeen()
    const ids = seen[question.domainId] ?? []
    if (!ids.includes(question.id)) seen[question.domainId] = [...ids, question.id]
    writeSeen(seen)
  },

  getRoundProgress(certificationId) {
    const seen = readSeen()
    const progress: Record<string, { answered: number; total: number }> = {}
    for (const question of questionsByCert[certificationId] ?? []) {
      progress[question.domainId] ??= { answered: 0, total: 0 }
      progress[question.domainId].total += 1
    }
    for (const [domainId, entry] of Object.entries(progress)) {
      entry.answered = Math.min(seen[domainId]?.length ?? 0, entry.total)
    }
    return progress
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

// Answer order is shuffled on every draw so the correct answer's position isn't a tell.
function shuffleChoices(question: Question): Question {
  const order = shuffle(question.choices.map((_, i) => i))
  return {
    ...question,
    choices: order.map((i) => question.choices[i]),
    correctIndex: order.indexOf(question.correctIndex),
  }
}

function readSeen(): Record<string, string[]> {
  try {
    const raw = localStorage.getItem(SEEN_KEY)
    return raw ? (JSON.parse(raw) as Record<string, string[]>) : {}
  } catch {
    return {}
  }
}

function writeSeen(seen: Record<string, string[]>) {
  try {
    localStorage.setItem(SEEN_KEY, JSON.stringify(seen))
  } catch {
    // Storage unavailable (private mode, quota): rotation just won't persist.
  }
}

function readAttempts(): Attempt[] {
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY)
    return raw ? (JSON.parse(raw) as Attempt[]) : []
  } catch {
    return []
  }
}
