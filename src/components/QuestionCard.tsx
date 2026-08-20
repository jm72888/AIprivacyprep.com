import { useState } from 'react'
import type { Question } from '../lib/types'
import { Button } from './Button'

function VerdictBox({ correct }: { correct: boolean }) {
  return (
    <span
      className={`inline-block border-2 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${
        correct ? 'border-good text-good' : 'border-bad text-bad'
      }`}
    >
      {correct ? 'Correct' : 'Incorrect'}
    </span>
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
    <div className="animate-[fade-slide-up_250ms_ease-out] border border-rule/40 bg-paper p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-wide text-ink/70">
        &sect; {index + 1} of {total}
      </p>
      <h2 className="mt-2 font-display text-[1.5625rem] sm:text-[1.875rem]">{question.prompt}</h2>

      <div className="mt-6 flex flex-col gap-2">
        {question.choices.map((choice, choiceIndex) => {
          const isCorrect = choiceIndex === question.correctIndex
          const isSubmittedChoice = choiceIndex === submittedIndex
          const isPending = choiceIndex === pendingIndex

          let stateClasses =
            'border-ink/15 bg-transparent hover:border-select/60 hover:bg-select-soft active:duration-75'
          if (submitted && isCorrect) {
            stateClasses = 'border-good bg-good-soft'
          } else if (submitted && isSubmittedChoice && !isCorrect) {
            stateClasses = 'border-bad bg-bad-soft'
          } else if (!submitted && isPending) {
            stateClasses = 'border-select bg-select-soft'
          }

          return (
            <button
              key={choiceIndex}
              disabled={submitted}
              onClick={() => setPendingIndex(choiceIndex)}
              className={`border p-4 text-left text-[1.09375rem] transition-colors duration-150 ease-out disabled:cursor-default ${stateClasses}`}
            >
              {choice}
            </button>
          )
        })}
      </div>

      {submitted && (
        <div className="mt-6 animate-[fade-slide-up_200ms_ease-out] border-t border-rule/40 pt-4 text-[1.09375rem] text-ink/80">
          <VerdictBox correct={submittedIndex === question.correctIndex} />
          <p className="mt-3 leading-relaxed">{question.explanation}</p>
        </div>
      )}

      <div className="mt-6 grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <Button variant="secondary" onClick={onBack}>
            &larr; Back
          </Button>
        </div>
        <div className="justify-self-center">
          {!submitted && pendingIndex !== null && (
            <Button onClick={() => onSubmit(pendingIndex)}>Submit</Button>
          )}
        </div>
        <div className="justify-self-end">
          {submitted && (
            <Button onClick={onNext}>{index + 1 === total ? 'See results' : 'Next question'}</Button>
          )}
        </div>
      </div>
    </div>
  )
}
