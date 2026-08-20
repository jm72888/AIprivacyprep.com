export function Hero() {
  return (
    <header className="relative overflow-hidden bg-hero px-6 py-20 sm:py-28">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -left-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 text-hero-line/70 sm:-left-24"
        fill="none"
      >
        <path
          d="M40 260 C 20 150, 90 40, 210 40 C 330 40, 370 130, 320 200 C 280 255, 190 260, 170 200 C 155 155, 200 120, 240 140"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <h1 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Study for CIPP &amp; AIGP
        </h1>
        <p className="max-w-xl text-base text-white/70 sm:text-lg">
          Practice multiple-choice questions for CIPP/US, CIPP/E, and AIGP, with
          instant feedback and explanations for every answer.
        </p>
      </div>
    </header>
  )
}
