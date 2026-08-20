import type { Question } from '../lib/types'
import { PillButton } from './PillButton'

export function QuestionCard({
  question,
  index,
  total,
  selectedIndex,
  onSelect,
  onNext,
}: {
  question: Question
  index: number
  total: number
  selectedIndex: number | null
  onSelect: (choiceIndex: number) => void
  onNext: () => void
}) {
  const answered = selectedIndex !== null

  return (
    <div className="rounded-lg border-l-4 border-accent bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
        Question {index + 1} of {total}
      </p>
      <h2 className="mt-2 font-display text-xl sm:text-2xl">{question.prompt}</h2>

      <div className="mt-6 flex flex-col gap-3">
        {question.choices.map((choice, choiceIndex) => {
          const isCorrect = choiceIndex === question.correctIndex
          const isSelected = choiceIndex === selectedIndex

          let stateClasses = 'border-ink/15 bg-white hover:border-ink/30'
          if (answered && isCorrect) {
            stateClasses = 'border-good bg-good-soft'
          } else if (answered && isSelected && !isCorrect) {
            stateClasses = 'border-bad bg-bad-soft'
          }

          return (
            <button
              key={choiceIndex}
              disabled={answered}
              onClick={() => onSelect(choiceIndex)}
              className={`rounded-lg border p-4 text-left text-sm transition disabled:cursor-default ${stateClasses}`}
            >
              {choice}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="mt-6 rounded-lg bg-paper p-4 text-sm text-ink/80">
          <p className="font-medium text-ink">
            {selectedIndex === question.correctIndex ? 'Correct.' : 'Not quite.'}
          </p>
          <p className="mt-1">{question.explanation}</p>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <PillButton onClick={onNext} disabled={!answered}>
          {index + 1 === total ? 'See results' : 'Next question'}
        </PillButton>
      </div>
    </div>
  )
}
