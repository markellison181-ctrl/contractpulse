import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Simple, transparent <span className="text-gold">pricing</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Start free. Upgrade when your needs grow. All plans include our core intelligence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free */}
        <div className="card-hover bg-gradient-to-b from-forest-500/80 to-forest-500/40 border border-forest-50/30 rounded-xl p-8 flex flex-col">
          <div className="text-gray-400 label-uppercase mb-2">Free</div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-5xl font-bold tracking-tight">$0</span>
          </div>
          <div className="text-gray-500 text-sm mb-8">Free forever</div>
          <ul className="space-y-4 text-sm text-gray-300 mb-8 flex-1">
            <li className="flex items-start gap-3"><IconCheck /> Weekly digest every Monday</li>
            <li className="flex items-start gap-3"><IconCheck /> Signal of the Week analysis</li>
            <li className="flex items-start gap-3"><IconCheck /> Top 5-7 contract awards</li>
            <li className="flex items-start gap-3"><IconCheck /> Policy Watch highlights</li>
            <li className="flex items-start gap-3"><IconCheck /> Numbers That Matter</li>
            <li className="flex items-start gap-3"><IconCheck /> Web archive access</li>
          </ul>
          <Link href="/#subscribe" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold hover:bg-gold hover:text-forest transition-all duration-200">
            Subscribe Free
          </Link>
        </div>

        {/* Pro */}
        <div className="card-hover bg-gradient-to-b from-forest-500/80 to-forest-500/40 border-2 border-gold rounded-xl p-8 flex flex-col relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </div>
          <div className="text-gold label-uppercase mb-2">Pro</div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-5xl font-bold tracking-tight">$29</span>
            <span className="text-gray-400 text-sm">/month</span>
          </div>
          <div className="text-gray-500 text-sm mb-8">Billed monthly. Cancel anytime.</div>
          <ul className="space-y-4 text-sm text-gray-300 mb-8 flex-1">
            <li className="flex items-start gap-3"><IconCheck /> Everything in Free</li>
            <li className="flex items-start gap-3"><IconCheck /> <span><strong className="text-white">Daily</strong> contract alerts</span></li>
            <li className="flex items-start gap-3"><IconCheck /> Full searchable database</li>
            <li className="flex items-start gap-3"><IconCheck /> Sector &amp; department filters</li>
            <li className="flex items-start gap-3"><IconCheck /> CSV / Excel data export</li>
            <li className="flex items-start gap-3"><IconCheck /> Who&apos;s Moving personnel tracker</li>
            <li className="flex items-start gap-3"><IconCheck /> Historical trends &amp; analytics</li>
            <li className="flex items-start gap-3"><IconCheck /> Email support</li>
          </ul>
          <button className="block w-full text-center bg-gold text-forest px-6 py-3 rounded font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 cursor-pointer">
            Start 14-Day Free Trial
          </button>
          <p className="text-center text-gray-500 text-xs mt-3">No credit card required for trial</p>
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
          <Link href="mailto:enterprise@contractpulse.io" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold hover:bg-gold hover:text-forest transition-all duration-200">
            Contact Sales
          </Link>
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
