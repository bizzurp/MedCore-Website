import { Icon } from './Icon'

const modules = [
  {
    icon: 'clock',
    title: 'Discharge Clearance Mission Control',
    body: 'A 45-minute SLA countdown Kanban across MGH order, doctor PF, pharmacy return-to-stock, HMO LOA, and settlement stages.',
  },
  {
    icon: 'scale',
    title: 'Tripartite Reconciled Ledger',
    body: 'Real-time statutory waterfall, multi-payer chargemaster tagging, and a line-by-line "Why do I owe this?" explainer for patients.',
  },
  {
    icon: 'layers',
    title: 'Multi-Payer LOA & HMO Hub',
    body: 'Live eLOA pipeline, room-tariff arbitrage evaluator, and inner-limit calculator across every accredited commercial carrier.',
  },
  {
    icon: 'doc',
    title: 'eClaims 3.0 & eSOA Scrubber',
    body: 'PhilHealth Circular 2023-0026 XML validator, CF2-vs-CF4 clinical consistency auditor, and predictive return-to-hospital risk gauge.',
  },
  {
    icon: 'wallet',
    title: 'Settlement & RA 9439 Promissory Engine',
    body: 'Point-of-sale checkout via QR Ph, GCash, and Maya, digital promissory notes with e-signatures, and cryptographic gate passes.',
  },
  {
    icon: 'chart',
    title: 'Executive RCM Command Suite',
    body: 'Bed-hours reclaimed telemetry, discharge bottleneck heatmaps, and PhilHealth return-code Pareto root-cause analytics.',
  },
  {
    icon: 'phone',
    title: 'Patient Clarify Mobile PWA',
    body: 'A zero-install SMS magic-link interface with a touch waterfall, item explainers, and a live digital gate pass.',
  },
  {
    icon: 'bolt',
    title: 'HIS Integration Adapter',
    body: 'Direct read-replica CDC sync with legacy hospital systems like BizBox and Comlogik — no rip-and-replace required.',
  },
]

export function Modules() {
  return (
    <section id="modules" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">Product modules</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Everything the revenue cycle needs, in one layer
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Task-oriented consoles for billing staff, physicians, and CFOs — plus a patient-facing
            portal that turns confusion into clarity.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div
              key={m.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon name={m.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
