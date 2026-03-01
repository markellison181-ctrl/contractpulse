import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GSA Schedule vs Open Market: Which Path is Right for Your Business? | ContractPulse",
  description: "Compare GSA Schedules and open market contracting. Cost analysis, timeline to first contract, pros and cons, and strategic recommendations based on your business profile.",
  keywords: "GSA schedule, GSA MAS, open market contracting, federal procurement, government contracts, GSA Advantage, Multiple Award Schedule, contracting strategy",
  openGraph: {
    title: "GSA Schedule vs Open Market: Which Path is Right for Your Business?",
    description: "Data-driven comparison of GSA Schedules vs open market federal contracting paths",
    type: "article",
    publishedTime: "2026-03-01T14:00:00Z",
    authors: ["ContractPulse Research Team"],
    tags: ["GSA Schedule", "Strategy", "Government Contracting"],
  },
  alternates: {
    canonical: "https://contractpulse.io/blog/gsa-schedule-vs-open-market-contracting"
  }
};

export default function GSAScheduleVsOpenMarket() {
  return (
    <main className="min-h-screen bg-forest text-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-gold hover:text-gold-300 text-sm font-medium">
              ← Back to Blog
            </Link>
            <span className="text-gray-500">|</span>
            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium">Analysis</span>
            <span className="text-gray-400 text-sm">10 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            GSA Schedule vs Open Market: Which Path is Right for Your Business?
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The GSA Multiple Award Schedule (MAS) generated <span className="text-gold font-semibold">$38 billion</span> in 
            sales last year. But getting on schedule costs $15K-50K and takes 6-12 months. Is it worth it? 
            Here&apos;s the data-driven answer.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "$38B", label: "GSA Schedule Sales" },
              { value: "20K+", label: "Schedule Holders" },
              { value: "6-12mo", label: "Time to Award" },
              { value: "20yr", label: "Contract Period" },
            ].map((stat, i) => (
              <div key={i} className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gold">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* What is GSA Schedule */}
          <section>
            <h2 className="text-3xl font-bold mb-6">What is a GSA Schedule?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A GSA Schedule (officially the Multiple Award Schedule or MAS) is a long-term, 
              government-wide contract between the General Services Administration and your company. 
              It pre-negotiates your pricing, terms, and conditions so federal buyers can purchase 
              directly from you without running a full competitive procurement.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Think of it as getting on the government&apos;s approved vendor list. Once you&apos;re on 
              schedule, any federal agency can buy from you through GSA Advantage (the government&apos;s 
              online marketplace) or through a GSA eBuy request. The streamlined buying process is why 
              many agencies prefer Schedule purchases — less paperwork, faster delivery.
            </p>

            <div className="bg-forest-500/50 border border-gold/20 rounded-xl p-6">
              <h3 className="text-gold font-semibold mb-4">GSA MAS Consolidation (2019–Present)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                GSA consolidated all 24 legacy schedules into a single Multiple Award Schedule in 2019. 
                Now you apply once under the MAS solicitation and select your applicable Special Item 
                Numbers (SINs) — the product/service categories you want to offer. This simplified the 
                process significantly, but the application is still substantial.
              </p>
            </div>
          </section>

          {/* Head-to-Head Comparison */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Head-to-Head Comparison</h2>
            <div className="space-y-4">
              {[
                { factor: "Time to First Sale", gsa: "6-12 months (application + review)", open: "30-90 days (respond to posted solicitation)", winner: "open" },
                { factor: "Upfront Cost", gsa: "$15K-50K (consultant + application prep)", open: "$0-5K (proposal writing)", winner: "open" },
                { factor: "Contract Duration", gsa: "20 years (5-year base + three 5-year options)", open: "1-5 years typical", winner: "gsa" },
                { factor: "Competition Level", gsa: "Lower (only schedule holders compete)", open: "Higher (all qualified businesses)", winner: "gsa" },
                { factor: "Buyer Convenience", gsa: "Very high — streamlined ordering", open: "Lower — full FAR process", winner: "gsa" },
                { factor: "Price Flexibility", gsa: "Limited — pre-negotiated rates", open: "High — bid per opportunity", winner: "open" },
                { factor: "Ongoing Compliance", gsa: "High — IFF fees, price reductions, reporting", open: "Low — per-contract only", winner: "open" },
                { factor: "Agency Reach", gsa: "All federal agencies + many state/local", open: "Per-solicitation only", winner: "gsa" },
                { factor: "Revenue Potential", gsa: "$38B across all schedules", open: "$600B+ total federal market", winner: "tie" },
                { factor: "Small Business Impact", gsa: "Set-asides available on GSA orders", open: "Full set-aside programs available", winner: "tie" },
              ].map((row, i) => (
                <div key={i} className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <span className="text-white font-semibold text-sm">{row.factor}</span>
                    </div>
                    <div className="md:w-1/3">
                      <div className={`text-sm p-2 rounded ${row.winner === 'gsa' ? 'bg-green-500/10 border border-green-500/20' : 'bg-forest/50 border border-forest-50/10'}`}>
                        <span className="text-gold text-xs font-medium">GSA Schedule:</span>
                        <p className="text-gray-300 mt-1">{row.gsa}</p>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className={`text-sm p-2 rounded ${row.winner === 'open' ? 'bg-green-500/10 border border-green-500/20' : 'bg-forest/50 border border-forest-50/10'}`}>
                        <span className="text-gold text-xs font-medium">Open Market:</span>
                        <p className="text-gray-300 mt-1">{row.open}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Analysis */}
          <section>
            <h2 className="text-3xl font-bold mb-6">True Cost of a GSA Schedule</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The application is free, but realistically, getting on schedule has significant costs:
            </p>

            <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 mb-6">
              <h3 className="text-gold font-semibold mb-4">Cost Breakdown</h3>
              <div className="space-y-3">
                {[
                  { item: "GSA consultant (recommended)", cost: "$15,000–$35,000", note: "Can DIY, but 60% of self-prepared applications are rejected" },
                  { item: "Application preparation time", cost: "80–200 hours", note: "Financial documents, commercial sales data, pricing methodology" },
                  { item: "Industrial Funding Fee (IFF)", cost: "0.75% of sales", note: "Ongoing — deducted from every dollar sold through the schedule" },
                  { item: "Annual reporting/compliance", cost: "20–40 hours/year", note: "Sales reporting, price reduction tracking, contract modifications" },
                  { item: "GSA Advantage catalog maintenance", cost: "5–10 hours/quarter", note: "Keeping products/services and pricing current" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4 py-3 border-b border-forest-50/10 last:border-0 text-sm">
                    <div className="text-gray-300">{row.item}</div>
                    <div className="text-gold font-semibold">{row.cost}</div>
                    <div className="text-gray-400">{row.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6">
              <h3 className="text-gold font-semibold mb-2">💡 Break-Even Analysis</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                If you spend $25K getting on schedule and the IFF is 0.75%, you need approximately 
                <strong className="text-white"> $500K in GSA sales </strong> within the first 2 years 
                to justify the investment vs simply bidding on open-market opportunities. If your average 
                deal size is under $100K, you need 5+ wins just to break even. For many small businesses, 
                starting on the open market makes more financial sense.
              </p>
            </div>
          </section>

          {/* When to Choose Each */}
          <section>
            <h2 className="text-3xl font-bold mb-6">When to Choose Each Path</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-forest-500/50 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-green-400 font-bold text-lg mb-4">✅ Get a GSA Schedule When:</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span><span>You sell commercial products or services with established pricing</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span><span>You have 2+ years of commercial sales history ($500K+ preferred)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span><span>Your offerings are bought repeatedly (not one-time projects)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span><span>Multiple agencies could use your products/services</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span><span>You want a long-term government sales channel (20-year contract)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span><span>You&apos;re in IT, professional services, or office products (high GSA demand)</span></li>
                </ul>
              </div>

              <div className="bg-forest-500/50 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-blue-400 font-bold text-lg mb-4">✅ Start Open Market When:</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span><span>You&apos;re new to government contracting (less than 2 years)</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span><span>You provide custom or project-based services</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span><span>You want revenue fast (can bid within 30 days)</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span><span>Your target agency prefers open-market procurements</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span><span>You don&apos;t have $15K+ for GSA application costs</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span><span>You have set-aside certifications (8(a), HUBZone, SDVOSB)</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Best Strategy */}
          <section>
            <h2 className="text-3xl font-bold mb-6">The Best Strategy: Start Open Market, Add GSA Later</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              For most new government contractors, the optimal path is:
            </p>

            <div className="space-y-4">
              {[
                { phase: "Year 1", title: "Open Market Focus", desc: "Win 2-3 open-market contracts. Build past performance. Learn the procurement process. Target set-aside opportunities if certified.", color: "blue" },
                { phase: "Year 2", title: "Evaluate GSA ROI", desc: "With revenue flowing and past performance documented, assess whether GSA Schedule makes sense for your specific products/services and target agencies.", color: "gold" },
                { phase: "Year 2-3", title: "Apply for GSA (if justified)", desc: "Use your government sales history, past performance, and established pricing to strengthen your GSA application. Your acceptance rate will be significantly higher.", color: "green" },
                { phase: "Year 3+", title: "Dual-Channel Revenue", desc: "Bid on open-market opportunities AND receive GSA orders. Two acquisition channels means more pipeline and less revenue concentration risk.", color: "gold" },
              ].map((item, i) => (
                <div key={i} className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 flex gap-4">
                  <div className="min-w-[80px]">
                    <span className="text-gold text-xs font-medium bg-gold/10 px-3 py-1 rounded-full">{item.phase}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GSA Application Tips */}
          <section>
            <h2 className="text-3xl font-bold mb-6">If You&apos;re Going GSA: 7 Tips for Approval</h2>
            <div className="space-y-4">
              {[
                { title: "Hire a GSA consultant — seriously", desc: "60% of self-prepared applications are rejected. A good consultant costs $15-35K but dramatically increases approval odds and speed. Ask for references and success rates." },
                { title: "Prepare your Commercial Sales Practices (CSP) carefully", desc: "This is where most applications fail. You must disclose your most favored customer pricing and demonstrate the government is getting equal or better rates." },
                { title: "Get your financials audit-ready", desc: "GSA will scrutinize your last 2-3 years of financial statements. Reconcile everything, explain any anomalies, and have your CPA review the package." },
                { title: "Start with your strongest SINs", desc: "Don't try to get on every category. Pick 2-3 SINs where you have the strongest commercial track record and past performance." },
                { title: "Price competitively from day one", desc: "Your GSA prices are a ceiling — you can always go lower but raising prices requires a formal modification. Price strategically, not aspirationally." },
                { title: "Document everything", desc: "Every claim in your application should be backed by documentation. Sales records, contracts, customer references, certifications — if you can't prove it, don't claim it." },
                { title: "Be responsive during review", desc: "GSA will send clarification requests. Respond within 3-5 business days. Slow responses signal disorganization and can result in rejection." },
              ].map((item, i) => (
                <div key={i} className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">{i + 1}. {item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Track GSA Opportunities & Open Market Contracts</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              ContractPulse delivers weekly intelligence on new opportunities across both GSA and open-market 
              channels. Know what&apos;s coming before your competition does.
            </p>
            <Link
              href="/#subscribe"
              className="inline-flex items-center gap-2 bg-gold text-forest px-6 py-3 rounded-lg font-semibold hover:bg-gold-300 transition-colors"
            >
              Subscribe Free →
            </Link>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/small-business-set-aside-contracts-guide" className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 hover:border-gold/40 transition-colors">
                <span className="text-gold text-xs font-medium">Guide</span>
                <h3 className="text-white font-semibold mt-2">Small Business Set-Aside Contracts: Everything You Need to Know</h3>
                <p className="text-gray-400 text-sm mt-2">Navigate the $150B+ small business contracting landscape.</p>
              </Link>
              <Link href="/blog/top-10-federal-agencies-spending-2026" className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 hover:border-gold/40 transition-colors">
                <span className="text-gold text-xs font-medium">Analysis</span>
                <h3 className="text-white font-semibold mt-2">Top 10 Federal Agencies Spending the Most in 2026</h3>
                <p className="text-gray-400 text-sm mt-2">Data-driven analysis of federal spending by agency.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
