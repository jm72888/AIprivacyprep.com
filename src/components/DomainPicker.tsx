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
            className={`flex cursor-pointer items-center gap-3 rounded-lg border-l-4 bg-white p-4 shadow-sm transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:duration-75 ${
              checked ? 'border-accent' : 'border-ink/10 hover:border-accent/50'
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
