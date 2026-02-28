"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function NewsletterPreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-forest relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "linear-gradient(45deg, transparent 40%, rgba(212,168,83,0.1) 50%, transparent 60%)",
            backgroundSize: "100px 100px",
          }} 
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            This is what you&apos;ll get <span className="text-gold">every week</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See exactly what ContractPulse delivers to your inbox. Here&apos;s a preview
            of our latest issue with real federal contract intelligence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className={`transition-transform duration-500 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Email mockup frame */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800">
              {/* Email header bar */}
              <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded border px-3 py-1 text-xs text-gray-600 font-mono">
                  📧 ContractPulse Weekly - Issue #47 - $2.1B in new opportunities
                </div>
              </div>

              {/* Email content */}
              <div className="bg-white text-gray-900 p-6 md:p-8">
                {/* Header */}
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-800 rounded flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-lg">CP</span>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">ContractPulse Weekly</div>
                      <div className="text-gray-500 text-sm">Issue #47 — March 6, 2026</div>
                    </div>
                  </div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    NASA Artemis Awards $890M; DHS Cybersecurity Overhaul; Small Business Construction Boom
                  </h1>
                </div>

                {/* Signal of the Week */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <div className="text-yellow-700 text-xs font-bold uppercase tracking-wider mb-2">
                    ⚡ Signal of the Week
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">
                    NASA Artemis Program Awards $890M in Mission Support Contracts
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    NASA has awarded SpaceX and three other contractors a combined $890M for Artemis 
                    mission support services. This expands beyond launch services to include spacecraft 
                    integration, ground operations, and mission planning. The awards signal NASA&apos;s 
                    shift toward comprehensive commercial partnerships...
                  </p>
                  <div className="mt-3 text-yellow-700 text-sm font-medium">
                    💡 Impact: Commercial space contractors should monitor upcoming lunar infrastructure RFPs
                  </div>
                </div>

                {/* Top Awards */}
                <div className="mb-6">
                  <div className="text-gray-700 text-xs font-bold uppercase tracking-wider mb-3">
                    📋 Top Awards This Week
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start border-b border-gray-100 pb-2">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Cybersecurity Infrastructure Modernization — DHS</div>
                        <div className="text-gray-500 text-xs">5-year IDIQ for zero-trust architecture</div>
                      </div>
                      <div className="text-yellow-600 font-bold text-sm whitespace-nowrap ml-4">$847M</div>
                    </div>
                    <div className="flex justify-between items-start border-b border-gray-100 pb-2">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Cloud Migration Services — GSA</div>
                        <div className="text-gray-500 text-xs">Enterprise Infrastructure Solutions task orders</div>
                      </div>
                      <div className="text-yellow-600 font-bold text-sm whitespace-nowrap ml-4">$412M</div>
                    </div>
                    <div className="flex justify-between items-start border-b border-gray-100 pb-2">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Border Security Technology — CBP</div>
                        <div className="text-gray-500 text-xs">AI-powered surveillance systems</div>
                      </div>
                      <div className="text-yellow-600 font-bold text-sm whitespace-nowrap ml-4">$156M</div>
                    </div>
                  </div>
                </div>

                {/* Who's Moving */}
                <div className="mb-6">
                  <div className="text-gray-700 text-xs font-bold uppercase tracking-wider mb-3">
                    👤 Who&apos;s Moving
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-medium text-gray-900 text-sm mb-1">
                      GSA Names New Technology Transformation Director
                    </div>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      Former AWS executive Sarah Chen appointed as TTS Director, signaling faster 
                      cloud adoption and streamlined vendor onboarding processes across federal agencies.
                    </p>
                  </div>
                </div>

                {/* Numbers */}
                <div className="mb-6">
                  <div className="text-gray-700 text-xs font-bold uppercase tracking-wider mb-3">
                    📊 Numbers That Matter
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">$2.1B</div>
                      <div className="text-gray-600 text-xs">New opportunities posted</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">45%</div>
                      <div className="text-gray-600 text-xs">Small business set-aside increase</div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="border-t border-gray-200 pt-6 text-center">
                  <div className="bg-gradient-to-r from-green-50 to-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Upgrade to Pro for Daily Alerts</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get same-day notifications for high-value opportunities in your sector
                    </p>
                    <div className="inline-block bg-yellow-500 text-white px-4 py-2 rounded font-medium text-sm">
                      Start 14-Day Free Trial
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA below preview */}
          <div className="text-center mt-8">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                href="/archive/sample"
                className="inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold hover:text-forest transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Read the Full Issue
              </Link>
              <Link
                href="/#subscribe"
                className="inline-flex items-center gap-2 bg-gold text-forest px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get This Every Week
              </Link>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Free weekly digest delivered every Monday. Join 500+ government contractors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}