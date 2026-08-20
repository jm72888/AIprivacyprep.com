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
