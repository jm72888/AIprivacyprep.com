import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const VARIANT_STYLES: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-strong',
  secondary: 'text-ink ring-1 ring-inset ring-ink/70 hover:bg-ink hover:text-canvas',
  ghost: 'text-muted hover:bg-ink/5 hover:text-ink',
}

export function buttonClasses(variant: Variant = 'primary', className = '') {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold ' +
    'transition-colors duration-150 ease-out active:translate-y-px ' +
    'disabled:pointer-events-none disabled:opacity-40'
  return `${base} ${VARIANT_STYLES[variant]} ${className}`
}

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={buttonClasses(variant, className)} {...props} />
}
