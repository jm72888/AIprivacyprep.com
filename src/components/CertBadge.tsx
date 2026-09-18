import { certTheme } from '../lib/certTheme'

export function CertBadge({ certId, code }: { certId: string; code: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold tracking-wide ring-1 ring-inset ${certTheme(certId).badge}`}
    >
      {code}
    </span>
  )
}
