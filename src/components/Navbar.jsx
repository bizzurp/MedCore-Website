import { useState, useEffect } from 'react'

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Platform', href: '#pillars' },
  { label: 'Modules', href: '#modules' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Compliance', href: '#compliance' },
]

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group" aria-label="MedCore home">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white shadow-sm transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3z" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-navy">MedCore</span>
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-brand"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-brand-dark hover:-translate-y-0.5"
          >
            Request a demo
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-brand px-4 py-2.5 text-center text-base font-medium text-white"
            >
              Request a demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
