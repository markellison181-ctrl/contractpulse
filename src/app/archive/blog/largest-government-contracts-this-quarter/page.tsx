import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 10 Largest Government Contracts Awarded This Quarter — ContractPulse",
  description: "From defense to IT to infrastructure — the biggest U.S. federal contract awards of Q1 2026 and what they signal about government priorities.",
  openGraph: {
    title: "The 10 Largest Government Contracts Awarded This Quarter",
    description: "The biggest U.S. federal contract awards of Q1 2026.",
    type: "article",
    publishedTime: "2026-02-28T12:00:00Z",
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-8">
        <Link href="/archive" className="text-gold text-sm hover:text-gold-300">← Back to Archive</Link>
      </div>

      <header className="mb-12">
        <div className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Analysis</div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          The 10 Largest Government Contracts Awarded This Quarter
        </h1>
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <span>February 28, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
      </header>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p className="text-lg text-gray-200">
          Every quarter, the U.S. federal government awards billions in contracts across defense,
          IT, professional services, and construction. Here are the 10 largest procurement actions
          from Q1 2026 — and what they tell us about where the money is flowing.
        </p>

        <div className="bg-gold/5 border border-gold/20 rounded-lg p-6 my-8">
          <p className="text-gold text-sm font-semibold mb-2">Methodology</p>
          <p className="text-gray-300 text-sm">
            This analysis is based on SAM.gov contract data, USAspending.gov records, and
            public procurement announcements from January–February 2026. Values represent estimated
            contract ceilings or awarded amounts where disclosed.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. DoD IT Modernization — $15B (program total)</h2>
        <p><strong className="text-white">Agency:</strong> Department of Defense</p>
        <p>
          The largest procurement initiative of the quarter, DoD&apos;s IT modernization spans
          cloud migration, cybersecurity upgrades, and AI implementation. Funding flows through
          GSA&apos;s EIS ($4.2B), CDAO contracts ($3.8B), and new SEWP VI AI-focused task orders ($2.1B).
          Multiple IDIQ vehicles serve as the primary procurement mechanism.
        </p>
        <p>
          <strong className="text-gold">Signal:</strong> DoD continues to consolidate IT procurement
          under large vehicles, creating a two-tier market between qualified and unqualified vendors.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. GSA EIS Cloud Migration — $1.2B</h2>
        <p><strong className="text-white">Agency:</strong> General Services Administration</p>
        <p>
          GSA awarded multiple task orders under Enterprise Infrastructure Solutions for cloud migration
          across 12 civilian agencies. This covers migration from legacy data centers to FedRAMP-approved
          cloud environments. Prime contractors include CACI, SAIC, and Booz Allen Hamilton.
        </p>
        <p>
          <strong className="text-gold">Signal:</strong> Cloud migration remains the dominant IT spending
          category. Firms with FedRAMP expertise have a structural advantage.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. NASA Artemis Mission Support — $890M</h2>
        <p><strong className="text-white">Agency:</strong> National Aeronautics and Space Administration</p>
        <p>
          NASA awarded SpaceX and three other contractors a combined $890M for Artemis mission
          support services, expanding beyond launch services to include spacecraft integration,
          ground operations, and mission planning.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. DHS Cybersecurity Infrastructure — $847M</h2>
        <p><strong className="text-white">Agency:</strong> Department of Homeland Security (CISA)</p>
        <p>
          CISA launched a new 5-year IDIQ for modernizing federal cybersecurity infrastructure.
          Focus areas include zero-trust architecture, continuous monitoring, and threat intelligence
          platforms. This contract vehicle will serve as a model for other agencies.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. JWCC Cloud Computing — $412M</h2>
        <p><strong className="text-white">Agency:</strong> Department of Defense</p>
        <p>
          DoD awarded task orders under the Joint Warfighting Cloud Capability to Microsoft, Amazon,
          Google, and Oracle for classified cloud computing services. This order covers AI/ML workloads
          for JAIC and includes edge computing for deployed forces.
        </p>
        <p>
          <strong className="text-gold">Signal:</strong> Multi-cloud strategy is the new default for
          classified computing. Vendors must support Secret and Top Secret environments.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. NASA Artemis Additional Support — $267M</h2>
        <p><strong className="text-white">Agency:</strong> NASA</p>
        <p>
          Additional cost-plus-award-fee contracts for Artemis lunar mission support. Contract includes
          options that could bring total value to $890M through 2030.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">7. Border Security Technology — $156M</h2>
        <p><strong className="text-white">Agency:</strong> U.S. Customs and Border Protection</p>
        <p>
          CBP awarded Raytheon Technologies a contract for integrating advanced surveillance technologies,
          including autonomous ground sensors, drone systems, and AI-powered threat detection. Part of
          CBP&apos;s broader $2.1B border technology modernization program.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">8. VA Healthcare AI — $89M</h2>
        <p><strong className="text-white">Agency:</strong> Department of Veterans Affairs</p>
        <p>
          VA awarded 47 Phase II SBIR contracts focused on AI applications for veteran healthcare,
          including predictive analytics for mental health, automated medical coding, and clinical
          decision support. Each award ranges from $1.2M to $2.8M over 24 months.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">9. OPM Health Benefits Modernization — $78M</h2>
        <p><strong className="text-white">Agency:</strong> Office of Personnel Management</p>
        <p>
          OPM selected Accenture Federal Services to modernize the Federal Employee Health Benefits
          program systems, including migration from legacy COBOL to cloud-native architecture.
          Project serves 8.2 million federal employees and retirees.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">10. SBA Contracting Center of Excellence — $45M</h2>
        <p><strong className="text-white">Agency:</strong> Small Business Administration</p>
        <p>
          SBA announced a new Center of Excellence for helping small businesses navigate federal
          contracting, with offices in Dallas, Atlanta, and Seattle.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="text-white">DoD dominates.</strong> Defense accounts for the majority of top awards, spanning IT, cloud, and AI investments.</li>
          <li><strong className="text-white">IT and cloud continue to grow.</strong> GSA&apos;s EIS and DoD&apos;s JWCC represent the largest procurement vehicles in government.</li>
          <li><strong className="text-white">Cybersecurity is mandatory.</strong> CISA&apos;s new IDIQ and GSA&apos;s compliance requirements make cybersecurity a baseline, not an option.</li>
          <li><strong className="text-white">Small business opportunities expand.</strong> VA&apos;s SBIR awards and SBA&apos;s new center signal increased small business support.</li>
        </ul>

        <div className="mt-12 bg-gold/5 border border-gold/20 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-3">Track These Contracts Weekly</h3>
          <p className="text-gray-300 mb-4">
            ContractPulse tracks the largest and most significant federal contracts every week.
            Subscribe for free to get the signals that matter.
          </p>
          <Link href="/#subscribe" className="inline-flex items-center gap-2 bg-gold text-forest px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-colors">
            Subscribe Free →
          </Link>
        </div>
      </div>
    </article>
  );
}
