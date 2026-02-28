import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Issue #1 — ContractPulse Weekly",
  description:
    "Buy Canadian Policy reshapes procurement, SSC's $847M Network Solutions Vehicle, DND dominates awards — ContractPulse Issue #1.",
  openGraph: {
    title: "ContractPulse Issue #1 — Buy Canadian Reshapes Procurement",
    description:
      "The first issue of ContractPulse: Canadian federal government contract intelligence.",
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
            <div className="text-gray-500 text-sm">Issue #1 — February 28, 2026</div>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Buy Canadian Reshapes Procurement; SSC&apos;s $847M Network Vehicle; DND Dominates Awards
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Welcome to the first edition of ContractPulse. Each week, we cut through thousands 
          of procurement notices to bring you the signals that matter. This week: a seismic 
          policy shift, a massive IT procurement vehicle, and the department that&apos;s spending 
          the most.
        </p>
      </div>

      {/* Signal of the Week */}
      <section className="mb-12">
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-8">
          <div className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
            ⚡ Signal of the Week
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Buy Canadian Policy Reshapes Federal Procurement Landscape
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Public Services and Procurement Canada (PSPC) has launched the most significant 
              procurement policy shift in a decade. The new <strong className="text-white">Buy Canadian Policy</strong>, 
              now live on CanadaBuys, prioritizes Canadian suppliers, Canadian materials, and 
              Canadian innovation across all federal purchasing.
            </p>
            <p>
              The policy introduces new Canadian content requirements, strengthens preferences 
              for small and medium-sized enterprises (SMEs), and creates new pathways for 
              Canadian-made goods to compete for federal contracts. PSPC is actively seeking 
              industry feedback through its &quot;We Want to Hear From You&quot; consultation, 
              signaling this is still being shaped — meaning now is the time to engage.
            </p>
            <p>
              <strong className="text-gold">Why it matters:</strong> For Canadian contractors, 
              this is an opportunity. Firms that can demonstrate strong Canadian content — 
              Canadian workers, Canadian supply chains, Canadian IP — will have a measurable 
              advantage in federal bids. For foreign-headquartered firms, it&apos;s a signal to 
              accelerate Canadian partnership strategies.
            </p>
            <p>
              <strong className="text-gold">What to do:</strong> (1) Review the Buy Canadian 
              guidelines on CanadaBuys. (2) Attend PSPC&apos;s upcoming &quot;Accessing Federal 
              Procurement Opportunities&quot; sessions. (3) Audit your supply chain for Canadian 
              content percentage. (4) Submit feedback during the consultation period — the 
              policy is still being refined.
            </p>
          </div>
        </div>
      </section>

      {/* Top Awards */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          📋 Top Awards This Week
        </div>
        <p className="text-gray-400 text-sm mb-6">
          The most notable contract awards and procurement vehicles from the past week, 
          sourced from CanadaBuys and public disclosure databases.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Network Solutions Procurement Vehicle (NSPV)",
              department: "Shared Services Canada (SSC)",
              value: "$847M (estimated ceiling)",
              type: "Standing Offer / Supply Arrangement",
              detail:
                "SSC's massive network solutions procurement vehicle covers networking equipment, services, and managed solutions across the federal government. This is one of the largest IT procurement instruments currently active. Multiple vendors are expected to qualify, making this a critical vehicle for IT integrators.",
            },
            {
              title: "Human-Machine Teaming Research",
              department: "Department of National Defence (DND)",
              value: "$12.4M",
              type: "Service Contract",
              detail:
                "DND is investing in AI-human collaboration research through Defence Research and Development Canada. This contract covers advanced research into how military operators can work alongside autonomous systems — a growing area that signals DND's priorities for future capability development.",
            },
            {
              title: "Build Canada Homes — Request for Information",
              department: "Office of Infrastructure of Canada (INFC)",
              value: "TBD (major multi-year program)",
              type: "RFI / Pre-procurement",
              detail:
                "The Build Canada Homes program represents a massive federal investment in housing construction. This RFI is the first step — INFC is seeking industry input on construction approaches, modular building techniques, and delivery models. Contractors and developers should respond to shape the eventual procurement.",
            },
            {
              title: "Portable and Mobile Anti-Ram Vehicle Barriers",
              department: "DND / PSPC Joint Procurement",
              value: "$8.7M",
              type: "Request for Standing Offer",
              detail:
                "A joint DND-PSPC procurement for physical security barriers, reflecting heightened security posture at federal installations. This RFSO will establish a multi-year standing offer for rapid deployment barriers.",
            },
            {
              title: "Motor Vessel Repair and Upgrade Services",
              department: "Canada Border Services Agency (CBSA)",
              value: "$5.2M",
              type: "Service Contract",
              detail:
                "CBSA is investing in its marine fleet with repair, upgrade, and replacement services for two motor vessels. Maritime procurement continues to be a growth area as agencies modernize aging vessel fleets.",
            },
            {
              title: "Cryo-Focused Ion Beam & Scanning Electron Microscope",
              department: "National Research Council of Canada (NRC)",
              value: "$3.8M",
              type: "Goods Procurement",
              detail:
                "NRC is acquiring advanced scientific equipment for materials research. Specialized scientific equipment contracts are often sole-sourced to manufacturers, but system integrators and service providers can find opportunities in installation, training, and maintenance.",
            },
            {
              title: "Health Care Professionals (Category B)",
              department: "Department of National Defence (DND)",
              value: "$2.9M (annual)",
              type: "Standing Offer",
              detail:
                "DND continues to fill healthcare gaps through contracted professionals. This standing offer covers a range of healthcare specialties for Canadian Armed Forces bases. Healthcare staffing firms should note this as a recurring opportunity.",
            },
          ].map((award, i) => (
            <div
              key={i}
              className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-white">{award.title}</h3>
                <span className="text-gold font-bold whitespace-nowrap">{award.value}</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="text-xs bg-forest-50/30 text-gray-300 px-2 py-1 rounded">
                  {award.department}
                </span>
                <span className="text-xs bg-forest-50/30 text-gray-300 px-2 py-1 rounded">
                  {award.type}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who's Moving */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          👤 Who&apos;s Moving
        </div>
        <p className="text-gray-400 text-sm mb-6">
          Key personnel changes in federal procurement and the departments that buy the most.
        </p>

        <div className="space-y-4">
          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              PSPC Launches Buy Canadian Engagement Team
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              PSPC has established a dedicated team to manage industry engagement around the 
              Buy Canadian Policy. The team is hosting sessions across the country, starting 
              with a national webinar series in March 2026. This signals that PSPC is treating 
              Buy Canadian as a flagship initiative with dedicated resources, not a paper exercise.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Shared Services Canada Restructures Procurement Division
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              SSC has reorganized its procurement operations to better align with the 
              government&apos;s digital transformation agenda. The new structure creates 
              dedicated teams for cloud, networking, and cybersecurity procurement — 
              mirroring the department&apos;s priority spending areas. IT vendors should 
              update their SSC contact maps.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Standards Council of Canada Seeks Northern Construction Expertise
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              SCC&apos;s new procurement for &quot;Guidance for Prefabricated and Modular 
              Construction Addressing Northern Conditions&quot; signals growing federal 
              investment in northern infrastructure. This aligns with the Build Canada 
              Homes initiative and creates opportunities for firms with Arctic and 
              remote-region construction expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Watch */}
      <section className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          ⚖️ Policy Watch
        </div>

        <div className="space-y-4">
          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Buy Canadian Policy: Active Consultation Period
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Buy Canadian Policy is in active consultation. PSPC is accepting feedback 
              from industry on Canadian content requirements, SME preferences, and material 
              sourcing rules. This is a rare window to influence procurement policy directly. 
              Submissions should be made through PSPC&apos;s &quot;We Want to Hear From You&quot; portal 
              on canada.ca.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              CanadaBuys Platform Continues Migration
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The transition from the legacy BuyandSell.gc.ca platform to CanadaBuys 
              (canadabuys.canada.ca) continues. All new tender opportunities are now posted 
              on CanadaBuys, with improved search filters and notification capabilities. 
              Vendors still using the old platform should complete their migration immediately 
              to avoid missing opportunities.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Indigenous Procurement Targets Remain a Priority
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The federal government continues to target 5% of federal contracts to 
              Indigenous-owned businesses. This week&apos;s tender data shows ISC actively 
              using set-aside provisions, including a new RFP for Oil &amp; Gas Field 
              Inspections through the Indigenous Services procurement stream. Indigenous 
              business certification remains a competitive advantage for federal contracting.
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
            <div className="text-3xl font-bold text-gold mb-1">37%</div>
            <div className="text-white font-semibold text-sm mb-2">DND Share of Active Tenders</div>
            <p className="text-gray-500 text-xs">
              The Department of National Defence accounts for over a third of all active 
              tender opportunities on CanadaBuys this week — from vehicle barriers to 
              healthcare staffing to research contracts.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">$847M</div>
            <div className="text-white font-semibold text-sm mb-2">Largest Active Procurement</div>
            <p className="text-gray-500 text-xs">
              SSC&apos;s Network Solutions Procurement Vehicle is the largest active 
              procurement instrument this week, covering the full spectrum of federal 
              networking needs.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">68%</div>
            <div className="text-white font-semibold text-sm mb-2">Services vs. Goods</div>
            <p className="text-gray-500 text-xs">
              Services contracts continue to dominate federal procurement, accounting for 
              68% of active tenders this week vs. 22% goods and 10% construction.
            </p>
          </div>

          <div className="bg-forest-500/30 border border-forest-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gold mb-1">14</div>
            <div className="text-white font-semibold text-sm mb-2">Amended Notices This Week</div>
            <p className="text-gray-500 text-xs">
              14 active tenders were amended this week — extending deadlines, changing 
              requirements, or adding information. Amended notices often signal late-stage 
              industry feedback or scope changes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-forest-50/20 pt-12">
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-3">Get this every Monday</h3>
          <p className="text-gray-400 text-sm mb-6">
            ContractPulse delivers Canadian government contract intelligence to your inbox 
            every week. Free to subscribe.
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
