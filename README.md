# Thaurus Partnership Landing

A standalone one-page landing for the Thaurus partnership program (IB Partners / Affiliates).
It contains **only** this page: `/affiliate-program` in five languages. Every other path redirects to it.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`, no tailwind config file)
- next-intl v4 — locales `en` (default, no URL prefix), `es`, `pt`, `th`, `ar` (RTL)
- Figtree font self-hosted from `src/fonts` (no Google Fonts request at build time)
- Form: React 19 server action + zod (`src/app/[locale]/(landing)/affiliate-program/actions.ts`)

## Run

```bash
npm install
npm run dev      # http://localhost:3000/affiliate-program
npm run build && npm start
```

Node 20+ is required.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `LANDING_ONLY=1` | Redirect every path except the landing (and its Open Graph image) to `/affiliate-program`; `robots.txt` becomes `Disallow: /`. Set it on test deployments. On the production domain leave it unset only if other pages exist there. |
| `APPLICATIONS_WEBHOOK_URL` | Where applications are POSTed as JSON (currently a Google Apps Script web app that appends a row to the "Thaurus Partner Applications" Google Sheet). |
| `APPLICATIONS_WEBHOOK_SECRET` | Shared secret sent in the JSON body; the webhook rejects requests without it. |

Without `APPLICATIONS_WEBHOOK_URL` the form still validates and shows the success state, but the application is only logged on the server.

## Where things live

| Path | What |
| --- | --- |
| `src/app/[locale]/(landing)/affiliate-program/page.tsx` | The page (sections in order: hero, trusted-by, programs, benefits, comparison, reviews, FAQ, apply, closing strip) |
| `src/app/[locale]/(landing)/affiliate-program/layout.tsx` | Landing header (anchor nav, language switcher, CTA) and footer (licence, legal PDFs, risk warning) |
| `src/content/affiliate/{en,es,pt,th,ar}.ts` (+ `*.faq.ts`) | All copy per language. Add new text to **all five** files. |
| `src/content/affiliate/reviews.ts` | Partner reviews (quote, country, ISO code → flag) |
| `src/content/affiliate/press.ts` | "Trusted by" press logos (`public/photos`) |
| `src/components/affiliate/` | Landing components (header, footer, form, review marquee, illustrations, velocity strip) |
| `src/lib/site.ts` | Company facts: licence, address, phones, legal PDF list. Change values here, not in components. |
| `messages/*.json` | Footer and metadata strings per language (used by next-intl) |
| `public/legal/*.pdf` | Legal documents linked from the footer |
| `src/proxy.ts` | Locale routing (next-intl) and the `LANDING_ONLY` redirect |

## Rules that must stay

- No outbound links on the page except the FSC register link and the legal PDFs in the footer; all CTAs go to `#apply`.
- Compliance text (risk warning, restricted jurisdictions, licence line) is fixed wording — do not rephrase or translate it.
- No commission rates, payout amounts or partner counts anywhere unless they are supplied by the company.
- Brand colours only: `#131228`, `#42478b`, `#58595b`, `#a7a9ac`, white. Font: Figtree.
- Everything renders in the server HTML; animations are CSS (`.rise`, `.pop`, `.marquee-track`, `.check-draw` in `globals.css`), so the page shows content without JavaScript.

## Deploy

The project builds on Vercel with the Next.js preset (`vercel.json`). Set the three environment variables above in the project settings. `npm run build` must pass with zero TypeScript errors; `npm run lint` runs ESLint.
