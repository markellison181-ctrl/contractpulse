import type { Metadata } from "next";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";
import { ContractIcon, DatabaseIcon, AnalyticsIcon, APIIcon, SparkleIcon, ShieldIcon } from "./PricingIcons";

export const metadata: Metadata = {
  title: "Pricing — ContractPulse",
  description: "ContractPulse pricing: Free weekly, $29/mo Pro daily + data, $99/mo Enterprise team + API.",
};

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gold mt-0.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

export default function PricingPage() {
  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/10"></div>
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <ContractIcon className="w-24 h-24 drop-shadow-lg animate-pulse" />
              <SparkleIcon className="absolute -top-2 -right-2 w-8 h-8 animate-spin" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
            Simple, transparent pricing
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed mb-8">
            Start free. Upgrade when your needs grow. All plans include our core intelligence 
            that government contractors trust for winning more work.
          </p>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>1,247+ subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldIcon className="w-5 h-5" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free */}
        <div className="group card-hover relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 flex flex-col overflow-hidden shadow-2xl">
          {/* Glassmorphism effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-forest-600/10 -z-10"></div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-300 text-sm font-medium uppercase tracking-wide">Starter</div>
            <ContractIcon className="w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">$0</span>
            <span className="text-gray-400 text-sm">forever</span>
          </div>
          <div className="text-gray-400 text-sm mb-8">Perfect for getting started</div>
          
          <ul className="space-y-4 text-sm text-gray-300 mb-8 flex-1">
            <li className="flex items-start gap-3"><IconCheck /> Weekly digest every Monday</li>
            <li className="flex items-start gap-3"><IconCheck /> Signal of the Week analysis</li>
            <li className="flex items-start gap-3"><IconCheck /> Top 5-7 contract awards</li>
            <li className="flex items-start gap-3"><IconCheck /> Policy Watch highlights</li>
            <li className="flex items-start gap-3"><IconCheck /> Numbers That Matter</li>
            <li className="flex items-start gap-3"><IconCheck /> Web archive access</li>
          </ul>
          <Link href="/#subscribe" className="block w-full text-center border-2 border-gold/50 text-gold px-6 py-3 rounded-xl font-semibold hover:bg-gold hover:text-forest transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/25">
            Start Free
          </Link>
        </div>

        {/* Pro */}
        <div className="group card-hover relative bg-gradient-to-br from-gold/20 via-gold/10 to-gold/5 backdrop-blur-xl border-2 border-gold/60 rounded-2xl p-8 flex flex-col overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
          {/* Most Popular Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-gold via-yellow-400 to-gold text-forest text-xs font-bold px-6 py-2 rounded-full shadow-lg border border-gold/30 flex items-center gap-2">
              <SparkleIcon className="w-3 h-3" />
              MOST POPULAR
              <SparkleIcon className="w-3 h-3" />
            </div>
          </div>
          
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent -z-10 animate-pulse"></div>
          
          <div className="flex items-center justify-between mb-6 pt-4">
            <div className="text-gold text-sm font-medium uppercase tracking-wide">Professional</div>
            <DatabaseIcon className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">$29</span>
            <span className="text-gray-300 text-sm">/month</span>
          </div>
          <div className="text-gray-400 text-sm mb-8">14-day free trial • Cancel anytime</div>
          
          <ul className="space-y-4 text-sm text-gray-200 mb-8 flex-1">
            <li className="flex items-start gap-3"><IconCheck /> Everything in Starter</li>
            <li className="flex items-start gap-3"><IconCheck /> <span><strong className="text-gold">Daily</strong> contract alerts</span></li>
            <li className="flex items-start gap-3"><IconCheck /> Full searchable database</li>
            <li className="flex items-start gap-3"><IconCheck /> Sector &amp; department filters</li>
            <li className="flex items-start gap-3"><IconCheck /> CSV / Excel data export</li>
            <li className="flex items-start gap-3"><IconCheck /> Who&apos;s Moving personnel tracker</li>
            <li className="flex items-start gap-3"><IconCheck /> Historical trends &amp; analytics</li>
            <li className="flex items-start gap-3"><IconCheck /> Priority email support</li>
          </ul>
          <CheckoutButton
            priceId="price_1T5wAbPs7Nw0EhG0zpneak89"
            tier="pro"
            className="block w-full text-center bg-gradient-to-r from-gold via-yellow-400 to-gold text-forest px-6 py-4 rounded-xl font-bold hover:from-yellow-400 hover:to-gold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/30 cursor-pointer transform"
          >
            Start Free Trial →
          </CheckoutButton>
          <p className="text-center text-gray-400 text-xs mt-3 flex items-center justify-center gap-2">
            <ShieldIcon className="w-4 h-4" />
            No credit card required
          </p>
        </div>

        {/* Enterprise */}
        <div className="card-hover bg-gradient-to-b from-forest-500/80 to-forest-500/40 border border-forest-50/30 rounded-xl p-8 flex flex-col">
          <div className="text-gray-400 label-uppercase mb-2">Enterprise</div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-5xl font-bold tracking-tight">$99</span>
            <span className="text-gray-400 text-sm">/month</span>
          </div>
          <div className="text-gray-500 text-sm mb-8">Per team. Billed monthly.</div>
          <ul className="space-y-4 text-sm text-gray-300 mb-8 flex-1">
            <li className="flex items-start gap-3"><IconCheck /> Everything in Pro</li>
            <li className="flex items-start gap-3"><IconCheck /> Up to 10 team seats</li>
            <li className="flex items-start gap-3"><IconCheck /> REST API access</li>
            <li className="flex items-start gap-3"><IconCheck /> Custom alert rules</li>
            <li className="flex items-start gap-3"><IconCheck /> Custom weekly reports</li>
            <li className="flex items-start gap-3"><IconCheck /> Slack / Teams integration</li>
            <li className="flex items-start gap-3"><IconCheck /> Dedicated account manager</li>
            <li className="flex items-start gap-3"><IconCheck /> Priority support</li>
          </ul>
          <CheckoutButton
            priceId="price_1T5wAjPs7Nw0EhG0pozCnUoQ"
            tier="enterprise"
            className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold hover:bg-gold hover:text-forest transition-all duration-200"
          >
            Start Enterprise Trial
          </CheckoutButton>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-center mb-10 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Can I try Pro before committing?",
              a: "Yes. Pro comes with a 14-day free trial — no credit card required. If you don't upgrade, you'll automatically revert to the free weekly plan.",
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards (Visa, Mastercard, American Express) through Stripe. Enterprise customers can also pay by invoice.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period.",
            },
            {
              q: "Where does ContractPulse get its data?",
              a: "We aggregate data from CanadaBuys (formerly BuyandSell.gc.ca), proactive disclosure databases, MERX, and other public federal procurement sources. Our editorial team adds analysis, context, and insight.",
            },
            {
              q: "Is the API included in Enterprise?",
              a: "Yes. Enterprise plans include full REST API access with up to 10,000 requests per month. Need more? Contact us for custom volume pricing.",
            },
            {
              q: "Do you offer annual billing?",
              a: "Annual billing with a discount is coming soon. Join the free plan now and we'll notify you when it's available.",
            },
          ].map((item, i) => (
            <div key={i} className="border-b border-forest-50/20 pb-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
