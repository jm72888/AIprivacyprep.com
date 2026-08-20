import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { QuestionCard } from '../components/QuestionCard'
import { localDataClient } from '../lib/localDataClient'
import type { Attempt, AttemptAnswer, Question } from '../lib/types'

interface LocationState {
  domainIds?: string[]
}

export function QuizPage() {
  const { certId = '' } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const domainIds = (location.state as LocationState | null)?.domainIds ?? []

  const [questions, setQuestions] = useState<Question[] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [answers, setAnswers] = useState<AttemptAnswer[]>([])
  const [startedAt] = useState(() => new Date().toISOString())

  useEffect(() => {
    if (domainIds.length === 0) {
      navigate(`/quiz/${certId}/setup`, { replace: true })
      return
    }
    localDataClient.getQuestions(certId, domainIds).then(setQuestions)
  }, [certId, domainIds, navigate])

  if (!questions) return null

  const current = questions[currentIndex]

  function handleSelect(choiceIndex: number) {
    if (selectedIndex !== null) return
    setSelectedIndex(choiceIndex)
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
      setSelectedIndex(null)
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

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <QuestionCard
        question={current}
        index={currentIndex}
        total={questions.length}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
        onNext={handleNext}
      />
    </div>
  )
}
