import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoMark } from './icons'

export function SiteHeader() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive ? 'bg-brand-soft text-brand-strong' : 'text-muted hover:bg-ink/5 hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <LogoMark className="h-8 w-8" />
          <span>
            Privacy<span className="text-brand">&nbsp;&amp;&nbsp;AI</span> Practice
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link to="/#certifications" className={navClass({ isActive: false }) + ' hidden sm:inline-flex'}>
            Certifications
          </Link>
          <NavLink to="/history" className={navClass}>
            History
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Practice questions are unofficial and not affiliated with or endorsed by the IAPP.</p>
        <Link to="/history" className="font-medium hover:text-ink">
          Your practice history
        </Link>
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
