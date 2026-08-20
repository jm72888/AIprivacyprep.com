import { Link } from 'react-router-dom'

export function HomeLink() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink/70 transition-colors duration-150 ease-out hover:text-accent"
    >
      <span className="text-accent">&sect;</span> Home
    </Link>
  )
}
