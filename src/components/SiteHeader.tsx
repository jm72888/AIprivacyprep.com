import type { ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export function SiteHeader() {
  const { pathname } = useLocation()
  const inPractice = pathname.startsWith('/practice') || pathname.startsWith('/quiz')
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `border-b-2 px-1.5 py-5 text-sm font-medium whitespace-nowrap transition-colors duration-150 sm:px-2 ${
      isActive ? 'border-brand text-ink' : 'border-transparent text-muted hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span className="h-3 w-3 bg-brand" aria-hidden="true" />
          AIGP<span className="hidden font-medium text-muted sm:inline">Prep</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-5">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/practice" className={() => navClass({ isActive: inPractice })}>
            Practice
          </NavLink>
          <NavLink to="/developments" className={navClass}>
            <span className="sm:hidden">This week</span>
            <span className="hidden sm:inline">This week&apos;s developments</span>
          </NavLink>
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
        <p>Unofficial practice questions. Not affiliated with or endorsed by the IAPP.</p>
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
