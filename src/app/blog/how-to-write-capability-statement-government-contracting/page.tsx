import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write a Capability Statement for Government Contracting (2026 Guide) | ContractPulse",
  description: "Step-by-step guide to writing a government contracting capability statement that wins contracts. Includes templates, real examples, and the exact format contracting officers want to see.",
  keywords: "capability statement, government contracting capability statement, capability statement template, capability statement examples, federal contracting, small business capability statement",
  openGraph: {
    title: "How to Write a Capability Statement for Government Contracting (2026 Guide)",
    description: "The complete guide to writing a capability statement that gets you noticed by federal contracting officers.",
    type: "article",
    publishedTime: "2026-03-01T14:00:00Z",
    authors: ["ContractPulse Research Team"],
    tags: ["Capability Statement", "Government Contracting", "Small Business"],
  },
  alternates: {
    canonical: "https://contractpulse.io/blog/how-to-write-capability-statement-government-contracting"
  }
};

export default function CapabilityStatementGuidePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Capability Statement Guide</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full">BUSINESS DEVELOPMENT</span>
          <span className="text-gray-400 text-sm">March 1, 2026</span>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-400 text-sm">14 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          How to Write a Capability Statement That Actually Wins Government Contracts
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Your capability statement is often the first thing a contracting officer sees. Most are forgettable. Here&apos;s how to write one that gets you into the room.
        </p>
      </header>

      {/* Content */}
      <div className="prose-custom space-y-8 text-gray-300 leading-relaxed">

        {/* What Is a Capability Statement */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Is a Capability Statement?</h2>
          <p>
            A capability statement is a one-page (sometimes two-page) document that summarizes your company&apos;s competencies, certifications, past performance, and contact information. Think of it as your company&apos;s resume for government work.
          </p>
          <p className="mt-3">
            Federal contracting officers receive dozens of these every week. The ones that get attention share specific traits—they&apos;re concise, relevant to the agency&apos;s mission, and make it immediately clear what you do and why you&apos;re qualified.
          </p>
          <div className="bg-navy-300/50 border border-navy-50/20 rounded-lg p-6 mt-4">
            <p className="text-gold font-semibold mb-2">Key Insight</p>
            <p className="text-gray-300 text-sm">
              72% of contracting officers spend less than 30 seconds reviewing a capability statement before deciding whether to read further. Your first impression is everything.
            </p>
          </div>
        </section>

        {/* Why You Need One */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Why Every Government Contractor Needs One</h2>
          <p>
            You&apos;ll need a capability statement for virtually every interaction in the federal marketplace:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong className="text-white">Matchmaking events:</strong> Industry days, vendor outreach sessions, and procurement conferences all expect you to hand these out.</li>
            <li><strong className="text-white">Small Business Office meetings:</strong> When you visit an agency&apos;s Office of Small and Disadvantaged Business Utilization (OSDBU), they&apos;ll ask for one.</li>
            <li><strong className="text-white">Teaming arrangements:</strong> Prime contractors evaluating subcontractors want to see your capabilities at a glance.</li>
            <li><strong className="text-white">Sources sought responses:</strong> Many RFI/sources sought notices request a capability statement as part of the response.</li>
            <li><strong className="text-white">SAM.gov profile supplement:</strong> Attach it to your SAM.gov entity profile for maximum visibility.</li>
          </ul>
        </section>

        {/* The Six Essential Sections */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The 6 Essential Sections</h2>
          <p>
            Every effective capability statement includes these sections. Miss one and you look like an amateur.
          </p>

          <div className="space-y-6 mt-6">
            <div className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-2">1. Company Overview</h3>
              <p className="text-sm">
                Two to three sentences maximum. State what you do, who you serve, and your differentiator. Avoid generic language like &quot;we provide innovative solutions.&quot; Be specific: &quot;We provide cybersecurity monitoring and incident response for federal civilian agencies, with 15 years of experience protecting .gov networks.&quot;
              </p>
            </div>

            <div className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-2">2. Core Competencies</h3>
              <p className="text-sm">
                List 4–8 specific capabilities. Use the language from federal solicitations in your industry. If agencies say &quot;IT modernization,&quot; don&apos;t say &quot;digital transformation.&quot; Mirror their terminology. Bullet points, not paragraphs.
              </p>
            </div>

            <div className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-2">3. Past Performance</h3>
              <p className="text-sm">
                Include 2–3 relevant contract examples. For each, list: the agency, contract number (if shareable), brief scope, dollar value range, and one measurable result. &quot;Reduced system downtime by 47% for DHS CISA&quot; beats &quot;Provided excellent IT support.&quot;
              </p>
            </div>

            <div className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-2">4. Differentiators</h3>
              <p className="text-sm">
                What makes you different from the 50 other companies that do what you do? Proprietary technology, unique methodology, cleared personnel, geographic presence near the agency, niche expertise. Be honest and specific.
              </p>
            </div>

            <div className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-2">5. Company Data</h3>
              <p className="text-sm">
                This is the section contracting officers scan first. Include: UEI number, CAGE code, NAICS codes (list your primary + 2-3 secondary), socioeconomic certifications (8(a), HUBZone, WOSB, SDVOSB, etc.), GSA Schedule number if applicable, and security clearance level.
              </p>
            </div>

            <div className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-2">6. Contact Information</h3>
              <p className="text-sm">
                Name, title, phone, email, website, and physical address. Include a direct contact—not a generic inbox. Contracting officers want to reach a real person.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7 Mistakes That Kill Capability Statements</h2>
          <div className="space-y-4 mt-4">
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">1.</span>
              <div>
                <p className="text-white font-semibold">Going longer than one page.</p>
                <p className="text-sm text-gray-400">Nobody reads a three-page capability statement. If you can&apos;t summarize your company in one page, you don&apos;t know your company well enough.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">2.</span>
              <div>
                <p className="text-white font-semibold">Using generic language.</p>
                <p className="text-sm text-gray-400">&quot;We leverage cutting-edge solutions to drive mission success&quot; tells the reader nothing. Replace with specifics.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">3.</span>
              <div>
                <p className="text-white font-semibold">One-size-fits-all approach.</p>
                <p className="text-sm text-gray-400">Tailor your capability statement for each agency or opportunity. Highlight the NAICS codes and past performance relevant to them.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">4.</span>
              <div>
                <p className="text-white font-semibold">Missing NAICS codes or UEI.</p>
                <p className="text-sm text-gray-400">These are how contracting officers find and categorize you. Missing them signals inexperience.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">5.</span>
              <div>
                <p className="text-white font-semibold">Poor visual design.</p>
                <p className="text-sm text-gray-400">A wall of text in Times New Roman won&apos;t stand out. Use your brand colors, clean layout, and clear hierarchy. But don&apos;t over-design—substance over style.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">6.</span>
              <div>
                <p className="text-white font-semibold">No measurable results.</p>
                <p className="text-sm text-gray-400">Past performance without numbers is just a story. &quot;Saved $2.3M annually&quot; or &quot;99.97% uptime over 3 years&quot; creates credibility.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold text-lg">7.</span>
              <div>
                <p className="text-white font-semibold">Outdated information.</p>
                <p className="text-sm text-gray-400">If your capability statement references contracts from 2018 or expired certifications, update it. Review quarterly at minimum.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tailoring for Different Agencies */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Tailoring for Different Agencies</h2>
          <p>
            The smartest contractors maintain a base template and customize for each target agency. Here&apos;s how:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong className="text-white">Research the agency&apos;s mission:</strong> Read their strategic plan. Use their language in your overview.</li>
            <li><strong className="text-white">Match your NAICS codes:</strong> Lead with the codes the agency buys under most frequently. Check USAspending.gov for their spending patterns.</li>
            <li><strong className="text-white">Highlight relevant past performance:</strong> If pitching to VA, lead with healthcare-adjacent work. If pitching to DoD, lead with defense experience.</li>
            <li><strong className="text-white">Reference their contract vehicles:</strong> If the agency buys through GWAC or BPA, mention your access to those vehicles.</li>
          </ul>
        </section>

        {/* Digital vs Print */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Digital vs. Print: Format Considerations</h2>
          <p>
            You need both versions. Your digital PDF should be optimized for screen reading—hyperlinked contract references, clickable email/phone, and compressed to under 2MB for easy email attachment. Your print version should use heavier paper stock (100lb+) with full-color printing for in-person events.
          </p>
          <p className="mt-3">
            Pro tip: Save your digital version as a PDF/A format for maximum compatibility across government systems. Many agency computers run restricted environments that may not render newer PDF features.
          </p>
        </section>

        {/* When to Update */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">When to Update Your Capability Statement</h2>
          <p>Update immediately when:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>You win a new contract (add to past performance)</li>
            <li>You earn a new certification (8(a), HUBZone, clearance upgrade)</li>
            <li>You add a new NAICS code to your SAM.gov profile</li>
            <li>Your contact information changes</li>
            <li>You hire key personnel with relevant credentials</li>
          </ul>
          <p className="mt-3">
            At minimum, do a full review every quarter. An outdated capability statement is worse than no capability statement.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-white mb-3">Get Federal Contract Intelligence Weekly</h2>
          <p className="text-gray-300 mb-6">
            ContractPulse tracks new federal opportunities, award trends, and procurement intelligence across every agency. Free subscribers get the weekly digest. Pro members get daily alerts and data exports.
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
            <Link href="/blog/sam-gov-registration-guide-new-contractors" className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="text-gold text-sm font-semibold">Registration Guide</p>
              <p className="text-white font-medium mt-1">SAM.gov Registration: Complete Step-by-Step Guide</p>
            </Link>
            <Link href="/blog/small-business-set-aside-contracts-guide" className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="text-gold text-sm font-semibold">Set-Aside Programs</p>
              <p className="text-white font-medium mt-1">Small Business Set-Aside Contracts: Complete Guide</p>
            </Link>
            <Link href="/blog/how-to-find-government-contracts-2026-guide" className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="text-gold text-sm font-semibold">Getting Started</p>
              <p className="text-white font-medium mt-1">How to Find Government Contracts in 2026</p>
            </Link>
            <Link href="/blog/gsa-schedule-vs-open-market-contracting" className="bg-navy-300/30 border border-navy-50/10 rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="text-gold text-sm font-semibold">Strategy</p>
              <p className="text-white font-medium mt-1">GSA Schedule vs. Open Market Contracting</p>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
