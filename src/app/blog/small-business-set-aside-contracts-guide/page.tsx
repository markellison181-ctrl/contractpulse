import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Business Set-Aside Contracts: Everything You Need to Know in 2026 | ContractPulse",
  description: "Navigate the $150B+ small business government contracting landscape. Complete guide to 8(a), HUBZone, WOSB, SDVOSB certifications, set-aside thresholds, and winning strategies.",
  keywords: "small business set-aside, 8a program, HUBZone, WOSB, SDVOSB, government contracting small business, SBA certifications, sole source contracts, federal set-aside contracts",
  openGraph: {
    title: "Small Business Set-Aside Contracts: Everything You Need to Know in 2026",
    description: "Navigate the $150B+ small business government contracting landscape with certifications, strategies, and insider tactics",
    type: "article",
    publishedTime: "2026-03-01T12:00:00Z",
    authors: ["ContractPulse Research Team"],
    tags: ["Small Business", "Set-Asides", "Certifications", "Government Contracting"],
  },
  alternates: {
    canonical: "https://contractpulse.io/blog/small-business-set-aside-contracts-guide"
  }
};

export default function SmallBusinessSetAsideGuide() {
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
            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium">Guide</span>
            <span className="text-gray-400 text-sm">14 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Small Business Set-Aside Contracts: Everything You Need to Know in 2026
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The federal government is legally required to award at least 23% of prime contracts to small businesses — 
            that&apos;s over <span className="text-gold font-semibold">$150 billion annually</span>. Here&apos;s exactly 
            how to position your company to capture your share.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "$154B", label: "SB Awards FY2025" },
              { value: "23%", label: "Statutory Goal" },
              { value: "27.2%", label: "Actual SB Share" },
              { value: "5", label: "Set-Aside Programs" },
            ].map((stat, i) => (
              <div key={i} className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gold">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gold mb-4">In This Guide</h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              {[
                "What Are Set-Aside Contracts?",
                "The 5 SBA Certification Programs",
                "8(a) Business Development Program",
                "HUBZone Program",
                "Women-Owned Small Business (WOSB)",
                "Service-Disabled Veteran (SDVOSB)",
                "Small Disadvantaged Business (SDB)",
                "How Set-Aside Thresholds Work",
                "Sole Source vs Competitive Set-Asides",
                "Step-by-Step Certification Guide",
                "Common Mistakes That Kill Applications",
                "Winning Your First Set-Aside Contract",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300 py-1">
                  <span className="text-gold text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold mb-6">What Are Set-Aside Contracts?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Set-aside contracts are federal procurement opportunities reserved exclusively for qualifying 
              small businesses. Under the Small Business Act, the federal government must award a minimum 
              percentage of contract dollars to small businesses and specific socioeconomic categories.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              When a contracting officer determines there are at least two qualified small businesses that can 
              perform the work at a fair market price, they are required to set the contract aside. This means 
              large businesses like Lockheed Martin, Deloitte, and Booz Allen Hamilton cannot compete — 
              only qualifying small businesses can bid.
            </p>

            <div className="bg-forest-500/50 border border-gold/20 rounded-xl p-6">
              <h3 className="text-gold font-semibold mb-4">Federal Small Business Goals (FY2026)</h3>
              <div className="space-y-3">
                {[
                  { program: "All Small Businesses", goal: "23%", actual: "27.2%", dollars: "$154B" },
                  { program: "Small Disadvantaged (SDB)", goal: "5%", actual: "12.1%", dollars: "$69B" },
                  { program: "Women-Owned (WOSB)", goal: "5%", actual: "5.7%", dollars: "$32B" },
                  { program: "Service-Disabled Veteran", goal: "3%", actual: "4.6%", dollars: "$26B" },
                  { program: "HUBZone", goal: "3%", actual: "2.8%", dollars: "$16B" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 text-sm py-2 border-b border-forest-50/10 last:border-0">
                    <div className="text-gray-300 font-medium">{row.program}</div>
                    <div className="text-gray-400">Goal: {row.goal}</div>
                    <div className={`font-medium ${parseFloat(row.actual) >= parseFloat(row.goal) ? 'text-green-400' : 'text-red-400'}`}>
                      Actual: {row.actual}
                    </div>
                    <div className="text-gold font-semibold text-right">{row.dollars}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: 8(a) */}
          <section>
            <h2 className="text-3xl font-bold mb-6">The 8(a) Business Development Program</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The 8(a) program is the crown jewel of small business set-asides. Named after Section 8(a) 
              of the Small Business Act, it provides a 9-year developmental program for socially and 
              economically disadvantaged small businesses.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <h3 className="text-gold font-semibold mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Sole-source contracts up to $4.5M (manufacturing) or $4M (all others)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Competitive set-asides restricted to 8(a) firms only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Joint venture opportunities with established firms (mentor-protégé)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Business development assistance, training, and counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Surplus government property access</span>
                  </li>
                </ul>
              </div>

              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <h3 className="text-gold font-semibold mb-3">Eligibility Requirements</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>At least 51% owned by socially/economically disadvantaged individual(s)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Personal net worth under $850K (excluding primary residence and business)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Average annual gross receipts under SBA size standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Demonstrate good character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Must have been in business for at least 2 years (waivable)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6">
              <h3 className="text-gold font-semibold mb-2">💡 Pro Tip: The 8(a) Sole Source Advantage</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The most powerful benefit is sole-source authority. A contracting officer can award 
                a contract directly to your 8(a) firm without any competition — up to $4.5M for 
                manufacturing and $4M for all other industries. This is how many 8(a) firms land 
                their first major federal contract. Build relationships with contracting officers 
                and program managers BEFORE opportunities are posted.
              </p>
            </div>
          </section>

          {/* Section 3: HUBZone */}
          <section>
            <h2 className="text-3xl font-bold mb-6">HUBZone Program</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Historically Underutilized Business Zone (HUBZone) program targets small businesses 
              located in economically distressed areas. Despite a 3% federal goal, HUBZone is consistently 
              under-target — meaning less competition and more agency pressure to award to HUBZone firms.
            </p>

            <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 mb-6">
              <h3 className="text-gold font-semibold mb-3">HUBZone Requirements</h3>
              <div className="space-y-3">
                {[
                  { req: "Principal Office", detail: "Must be in a designated HUBZone area" },
                  { req: "Employee Residency", detail: "At least 35% of employees must live in a HUBZone" },
                  { req: "Ownership", detail: "51% owned by US citizens, a Community Development Corp, agricultural cooperative, Indian tribe, or Alaska Native Corporation" },
                  { req: "Size", detail: "Must qualify as small under SBA size standards" },
                  { req: "Recertification", detail: "Must recertify every 3 years" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 py-2 border-b border-forest-50/10 last:border-0">
                    <div className="text-gold font-medium text-sm min-w-[160px]">{item.req}</div>
                    <div className="text-gray-300 text-sm">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">The HUBZone advantage:</strong> Because the government consistently 
              falls short of the 3% HUBZone goal, agencies are under intense pressure to find qualified HUBZone 
              firms. If you qualify, you&apos;re in a seller&apos;s market. The 10% price evaluation preference 
              in full and open competitions is an additional edge — your bid can be 10% higher than a large 
              business and still win.
            </p>
          </section>

          {/* Section 4: WOSB */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Women-Owned Small Business (WOSB) Program</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The WOSB Federal Contracting Program restricts competition for certain contracts to businesses 
              owned and controlled by women. As of FY2025, the government met its 5% WOSB goal for the 
              first time — but opportunities are still growing, especially in NAICS codes where women-owned 
              businesses are underrepresented.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <h3 className="text-gold font-semibold mb-3">WOSB Requirements</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-gold mt-1">•</span><span>51%+ owned/controlled by women who are US citizens</span></li>
                  <li className="flex items-start gap-2"><span className="text-gold mt-1">•</span><span>Women must manage day-to-day operations</span></li>
                  <li className="flex items-start gap-2"><span className="text-gold mt-1">•</span><span>Meet SBA small business size standards</span></li>
                  <li className="flex items-start gap-2"><span className="text-gold mt-1">•</span><span>Self-certify through SAM.gov or use SBA-approved certifier</span></li>
                </ul>
              </div>
              <div className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                <h3 className="text-gold font-semibold mb-3">EDWOSB (Extra Advantage)</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Economically Disadvantaged WOSB (EDWOSB) certification opens even more set-aside 
                  industries. If the woman owner&apos;s personal net worth is under $750K, average 
                  adjusted gross income under $350K, and fair market value of assets under $6M, you 
                  can access EDWOSB-restricted contracts in additional NAICS codes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: SDVOSB */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Service-Disabled Veteran-Owned Small Business (SDVOSB)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The SDVOSB program provides contracting preferences to businesses owned by veterans with 
              service-connected disabilities. The VA has its own verification program (Veterans First), 
              while SBA manages government-wide SDVOSB certification.
            </p>

            <div className="bg-forest-500/50 border border-gold/20 rounded-xl p-6 mb-6">
              <h3 className="text-gold font-semibold mb-3">SDVOSB Sole Source Thresholds</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-forest-50/10">
                  <span className="text-gray-300">Manufacturing contracts</span>
                  <span className="text-gold font-semibold">Up to $4.5M</span>
                </div>
                <div className="flex justify-between py-2 border-b border-forest-50/10">
                  <span className="text-gray-300">All other contracts</span>
                  <span className="text-gold font-semibold">Up to $4M</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-300">VA-specific contracts (Veterans First)</span>
                  <span className="text-gold font-semibold">No dollar limit</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">VA Veterans First:</strong> The Department of Veterans Affairs 
              operates its own program with significantly higher sole-source thresholds. For VA contracts, 
              verified SDVOSBs and VOSBs get priority under the Veterans First Contracting Program, with 
              no dollar ceiling on sole-source awards when the contracting officer determines the price is 
              fair and reasonable.
            </p>
          </section>

          {/* Section 6: How Thresholds Work */}
          <section>
            <h2 className="text-3xl font-bold mb-6">How Set-Aside Thresholds Work</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The &quot;Rule of Two&quot; is the foundation: if a contracting officer has a reasonable 
              expectation that at least two responsible small businesses will submit competitive offers 
              at fair market prices, the acquisition must be set aside for small businesses. Here&apos;s 
              the decision hierarchy:
            </p>

            <div className="space-y-4">
              {[
                { step: "1", title: "Micro-Purchase (≤$10K)", desc: "No set-aside required. Contracting officer can buy from any source. However, agencies should distribute micro-purchases equitably among small businesses." },
                { step: "2", title: "Simplified Acquisition ($10K–$250K)", desc: "AUTOMATICALLY reserved for small businesses unless the contracting officer cannot obtain two offers at fair market price. This is mandatory, not discretionary." },
                { step: "3", title: "Above Simplified ($250K+)", desc: "Rule of Two applies. If two+ small businesses can perform at fair price, it's set aside. If not, full and open competition with small business evaluation credit." },
                { step: "4", title: "Sole Source", desc: "No competition needed. Awarded directly to one firm. Available for 8(a), HUBZone, WOSB, and SDVOSB programs within dollar thresholds." },
              ].map((item, i) => (
                <div key={i} className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 flex gap-4">
                  <div className="text-3xl font-bold text-gold/30">{item.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Certification Guide */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Step-by-Step Certification Guide</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Regardless of which program you&apos;re pursuing, certification follows a similar process. 
              Here&apos;s how to navigate it efficiently:
            </p>

            <div className="space-y-6">
              {[
                { step: "Register in SAM.gov", detail: "Complete your SAM.gov registration with accurate NAICS codes, size standards, and socioeconomic indicators. This is prerequisite #1.", time: "2-4 weeks" },
                { step: "Determine Eligibility", detail: "Use SBA's online tools to check HUBZone maps, size standards, and program requirements. Don't waste time applying if you clearly don't qualify.", time: "1-2 days" },
                { step: "Gather Documentation", detail: "Birth certificates, DD-214s (veterans), financial statements, tax returns, articles of incorporation, operating agreements. Have 3 years of financials ready.", time: "1-2 weeks" },
                { step: "Submit Application", detail: "Apply through certify.sba.gov. Be thorough — incomplete applications are the #1 cause of delays. Triple-check everything.", time: "1 day" },
                { step: "SBA Review", detail: "SBA reviews your application, may request additional documentation, and may conduct a site visit. Respond to all requests within 5 business days.", time: "60-90 days" },
                { step: "Maintain Certification", detail: "Annual certifications, SAM.gov updates, and size re-determinations. Mark your calendar — lapses can cost you active contracts.", time: "Ongoing" },
              ].map((item, i) => (
                <div key={i} className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-gold text-forest text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">{i + 1}</span>
                      <h3 className="text-white font-semibold">{item.step}</h3>
                    </div>
                    <span className="text-gold text-xs bg-gold/10 px-3 py-1 rounded-full">{item.time}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed pl-11">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Common Mistakes */}
          <section>
            <h2 className="text-3xl font-bold mb-6">11 Mistakes That Kill Certification Applications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Inconsistent information between SAM.gov and SBA application",
                "Missing or expired UEI (Unique Entity Identifier)",
                "Wrong NAICS codes — not matching your actual revenue sources",
                "Personal financial statements that don't reconcile with tax returns",
                "Operating agreement doesn't reflect claimed ownership percentages",
                "Claiming disadvantaged status without proper documentation",
                "Not disclosing affiliates or subsidiaries",
                "Exceeding size standards due to affiliation rules",
                "Slow response to SBA information requests (>5 business days)",
                "Applying for HUBZone but employees don't actually live in zone",
                "Not having 2+ years of business history for 8(a)",
              ].map((mistake, i) => (
                <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
                  <span className="text-red-400 font-bold text-sm mt-0.5">{i + 1}.</span>
                  <span className="text-gray-300 text-sm">{mistake}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: Winning First Contract */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Winning Your First Set-Aside Contract</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Certification is the starting line, not the finish. Here&apos;s how to actually win contracts 
              once you&apos;re certified:
            </p>

            <div className="space-y-4">
              {[
                { title: "Build Relationships Before Opportunities Post", desc: "80% of government contracts are won before the solicitation drops. Attend industry days, schedule capability briefings, respond to RFIs, and get on agencies' radar." },
                { title: "Start with Subcontracting", desc: "Large primes need small business subcontractors to meet their own small business subcontracting plans. Teaming with a prime on a large contract builds past performance without the risk of prime responsibility." },
                { title: "Target Your Sweet Spot", desc: "Don't chase every opportunity. Focus on contracts in your core NAICS codes, within your size range, and where you have demonstrated past performance. Quality bids beat volume." },
                { title: "Use Dynamic Small Business Search", desc: "Register your capabilities profile in SBA's DSBS. Contracting officers use this tool to find capable small businesses for set-asides and sole-source awards." },
                { title: "Leverage Mentor-Protégé Programs", desc: "SBA's All Small Mentor-Protégé program lets you joint venture with larger firms while maintaining your small business status. The mentor provides resources; you provide the set-aside eligibility." },
              ].map((item, i) => (
                <div key={i} className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Weekly Small Business Contracting Intelligence</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              ContractPulse tracks set-aside opportunities, certification changes, and agency spending 
              patterns so you never miss an opportunity. Free weekly intelligence delivered every Monday.
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
              <Link href="/blog/sam-gov-registration-guide-new-contractors" className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 hover:border-gold/40 transition-colors">
                <span className="text-gold text-xs font-medium">Guide</span>
                <h3 className="text-white font-semibold mt-2">SAM.gov Registration: Complete Step-by-Step Guide</h3>
                <p className="text-gray-400 text-sm mt-2">Master SAM.gov registration and avoid the 14 most common mistakes.</p>
              </Link>
              <Link href="/blog/how-to-find-government-contracts-2026-guide" className="bg-forest-500/50 border border-forest-50/20 rounded-xl p-6 hover:border-gold/40 transition-colors">
                <span className="text-gold text-xs font-medium">Guide</span>
                <h3 className="text-white font-semibold mt-2">How to Find Government Contracts: Complete 2026 Guide</h3>
                <p className="text-gray-400 text-sm mt-2">Master federal procurement with our comprehensive guide.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
