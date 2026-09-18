export interface CertTheme {
  badge: string
  tile: string
  fullName: string
}

const THEMES: Record<string, CertTheme> = {
  'cipp-us': {
    badge: 'bg-blue-50 text-blue-700 ring-blue-200',
    tile: 'bg-blue-600 text-white',
    fullName: 'Certified Information Privacy Professional / United States',
  },
  'cipp-e': {
    badge: 'bg-teal-50 text-teal-700 ring-teal-200',
    tile: 'bg-teal-600 text-white',
    fullName: 'Certified Information Privacy Professional / Europe',
  },
  aigp: {
    badge: 'bg-amber-50 text-amber-800 ring-amber-200',
    tile: 'bg-amber-500 text-amber-950',
    fullName: 'Artificial Intelligence Governance Professional',
  },
}

export function certTheme(certId: string): CertTheme {
  return THEMES[certId] ?? THEMES['cipp-us']
}
