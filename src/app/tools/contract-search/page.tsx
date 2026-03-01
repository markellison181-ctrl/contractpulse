'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Contract {
  internal_id: number;
  "Award ID": string;
  "Recipient Name": string;
  "Awarding Agency": string;
  "Award Amount": number;
  "Start Date": string;
  "Description": string;
  "NAICS Code": string | null;
  generated_internal_id?: string;
}

interface SearchResult {
  results: Contract[];
  page_metadata: {
    page: number;
    hasNext: boolean;
  };
}

function EmailCaptureSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('Success! Check your email for the welcome message.');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-forest-100 border border-forest-50/30 rounded-xl p-8 text-center">
      <h3 className="text-xl font-bold text-gold mb-3">
        Get Daily Contract Alerts Free
      </h3>
      <p className="text-gray-300 mb-6 max-w-md mx-auto">
        Never miss relevant opportunities. Get daily alerts for contracts matching your keywords and NAICS codes.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gold text-forest px-6 py-3 rounded-lg font-semibold hover:bg-gold-300 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm ${message.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`;
  } else {
    return `$${amount.toLocaleString()}`;
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export default function ContractSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [agency, setAgency] = useState('');
  const [naicsCode, setNaicsCode] = useState('');
  const [results, setResults] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery && !agency && !naicsCode) {
      setError('Please enter at least one search criteria.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Build the search payload for USAspending.gov API
      const searchPayload = {
        filters: {
          ...(searchQuery && {
            keywords: [searchQuery]
          }),
          ...(agency && {
            agencies: [{
              type: "awarding",
              tier: "toptier",
              name: agency
            }]
          }),
          ...(naicsCode && {
            naics_codes: [naicsCode]
          }),
          award_type_codes: ["A", "B", "C", "D"],
        },
        fields: [
          "Award ID",
          "Recipient Name",
          "Awarding Agency",
          "Award Amount",
          "Start Date",
          "Description",
          "NAICS Code"
        ],
        page: 1,
        limit: 25,
        sort: "Award Amount",
        order: "desc"
      };

      const response = await fetch('https://api.usaspending.gov/api/v2/search/spending_by_award/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchPayload)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError('Failed to search contracts. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Federal Contract Search
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Search millions of federal contract awards in real-time. Find opportunities by keyword, agency, or NAICS code.
        </p>
      </div>

      {/* Email Capture CTA - Top */}
      <EmailCaptureSection />

      {/* Search Form */}
      <div className="bg-forest-100 border border-forest-50/30 rounded-xl p-8">
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">
                Keywords
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g., cybersecurity, IT services"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">
                Agency
              </label>
              <input
                type="text"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
                placeholder="e.g., Department of Defense"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">
                NAICS Code
              </label>
              <input
                type="text"
                value={naicsCode}
                onChange={(e) => setNaicsCode(e.target.value)}
                placeholder="e.g., 541512"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gold text-forest px-8 py-3 rounded-lg font-semibold hover:bg-gold-300 transition-colors disabled:opacity-50 min-w-32"
            >
              {isLoading ? 'Searching...' : 'Search Contracts'}
            </button>
          </div>

          {error && (
            <div className="text-center text-red-400 text-sm">
              {error}
            </div>
          )}
        </form>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Search Results
            </h2>
            <p className="text-gray-400">
              {results.results.length} contracts shown
            </p>
          </div>

          {results.results.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p>No contracts found matching your criteria.</p>
              <p className="text-sm mt-2">Try different keywords or broaden your search.</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {results.results.map((contract, index) => (
                <div
                  key={`${contract.internal_id}-${index}`}
                  className="bg-forest-100 border border-forest-50/30 rounded-xl p-6 card-hover"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-2 leading-snug">
                        {contract["Description"] || 'Contract Award'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm">
                          {contract["Award ID"]}
                        </span>
                        {contract["NAICS Code"] && (
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            NAICS {contract["NAICS Code"]}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                            Awardee
                          </p>
                          <p className="text-white font-semibold">
                            {contract["Recipient Name"] || 'N/A'}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                            Agency
                          </p>
                          <p className="text-white">
                            {contract["Awarding Agency"] || 'N/A'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                            Contract Value
                          </p>
                          <p className="text-2xl font-bold text-gold">
                            {formatCurrency(contract["Award Amount"])}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                            Date Signed
                          </p>
                          <p className="text-white">
                            {contract["Start Date"] ? formatDate(contract["Start Date"]) : 'N/A'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bottom Email Capture CTA */}
      <EmailCaptureSection />

      {/* Help Section */}
      <div className="bg-forest-100 border border-forest-50/30 rounded-xl p-8">
        <h3 className="text-xl font-bold text-gold mb-4">Search Tips</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300">
          <div>
            <h4 className="font-semibold text-white mb-2">Keywords</h4>
            <p>Search contract descriptions for specific terms like "cybersecurity", "cloud services", or "construction".</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Agencies</h4>
            <p>Filter by agency name like "Department of Defense", "GSA", or "Department of Veterans Affairs".</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">NAICS Codes</h4>
            <p>Use industry codes like 541511 (Custom Computer Programming) or 236220 (Commercial Building Construction).</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-forest-50/20">
          <p className="text-gray-400 text-sm">
            Data provided by <a href="https://api.usaspending.gov" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-300 transition-colors">USAspending.gov</a> • 
            Updated daily • <Link href="/blog" className="text-gold hover:text-gold-300 transition-colors">Learn more about government contracting</Link>
          </p>
        </div>
      </div>
    </div>
  );
}