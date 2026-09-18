import type { WeeklyDevelopments } from '../lib/types'

// Each weekly file is written by scripts/weekly-developments.ts.
const modules = import.meta.glob<WeeklyDevelopments>('./developments/*.json', { eager: true, import: 'default' })

export const weeklyDevelopments: WeeklyDevelopments[] = Object.values(modules).sort((a, b) =>
  b.weekOf.localeCompare(a.weekOf),
)
