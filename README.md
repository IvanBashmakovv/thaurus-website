# Thaurus Partnership Landing (static build)

A standalone one-page landing for the Thaurus partnership program (IB Partners / Affiliates).
It contains **only** this page: `/affiliate-program` in five languages. Every other path redirects to it.

This branch is the **static export** for plain Apache/LiteSpeed hosting (cPanel): `npm run build`
writes the whole site to `out/`, which is uploaded as is. No Node.js runs on the server; the
application form is handled by a small PHP endpoint.

Production host: `https://affiliate.thaurus.com`, document root `/home/thaurus/affiliate.thaurus.com/`.

## Stack

- Next.js 16 (App Router, `output: "export"`) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`, no tailwind config file)
- next-intl v4 — locales `en` (default, no URL prefix), `es`, `pt`, `th`, `ar` (RTL); no middleware,
  routing is done by `public/.htaccess`
- Figtree font self-hosted from `src/fonts` (no Google Fonts request at build time)
- Form: browser-side zod validation (`src/lib/apply.ts`) → `POST /apply.php` (`public/apply.php`)
  → Google Apps Script webhook that appends a row to the "Thaurus Partner Applications" sheet

## Build

```bash
npm install
npm run build     # -> out/
npm run lint
```

Node 20+ is required for the build only. `npm run dev` works too (`http://localhost:3000/affiliate-program`),
but the dev server has no `.htaccess` and no PHP: use `/en/affiliate-program` there and expect the
form to fail (there is no `/apply.php`).

If `node_modules` is a symlink/junction to another folder, build with `TURBOPACK_ROOT=<drive or
common parent>` so Turbopack accepts the link target (see `next.config.ts`).

## What is in `out/`

| Path | What |
| --- | --- |
| `.htaccess` | All routing: English without prefix, other locales with prefix, every other path → 307 to the landing, 404 for missing files, content types, caching |
| `apply.php` | Form endpoint. Reads `../affiliate-apply-config.php` (outside the web root) and forwards to the webhook |
| `en/`, `es/`, `pt/`, `th/`, `ar/` | Per locale: `affiliate-program.html`, `affiliate-program.txt` (RSC payload for client-side navigation), `affiliate-program/*.txt` (segment payloads) and `opengraph-image` (PNG, no extension) |
| `_next/static/` | Hashed JS/CSS/fonts |
| `legal/`, `photos/`, `brand/`, `icon.svg` | Static assets |
| `robots.txt`, `sitemap.xml`, `404.html` | Generated |

### URL map (done by `.htaccess`)

| Request | Served |
| --- | --- |
| `/affiliate-program` | `en/affiliate-program.html` |
| `/affiliate-program.txt`, `/affiliate-program/…` | `en/affiliate-program.txt`, `en/affiliate-program/…` |
| `/opengraph-image` | `en/opengraph-image` |
| `/es/affiliate-program` (es, pt, th, ar) | `es/affiliate-program.html` |
| existing files (`/_next/…`, `/legal/…`, `/robots.txt`, `/apply.php`, …) | as is |
| missing file with an extension, or anything missing under `/_next`, `/photos`, `/legal`, `/brand` | 404 (`404.html`) |
| `/`, `/anything`, `/en`, `/en/…` | 307 → `/affiliate-program` |
| `/es`, `/es/anything` (es, pt, th, ar) | 307 → `/es/affiliate-program` |

## Form config (keep outside the web root)

`apply.php` loads `/home/thaurus/affiliate-apply-config.php` (one level above the document root):

```php
<?php
return [
    'APPLICATIONS_WEBHOOK_URL' => 'https://script.google.com/macros/s/…/exec',
    'APPLICATIONS_WEBHOOK_SECRET' => '…',
];
```

The URL and secret never appear in the browser or in `out/`. Without the config file the form still
validates and shows the success screen; the application is only written to the PHP error log.
A webhook failure is logged the same way and never blocks the applicant.

Payload sent to the webhook (JSON, `Content-Type: text/plain`): `secret`, `submittedAt`, `program`
("IB Partners (revenue share)" / "Affiliates (CPA)"), `name`, `email`, `contact` (with a leading
apostrophe so Sheets keeps "+234…" as text), `traffic`, `message`.

## Where things live

| Path | What |
| --- | --- |
| `src/app/[locale]/(landing)/affiliate-program/page.tsx` | The page (sections in order: hero, trusted-by, programs, benefits, comparison, reviews, FAQ, apply, closing strip) |
| `src/app/[locale]/(landing)/affiliate-program/layout.tsx` | Landing header (anchor nav, language switcher, CTA) and footer (licence, legal PDFs, risk warning) |
| `src/content/affiliate/{en,es,pt,th,ar}.ts` (+ `*.faq.ts`) | All copy per language. Add new text to **all five** files. |
| `src/content/affiliate/reviews.ts` | Partner reviews (quote, country, ISO code → flag) |
| `src/content/affiliate/press.ts` | "Trusted by" press logos (`public/photos`) |
| `src/components/affiliate/` | Landing components (header, footer, form, review marquee, illustrations, velocity strip) |
| `src/components/layout/LocaleSwitcher.tsx` | Language menu (navigates to the unprefixed URL for English) |
| `src/lib/apply.ts` | Form validation + `POST /apply.php` |
| `src/lib/site.ts` | Company facts: site URL, licence, address, phones, legal PDF list. Change values here, not in components. |
| `messages/*.json` | Footer and metadata strings per language (used by next-intl) |
| `public/.htaccess`, `public/apply.php` | Server-side pieces, copied into `out/` by the build |
| `public/legal/*.pdf` | Legal documents linked from the footer |

## Rules that must stay

- No outbound links on the page except the FSC register link and the legal PDFs in the footer; all CTAs go to `#apply`.
- Compliance text (risk warning, restricted jurisdictions, licence line) is fixed wording — do not rephrase or translate it.
- No commission rates, payout amounts or partner counts anywhere unless they are supplied by the company.
- Brand colours only: `#131228`, `#42478b`, `#58595b`, `#a7a9ac`, white. Font: Figtree.
- Everything renders in the exported HTML; animations are CSS (`.rise`, `.pop`, `.marquee-track`, `.check-draw` in `globals.css`), so the page shows content without JavaScript.

## Deploy (cPanel)

1. Upload the **contents** of `out/` (including the hidden `.htaccess`) into `/home/thaurus/affiliate.thaurus.com/`.
2. Upload `affiliate-apply-config.php` into `/home/thaurus/` (not into the document root).
3. Make sure `mod_rewrite` is on and `.htaccess` is honoured (`AllowOverride All`, the cPanel default), and PHP 8.x with curl is enabled for the domain.
4. Check `https://affiliate.thaurus.com/` → redirects to `/affiliate-program`; `/th/affiliate-program` loads; the form submits and a row appears in the sheet.
