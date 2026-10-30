import { Download } from 'lucide-react'

const fees = [
  { description: 'Tuition Fee', amount: 78493 },
  { description: 'Development Fee', amount: 8007 },
]

const total = fees.reduce((sum, fee) => sum + fee.amount, 0)

export default function Fees() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        FRA Fees Structure
      </h1>
      <p className="text-gray-600 mb-6">
        B.Pharm, Academic Year 2026-27 (DTE Code 3533)
      </p>

      <div className="overflow-x-auto">
        <table className="w-full max-w-3xl border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Sr. No.</th>
              <th className="border border-gray-300 px-4 py-3">Description</th>
              <th className="border border-gray-300 px-4 py-3 text-right">Fees (₹)</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee, index) => (
              <tr key={fee.description}>
                <td className="border border-gray-300 px-4 py-3">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-3">{fee.description}</td>
                <td className="border border-gray-300 px-4 py-3 text-right">
                  {fee.amount.toLocaleString('en-IN')}
                </td>
              </tr>
            ))}
            <tr className="font-semibold bg-gray-50">
              <td className="border border-gray-300 px-4 py-3" colSpan={2}>Total Fees</td>
              <td className="border border-gray-300 px-4 py-3 text-right">
                {total.toLocaleString('en-IN')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        As approved by the Fees Regulating Authority, Maharashtra on 25-09-2025 (no upward revision).
      </p>

      <a
        href="/docs/bpharm-fee-structure-2026-27.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 bg-gray-100 px-6 py-3 rounded-3xl font-medium"
      >
        <span>Download FRA Fee Structure (PDF)</span>
        <Download className="w-4 h-4" />
      </a>
    </div>
  )
}
