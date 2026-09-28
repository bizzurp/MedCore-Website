const columns = [
  {
    title: 'Platform',
    links: [
      ['The problem', '#problem'],
      ['Value engine', '#pillars'],
      ['Modules', '#modules'],
      ['Pricing', '#pricing'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Compliance', '#compliance'],
      ['Request a demo', '#contact'],
      ['Cagayan State University', '#top'],
      ['PGC Digital Innovation', '#top'],
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3z" />
                </svg>
              </span>
              <span className="text-lg font-semibold text-white">MedCore</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              The financial intelligence and multi-payer reconciliation layer for Philippine
              healthcare. Not an HIS or EMR — the middleware that makes them settle.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm transition-colors hover:text-brand-light">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MedCore. Built for the PGC Digital Innovation Challenge.
          </p>
          <p className="text-xs text-slate-500">
            Compliant with RA 9994, 9439, 10932, 11223 &amp; 10173.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
