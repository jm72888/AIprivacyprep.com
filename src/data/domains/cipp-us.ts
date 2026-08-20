import type { Domain } from '../../lib/types'

export const cippUsDomains: Domain[] = [
  { id: 'cipp-us-intro', certificationId: 'cipp-us', name: 'Introduction to the US Privacy Environment', order: 1 },
  { id: 'cipp-us-private-sector', certificationId: 'cipp-us', name: 'Limits on Private-Sector Collection & Use of Data', order: 2 },
  { id: 'cipp-us-government-access', certificationId: 'cipp-us', name: 'Government & Court Access to Private-Sector Info', order: 3 },
  { id: 'cipp-us-workplace', certificationId: 'cipp-us', name: 'Workplace Privacy', order: 4 },
  { id: 'cipp-us-state-laws', certificationId: 'cipp-us', name: 'State Privacy Laws', order: 5 },
]
