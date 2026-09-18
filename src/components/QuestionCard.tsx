import { useState, type ReactNode } from 'react'
import type { Question } from '../lib/types'
import { Button } from './Button'
import { ArrowLeft, ArrowRight, Check, Cross } from './icons'

function Feedback({ correct, explanation }: { correct: boolean; explanation: string }) {
  return (
    <div
      className={`mt-6 animate-[fade-slide-up_200ms_ease-out] rounded-xl p-4 sm:p-5 ${
        correct ? 'bg-good-soft' : 'bg-bad-soft'
      }`}
    >
      <p className={`flex items-center gap-2 font-semibold ${correct ? 'text-good' : 'text-bad'}`}>
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full text-white ${
            correct ? 'bg-good' : 'bg-bad'
          }`}
        >
          {correct ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <Cross className="h-3.5 w-3.5" strokeWidth={3} />}
        </span>
        {correct ? 'Correct' : 'Not quite'}
      </p>
      <p className="mt-2 leading-relaxed text-ink/85">{explanation}</p>
    </div>
  )
}

export function QuestionCard({
  question,
  index,
  total,
  submittedIndex,
  onSubmit,
  onNext,
  onBack,
}: {
  question: Question
  index: number
  total: number
  submittedIndex: number | null
  onSubmit: (choiceIndex: number) => void
  onNext: () => void
  onBack: () => void
}) {
  const [pendingIndex, setPendingIndex] = useState<number | null>(null)
  const submitted = submittedIndex !== null

  return (
    <div className="animate-[fade-slide-up_250ms_ease-out] rounded-2xl bg-surface p-5 shadow-card ring-1 ring-line sm:p-8">
      <h2 className="text-xl font-semibold leading-snug sm:text-2xl">{question.prompt}</h2>

      <div className="mt-6 flex flex-col gap-3">
        {question.choices.map((choice, choiceIndex) => {
          const isCorrect = choiceIndex === question.correctIndex
          const isSubmittedChoice = choiceIndex === submittedIndex
          const isPending = choiceIndex === pendingIndex

          let stateClasses = 'ring-line hover:ring-brand/40 hover:bg-brand-soft/50'
          let keyClasses = 'bg-canvas text-muted'
          let keyContent: ReactNode = String.fromCharCode(65 + choiceIndex)
          if (submitted && isCorrect) {
            stateClasses = 'ring-good bg-good-soft'
            keyClasses = 'bg-good text-white'
            keyContent = <Check className="h-4 w-4" strokeWidth={3} />
          } else if (submitted && isSubmittedChoice && !isCorrect) {
            stateClasses = 'ring-bad bg-bad-soft'
            keyClasses = 'bg-bad text-white'
            keyContent = <Cross className="h-4 w-4" strokeWidth={3} />
          } else if (submitted) {
            stateClasses = 'ring-line opacity-60'
          } else if (isPending) {
            stateClasses = 'ring-2 ring-brand bg-brand-soft'
            keyClasses = 'bg-brand text-white'
          }

          return (
            <button
              key={choiceIndex}
              disabled={submitted}
              aria-pressed={!submitted ? isPending : undefined}
              onClick={() => setPendingIndex(choiceIndex)}
              className={`flex items-start gap-3 rounded-xl p-4 text-left ring-1 ring-inset transition-all duration-200 ease-out active:scale-[0.99] disabled:cursor-default disabled:active:scale-100 ${stateClasses}`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors duration-200 ${keyClasses}`}
              >
                {keyContent}
              </span>
              <span className="pt-0.5 leading-relaxed">{choice}</span>
            </button>
          )
        })}
      </div>

      {submitted && (
        <Feedback correct={submittedIndex === question.correctIndex} explanation={question.explanation} />
      )}

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-5">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
          Change domains
        </Button>
        {submitted ? (
          <Button onClick={onNext}>
            {index + 1 === total ? 'See results' : 'Next question'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button disabled={pendingIndex === null} onClick={() => pendingIndex !== null && onSubmit(pendingIndex)}>
            Check answer
          </Button>
        )}
      </div>
    </div>
  )
}
