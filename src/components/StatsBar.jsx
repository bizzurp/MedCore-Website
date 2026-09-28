const stats = [
  { value: '₱1.56T', label: 'PH health expenditure (2024)' },
  { value: '42.7%', label: 'Paid out of pocket by households' },
  { value: '₱4–10B', label: 'Delayed / returned hospital claims' },
  { value: '15–20%', label: 'Claims returned for clerical errors' },
]

export function StatsBar() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 py-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 text-center lg:text-left">
            <p className="text-3xl font-bold tracking-tight text-navy tabular-nums">{s.value}</p>
            <p className="mt-1.5 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="pb-6 text-center text-xs text-slate-400">
        Sources: PSA Philippine National Health Accounts 2024, Insurance Commission, PHAPi
      </p>
    </section>
  )
}

export default StatsBar
