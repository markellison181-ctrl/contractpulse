import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Issue #1 — ContractPulse Weekly | Feb 24-28, 2026",
  description:
    "DOJ awards $47.8M for federal prisoner healthcare, USDA spends $50M on wildfire retardant, $340M+ in top awards tracked — ContractPulse Issue #1.",
  openGraph: {
    title: "ContractPulse Issue #1 — DOJ Expands Prisoner Healthcare; $340M+ in Federal Awards",
    description:
      "Weekly US federal contract intelligence: top awards from USAspending.gov, procurement signals, and market analysis for government contractors.",
    type: "article",
    publishedTime: "2026-02-28T12:00:00Z",
  },
};

export default function SampleIssuePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
            <span className="text-forest font-bold text-sm">CP</span>
          </div>
          <div>
            <div className="text-white font-semibold">ContractPulse Weekly</div>
            <div className="text-gray-300 text-sm">Issue #1 — February 28, 2026</div>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          DOJ Expands Prisoner Healthcare — $47.8M Award; USDA Preps for Wildfire Season; $340M+ Tracked
        </h1>
        <p className="text-gray-300 leading-relaxed">
          Welcome to the first edition of ContractPulse. Each week, we analyze USAspending.gov
          data, SAM.gov postings, and federal procurement trends to deliver actionable intelligence
          for government contractors. This week: major healthcare and IT awards across DOJ, USDA,
          and DOT — plus a look at the $5B+ federal healthcare services market.
        </p>
      </div>

      {/* Signal of the Week */}
      <section className="mb-12">
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-8">
          <div className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
            ⚡ Signal of the Week
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            DOJ Expands Health Care for Federal Prisoners — $47.8M to Heritage Health Solutions
          </h2>
          <div className="text-gray-200 leading-relaxed space-y-4">
            <p>
              The U.S. Marshals Service (USMS) awarded <strong className="text-white">$47.8 million</strong> to
              Heritage Health Solutions for nationwide prisoner healthcare services. The contract covers
              medical, dental, and mental health care for federal detainees across USMS facilities —
              a critical and growing area of federal spending.
            </p>
            <p>
              Healthcare services across the Department of Justice, Department of Homeland Security,
              and Department of Veterans Affairs represent a{" "}
              <strong className="text-white">$5 billion+ annual market</strong>. The Bureau of Prisons
              alone spends over $1.5B per year on inmate medical care, and demand continues to climb
              as the federal detainee population grows and healthcare costs rise.
            </p>
            <p>
              <strong className="text-gold">Why it matters:</strong> Federal prisoner healthcare is
              one of the most recession-proof segments of government contracting. Facilities must
              provide care regardless of budget pressures, and incumbents enjoy high recompete win
              rates. Heritage Health Solutions&apos; win here signals continued DOJ investment in
              outsourced medical services — an opportunity for healthcare firms with corrections
              experience.
            </p>
            <p>
              <strong className="text-gold">What to watch:</strong> Additional USMS and BOP healthcare
              solicitations expected in Q2 2026. Contractors with NAICS 621999 (All Other Miscellaneous
              Ambulatory Health Care Services) and 621498 should monitor SAM.gov for upcoming opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Top Awards */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          📋 Top Awards This Week
        </div>
        <p className="text-gray-300 text-sm mb-6">
          The largest contract awards from February 24–28, 2026, sourced from USAspending.gov
          and federal procurement databases.
        </p>

        <div className="space-y-4">
          {[
            {
              rank: 1,
              contractor: "Perimeter Solutions LP",
              department: "USDA",
              value: "$50.0M",
              detail:
                "Fire retardant services for the 2026 wildfire season. USDA Forest Service contract for aerial fire retardant supply and delivery across western states. With wildfire seasons intensifying, this is a growing and strategically critical procurement area.",
            },
            {
              rank: 2,
              contractor: "Network Designs Inc.",
              department: "DOJ",
              value: "$48.6M",
              detail:
                "IT services awarded under an SDVOSB (Service-Disabled Veteran-Owned Small Business) set-aside. Covers network infrastructure, systems administration, and IT modernization for DOJ components. Notable as a large small-business set-aside in a competitive market.",
            },
            {
              rank: 3,
              contractor: "SysNet Technologies",
              department: "DOT",
              value: "$48.4M",
              detail:
                "Cybersecurity and penetration testing services for the Department of Transportation. Includes vulnerability assessments, red team operations, and continuous monitoring across DOT systems and critical transportation infrastructure networks.",
            },
            {
              rank: 4,
              contractor: "ECS Federal LLC",
              department: "HHS",
              value: "$48.0M",
              detail:
                "Professional support services for the Department of Health and Human Services. ECS Federal provides program management, data analytics, and IT consulting across HHS divisions including CMS and CDC support operations.",
            },
            {
              rank: 5,
              contractor: "Heritage Health Solutions",
              department: "DOJ / USMS",
              value: "$47.8M",
              detail:
                "Nationwide prisoner healthcare services for the U.S. Marshals Service. Comprehensive medical, dental, and behavioral health care for federal detainees. This is our Signal of the Week — see above for full analysis.",
            },
            {
              rank: 6,
              contractor: "HII Mission Technologies",
              department: "GSA",
              value: "$47.5M",
              detail:
                "F-16 maintenance training services. Huntington Ingalls Industries' Mission Technologies division will provide technical training for F-16 fighter jet maintenance personnel, supporting Air Force readiness and allied nation training programs.",
            },
            {
              rank: 7,
              contractor: "Triple Canopy Inc.",
              department: "DHS",
              value: "$47.3M",
              detail:
                "Protective security officer services for the Department of Homeland Security. Triple Canopy (a Constellis company) provides armed and unarmed security personnel for federal facilities, courthouses, and critical infrastructure protection.",
            },
          ].map((award, i) => (
            <div
              key={i}
              className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-white">
                  <span className="text-gold mr-2">#{award.rank}</span>
                  {award.contractor}
                </h3>
                <span className="text-gold font-bold whitespace-nowrap">{award.value}</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="text-xs bg-forest-50/30 text-gray-200 px-2 py-1 rounded">
                  {award.department}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Trends */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          📈 Market Trends
        </div>

        <div className="space-y-4">
          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Services Contracts Dominate Federal Spending
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              This week&apos;s top awards are 67% services-based — spanning IT, healthcare,
              cybersecurity, and protective services. This reflects the broader federal trend
              toward outsourcing specialized capabilities rather than building them in-house.
              For contractors, the message is clear: agencies are buying expertise, not just products.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Small Business Set-Asides Remain Strong
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Network Designs Inc.&apos;s $48.6M SDVOSB set-aside at DOJ shows that significant
              contract dollars continue to flow through small business programs. Veteran-owned
              and service-disabled veteran-owned firms should monitor DOJ, VA, and DHS for
              upcoming set-aside opportunities in IT and professional services.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Wildfire Preparedness Spending Accelerates
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              USDA&apos;s $50M award to Perimeter Solutions LP for fire retardant is the
              largest single award this week. With wildfire seasons growing longer and more
              severe, federal spending on fire suppression, prevention, and emergency response
              continues to climb. Expect additional USDA Forest Service and DOI Bureau of Land
              Management procurements in March and April.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers That Matter */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          📊 Numbers That Matter
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">$50M</div>
            <div className="text-white font-semibold text-sm mb-2">Largest Award This Week</div>
            <p className="text-gray-300 text-xs">
              Perimeter Solutions LP&apos;s USDA contract for fire retardant services
              tops this week&apos;s awards as wildfire season preparation ramps up.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">67%</div>
            <div className="text-white font-semibold text-sm mb-2">Services-Based Awards</div>
            <p className="text-gray-300 text-xs">
              Two-thirds of this week&apos;s top awards are for services — IT, healthcare,
              cybersecurity, and security — reflecting the federal preference for outsourced expertise.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">$340M+</div>
            <div className="text-white font-semibold text-sm mb-2">Total Awards Tracked</div>
            <p className="text-gray-300 text-xs">
              Combined value of the top 7 awards this week. Across DOJ, USDA, DOT, HHS,
              GSA, and DHS — every major department is spending.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">$5B+</div>
            <div className="text-white font-semibold text-sm mb-2">Federal Healthcare Market</div>
            <p className="text-gray-300 text-xs">
              Annual federal spending on healthcare services across DOJ, DHS, and VA — a
              massive and growing market for contractors with medical capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-forest-50/20 pt-12">
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Get this every Monday</h3>
          <p className="text-gray-300 text-sm mb-6">
            ContractPulse delivers US federal contract intelligence — sourced from
            USAspending.gov and SAM.gov — straight to your inbox every week. Free to subscribe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#subscribe"
              className="bg-gold text-forest px-8 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-colors"
            >
              Subscribe Free
            </Link>
            <Link
              href="/pricing"
              className="border border-gold text-gold px-8 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-forest transition-colors"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
