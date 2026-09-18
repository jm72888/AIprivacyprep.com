export interface Certification {
  id: string
  code: string
  name: string
  description: string
}

export interface Domain {
  id: string
  certificationId: string
  name: string
  order: number
}

export interface Question {
  id: string
  domainId: string
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export interface AttemptAnswer {
  questionId: string
  domainId: string
  selectedIndex: number
  correct: boolean
}

export interface Attempt {
  id: string
  certificationId: string
  domainIds: string[]
  startedAt: string
  finishedAt: string
  answers: AttemptAnswer[]
}

export interface DomainScore {
  domainId: string
  domainName: string
  correct: number
  total: number
}

export const DEVELOPMENT_CATEGORIES = ['Law & regulation', 'Enforcement', 'Government', 'Industry'] as const

export type DevelopmentCategory = (typeof DEVELOPMENT_CATEGORIES)[number]

export interface Development {
  title: string
  summary: string
  category: DevelopmentCategory
  region: string
  source: string
  url: string
  publishedDate: string
}

export interface WeeklyDevelopments {
  weekOf: string
  periodStart: string
  periodEnd: string
  generatedAt: string
  items: Development[]
}
