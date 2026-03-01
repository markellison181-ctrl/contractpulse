"use client";

import { useState } from "react";

const AGENCIES = [
  "All Agencies",
  "Department of Defense",
  "Department of Health and Human Services",
  "Department of Homeland Security",
  "Department of Veterans Affairs",
  "Department of Energy",
  "Department of Transportation",
  "Department of Education",
  "Department of Justice",
  "Department of State",
  "Department of the Interior",
  "Department of Agriculture",
  "Department of Commerce",
  "Department of Labor",
  "Department of the Treasury",
  "Environmental Protection Agency",
  "National Aeronautics and Space Administration",
  "General Services Administration",
  "Small Business Administration",
  "Social Security Administration",
];

interface Award {
  Award_ID: string;
  Recipient: string;
  Award_Amount: number;
  Agency: string;
  Award_Type: string;
  Description: string;
  Start_Date: string;
  End_Date: string;
}

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [agency, setAgency] = useState("All Agencies");
  const [dateFrom, setDateFrom] = useState("2024-10-01");
  const [dateTo, setDateTo] = useState("2026-03-01");
  const [results, setResults] = useState<Award[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    setSearched(true);

    try {
      const filters: Record<string, unknown> = {
        time_period: [{ start_date: dateFrom, end_date: dateTo }],
        award_type_codes: ["A", "B", "C", "D"],
      };

      if (keyword.trim()) {
        filters.keywords = [keyword.trim()];
      }

      if (agency !== "All Agencies") {
        filters.agencies = [
          { type: "funding", tier: "toptier", name: agency },
        ];
      }

      const body = {
        filters,
        fields: [
          "Award ID",
          "Recipient Name",
          "Award Amount",
          "Awarding Agency",
          "Award Type",
          "Description",
          "Start Date",
          "End Date",
        ],
        page: 1,
        limit: 25,
        sort: "Award Amount",
        order: "desc",
      };

      const res = await fetch(
        "https://api.usaspending.gov/api/v2/search/spending_by_award/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) throw new Error(`API returned ${res.status}`);

      const data = await res.json();
      const mapped: Award[] = (data.results || []).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (r: any) => ({
          Award_ID: r["Award ID"] || "—",
          Recipient: r["Recipient Name"] || "—",
          Award_Amount: r["Award Amount"] || 0,
          Agency: r["Awarding Agency"] || "—",
          Award_Type: r["Award Type"] || "—",
          Description: r["Description"] || "—",
          Start_Date: r["Start Date"] || "—",
          End_Date: r["End Date"] || "—",
        })
      );
      setResults(mapped);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Search failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function formatCurrency(n: number) {
    if (!n) return "—";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);
  }

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "search-page" }),
      });
      if (res.ok) setSubscribed(true);
    } catch {
      // silent fail — CTA is secondary
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Federal Contract <span className="text-gold">Search</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Search live U.S. federal contract awards from USAspending.gov. Filter
          by keyword, agency, and date range.
        </p>
      </section>

      {/* Search Form */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <form
          onSubmit={handleSearch}
          className="bg-forest-500 border border-forest-50/20 rounded-lg p-6 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Keyword
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g. cybersecurity, construction, IT services"
                className="w-full px-4 py-2.5 rounded bg-forest border border-forest-50/30 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Agency
              </label>
              <select
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
                className="w-full px-4 py-2.5 rounded bg-forest border border-forest-50/30 text-white focus:border-gold focus:outline-none transition-colors"
              >
                {AGENCIES.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Date From
              </label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full px-4 py-2.5 rounded bg-forest border border-forest-50/30 text-white focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Date To
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full px-4 py-2.5 rounded bg-forest border border-forest-50/30 text-white focus:border-gold focus:outline-none transition-colors"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-gold text-forest px-8 py-3 rounded font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60"
          >
            {loading ? "Searching..." : "Search Contracts"}
          </button>
        </form>
      </section>

      {/* Results */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        {error && (
          <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 text-red-300 mb-4">
            {error}
          </div>
        )}

        {results.length > 0 && (
          <div className="overflow-x-auto">
            <p className="text-gray-400 text-sm mb-3">
              Showing top {results.length} results by award amount
            </p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-forest-50/30 text-left">
                  <th className="py-3 px-3 text-gold/80 font-semibold">
                    Recipient
                  </th>
                  <th className="py-3 px-3 text-gold/80 font-semibold">
                    Amount
                  </th>
                  <th className="py-3 px-3 text-gold/80 font-semibold hidden md:table-cell">
                    Agency
                  </th>
                  <th className="py-3 px-3 text-gold/80 font-semibold hidden lg:table-cell">
                    Description
                  </th>
                  <th className="py-3 px-3 text-gold/80 font-semibold hidden sm:table-cell">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-forest-50/10 hover:bg-forest-50/10 transition-colors"
                  >
                    <td className="py-3 px-3 text-white font-medium max-w-[200px] truncate">
                      {r.Recipient}
                    </td>
                    <td className="py-3 px-3 text-gold font-semibold whitespace-nowrap">
                      {formatCurrency(r.Award_Amount)}
                    </td>
                    <td className="py-3 px-3 text-gray-300 hidden md:table-cell max-w-[180px] truncate">
                      {r.Agency}
                    </td>
                    <td className="py-3 px-3 text-gray-400 hidden lg:table-cell max-w-[250px] truncate">
                      {r.Description}
                    </td>
                    <td className="py-3 px-3 text-gray-400 hidden sm:table-cell whitespace-nowrap">
                      {r.Start_Date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {searched && !loading && results.length === 0 && !error && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">No contracts found matching your criteria.</p>
            <p className="text-sm mt-2">Try broadening your search or adjusting the date range.</p>
          </div>
        )}
      </section>

      {/* Email CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-forest-50 to-forest-500 border border-gold/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Get Weekly Contract Alerts
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Subscribe to <span className="text-gold font-semibold">ContractPulse</span> — the biggest contract awards, procurement trends, and agency spending shifts delivered to your inbox every week.
          </p>
          {subscribed ? (
            <p className="text-gold font-semibold text-lg">
              ✓ You&apos;re subscribed! Check your inbox.
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-4 py-3 rounded bg-forest border border-forest-50/30 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-forest px-6 py-3 rounded font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
          )}
          <p className="text-gray-500 text-xs mt-4">
            Free weekly digest. Unsubscribe anytime. No spam.
          </p>
        </div>
      </section>
    </div>
  );
}
