import type { Attempt, Certification, Domain, DomainScore, Question } from './types'

export interface DataClient {
  listCertifications(): Promise<Certification[]>
  listDomains(certificationId: string): Promise<Domain[]>
  getQuestions(certificationId: string, domainIds: string[]): Promise<Question[]>
  saveAttempt(attempt: Attempt): Promise<void>
  listAttempts(): Promise<Attempt[]>
  scoreByDomain(attempt: Attempt, domains: Domain[]): DomainScore[]
}
