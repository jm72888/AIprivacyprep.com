import { ArrowsClockwise, ClipboardText, Cpu, Scales, ShieldWarning, type Icon } from '@phosphor-icons/react'

const DOMAIN_ICONS: Record<string, Icon> = {
  'aigp-foundations': Cpu,
  'aigp-risks': ShieldWarning,
  'aigp-lifecycle': ArrowsClockwise,
  'aigp-law': Scales,
  'aigp-governance': ClipboardText,
}

export function DomainIcon({ domainId, size = 22, className = '' }: { domainId: string; size?: number; className?: string }) {
  const IconComponent = DOMAIN_ICONS[domainId]
  if (!IconComponent) return null
  return <IconComponent size={size} weight="regular" className={className} aria-hidden="true" />
}
