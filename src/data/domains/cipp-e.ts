import type { Domain } from '../../lib/types'

export const cippEDomains: Domain[] = [
  { id: 'cipp-e-foundations', certificationId: 'cipp-e', name: 'Data Protection Laws & Origins', order: 1 },
  { id: 'cipp-e-controllers-processors', certificationId: 'cipp-e', name: 'Controllers & Processors', order: 2 },
  { id: 'cipp-e-processing', certificationId: 'cipp-e', name: 'Processing Personal Data', order: 3 },
  { id: 'cipp-e-subject-rights', certificationId: 'cipp-e', name: "Data Subjects' Rights", order: 4 },
  { id: 'cipp-e-transfers', certificationId: 'cipp-e', name: 'International Data Transfers', order: 5 },
  { id: 'cipp-e-enforcement', certificationId: 'cipp-e', name: 'Regulation & Enforcement', order: 6 },
]
