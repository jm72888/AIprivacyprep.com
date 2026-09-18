import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { QuestionCard } from '../components/QuestionCard'
import { CertBadge } from '../components/CertBadge'
import { PageShell } from '../components/SiteHeader'
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

  const progress = ((currentIndex + (submittedIndex !== null ? 1 : 0)) / questions.length) * 100

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-5">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <div className="flex min-w-0 items-center gap-2">
              {certification && <CertBadge certId={certification.id} code={certification.code} />}
              {currentDomain && <span className="truncate text-sm font-medium text-muted">{currentDomain.name}</span>}
            </div>
            <span className="text-sm font-semibold tabular-nums">
              Question {currentIndex + 1} <span className="font-medium text-muted">of {questions.length}</span>
            </span>
          </div>
          <div
            className="mt-3 h-2 overflow-hidden rounded-full bg-line"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            aria-label="Quiz progress"
          >
            <div
              className="h-full rounded-full bg-brand transition-transform duration-500 ease-out"
              style={{ width: '100%', transform: `translateX(-${100 - progress}%)` }}
            />
          </div>
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
    </PageShell>
  )
}
