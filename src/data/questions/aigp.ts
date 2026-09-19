import type { Question } from '../../lib/types'
import { foundationsQuestions } from './aigp/foundations'
import { risksQuestions } from './aigp/risks'
import { lifecycleQuestions } from './aigp/lifecycle'
import { lawQuestions } from './aigp/law'
import { governanceQuestions } from './aigp/governance'

export const aigpQuestions: Question[] = [
  ...foundationsQuestions,
  ...risksQuestions,
  ...lifecycleQuestions,
  ...lawQuestions,
  ...governanceQuestions,
]
