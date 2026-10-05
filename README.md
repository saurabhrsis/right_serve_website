# Right Serve Infotech System — corporate website

Production-ready marketing site for **RIGHT SERVE INFOTECH SYSTEM PRIVATE LIMITED** (RSIS), Nagpur.
Rebuilt as a React + Vite + React Router application with a route-based architecture, per-route SEO,
build-time prerendering and no changes to the existing backend API.

---

## 1. Stack

| Concern | Choice |
| --- | --- |
| UI | React 18 + TypeScript |
| Build | Vite 5 |
| Routing | React Router 6 (all URLs are real routes) |
| Icons | `lucide-react` |
| Type | `@fontsource-variable/inter` (self-hosted, no external font requests) |
| Styling | Hand-written CSS design system in `src/styles` (tokens → base → components → sections) |
| SEO | Per-route metadata + JSON-LD, prerendered to static HTML, generated `sitemap.xml` |
| Analytics | GTM / GA4 loaded from env vars only, `data-track` delegation, conversion events |
| Lint | ESLint 9 flat config (`eslint.config.js`) |

No CSS framework, no state library, no animation library — the site ships only what it uses.

## 2. Requirements

- Node.js 20 or newer (developed on Node 22)
- npm 10+

## 3. Getting started

```bash
npm install
npm run dev        # http://localhost:5173  (bound to 0.0.0.0)
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR, `/api/*` proxied to the backend |
| `npm run build` | Regenerates the sitemap → type-checks → client build → SSR build → prerenders every route into `dist/` |
| `npm run build:client` | Client build only (no prerender) |
| `npm run preview` | Serves the built `dist/` locally on port 4173 |
| `npm run lint` | ESLint over the whole project |
| `npm run sitemap` | Regenerates `public/sitemap.xml` from route metadata and content files |

`npm install && npm run build` is expected to complete without errors or warnings.

## 4. Environment variables

Copy `.env.example` to `.env` and fill in what you need. Every value is optional — the site builds and
runs without a `.env` file.

| Variable | Purpose | Default when empty |
| --- | --- | --- |
| `VITE_SITE_URL` | Canonical origin used in canonical tags, Open Graph URLs and the sitemap | `https://rightserveinfotechsystem.com` |
| `VITE_API_BASE_URL` | Base URL the browser uses for enquiry submissions | `https://backend.rightserveinfotechsystem.com` |
| `VITE_API_ORIGIN` | Origin the dev/preview server proxies `/api/*` to | `https://backend.rightserveinfotechsystem.com` |
| `VITE_GTM_ID` | Google Tag Manager container (`GTM-XXXXXXX`) | analytics disabled |
| `VITE_GA4_ID` | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`) | analytics disabled |

> Everything prefixed with `VITE_` is embedded in the client bundle. Never put secrets in these files —
> the project needs no secrets at build time.

## 5. Project structure

```
index.html                  Single HTML template with <!--app-head--> and #root placeholders
scripts/
  generate-sitemap.mjs      Writes public/sitemap.xml from route metadata + content slugs
  prerender.mjs             Renders every route to dist/<route>/index.html and dist/200.html
src/
  main.tsx                  Entry point: hydrates prerendered markup, otherwise client-renders
  App.tsx                   <Routes> tree, wrapped in the shared layout
  entry-server.tsx          Build-time renderer: render(), renderHead(), warmRoutes()
  routes/index.tsx          One route table (lazy loaders) shared by app and prerenderer
  pages/                    One component per route (19 files, none oversized)
  components/
    common/                 Button, Icon, SectionHeading, Reveal, Faq, CtaBand, PageHero, Cards, SmartImage
    layout/                 Header (sticky nav + dropdowns + mobile drawer), Footer, Breadcrumbs, Layout
    sections/               Process, Industries, Technology, WhyUs, ClientStrip, TrustStrip
    home/                   Homepage hero and section compositions
    forms/                  EnquiryForm (contact + quote) with validation, honeypot and status states
  data/                     All copy and structured content (see §7)
  seo/                      route metadata resolver, head-tag builder, JSON-LD builders, <Seo> component
  services/                 analytics.ts (GTM/GA4), api.ts (backend client)
  hooks/                    useEnquiryForm, useAnalyticsPageView, useIsomorphicLayoutEffect
  styles/                   tokens.css, base.css, components.css, sections.css
public/
  assets/                   Brand marks, photography, product screenshots, client logos
  robots.txt, manifest.webmanifest, sitemap.xml (generated)
```

## 6. Routes

| URL | Page | In sitemap |
| --- | --- | --- |
| `/` | Home — hero with client logos, what we do, six ready products, custom development, delivered work, process, FAQ, CTA. Industries, technology and “why us” live on `/about` and `/services` so the homepage stays a sales page | yes |
| `/about` | Company, values, team, how we work | yes |
| `/services` | Services index (6 groups) | yes |
| `/services/:slug` | `software-development`, `website-development`, `mobile-app-development`, `erp-development`, `ai-development`, `seo-digital-marketing`, `hardware-it-infrastructure` | yes |
| `/solutions` | Product catalogue | yes |
| `/solutions/:slug` | `fmcg-billing`, `jewellery-billing`, `tuition-erp`, `cooperative-society-software`, `business-management`, `construction-erp`, `dosecare` | yes |
| `/portfolio` | Filterable project grid (26 projects) | yes |
| `/case-studies` + `/case-studies/:slug` | 5 case studies with challenge → approach → outcome | yes |
| `/blog` + `/blog/:slug` | 4 long-form articles | yes |
| `/careers` | Open roles, hiring process, application form | yes |
| `/contact` | NAP details, map, enquiry form | yes |
| `/request-quote` | Detailed quote form | yes |
| `/thank-you` | Post-submission confirmation | no (`noindex`) |
| `/privacy-policy`, `/terms-and-conditions` | Website legal pages | yes |
| `/privacy-policy-bhajnarthi-app`, `/terms-and-conditions-bhajnarthi-app` | Hindu Bhakti app legal pages (original URLs preserved for app-store listings) | yes |
| `/404` and unmatched paths | Not-found page with internal links | no (`noindex`) |

`/api/*` is never a page route: the dev and preview servers proxy it to the backend (§10).

## 7. Editing content

All copy lives in typed data modules so pages stay presentational:

| File | Content |
| --- | --- |
| `src/data/site.ts` | Company name, legal name, address, phones, email, hours, geo, socials, WhatsApp helper, honeypot field name |
| `src/data/route-meta.json` | Title, description, keywords, changefreq, priority, schema list per route |
| `src/data/services.ts` | 7 services: summary, deliverables, process, technology, FAQs, imagery |
| `src/data/solutions.ts` | 7 products: features, modules, platforms, deployment, FAQs, `featuredSolutions`, `productFaqs` |
| `src/data/portfolio.ts` | 26 projects, project types, client logos |
| `src/data/caseStudies.ts` | 5 case studies (challenge, solution, capabilities, technology, implementation, outcome) |
| `src/data/blog.ts` | 4 articles as sections, categories, publish/update dates |
| `src/data/company.ts` | Industries, process steps, technology groups, differentiators, client statements, FAQs |
| `src/data/legal.ts` | Privacy policy and terms documents (website + Hindu Bhakti app) |

Adding a **service**, **solution**, **project**, **case study** or **article**: add one record to the
matching data file. Navigation, cards, sitemap entries, prerendered pages and structured data are all
derived from those records — no other file needs to change. Anything that must appear in the sitemap and
prerender output also needs a `slug` (the generators read slugs from these modules).

## 8. SEO pipeline

1. **`src/data/route-meta.json`** holds the canonical metadata for every static route, including which
   JSON-LD blocks to emit (`Organization`, `WebSite`, `ProfessionalService`, `AboutPage`, `ContactPage`,
   `CollectionPage`, `Blog`, `Service`, `Product`, `FAQPage`, `BreadcrumbList`).
2. **`src/seo/pageMeta.ts`** resolves metadata for any path: static routes from the JSON file, dynamic
   routes (`/services/:slug`, `/solutions/:slug`, `/case-studies/:slug`, `/blog/:slug`) from their content
   record. Unknown paths resolve to a `noindex` 404 set.
3. **`src/seo/schema.ts`** builds the JSON-LD blocks; organisation details always come from `site.ts`, so
   NAP data is consistent everywhere.
4. **`scripts/prerender.mjs`** renders each route with React's `renderToString` and writes
   `dist/<route>/index.html` with the complete markup **and** the route's head tags. Crawlers and social
   scrapers therefore see full content and metadata without executing JavaScript.
5. **`scripts/generate-sitemap.mjs`** writes `public/sitemap.xml` (37 indexable URLs) and skips
   `excludedFromSitemap` paths.
6. `public/robots.txt` allows crawling and points at the sitemap.

Each page renders exactly one `<h1>`, a breadcrumb trail in the UI and a matching `BreadcrumbList` in
structured data. Titles and descriptions are unique across all 39 prerendered pages.

## 9. Analytics and conversion tracking

- GTM (`VITE_GTM_ID`) and GA4 (`VITE_GA4_ID`) are injected at runtime **only** when the env vars are set;
  with them empty, no third-party script is loaded and CSP stays clean.
- Page views are sent on every client-side route change (`useAnalyticsPageView`).
- Any element with `data-track="…"` reports a click through one delegated listener —
  e.g. `data-track="cta-primary"` on CTA bands, `thankyou-whatsapp` on the WhatsApp button.
- Conversion events pushed to the data layer: `quote_request_submitted`, `contact_form_submitted`,
  `job_application_submitted` (see `src/hooks/useEnquiryForm.ts`).

## 10. Forms and backend contract

The backend is unchanged. Forms post JSON to the existing endpoint:

```
POST {VITE_API_BASE_URL}/rsis/add-contact
Body: { name, email, phone, company?, service, budget?, timeline?, industry?, message, … }
```

In development and preview, `/api/*` is proxied to `VITE_API_ORIGIN` with the `/api` prefix stripped, so
the browser can call the API from the same origin without CORS changes. A hidden honeypot field
(`HONEYPOT_FIELD` in `src/data/site.ts`) filters basic spam.

## 11. Deployment

`npm run build` produces:

```
dist/
  index.html                    home
  about/index.html              one folder per route …
  thank-you/index.html
  200.html                      client-only shell (fallback for unknown URLs)
  assets/…                      hashed JS/CSS chunks, optimised images
  robots.txt, sitemap.xml, manifest.webmanifest
```

Upload the contents of `dist/` to any static host. The site needs **no server runtime**.

### SPA fallback (deep links and unknown URLs)

Every real route exists as a file, so deep links work on a host that performs **directory index**
resolution (`/about` → `/about/index.html`) — this is the default on Netlify, Vercel, Cloudflare Pages,
GitHub Pages, Amplify and most CDNs. If your host does not, add one of these:

**Netlify** — `public/_redirects` (already included)

```
/*  /200.html  200
```

Static files are matched before this rule, so prerendered routes keep being served from their own
folder and only unknown URLs fall through to the client shell.

**Vercel** — `vercel.json`

```json
{ "rewrites": [{ "source": "/((?!assets/).*)", "destination": "/200.html" }] }
```

**nginx**

```nginx
location / {
  try_files $uri $uri/ $uri/index.html /200.html =404;
}
```

**Apache** — `.htaccess` in the web root

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /200.html [L]
```

**Amazon S3 + CloudFront** — set the error document to `/200.html` and return `200`; or add a CloudFront
function that rewrites unknown paths to `/200.html`.

Because unknown URLs are served by the client shell, the router renders the 404 page and applies
`noindex` — no soft-404 pages are indexed.

### Recommended response headers

```
Cache-Control: max-age=31536000, immutable     # /assets/*  (hashed filenames)
Cache-Control: no-cache                        # /*.html
```

### After the first deploy

1. Confirm `https://<domain>/sitemap.xml` and `/robots.txt` load.
2. Submit the sitemap in Google Search Console (property already verified for the domain).
3. Update the Google Business Profile website link if the domain changes.

## 12. Performance, accessibility and responsiveness

- Route-level code splitting (one chunk per page) plus React/router vendor chunks.
- Prerendered HTML means first paint needs no JavaScript; hydration takes over afterwards.
- Images ship with explicit dimensions (no layout shift), `loading="lazy"` below the fold and
  `fetchpriority="high"` on the hero.
- Self-hosted variable font, no third-party requests except analytics when explicitly configured.
- Fluid `clamp()` type scale with max-width containers; breakpoints cover small phones (≤360 px) through
  large TV viewports (extended layout above 2300 px and 3000 px).
- Semantic landmarks, skip link, visible focus states, labelled form fields with inline errors,
  `aria-current` navigation, reduced-motion support, AA colour contrast targets.
- No-JS fallback block in `index.html` with the company's name, services, address and phone number.

## 13. Verified facts and open items

Copy is limited to verifiable company information. The following still need an answer from the client
before the site is published:

| Item | Status |
| --- | --- |
| Experience claim ("since 2019" vs "7+ years") | `site.ts` uses the registry founding year; confirm the public wording |
| Project and client counts | No counters are published until the numbers are confirmed |
| Team names on `/about` | The page lists the directors and in-house team; confirm each person is happy to be named publicly, otherwise remove entries from `team` in `src/pages/About.tsx` |
| Postal code | 440034 used consistently (registry lists 440037/441108 as well) — confirm |
| Client logos and testimonials | Only published with written client permission |
| Product pricing | Never published; every product page shows "pricing on request" |

Update `src/data/site.ts` (and the affected data files) once each item is confirmed, then rebuild.

## 14. License

Proprietary — © Right Serve Infotech System Pvt. Ltd. All rights reserved.
