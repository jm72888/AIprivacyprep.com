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
    <div className="border-t border-rule/40">
      {domains.map((domain) => {
        const checked = selected.has(domain.id)
        return (
          <label
            key={domain.id}
            className={`flex cursor-pointer items-center gap-3 border-b border-rule/40 px-3 py-3 transition-colors duration-150 ease-out ${
              checked ? 'bg-accent-soft/30' : 'hover:bg-accent-soft/10'
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onToggle(domain.id)}
              className="h-4 w-4 accent-accent"
            />
            <span className="text-[1.09375rem] font-medium">{domain.name}</span>
          </label>
        )
      })}
    </div>
  )
}
