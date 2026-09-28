import { Icon } from './Icon'

const laws = [
  ['RA 9994 / RA 10754', 'Automated, auditable Senior Citizen & PWD discount enforcement'],
  ['RA 9439', 'Anti-Hospital Detention Law — 0% interest digital promissory notes'],
  ['RA 10932', 'Anti-Hospital Deposit Law — non-binding financial orientation'],
  ['RA 11223', 'Universal Health Care Act — integrated electronic claims data'],
  ['RA 10173', 'Data Privacy Act — strict PHI handling under NPC circulars'],
  ['Circular 2023-0026', 'PhilHealth eClaims 3.0 eSOA XML schema conformance'],
]

export function Compliance() {
  return (
    <section id="compliance" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-light">Built for compliance</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Deterministic math the CFO can audit
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Every peso is reconciled to the centavo and every calculation is traceable. MedCore
              enforces the statutory deduction cascade in strict legal order, with a full audit
              trail behind each line item.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ['lock', '250/250 records audited', '0 waterfall discrepancies'],
                ['scale', 'Centavo-exact', 'No floating-point drift'],
              ].map(([icon, title, sub]) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/15 text-accent-green">
                    <Icon name={icon} className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                  <p className="text-xs text-slate-400">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-4 text-sm font-semibold text-slate-200">Regulatory alignment</p>
            <ul className="space-y-3">
              {laws.map(([code, desc]) => (
                <li key={code} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                  <div>
                    <p className="font-mono text-sm font-semibold text-white">{code}</p>
                    <p className="text-xs text-slate-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compliance
