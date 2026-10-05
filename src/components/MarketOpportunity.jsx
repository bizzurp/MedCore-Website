import { Icon } from './Icon'

export function MarketOpportunity() {
  return (
    <section id="market-opportunity" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">Market Opportunity</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Addressable Market in Philippine Healthcare
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            MedCore targets both B2B (hospital) and B2C (patient) revenue streams in the Philippine healthcare market,
            with a focused approach on qualified hospitals that have both PhilHealth and HMO accreditation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* B2B Market Analysis */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-navy">B2B: Hospital Subscription Revenue</h3>
            <p className="text-slate-600">
              MedCore's primary revenue stream comes from hospital subscriptions, with PhilHealth and HMOs
              contributing 50% of the hospital fee (paid separately but combined for total revenue calculation).
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Hospital Tier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Total Hospitals (PH)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Qualified Hospitals<br/><span className="block text-[10px]">(PhilHealth + HMO)</span>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      TAM<br/><span className="block text-[10px]">(100% Penetration)</span>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      SAM<br/><span className="block text-[10px]">(Qualified Base)</span>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      SOM<br/><span className="block text-[10px]">(10% of SAM)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      Large (L3)
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      240
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      122
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      ₱180,000,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      ₱91,500,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      ₱9,150,000
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      Medium (L2)
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      396
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      149
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      ₱148,500,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      ₱55,875,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      ₱5,587,500
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      Small (L1)
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      564
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      158
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      ₱84,600,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      ₱23,700,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      ₱2,370,000
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 text-sm font-semibold text-navy">
                      TOTAL
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums font-semibold">
                      1,200
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums font-semibold">
                      429
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums font-semibold">
                      ₱413,100,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums font-semibold">
                      ₱171,075,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums font-semibold">
                      ₱17,107,500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-sm text-slate-500 space-y-1">
              <p>• <strong>Hospital subscription fee</strong> (paid by hospital): Large = 500,000 ₱/yr, Medium = 250,000 ₱/yr, Small = 100,000 ₱/yr</p>
              <p>• <strong>PhilHealth + HMOs combined payment</strong> = 50% of hospital fee (paid individually; split unspecified but irrelevant for total revenue)</p>
              <p>• <strong>Total revenue to MedCore per hospital</strong> = Hospital fee + (PhilHealth + HMOs payment) = 1.5 × Hospital fee</p>
              <p>• <strong>TAM</strong>: Revenue if all Philippine hospitals adopted the service</p>
              <p>• <strong>SAM</strong>: Revenue from hospitals with both PhilHealth accreditation and HMO contracts</p>
              <p>• <strong>SOM</strong>: Conservative Year 2-3 target (10% SAM capture)</p>
            </div>
          </div>

          {/* B2C Market Analysis */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-navy">B2C: Patient Subscription Revenue</h3>
            <p className="text-slate-600">
              Revised per new constraint: Only Filipinos with HMOs subscribe (3% of HMO-covered outpatients).
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Hospital Tier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Client Tiers
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Estimated No. of Clients
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Revenue (₱/yr)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      Large
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Tier 1 (3,600)
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      54,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      194,400,000
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      Large
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Tier 2 (3,000)
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      36,000
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      108,000,000
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      Medium
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Tier 1 (3,600)
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      31,185
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      112,266,000
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      Medium
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Tier 2 (3,000)
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      20,790
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      62,370,000
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      Small
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Tier 1 (3,600)
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      7,614
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      27,410,400
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      Small
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Tier 2 (3,000)
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      5,076
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums">
                      15,228,000
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 text-sm font-semibold text-navy">
                      TOTAL
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-semibold">
                      —
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums font-semibold">
                      154,665
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 tabular-nums font-semibold">
                      ₱519,674,400
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-sm text-slate-500 space-y-1">
              <p>• <strong>National HMO Coverage</strong>: 3% of Filipinos = 3.324M Filipinos with HMO coverage</p>
              <p>• <strong>Patient Subscription Flow</strong>: 3% uptake rate of HMO-covered outpatients</p>
              <p>• <strong>Tier Split</strong>: Tier 1 (3,600 ₱/yr) = 60%, Tier 2 (3,000 ₱/yr) = 40%</p>
              <p>• <strong>B2C Revenue Potential</strong>: ~519.7M ₱/yr (constrained to HMO-covered population)</p>
              <p>• <strong>Strategic Recommendation</strong>: Prioritize B2B sales to fund targeted B2C acquisition in HMO-dense urban corridors</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-lg text-navy font-semibold mb-4">
            Key Insight:
          </p>
          <p className="text-slate-600 lg:max-w-2xl">
            The 3% HMO coverage constraint significantly reduces B2C upside versus earlier assumptions,
            reinforcing <strong>B2B hospital contracts</strong> as the primary near-term revenue driver.
            Focus sales efforts on securing PhilHealth+HMO-qualified hospitals
            (Table 1 SAM: 171M ₱/yr addressable) to establish a sustainable base
            before scaling B2C within HMO networks.
          </p>
        </div>
      </div>
    </section>
  )
}