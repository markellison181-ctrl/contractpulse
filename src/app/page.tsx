"use client";

import Link from "next/link";
import { useState } from "react";
import ExitIntentPopup from "../components/ExitIntentPopup";
import StickyBottomCTA from "../components/StickyBottomCTA";
import AnimatedStats from "../components/AnimatedStats";
import NewsletterPreview from "../components/NewsletterPreview";
import FAQSection from "../components/FAQSection";
import TrustBar from "../components/TrustBar";

/* ── Inline SVG Icons (Heroicons-style thin outlines) ── */
const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);
const IconClipboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
  </svg>
);
const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);
const IconScale = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
  </svg>
);
const IconChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);
const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gold mt-0.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're in. Check your inbox for confirmation.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm transition-all duration-200"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gold text-forest px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe Free"}
        </button>
      </form>
      {message && (
        <p className={`text-sm mt-3 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Exit Intent Popup */}
      <ExitIntentPopup />
      
      {/* Sticky Bottom CTA */}
      <StickyBottomCTA />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest-300 to-forest" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(212,168,83,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">Free weekly edition every Monday</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Know who&apos;s winning{" "}
              <span className="text-gold">government contracts</span>{" "}
              before your competitors do.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              ContractPulse delivers weekly intelligence on U.S. federal government
              contract awards, procurement trends, agency spending shifts, and personnel moves.
              The edge you need to win more government business.
            </p>
            <div id="subscribe">
              <SubscribeForm />
              <p className="text-gray-400 text-xs mt-4">
                Free weekly digest. No spam. Unsubscribe anytime. CAN-SPAM compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Bar */}
      <TrustBar />

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Lead Magnet Banner */}
      <section className="py-8 bg-blue-600/10 border-y border-blue-500/20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-blue-400 font-semibold mb-1">📊 FREE REPORT</p>
            <p className="text-white font-bold text-lg">Top 25 Federal Contract Awards — February 2026</p>
            <p className="text-gray-400 text-sm">Real USAspending.gov data with our analysis. Unlock instantly.</p>
          </div>
          <Link
            href="/reports/top-federal-contracts-february-2026"
            className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition text-sm"
          >
            Get Free Report →
          </Link>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Every issue delivers <span className="text-gold">five key signals</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No fluff, no filler. Each edition of ContractPulse is structured to give you
              the intelligence that matters in 5 minutes or less.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <IconTarget />,
                title: "Signal of the Week",
                description: "The one contract award or procurement trend that matters most this week. Context, analysis, and what it means for you.",
              },
              {
                icon: <IconClipboard />,
                title: "Top Awards",
                description: "5-7 notable contract awards with dollar amounts, awarding departments, and winning vendors. The deals that moved this week.",
              },
              {
                icon: <IconUser />,
                title: "Who's Moving",
                description: "Key personnel changes in federal procurement — new directors, SES appointments, and moves that shift buying power.",
              },
              {
                icon: <IconScale />,
                title: "Policy Watch",
                description: "Procurement policy changes, new directives, and regulatory updates. Know the rules before they change the game.",
              },
              {
                icon: <IconChart />,
                title: "Numbers That Matter",
                description: "3-4 key data points that tell the real story — spending trends, department volumes, vendor concentration.",
              },
              {
                icon: <IconBolt />,
                title: "Pro: Daily Alerts",
                description: "Pro subscribers get daily contract alerts filtered to their sectors. Plus full data export and search access.",
              },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-forest-500/50 border border-forest-50/20 rounded-lg p-6 hover:border-gold/30">
                <div className="text-gold mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Preview */}
      <NewsletterPreview />

      {/* FAQ Section */}
      <FAQSection />

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Start free. Upgrade when you need more.
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            The free weekly edition gives you the essential signals. Pro and Enterprise unlock
            daily alerts, full data access, and team features.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-hover bg-gradient-to-b from-forest-500/80 to-forest-500/40 border border-forest-50/30 rounded-xl p-8">
              <div className="text-gray-400 label-uppercase mb-2">Free</div>
              <div className="text-4xl font-bold mb-1">$0</div>
              <div className="text-gray-500 text-sm mb-6">forever</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Weekly digest every Monday</li>
                <li className="flex items-start gap-2"><IconCheck /> Signal of the Week</li>
                <li className="flex items-start gap-2"><IconCheck /> Top Awards summary</li>
                <li className="flex items-start gap-2"><IconCheck /> Policy Watch highlights</li>
              </ul>
              <Link href="/#subscribe" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-forest transition-all duration-200">
                Subscribe Free
              </Link>
            </div>
            <div className="card-hover bg-gradient-to-b from-forest-500/80 to-forest-500/40 border-2 border-gold rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-gold label-uppercase mb-2">Pro</div>
              <div className="text-4xl font-bold mb-1">$29</div>
              <div className="text-gray-500 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Everything in Free</li>
                <li className="flex items-start gap-2"><IconCheck /> Daily contract alerts</li>
                <li className="flex items-start gap-2"><IconCheck /> Full data access &amp; search</li>
                <li className="flex items-start gap-2"><IconCheck /> Sector-specific filters</li>
                <li className="flex items-start gap-2"><IconCheck /> CSV/Excel data export</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center bg-gold text-forest px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
                Start Pro Trial
              </Link>
            </div>
            <div className="card-hover bg-gradient-to-b from-forest-500/80 to-forest-500/40 border border-forest-50/30 rounded-xl p-8">
              <div className="text-gray-400 label-uppercase mb-2">Enterprise</div>
              <div className="text-4xl font-bold mb-1">$99</div>
              <div className="text-gray-500 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Everything in Pro</li>
                <li className="flex items-start gap-2"><IconCheck /> Up to 10 team seats</li>
                <li className="flex items-start gap-2"><IconCheck /> API access</li>
                <li className="flex items-start gap-2"><IconCheck /> Custom alerts &amp; reports</li>
                <li className="flex items-start gap-2"><IconCheck /> Priority support</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-forest transition-all duration-200">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Latest Intelligence */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Latest Intelligence</h2>
            <p className="text-gray-400">Deep-dive analysis from our research team</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/blog/how-to-find-government-contracts-2026-guide" className="block p-4 rounded-lg border border-gold/20 hover:border-gold/40 transition-all group">
              <span className="text-gold group-hover:underline font-medium">How to Find Government Contracts: The Complete 2026 Guide</span>
              <span className="block text-gray-400 text-sm mt-1">Read article →</span>
            </Link>
            <Link href="/blog/sam-gov-registration-guide-new-contractors" className="block p-4 rounded-lg border border-gold/20 hover:border-gold/40 transition-all group">
              <span className="text-gold group-hover:underline font-medium">SAM.gov Registration: Complete Guide for New Contractors</span>
              <span className="block text-gray-400 text-sm mt-1">Read article →</span>
            </Link>
            <Link href="/blog/top-10-federal-agencies-spending-2026" className="block p-4 rounded-lg border border-gold/20 hover:border-gold/40 transition-all group">
              <span className="text-gold group-hover:underline font-medium">Top 10 Federal Agencies Spending the Most in 2026</span>
              <span className="block text-gray-400 text-sm mt-1">Read article →</span>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-gold font-semibold hover:underline">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-forest-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Your competitors are already reading this.
          </h2>
          <p className="text-gray-400 mb-8">
            Join the procurement professionals, government contractors, and consultants who
            start every week with ContractPulse.
          </p>
          <div className="flex justify-center">
            <SubscribeForm />
          </div>
        </div>
      </section>
    </>
  );
}
