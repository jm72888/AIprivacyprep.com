import type { Domain } from '../lib/types'
import { Check } from './icons'

export function DomainPicker({
  domains,
  selected,
  onToggle,
}: {
  domains: Domain[]
  selected: Set<string>
  onToggle: (domainId: string) => void
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {domains.map((domain) => {
        const checked = selected.has(domain.id)
        return (
          <label
            key={domain.id}
            className={`flex cursor-pointer items-center gap-3 rounded-xl p-4 ring-1 ring-inset transition-all duration-200 ease-out has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand ${
              checked ? 'bg-brand-soft ring-brand/50' : 'bg-surface ring-line hover:ring-ink/20'
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onToggle(domain.id)}
              className="sr-only"
            />
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition-colors duration-200 ${
                checked ? 'bg-brand text-white' : 'bg-surface ring-1 ring-inset ring-ink/25'
              }`}
            >
              {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
            </span>
            <span className={`font-medium ${checked ? 'text-ink' : 'text-muted'}`}>{domain.name}</span>
          </label>
        )
      })}
    </div>
  )
}
