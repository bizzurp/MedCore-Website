import { Icon } from './Icon'

function MiniStat({ label, value, tone }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{label}</p>
      <p className={`mt-1 text-lg font-bold tabular-nums ${tone}`}>{value}</p>
    </div>
  )
}

function WaterfallRow({ label, value, tone, width }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-500">{label}</span>
        <span className="font-mono font-medium text-slate-700 tabular-nums">{value}</span>
      </div>
      <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
        <div className={`h-1.5 rounded-full ${tone}`} style={{ width }} />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-32 pb-24 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-teal/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-brand-light">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
            Financial intelligence for Philippine healthcare
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Discharge in minutes,
            <span className="block text-brand-light">not hours.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            MedCore is the multi-payer reconciliation layer that sits between your
            HIS, PhilHealth, and HMOs. It automates the statutory deduction cascade,
            enforces clean claims, and cuts discharge clearance from 4&ndash;8 hours to
            under 45 minutes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-light hover:-translate-y-0.5"
            >
              Request a demo
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See how it works
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
            {[
              ['< 45 min', 'Discharge SLA'],
              ['< 2%', 'Claim rejection target'],
              ['+₱31.4M', 'Annual impact / 250 beds'],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="text-2xl font-bold tabular-nums text-white">{n}</dt>
                <dd className="mt-1 text-xs text-slate-400">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Dashboard mockup */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="rounded-2xl border border-white/10 bg-white p-1.5 shadow-2xl shadow-black/30">
            <div className="rounded-xl bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400">Encounter · MRN-40921</p>
                  <p className="text-sm font-semibold text-slate-800">Maria S. · Room 512-A</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  13m left
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <MiniStat label="Gross" value="₱184,500" tone="text-slate-800" />
                <MiniStat label="Covered" value="₱141,200" tone="text-accent-green" />
                <MiniStat label="Net due" value="₱43,300" tone="text-brand" />
              </div>

              <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                <p className="mb-3 text-xs font-semibold text-slate-500">Statutory waterfall</p>
                <div className="space-y-2.5">
                  <WaterfallRow label="12% VAT exemption" value="-₱19,800" tone="bg-slate-300" width="18%" />
                  <WaterfallRow label="20% Senior / PWD" value="-₱26,300" tone="bg-accent-teal" width="24%" />
                  <WaterfallRow label="PhilHealth ACR" value="-₱52,700" tone="bg-brand" width="45%" />
                  <WaterfallRow label="HMO approved LOA" value="-₱42,400" tone="bg-accent-green" width="38%" />
                </div>
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-accent-green py-2.5 text-sm font-semibold text-white">
                <Icon name="check" className="h-4 w-4" />
                Issue digital gate pass
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
