import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { QuestionCard } from '../components/QuestionCard'
import { HomeLink } from '../components/HomeLink'
import { localDataClient } from '../lib/localDataClient'
import { certifications } from '../data/certifications'
import type { Attempt, AttemptAnswer, Domain, Question } from '../lib/types'

interface LocationState {
  domainIds?: string[]
}

export function QuizPage() {
  const { certId = '' } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const domainIds = (location.state as LocationState | null)?.domainIds ?? []

  const [questions, setQuestions] = useState<Question[] | null>(null)
  const [domains, setDomains] = useState<Domain[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [submittedIndex, setSubmittedIndex] = useState<number | null>(null)
  const [answers, setAnswers] = useState<AttemptAnswer[]>([])
  const [startedAt] = useState(() => new Date().toISOString())

  useEffect(() => {
    if (domainIds.length === 0) {
      navigate(`/quiz/${certId}/setup`, { replace: true })
      return
    }
    Promise.all([localDataClient.getQuestions(certId, domainIds), localDataClient.listDomains(certId)]).then(
      ([questionList, domainList]) => {
        setQuestions(questionList)
        setDomains(domainList)
      },
    )
  }, [certId, domainIds, navigate])

  if (!questions) return null

  const current = questions[currentIndex]
  const certification = certifications.find((c) => c.id === certId)
  const currentDomain = domains.find((d) => d.id === current.domainId)

  function handleSubmit(choiceIndex: number) {
    if (submittedIndex !== null) return
    setSubmittedIndex(choiceIndex)
    setAnswers((prev) => [
      ...prev,
      {
        questionId: current.id,
        domainId: current.domainId,
        selectedIndex: choiceIndex,
        correct: choiceIndex === current.correctIndex,
      },
    ])
  }

  function handleNext() {
    if (currentIndex + 1 < questions!.length) {
      setCurrentIndex((i) => i + 1)
      setSubmittedIndex(null)
      return
    }

    const attempt: Attempt = {
      id: crypto.randomUUID(),
      certificationId: certId,
      domainIds,
      startedAt,
      finishedAt: new Date().toISOString(),
      answers,
    }
    localDataClient.saveAttempt(attempt)
    navigate(`/quiz/${certId}/results`, { state: { attempt } })
  }

  function handleBack() {
    navigate(`/quiz/${certId}/setup`)
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <HomeLink />
        {certification && currentDomain && (
          <>
            <span className="text-ink/30" aria-hidden="true">
              |
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-ink/70">
              {certification.code} &middot; {currentDomain.name}
            </span>
          </>
        )}
      </div>
      <QuestionCard
        key={current.id}
        question={current}
        index={currentIndex}
        total={questions.length}
        submittedIndex={submittedIndex}
        onSubmit={handleSubmit}
        onNext={handleNext}
        onBack={handleBack}
      />
    </div>
  )
}
