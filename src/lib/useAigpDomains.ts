import { useEffect, useState } from 'react'
import { localDataClient } from './localDataClient'
import type { Domain } from './types'

export function useAigpDomains() {
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

  const totalQuestions = Object.values(questionCounts).reduce((sum, n) => sum + n, 0)
  return { domains, questionCounts, totalQuestions }
}
