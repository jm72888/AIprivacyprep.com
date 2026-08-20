import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'invert'

const VARIANT_STYLES: Record<Variant, string> = {
  primary: 'border-accent bg-accent text-paper enabled:hover:bg-ink enabled:hover:border-ink',
  secondary: 'border-ink bg-transparent text-ink enabled:hover:bg-ink enabled:hover:text-paper',
  invert: 'border-paper/40 bg-transparent text-paper enabled:hover:bg-paper enabled:hover:text-ink enabled:hover:border-paper',
}

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    'border px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider transition-all duration-150 ease-out ' +
    'enabled:hover:-translate-y-0.5 enabled:active:translate-y-0 enabled:active:duration-75 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed'
  return <button className={`${base} ${VARIANT_STYLES[variant]} ${className}`} {...props} />
}
