import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 25 Federal Contract Awards — February 2026 | ContractPulse",
  description:
    "Free report: The largest federal government contract awards in February 2026. Real USAspending.gov data with analysis for GovCon professionals.",
  keywords: [
    "federal contracts february 2026",
    "government contract awards",
    "top federal contracts",
    "USAspending data",
    "GovCon intelligence",
    "federal procurement report",
  ],
  openGraph: {
    title: "Top 25 Federal Contract Awards — February 2026",
    description:
      "Free report with real USAspending.gov data. Who won the biggest federal contracts this month.",
    type: "article",
    url: "https://contractpulse.io/reports/top-federal-contracts-february-2026",
  },
};

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
