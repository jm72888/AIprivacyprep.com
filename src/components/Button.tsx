import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-[0_6px_16px_-6px_rgb(36_86_232/0.6)] hover:bg-brand-strong',
  secondary: 'bg-surface text-ink ring-1 ring-inset ring-line hover:bg-canvas hover:ring-ink/20',
  ghost: 'text-muted hover:bg-ink/5 hover:text-ink',
}

export function buttonClasses(variant: Variant = 'primary', className = '') {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold ' +
    'transition-all duration-200 ease-out active:scale-[0.98] ' +
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
