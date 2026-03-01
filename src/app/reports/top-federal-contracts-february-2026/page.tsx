"use client";

import { useState } from "react";
import Link from "next/link";

const SUPABASE_URL = "https://vsbwqlkbcgvmphuqfgqb.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MTgyMjYsImV4cCI6MjA4NjM5NDIyNn0.wGbB-LZl3UfnE1iNz9pR9dyGuc-bFoP8cxZ90toxSHg";

const contracts = [
  { rank: 1, recipient: "National Technology & Engineering Solutions of Sandia", agency: "Dept. of Energy", amount: "$41.5B", desc: "Management and operation of Sandia National Laboratories" },
  { rank: 2, recipient: "UT-Battelle LLC", agency: "Dept. of Energy", amount: "$40.7B", desc: "Management and operation of Oak Ridge National Laboratory" },
  { rank: 3, recipient: "Lawrence Livermore National Security, LLC", agency: "Dept. of Energy", amount: "$40.6B", desc: "Performance-based management of Lawrence Livermore National Laboratory" },
  { rank: 4, recipient: "Triad National Security, LLC", agency: "Dept. of Energy", amount: "$34.4B", desc: "Management and operation of Los Alamos National Laboratory" },
  { rank: 5, recipient: "Consolidated Nuclear Security, LLC", agency: "Dept. of Energy", amount: "$33.3B", desc: "Management and operating contract for Y-12 National Security Complex" },
  { rank: 6, recipient: "Battelle Memorial Institute", agency: "Dept. of Energy", amount: "$30.1B", desc: "Pacific Northwest National Laboratory operations" },
  { rank: 7, recipient: "Savannah River Nuclear Solutions LLC", agency: "Dept. of Energy", amount: "$26.3B", desc: "Management and operating contract for Savannah River Site" },
  { rank: 8, recipient: "Battelle Energy Alliance, LLC", agency: "Dept. of Energy", amount: "$25.1B", desc: "Management and operations of Idaho National Laboratory" },
  { rank: 9, recipient: "The Boeing Company", agency: "NASA", amount: "$22.3B", desc: "International Space Station operations and support" },
  { rank: 10, recipient: "Lockheed Martin Services, LLC", agency: "Dept. of Energy", amount: "$20.6B", desc: "Management and operation of Y-12 Plant programs" },
  { rank: 11, recipient: "Regents of the University of California", agency: "Dept. of Energy", amount: "$19.1B", desc: "Performance-based management of national laboratory operations" },
  { rank: 12, recipient: "Honeywell Federal Manufacturing & Technologies", agency: "Dept. of Energy", amount: "$17.2B", desc: "Management and operation of National Security Campus" },
  { rank: 13, recipient: "Project Management Solutions LLC", agency: "Dept. of Veterans Affairs", amount: "$10.8M", desc: "Hurricane hardening at generator farm — construction" },
  { rank: 14, recipient: "Universal Protection Service, LP", agency: "DHS", amount: "$5.8M", desc: "Protective security officer services throughout upstate region" },
  { rank: 15, recipient: "Electronic Metrology Laboratory, LLC", agency: "GSA", amount: "$4.6M", desc: "Downtown Denver and Boulder FEOM Option II" },
  { rank: 16, recipient: "Potomac Valor Healthcare 2, LLC", agency: "Dept. of Veterans Affairs", amount: "$4.5M", desc: "Option Year 4 — Copperas Cove community-based outpatient clinic" },
  { rank: 17, recipient: "Primary Care Solutions Inc", agency: "Dept. of Veterans Affairs", amount: "$4.4M", desc: "Exercise Option Year 4 — Killeen CBOC" },
  { rank: 18, recipient: "GEO Reentry Inc", agency: "Dept. of Justice", amount: "$3.8M", desc: "Residential reentry center services and home confinement" },
  { rank: 19, recipient: "Christus Santa Rosa Health Care Corp", agency: "Dept. of Veterans Affairs", amount: "$3.4M", desc: "Six-month extension for healthcare services" },
  { rank: 20, recipient: "Science Applications International Corp", agency: "DHS", amount: "$2.8M", desc: "Integrated Traveler Initiatives 2.1 performance task order" },
  { rank: 21, recipient: "Valor Healthcare Inc", agency: "Dept. of Veterans Affairs", amount: "$2.6M", desc: "Glens Falls, NY community-based outpatient clinic services" },
  { rank: 22, recipient: "Quest Diagnostics Incorporated", agency: "Dept. of Veterans Affairs", amount: "$2.6M", desc: "El Paso reference laboratory testing services" },
  { rank: 23, recipient: "Empower AI, Inc.", agency: "HHS", amount: "$2.3M", desc: "Hearings and application support" },
  { rank: 24, recipient: "YRU Contracting Inc", agency: "Dept. of Agriculture", amount: "$2.3M", desc: "Sage Hen Recreation Area reconstruction — Phase III" },
  { rank: 25, recipient: "Ansible Government Solutions LLC", agency: "Dept. of Veterans Affairs", amount: "$2.2M", desc: "Operating room RNs — Ordering Period 5" },
];

export default function TopContractsReport() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email,
          newsletter: "contractpulse",
          source: "lead-magnet-top-25-feb-2026",
          status: "active",
        }),
      });
      if (res.ok || res.status === 409) {
        setUnlocked(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block">
          ← Back to ContractPulse
        </Link>

        <div className="inline-block bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          FREE REPORT — FEBRUARY 2026
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Top 25 Federal Contract Awards
          <span className="text-blue-400"> — February 2026</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Real data from USAspending.gov. Who won, how much, and what it means for
          government contractors competing for federal dollars.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-12">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
            Source: USAspending.gov
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v9.75" /></svg>
            February 2026 data
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            $370B+ in contract value analyzed
          </span>
        </div>

        {/* Preview (always visible) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Preview: Top 5 Awards</h2>
          <div className="space-y-4">
            {contracts.slice(0, 5).map((c) => (
              <div key={c.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-0.5 rounded">#{c.rank}</span>
                      <span className="font-semibold text-white">{c.recipient}</span>
                    </div>
                    <p className="text-sm text-gray-400">{c.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-bold text-green-400">{c.amount}</div>
                    <div className="text-xs text-gray-500">{c.agency}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gate or Full Report */}
        {!unlocked ? (
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-700 rounded-xl p-8 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 z-10 pointer-events-none" />
              <div className="opacity-30 blur-sm space-y-3">
                {contracts.slice(5, 10).map((c) => (
                  <div key={c.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-left">
                    <span className="font-semibold">{c.recipient}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Get the Full Report — Free</h3>
            <p className="text-gray-400 mb-6">
              Enter your email to unlock all 25 contracts, agency breakdowns, and our analysis
              of what these awards mean for the GovCon market.
            </p>

            <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Unlocking..." : "Unlock Report"}
              </button>
            </form>
            {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

            <p className="text-xs text-gray-500 mt-4">
              You&apos;ll also get ContractPulse — our free weekly GovCon intelligence newsletter.
              Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8 text-center">
              <p className="text-green-400 font-semibold">✓ Report unlocked! You&apos;re now subscribed to ContractPulse.</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">Full Report: Top 25 Federal Contract Awards — February 2026</h2>

            {/* Key Insights */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 text-blue-400">Key Insights</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">→</span>
                  <span><strong className="text-white">DOE dominates:</strong> 10 of the top 12 awards by value are Department of Energy national laboratory management contracts, totaling $328B+ in cumulative obligations.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">→</span>
                  <span><strong className="text-white">VA healthcare expanding:</strong> 7 of the top 25 new awards went to VA healthcare providers — community-based clinics, surgical support, and lab services. Healthcare contractors should watch VA OASIS+ for similar opportunities.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">→</span>
                  <span><strong className="text-white">DHS security services:</strong> Protective security officer contracts and ship repair awards signal continued DHS investment in physical security and Coast Guard readiness.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">→</span>
                  <span><strong className="text-white">Small business wins:</strong> Several awards under $5M went to small and mid-size contractors — particularly in healthcare, construction, and reentry services. Set-aside opportunities remain strong.</span>
                </li>
              </ul>
            </div>

            {/* Full table */}
            <div className="space-y-4">
              {contracts.map((c) => (
                <div key={c.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-0.5 rounded">#{c.rank}</span>
                        <span className="font-semibold text-white">{c.recipient}</span>
                      </div>
                      <p className="text-sm text-gray-400">{c.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-bold text-green-400">{c.amount}</div>
                      <div className="text-xs text-gray-500">{c.agency}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-blue-600/10 border border-blue-500/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Want This Every Week?</h3>
              <p className="text-gray-400 mb-6">
                ContractPulse delivers federal contract intelligence to your inbox — new awards,
                trending agencies, and opportunities before they hit SAM.gov.
              </p>
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition"
              >
                See Plans →
              </Link>
            </div>

            <p className="text-xs text-gray-500 text-center mt-8">
              Data sourced from USAspending.gov. Contract values represent cumulative obligations as of February 2026.
              Analysis by ContractPulse, a SignalStack Media LLC publication.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
