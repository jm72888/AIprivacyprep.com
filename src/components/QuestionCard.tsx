import type { Question } from '../lib/types'
import { Button } from './Button'

function StampMark({ correct }: { correct: boolean }) {
  return (
    <span
      className={`inline-block -rotate-3 border-2 px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider ${
        correct ? 'border-good text-good' : 'border-bad text-bad'
      }`}
    >
      {correct ? 'Correct' : 'Overruled'}
    </span>
  )
}

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
    <div className="animate-[fade-slide-up_250ms_ease-out] border border-rule/40 bg-paper p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-wide text-ink/70">
        &sect; {index + 1} of {total}
      </p>
      <h2 className="mt-2 font-display text-xl italic sm:text-2xl">{question.prompt}</h2>

      <div className="mt-6 flex flex-col gap-2">
        {question.choices.map((choice, choiceIndex) => {
          const isCorrect = choiceIndex === question.correctIndex
          const isSelected = choiceIndex === selectedIndex

          let stateClasses =
            'border-ink/15 bg-transparent hover:border-accent/60 hover:bg-accent-soft/30 active:duration-75'
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
              className={`border p-4 text-left text-sm transition-colors duration-150 ease-out disabled:cursor-default ${stateClasses}`}
            >
              {choice}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="mt-6 animate-[fade-slide-up_200ms_ease-out] border-t border-rule/40 pt-4 text-sm text-ink/80">
          <StampMark correct={selectedIndex === question.correctIndex} />
          <p className="mt-3 leading-relaxed">{question.explanation}</p>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <Button onClick={onNext} disabled={!answered}>
          {index + 1 === total ? 'See results' : 'Next clause'}
        </Button>
      </div>
    </div>
  )
}
