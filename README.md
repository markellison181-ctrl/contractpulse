# ContractPulse

**ContractPulse** is a Canadian federal government contract intelligence newsletter. Weekly analysis of contract awards, procurement trends, policy changes, and personnel moves.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Email:** SendGrid API
- **Payments:** Stripe (placeholder — to be integrated)
- **Deployment:** Vercel

## Brand

- **Colors:** Deep Green (#0B3D2E) + Gold (#D4A853)
- **Audience:** Government contractors, consultants, lobbyists, BD professionals

## Pages

- `/` — Landing page with email signup
- `/archive` — Newsletter archive
- `/archive/sample` — Sample issue with real data
- `/archive/blog/[slug]` — SEO blog posts
- `/pricing` — Pricing page (Free / Pro $29/mo / Enterprise $99/mo)
- `/terms` — Terms of Service (CASL/PIPEDA compliant)
- `/privacy` — Privacy Policy (CASL/PIPEDA compliant)

## API Routes

- `POST /api/subscribe` — Email subscription via SendGrid

## Email Templates

- `email-templates/weekly.html` — HTML email template for weekly digest

## Environment Variables

```
SENDGRID_API_KEY=your_sendgrid_api_key
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npx vercel
```

Set `SENDGRID_API_KEY` in Vercel environment variables.

## Company

SignalStack Media Inc.  
181 Bay Street, Suite 1400  
Toronto, ON M5J 2T3, Canada  
A [SignalStack](https://signalstack.io) newsletter.
