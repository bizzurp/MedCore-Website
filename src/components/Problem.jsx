import { Icon } from './Icon'

const problems = [
  {
    icon: 'clock',
    title: '4–8 hour discharge waits',
    body: 'Reconciling chargemasters, PhilHealth case rates, and HMO LOAs by hand traps patients in their beds and blocks bed turnover.',
  },
  {
    icon: 'doc',
    title: 'Surprise billing at the gate',
    body: 'Patients rarely know their true out-of-pocket cost until the final statement, driving disputes and confrontations at discharge.',
  },
  {
    icon: 'refresh',
    title: 'Returned & denied claims',
    body: 'Missing CF4 fields, code mismatches, and non-conforming eSOA XML send 15–20% of claims back, trapping billions in receivables.',
  },
  {
    icon: 'layers',
    title: 'Siloed, dark payer portals',
    body: 'Every HMO runs its own portal and legacy hospital systems refuse to talk to modern platforms, forcing manual coordination.',
  },
]

export function Problem() {
  return (
    <section id="problem" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">The problem</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Hospital billing breaks down at the moment it matters most
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The financial crisis in Philippine care happens intra-care and at discharge, where
            three parties, dozens of rules, and paper ledgers collide.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                <Icon name={p.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
