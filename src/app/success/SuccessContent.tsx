'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReferralCard from "./ReferralCard";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [showConfetti, setShowConfetti] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    // Trigger confetti animation
    setShowConfetti(true);
    
    // Optional: Fetch session details to get user email
    if (sessionId) {
      // In a real app, you'd fetch the session details from your API
      // For now, we'll just use a placeholder
      setUserEmail('user@example.com');
    }

    // Remove confetti after animation
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, [sessionId]);

  const shareText = "Just subscribed to @ContractPulse — finally, real intel on federal contracts. 🔥";
  const shareUrl = "https://contractpulse.io";

  return (
    <>
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="confetti-animation">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: Math.random() > 0.5 ? '#D4A853' : '#0B3D2E',
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-forest">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Welcome to <span className="text-gold">ContractPulse Pro!</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your subscription is active and your 14-day free trial has begun. 
              Get ready for daily contract intelligence, exclusive data access, and insider insights.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-gradient-to-b from-forest-500/80 to-forest-500/40 border border-forest-50/30 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">What happens next?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-forest font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Daily Intelligence Starts Tomorrow</h3>
                  <p className="text-gray-400 text-sm">Your first daily digest arrives at 7 AM EST with overnight contract awards, policy changes, and market intelligence.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-forest font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Database Access Unlocked</h3>
                  <p className="text-gray-400 text-sm">Search and filter our complete contract database, export data to CSV/Excel, and track your competitors.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-forest font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Premium Features Activated</h3>
                  <p className="text-gray-400 text-sm">Analytics, trend reports, Who&apos;s Moving tracker, and direct email support are now live in your account.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-gradient-to-b from-forest-500/80 to-forest-500/40 border border-gold/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Help spread the word</h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Love ContractPulse? Share it with your network and help other government contractors 
            discover the intelligence they need to win more work.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#1DA1F2] text-white px-6 py-3 rounded font-semibold hover:bg-[#1a8cd8] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('ContractPulse - Federal Contract Intelligence')}&summary=${encodeURIComponent('Real-time intelligence on government contracts and procurement opportunities.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#0077B5] text-white px-6 py-3 rounded font-semibold hover:bg-[#005885] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Share on LinkedIn
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                alert('Link copied to clipboard!');
              }}
              className="flex items-center justify-center gap-3 border border-gold text-gold px-6 py-3 rounded font-semibold hover:bg-gold hover:text-forest transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              Copy Link
            </button>
          </div>
        </div>

        {/* Referral Program Teaser */}
        <ReferralCard userEmail={userEmail} />

        {/* Quick Actions */}
        <div className="text-center">
          <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-6 sm:justify-center">
            <Link 
              href="/archive"
              className="block sm:inline-block bg-gold text-forest px-8 py-3 rounded font-semibold hover:bg-gold-300 transition-colors"
            >
              Browse Archive
            </Link>
            <Link 
              href="/"
              className="block sm:inline-block border border-gold text-gold px-8 py-3 rounded font-semibold hover:bg-gold hover:text-forest transition-colors"
            >
              Return Home
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Questions? Reply to any ContractPulse email or email us at{" "}
            <a href="mailto:support@contractpulse.io" className="text-gold hover:underline">
              support@contractpulse.io
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .confetti-animation {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .confetti-piece {
          position: absolute;
          width: 8px;
          height: 8px;
          animation: confetti-fall 3s linear forwards;
        }

        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}