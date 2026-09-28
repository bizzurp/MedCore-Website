import { Icon } from './Icon'

const pillars = [
  {
    step: '01',
    name: 'Guide',
    icon: 'compass',
    color: 'text-brand',
    ring: 'ring-brand/20',
    bg: 'bg-brand/5',
    title: 'Pre-admission orientation',
    body: 'Upfront cost estimation and room-tier markup warnings — framed as non-binding financial orientation, compliant with the Anti-Hospital Deposit Law (RA 10932).',
  },
  {
    step: '02',
    name: 'Verify',
    icon: 'shield',
    color: 'text-accent-teal',
    ring: 'ring-cyan-500/20',
    bg: 'bg-cyan-50',
    title: 'Eligibility & payer orchestration',
    body: 'Automated PhilHealth eligibility checks, contribution validation, and commercial HMO electronic pre-authorization across Maxicare, Intellicare, Medicard, and PhilCare.',
  },
  {
    step: '03',
    name: 'Reward',
    icon: 'gift',
    color: 'text-accent-orange',
    ring: 'ring-orange-500/20',
    bg: 'bg-orange-50',
    title: 'Settlement & incentives',
    body: 'Prompt-pay courtesy discounts, multi-rail digital payments, and legally compliant RA 9439 promissory installment structures at 0% interest.',
  },
  {
    step: '04',
    name: 'Report',
    icon: 'chart',
    color: 'text-accent-green',
    ring: 'ring-green-500/20',
    bg: 'bg-green-50',
    title: 'Operational telemetry',
    body: 'Live discharge countdowns, eSOA XML pre-flight audits, Days in A/R, and real-time tripartite ledger balances for hospital, payer, and patient.',
  },
  {
    step: '05',
    name: 'Improve',
    icon: 'refresh',
    color: 'text-navy',
    ring: 'ring-navy/20',
    bg: 'bg-slate-100',
    title: 'Denial analytics',
    body: 'Aggregates PhilHealth return codes and HMO disallowances into preventative validation rules, permanently driving claim rejections toward under 2%.',
  },
]

export function Pillars() {
  return (
    <section id="pillars" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">The platform</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            One value engine, five deterministic stages
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No brittle screen-scraping, no black-box AI for billing math. MedCore runs on direct
            data replication and auditable, centavo-exact calculations.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {pillars.map((p) => (
            <div
              key={p.name}
              className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <span className="font-mono text-xs font-semibold text-slate-300">{p.step}</span>
              <div className={`mt-2 inline-flex h-12 w-12 items-center justify-center rounded-xl ${p.bg} ${p.color} ring-1 ${p.ring}`}>
                <Icon name={p.icon} className="h-6 w-6" />
              </div>
              <h3 className={`mt-4 text-lg font-semibold ${p.color}`}>{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-navy">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars
