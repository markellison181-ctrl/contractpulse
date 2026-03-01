import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SBIR & STTR Grants Guide 2026: How to Win Federal R&D Funding | ContractPulse",
  description: "Complete guide to SBIR and STTR grants in 2026. Learn eligibility, application process, funding amounts, top agencies, and strategies to win federal R&D funding for your small business.",
  keywords: "SBIR grants, STTR grants, small business innovation research, federal R&D funding, SBIR application, SBIR Phase 1, SBIR Phase 2, government grants small business",
  openGraph: {
    title: "SBIR & STTR Grants Guide 2026: How to Win Federal R&D Funding",
    description: "Everything small businesses need to know about winning SBIR/STTR grants from federal agencies.",
    type: "article",
    publishedTime: "2026-03-01T16:00:00Z",
    authors: ["ContractPulse Research Team"],
    tags: ["SBIR", "STTR", "Federal Grants", "R&D Funding", "Small Business"],
  },
  alternates: {
    canonical: "https://contractpulse.io/blog/sbir-sttr-grants-guide-2026"
  }
};

export default function SBIRSTTRGuidePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">SBIR &amp; STTR Grants Guide</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full">FUNDING</span>
          <span className="text-gray-400 text-sm">March 1, 2026</span>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-400 text-sm">16 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          SBIR &amp; STTR Grants in 2026: The Complete Guide to Federal R&amp;D Funding
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          The U.S. government allocates over $4 billion annually through SBIR and STTR programs. Here&apos;s how small businesses can tap into that funding—and what most applicants get wrong.
        </p>
      </header>

      {/* Content */}
      <div className="prose-custom space-y-8 text-gray-300 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Are SBIR and STTR?</h2>
          <p>
            The <strong className="text-white">Small Business Innovation Research (SBIR)</strong> and <strong className="text-white">Small Business Technology Transfer (STTR)</strong> programs are the federal government&apos;s primary mechanism for funding early-stage R&amp;D at small businesses. Every federal agency with an extramural R&amp;D budget over $100 million must allocate 3.2% to SBIR and 0.45% to STTR.
          </p>
          <p className="mt-3">
            The key difference: SBIR allows small businesses to work independently. STTR requires a formal partnership with a nonprofit research institution (university, federal lab, or FFRDC), where the research institution performs at least 30% of the work.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Three Phases</h2>
          <div className="space-y-6 mt-4">
            <div className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-2">Phase I — Feasibility</h3>
              <p className="text-sm mb-3">Prove your concept works. Typical awards:</p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>SBIR: up to $275,000 over 6–12 months</li>
                <li>STTR: up to $275,000 over 12 months</li>
              </ul>
              <p className="text-sm mt-3 text-gray-400">
                Success rate varies by agency: DoD hovers around 15–20%, NIH around 20–25%, NSF around 25%. These are competitive but significantly better odds than most grant programs.
              </p>
            </div>

            <div className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-2">Phase II — Development</h3>
              <p className="text-sm mb-3">Develop your prototype. Typical awards:</p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>SBIR: up to $1.85 million over 24 months</li>
                <li>STTR: up to $1.85 million over 24 months</li>
              </ul>
              <p className="text-sm mt-3 text-gray-400">
                Phase II is only open to Phase I awardees. Success rates jump to 40–50% because the pool is pre-qualified.
              </p>
            </div>

            <div className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-2">Phase III — Commercialization</h3>
              <p className="text-sm mb-3">Bring it to market. No set funding limit.</p>
              <p className="text-sm text-gray-400">
                Phase III isn&apos;t a traditional grant—it&apos;s where agencies can sole-source contracts to you for products developed under Phase I/II. This is where the real money is. Some Phase III contracts exceed $100 million. No SBIR allocation limits apply.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Eligibility Requirements</h2>
          <p>To qualify for SBIR/STTR, your company must:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong className="text-white">Be a U.S. small business:</strong> Organized for profit, independently owned and operated, with 500 or fewer employees</li>
            <li><strong className="text-white">Be majority U.S.-owned:</strong> More than 50% owned and controlled by U.S. citizens or permanent residents</li>
            <li><strong className="text-white">Principal investigator employed by you:</strong> For SBIR, the PI must be primarily employed by your company. For STTR, the PI can be at the research institution.</li>
            <li><strong className="text-white">Perform the work in the U.S.:</strong> Research must be conducted domestically</li>
          </ul>
          <div className="bg-navy-300/50 border border-navy-50/20 rounded-lg p-6 mt-4">
            <p className="text-gold font-semibold mb-2">VC-Backed Companies: Read This</p>
            <p className="text-gray-300 text-sm">
              If your company is majority-owned by venture capital, hedge funds, or private equity, you may still qualify under the &quot;affiliation waiver&quot; rules. However, eligibility varies by agency. DoD, NIH, DOE, and NSF have different policies. Check SBIR.gov for current guidance on your specific agency.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Top 11 SBIR/STTR Agencies by Budget</h2>
          <p>These agencies issue the most SBIR/STTR solicitations:</p>
          <div className="mt-4 space-y-3">
            {[
              { agency: "Department of Defense (DoD)", budget: "$2.1B+", focus: "Defense tech, cybersecurity, AI/ML, autonomous systems, space" },
              { agency: "National Institutes of Health (NIH)", budget: "$1.2B+", focus: "Biotech, med devices, digital health, therapeutics, diagnostics" },
              { agency: "Department of Energy (DOE)", budget: "$400M+", focus: "Clean energy, nuclear, grid tech, materials science" },
              { agency: "National Science Foundation (NSF)", budget: "$250M+", focus: "Deep tech, fundamental science applications, STEM tools" },
              { agency: "NASA", budget: "$200M+", focus: "Aerospace, Earth observation, propulsion, life support" },
              { agency: "Department of Homeland Security", budget: "$70M+", focus: "Border security, cybersecurity, disaster response" },
              { agency: "USDA", budget: "$50M+", focus: "AgTech, food safety, rural broadband" },
              { agency: "Department of Education", budget: "$30M+", focus: "EdTech, learning analytics, accessibility" },
              { agency: "EPA", budget: "$25M+", focus: "Environmental monitoring, water treatment, remediation" },
              { agency: "Department of Transportation", budget: "$20M+", focus: "Smart infrastructure, safety systems, autonomous vehicles" },
              { agency: "NOAA/Commerce", budget: "$15M+", focus: "Weather tech, ocean monitoring, fisheries management" },
            ].map((item, i) => (
              <div key={i} className="bg-navy-300/20 border border-navy-50/10 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{item.agency}</p>
                  <p className="text-gray-400 text-xs mt-1">{item.focus}</p>
                </div>
                <span className="text-gold font-semibold text-sm whitespace-nowrap">{item.budget}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How to Find Open Solicitations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">SBIR.gov:</strong> The central portal. Set up keyword alerts for your technology area.</li>
            <li><strong className="text-white">SAM.gov:</strong> All federal opportunities, including SBIR/STTR, are posted here.</li>
            <li><strong className="text-white">Agency portals:</strong> DoD uses DSIP (Defense SBIR/STTR Innovation Portal). NIH uses eRA Commons. NSF uses Research.gov.</li>
            <li><strong className="text-white">Pre-solicitation notices:</strong> Many agencies release topics 2–4 weeks before the formal solicitation opens. Monitor these for early preparation time.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Writing a Winning Proposal</h2>
          <p>
            SBIR proposals are judged on three primary criteria (weighting varies by agency):
          </p>

          <div className="space-y-4 mt-4">
            <div className="border-l-2 border-gold pl-4">
              <h3 className="text-white font-semibold">Technical Merit</h3>
              <p className="text-sm mt-1">
                Does your approach actually solve the problem? Is the science sound? Reviewers are domain experts—they&apos;ll see through handwaving. Include preliminary data if you have it. Cite relevant literature. Be specific about your methodology.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <h3 className="text-white font-semibold">Innovation</h3>
              <p className="text-sm mt-1">
                What&apos;s novel about your approach? SBIR funds R&amp;D, not incremental improvements to existing products. You need a genuine technical advance. &quot;Better UX&quot; isn&apos;t innovation. &quot;Novel sensing modality that enables 10x resolution at 1/5th the cost&quot; is.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <h3 className="text-white font-semibold">Commercial Potential</h3>
              <p className="text-sm mt-1">
                Agencies want their investment to become a product. Show your market analysis, customer discovery, and path to Phase III. Who are the end users? What&apos;s your go-to-market? Include letters of intent from potential customers if possible.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5 Costly Mistakes to Avoid</h2>
          <div className="space-y-4 mt-4">
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">1.</span>
              <div>
                <p className="text-white font-semibold">Not responding to the specific topic.</p>
                <p className="text-sm text-gray-400">SBIR topics are precise. If the topic asks for a &quot;non-invasive glucose monitoring device,&quot; don&apos;t submit your general biosensor platform. Tailor every proposal to the exact topic language.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">2.</span>
              <div>
                <p className="text-white font-semibold">Weak commercialization plan.</p>
                <p className="text-sm text-gray-400">This is where most technically strong proposals fail. &quot;We will sell to the government&quot; isn&apos;t a plan. Name specific program offices, cite relevant acquisition programs, and quantify your addressable market.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">3.</span>
              <div>
                <p className="text-white font-semibold">Overscoping Phase I.</p>
                <p className="text-sm text-gray-400">Phase I is a feasibility study, not a full development program. Promise what you can deliver in 6–12 months with $275K. Save the ambitious goals for Phase II.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">4.</span>
              <div>
                <p className="text-white font-semibold">Ignoring the budget justification.</p>
                <p className="text-sm text-gray-400">Reviewers scrutinize budgets. Every line item should map to a technical task. Unexplained costs or bloated overhead will cost you points.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">5.</span>
              <div>
                <p className="text-white font-semibold">Submitting at the deadline.</p>
                <p className="text-sm text-gray-400">Systems crash. Formats get rejected. Submit at least 48 hours early. The DoD DSIP portal is notorious for last-minute issues.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">After You Win: What Happens Next</h2>
          <p>
            If selected, expect 2–4 months between notification and contract execution. During this period:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>The contracting officer will negotiate terms and finalize the budget</li>
            <li>You&apos;ll need an active SAM.gov registration (start this before applying)</li>
            <li>Set up your accounting system for federal requirements (DCAA-compliant if DoD)</li>
            <li>Begin work only after the contract is fully executed—not before</li>
            <li>Plan your Phase II proposal early. The transition window matters.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">SBIR vs. Traditional Government Contracts</h2>
          <div className="overflow-x-auto mt-4">
            <div className="space-y-3">
              {[
                { feature: "Competition", sbir: "Topic-based, 15-25% win rate", traditional: "Open competition, 5-15% win rate" },
                { feature: "Barrier to entry", sbir: "Low—no past performance required for Phase I", traditional: "High—past performance often mandatory" },
                { feature: "Timeline", sbir: "6-24 months per phase", traditional: "Multi-year contracts common" },
                { feature: "IP rights", sbir: "You retain IP (with gov't use rights)", traditional: "Often government-owned" },
                { feature: "Set-aside", sbir: "Small business only by definition", traditional: "Open or set-aside depending on size" },
                { feature: "Pathway to production", sbir: "Phase III sole-source possible", traditional: "Recompete typically required" },
              ].map((row, i) => (
                <div key={i} className="bg-navy-300/20 border border-navy-50/10 rounded-lg p-4">
                  <p className="text-gold text-xs font-semibold mb-2">{row.feature}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400 text-xs mb-1">SBIR/STTR</p>
                      <p className="text-white">{row.sbir}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Traditional Contract</p>
                      <p className="text-gray-300">{row.traditional}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-white mb-3">Track SBIR/STTR Opportunities Automatically</h2>
          <p className="text-gray-300 mb-6">
            ContractPulse monitors new SBIR/STTR solicitations across all 11 participating agencies. Get weekly digests of open topics in your technology area—free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#subscribe"
              className="bg-gold text-navy px-6 py-3 rounded font-semibold text-center hover:bg-gold-300 transition-all duration-200"
            >
              Subscribe Free →
            </Link>
            <Link
              href="/blog"
              className="border border-gold/40 text-gold px-6 py-3 rounded font-semibold text-center hover:bg-gold/10 transition-all duration-200"
            >
              More Guides
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t border-navy-50/20">
          <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/how-to-write-capability-statement-government-contracting" className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="text-gold text-sm font-semibold">Business Development</p>
              <p className="text-white font-medium mt-1">How to Write a Capability Statement That Wins</p>
            </Link>
            <Link href="/blog/small-business-set-aside-contracts-guide" className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="text-gold text-sm font-semibold">Set-Aside Programs</p>
              <p className="text-white font-medium mt-1">Small Business Set-Aside Contracts Guide</p>
            </Link>
            <Link href="/blog/sam-gov-registration-guide-new-contractors" className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="text-gold text-sm font-semibold">Getting Started</p>
              <p className="text-white font-medium mt-1">SAM.gov Registration: Complete Guide</p>
            </Link>
            <Link href="/blog/how-to-find-government-contracts-2026-guide" className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="text-gold text-sm font-semibold">Discovery</p>
              <p className="text-white font-medium mt-1">How to Find Government Contracts in 2026</p>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
