import { Icon } from './Icon'

const tiers = [
  {
    name: 'Community',
    beds: '100–199 beds',
    price: '₱150k–250k',
    unit: '/ month',
    description: 'Secondary and community hospitals getting started with automated reconciliation.',
    features: [
      'HIS integration adapter',
      'Tripartite statutory ledger',
      'Intake & room-tier limit evaluator',
      'Billing & cashier consoles',
      'RA 10173 security compliance',
    ],
    featured: false,
  },
  {
    name: 'Tertiary',
    beds: '200–499 beds',
    price: '₱300k–500k',
    unit: '/ month',
    description: 'Large tertiary private hospitals running high inpatient discharge volume.',
    features: [
      'Everything in Community',
      'eClaims 3.0 & eSOA scrubber',
      'Executive RCM command suite',
      'Patient Clarify mobile PWA',
      'Priority regulatory table updates',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    beds: '500+ beds / groups',
    price: 'Custom',
    unit: '',
    description: 'Flagship academic medical centers and multi-site hospital networks.',
    features: [
      'Everything in Tertiary',
      'Network-wide deployment',
      'Dedicated integration engineering',
      'Custom SLAs & onboarding',
      'Denial-recovery value share',
    ],
    featured: false,
  },
]

const usage = [
  ['Per-discharge clearance fee', '₱45–₱85 per cleared discharge'],
  ['Digital settlement processing', '1.2%–2.5% on out-of-pocket rails'],
  ['ClaimReady denial recovery', '5%–8% contingency on recovered claims'],
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">Pricing</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Predictable base, value-linked usage
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A hybrid enterprise SaaS model tiered by licensed bed capacity, so software spend scales
            with occupancy and actual discharge throughput.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                t.featured
                  ? 'border-brand bg-navy text-white shadow-xl lg:-translate-y-3'
                  : 'border-slate-200 bg-white hover:shadow-lg'
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className={`text-lg font-semibold ${t.featured ? 'text-white' : 'text-navy'}`}>{t.name}</h3>
              <p className={`text-sm ${t.featured ? 'text-slate-300' : 'text-slate-500'}`}>{t.beds}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className={`text-3xl font-bold tracking-tight ${t.featured ? 'text-white' : 'text-navy'}`}>{t.price}</span>
                <span className={`text-sm ${t.featured ? 'text-slate-300' : 'text-slate-500'}`}>{t.unit}</span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${t.featured ? 'text-slate-300' : 'text-slate-600'}`}>{t.description}</p>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Icon
                      name="check"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? 'text-brand-light' : 'text-accent-green'}`}
                    />
                    <span className={t.featured ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-all ${
                  t.featured
                    ? 'bg-brand text-white hover:bg-brand-light'
                    : 'border border-brand text-brand hover:bg-brand hover:text-white'
                }`}
              >
                Talk to sales
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="mb-4 text-sm font-semibold text-navy">Plus value-linked usage streams</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {usage.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs font-medium text-slate-500">{label}</p>
                <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
