export function CertBadge({ code }: { certId: string; code: string }) {
  return (
    <span
      className="inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-bold tracking-wide text-ink ring-1 ring-inset ring-ink/30"
    >
      {code}
    </span>
  )
}
