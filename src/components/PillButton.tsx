import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary'

export function PillButton({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    'rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-150 ease-out ' +
    'enabled:hover:-translate-y-0.5 enabled:hover:shadow-md enabled:active:translate-y-0 enabled:active:scale-95 enabled:active:duration-75 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-paper hover:bg-ink/85'
      : 'border border-ink/20 bg-white text-ink hover:bg-ink/5'
  return <button className={`${base} ${styles} ${className}`} {...props} />
}
