import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ContractPulse — Canadian Government Contract Intelligence",
  description:
    "Weekly intelligence on Canadian federal government contract awards, procurement trends, and policy changes. Built for contractors, consultants, and lobbyists.",
  openGraph: {
    title: "ContractPulse — Canadian Government Contract Intelligence",
    description:
      "Weekly intelligence on Canadian federal government contract awards, procurement trends, and policy changes.",
    type: "website",
    url: "https://contractpulse.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContractPulse — Canadian Government Contract Intelligence",
    description:
      "Weekly intelligence on Canadian federal government contract awards, procurement trends, and policy changes.",
  },
};

function Header() {
  return (
    <header className="border-b border-forest-50/20 bg-forest/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
            <span className="text-forest font-bold text-sm">CP</span>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">
            Contract<span className="text-gold">Pulse</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/archive" className="text-gray-300 hover:text-gold transition-colors text-sm">
            Archive
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-gold transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/archive/blog/track-federal-government-contracts-canada" className="text-gray-300 hover:text-gold transition-colors text-sm">
            Blog
          </Link>
          <Link
            href="/#subscribe"
            className="bg-gold text-forest px-4 py-2 rounded text-sm font-semibold hover:bg-gold-300 transition-colors"
          >
            Subscribe Free
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-forest-50/20 bg-forest-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-forest font-bold text-xs">CP</span>
              </div>
              <span className="text-white font-semibold">
                Contract<span className="text-gold">Pulse</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Canadian government contract intelligence, delivered weekly.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              A <a href="https://signalstack.io" className="text-gold hover:text-gold-300">SignalStack</a> newsletter.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Content</h4>
            <ul className="space-y-2">
              <li><Link href="/archive" className="text-gray-400 hover:text-gold transition-colors text-sm">Newsletter Archive</Link></li>
              <li><Link href="/archive/sample" className="text-gray-400 hover:text-gold transition-colors text-sm">Sample Issue</Link></li>
              <li><Link href="/archive/blog/track-federal-government-contracts-canada" className="text-gray-400 hover:text-gold transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-gray-400 hover:text-gold transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/#subscribe" className="text-gray-400 hover:text-gold transition-colors text-sm">Subscribe</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-gray-400 hover:text-gold transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-forest-50/20 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SignalStack Media Inc. All rights reserved.
            <br />
            181 Bay Street, Suite 1400, Toronto ON M5J 2T3, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-forest text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
