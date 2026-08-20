import type { Domain } from '../lib/types'

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
    <div className="flex flex-col gap-3">
      {domains.map((domain) => {
        const checked = selected.has(domain.id)
        return (
          <label
            key={domain.id}
            className={`flex cursor-pointer items-center gap-3 rounded-lg border-l-4 bg-white p-4 shadow-sm transition ${
              checked ? 'border-accent' : 'border-ink/10'
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onToggle(domain.id)}
              className="h-4 w-4 accent-accent"
            />
            <span className="text-sm font-medium">{domain.name}</span>
          </label>
        )
      })}
    </div>
  )
}
