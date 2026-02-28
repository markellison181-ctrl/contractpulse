"use client";

import Link from "next/link";
import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
        className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-gold text-forest px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe Free"}
      </button>
      {message && (
        <p className={`text-sm mt-1 sm:mt-0 sm:absolute sm:top-full sm:left-0 sm:pt-2 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <>
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
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Know who&apos;s winning{" "}
              <span className="text-gold">government contracts</span>{" "}
              before your competitors do.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              ContractPulse delivers weekly intelligence on Canadian federal government 
              contract awards, procurement trends, policy changes, and personnel moves. 
              The edge you need to win more government business.
            </p>
            <div id="subscribe" className="relative">
              <SubscribeForm />
              <p className="text-gray-500 text-xs mt-4">
                Free weekly digest. No spam. Unsubscribe anytime. CASL compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-forest-500 border-y border-forest-50/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-gray-400 text-sm">
            <span>Trusted by procurement professionals at:</span>
            <span className="text-white font-semibold">KPMG</span>
            <span className="text-white font-semibold">Deloitte</span>
            <span className="text-white font-semibold">CGI</span>
            <span className="text-white font-semibold">IBM Canada</span>
            <span className="text-white font-semibold">PSPC</span>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                icon: "🎯",
                title: "Signal of the Week",
                description: "The one contract award or procurement trend that matters most this week. Context, analysis, and what it means for you.",
              },
              {
                icon: "📋",
                title: "Top Awards",
                description: "5-7 notable contract awards with dollar amounts, awarding departments, and winning vendors. The deals that moved this week.",
              },
              {
                icon: "👤",
                title: "Who's Moving",
                description: "Key personnel changes in federal procurement — new ADMs, DG appointments, and moves that shift buying power.",
              },
              {
                icon: "⚖️",
                title: "Policy Watch",
                description: "Procurement policy changes, new directives, and regulatory updates. Know the rules before they change the game.",
              },
              {
                icon: "📊",
                title: "Numbers That Matter",
                description: "3-4 key data points that tell the real story — spending trends, department volumes, vendor concentration.",
              },
              {
                icon: "⚡",
                title: "Pro: Daily Alerts",
                description: "Pro subscribers get daily contract alerts filtered to their sectors. Plus full data export and search access.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-forest-500/50 border border-forest-50/20 rounded-lg p-6 hover:border-gold/30 transition-colors">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Preview */}
      <section className="py-20 bg-forest-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See what you&apos;ll get</h2>
            <p className="text-gray-400">Read a real issue of ContractPulse</p>
          </div>
          <div className="max-w-3xl mx-auto bg-forest border border-forest-50/30 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-forest-50/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                  <span className="text-forest font-bold text-xs">CP</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">ContractPulse Weekly</div>
                  <div className="text-gray-500 text-xs">Issue #1 — February 28, 2026</div>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">Signal of the Week</div>
                <h3 className="text-lg font-bold">Buy Canadian Policy Reshapes Federal Procurement</h3>
                <p className="text-gray-400 text-sm mt-2">
                  PSPC&apos;s new Buy Canadian Policy is the most significant procurement policy shift in a decade, 
                  prioritizing Canadian suppliers, materials, and innovation across all federal purchasing...
                </p>
              </div>
              <div className="border-t border-forest-50/20 pt-4">
                <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">Top Awards This Week</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Network Solutions Procurement Vehicle — SSC</span>
                    <span className="text-gold font-semibold">$847M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Human-Machine Teaming Research — DND</span>
                    <span className="text-gold font-semibold">$12.4M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Build Canada Homes RFI — INFC</span>
                    <span className="text-gold font-semibold">TBD</span>
                  </div>
                </div>
              </div>
              <div className="text-center pt-4">
                <Link
                  href="/archive/sample"
                  className="inline-flex items-center gap-2 bg-gold text-forest px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-colors"
                >
                  Read the Full Issue →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start free. Upgrade when you need more.
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            The free weekly edition gives you the essential signals. Pro and Enterprise unlock 
            daily alerts, full data access, and team features.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-forest-500/50 border border-forest-50/30 rounded-xl p-8">
              <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Free</div>
              <div className="text-4xl font-bold mb-1">$0</div>
              <div className="text-gray-500 text-sm mb-6">forever</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Weekly digest every Monday</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Signal of the Week</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Top Awards summary</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Policy Watch highlights</li>
              </ul>
              <Link href="/#subscribe" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-forest transition-colors">
                Subscribe Free
              </Link>
            </div>
            <div className="bg-forest-500/50 border-2 border-gold rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Pro</div>
              <div className="text-4xl font-bold mb-1">$29</div>
              <div className="text-gray-500 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Everything in Free</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Daily contract alerts</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Full data access & search</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Sector-specific filters</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> CSV/Excel data export</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center bg-gold text-forest px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-colors">
                Start Pro Trial
              </Link>
            </div>
            <div className="bg-forest-500/50 border border-forest-50/30 rounded-xl p-8">
              <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Enterprise</div>
              <div className="text-4xl font-bold mb-1">$99</div>
              <div className="text-gray-500 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Everything in Pro</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Up to 10 team seats</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> API access</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Custom alerts & reports</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Priority support</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-forest transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-forest-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
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
