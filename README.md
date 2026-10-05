# Right Serve Infotech System — Website v2

A complete rebuild of [rightserveinfotechsystem.com](https://rightserveinfotechsystem.com/) using **React 18 + Vite + TypeScript + Tailwind CSS**, with every page on its own route, production-grade SEO (per-route metadata, structured data, static prerendering) and the existing backend API reused for lead capture.

---

## 1. What is inside

| Area | Implementation |
| --- | --- |
| Framework | React 18.3, Vite 5, TypeScript 5 (strict) |
| Routing | `react-router-dom` 6 — **every page is a real, shareable, crawlable URL** |
| Styling | Tailwind CSS 3 with a custom design system (`brand`, `accent`, `gold` palettes, animations, component classes) |
| SEO | Per-route title/description/keywords/canonical/OG/Twitter tags, JSON-LD (Organization, LocalBusiness, WebSite, Service, FAQPage, BlogPosting, JobPosting, SoftwareApplication, BreadcrumbList, Review), `sitemap.xml`, `robots.txt`, HTML sitemap, legacy 301 redirects |
| Rendering | **Static prerendering (SSG)** — `npm run build` renders all 46 routes to real HTML files, then the client hydrates. Crawlers get fully rendered markup; users get instant navigation. |
| Lead capture | Existing backend `POST /rsis/add-contact` (+ career application endpoint) with same-origin `/api` proxy, multi-base fallback and graceful WhatsApp/phone fallback UI |
| Marketing | GA4 / Google Tag Manager / Meta Pixel (env-gated), `generate_lead` + `cta_click` + `whatsapp_click` events, UTM + gclid/fbclid capture attached to every lead, cookie consent, click-to-WhatsApp, Google Business/Map integration, review schema |
| Accessibility | Skip link, semantic landmarks, single `h1` per page, labelled forms, `aria-expanded` menus, visible focus rings, reduced-motion support |
| Performance | Route-level code splitting, lazy images with width/height (no layout shift), lazy-loaded Map iframe, non-blocking fonts, hashed immutable assets |

---

## 2. Quick start

```bash
npm install
npm run dev        # http://localhost:5173 (host 0.0.0.0 — works in containers/previews)
```

Production build (client bundle → SSR bundle → prerender):

```bash
npm run build      # outputs static site to dist/
npm run preview    # serves dist/ exactly like a production host (clean URLs + 404 page)
```

Other scripts:

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run assets     # regenerate optimised images from the legacy asset folder
```

---

## 3. Routes

Every route below is prerendered to its own `index.html` and listed in `sitemap.xml`.

**Main**

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About us |
| `/our-team` | Team |
| `/career` | Careers (9 live roles + application form) |
| `/portfolio` | Portfolio (33 projects, filterable) |
| `/products` | Products (6 ready-to-deploy products) |
| `/insights` | Guides & insights |
| `/insights/[slug]` | 5 long-form articles |
| `/contact` | Contact + enquiry form + map |
| `/sitemap` | HTML sitemap (internal linking) |
| `/thank-you` | Conversion confirmation (`noindex`) |
| `/privacy-policy`, `/terms-and-conditions` | Legal |
| `/privacy-policy-bhajnarthi-app`, `/terms-and-conditions-bhajnarthi-app` | Bhajnarthi app policies (preserved) |

**Services (3 hubs + 23 dedicated service pages)**

| Route | Page |
| --- | --- |
| `/services/software` | Software development hub |
| `/services/software/{custom-software-development, web-development, mobile-app-development, ecommerce-development, erp-crm-solutions, cloud-devops, ai-automation, ui-ux-design, qa-testing}` | Service pages |
| `/services/hardware` | Hardware & IT infrastructure hub |
| `/services/hardware/{server-workstation-solutions, networking-solutions, cctv-security-systems, it-amc-support, iot-embedded-solutions, storage-backup-data-recovery}` | Service pages |
| `/services/marketing` | Digital marketing hub |
| `/services/marketing/{seo-services, google-ads, meta-ads, social-media-management, content-graphic-design, bulk-sms-email-marketing, election-campaigns, influencer-digital-cards}` | Service pages |

**Legacy URL preservation (301 redirects)** — `/home`, `/about-us`, `/aboutus`, `/team`, `/careers`, `/jobs`, `/software`, `/hardware`, `/marketing`, `/blog`, `/privacy`, `/terms` all redirect to their new equivalents, so existing rankings and backlinks keep working.

---

## 4. SEO implementation details

1. **Prerendering.** `scripts/prerender.mjs` imports the SSR bundle, renders each route with `react-dom/server`, and injects that route's `<title>`, description, keywords, robots, canonical, Open Graph/Twitter tags and JSON-LD into the HTML before writing `dist/<route>/index.html`. No client-side-only metadata.
2. **One metadata registry.** `src/seo/meta.ts` defines metadata + schema for every route (including all service and insight child pages). The same registry is used at build time and on client navigation (`applyRouteMeta`), so the head never goes stale.
3. **Structured data** (`src/seo/schema.ts`): Organization, WebSite (with SearchAction), LocalBusiness/ProfessionalService with geo + opening hours + aggregate rating, Service + Offer (price from), FAQPage (hub + every service page + contact), BreadcrumbList, BlogPosting, JobPosting per role, SoftwareApplication per product, Review per testimonial, ItemList for listings.
4. **Local SEO**: consistent NAP everywhere (footer, contact, schema), Google Map embed, service-area copy, review markup, click-to-call, and `geo.*` meta tags.
5. **Crawl files**: `sitemap.xml` (44 indexable URLs with priority/changefreq), `robots.txt`, `manifest.webmanifest`, `_redirects` (Netlify/Cloudflare), `_headers`, `404.html`.
6. **Semantic HTML & a11y**: one `h1` per page, ordered headings, landmark elements, breadcrumbs on every inner page, descriptive alt text, keyboard-accessible menus and accordions, `prefers-reduced-motion` support.

---

## 5. Backend API (unchanged)

The existing backend is reused as-is:

```
POST https://backend.rightserveinfotechsystem.com/rsis/add-contact
body: { name, email, mobile, message, source, subject, company, utm, submittedAt }
```

* **Development** — `vite.config.ts` proxies `/api/*` to `VITE_BACKEND_URL` with the `/api` prefix stripped, so the browser request is same-origin (no CORS work needed).
* **Production (recommended)** — add the same reverse proxy on the server (`deploy/nginx.conf.example` has a ready `location /api/` block). The frontend then calls `/api/rsis/add-contact`.
* **Alternative** — set `VITE_API_BASE_URL=https://backend.rightserveinfotechsystem.com` and enable CORS on the backend for `https://rightserveinfotechsystem.com`.
* **Resilience** — `src/lib/api.ts` tries the configured base, then the same-origin proxy, then the absolute backend URL. If all fail, the form shows a clear message and offers WhatsApp / phone fallback so a lead is never silently lost.
* **Careers** — the application form posts multipart (with resume) to `VITE_CAREER_ENDPOINT` (default `/rsis/add-career`). Confirm the exact endpoint with the backend team; if it is not available yet, resumes can still be sent to the email address shown on the page.

---

## 6. Environment variables

Copy `.env.example` → `.env`.

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Canonical/public URL used for canonicals, sitemap, JSON-LD |
| `VITE_API_BASE_URL` | Optional absolute API base; leave empty to use same-origin `/api` |
| `VITE_BACKEND_URL` | Dev proxy target (default `https://backend.rightserveinfotechsystem.com`) |
| `VITE_GA4_ID`, `VITE_GTM_ID`, `VITE_META_PIXEL_ID` | Analytics/marketing tags — scripts are only injected when set |
| `VITE_GOOGLE_SITE_VERIFICATION`, `VITE_BING_SITE_VERIFICATION` | Search Console verification |
| `VITE_WHATSAPP_NUMBER` | WhatsApp click-to-chat number (default `919545073418`) |
| `VITE_CAREER_ENDPOINT` | Career application endpoint override |

---

## 7. Content editing

Almost all copy lives in `src/data/` so non-developers can update text without touching components:

| File | Contents |
| --- | --- |
| `site.ts` | Company details (NAP), socials, stats, industries, tech stack, process |
| `services.ts` | 3 pillars + 23 service pages (SEO copy, features, deliverables, FAQs, pricing) |
| `portfolio.ts` | 33 case studies + filters |
| `products.ts` | 6 products, benefits, reviews |
| `insights.ts` | 5 long-form articles with FAQs |
| `team.ts`, `testimonials.ts`, `careers.ts`, `faqs.ts` | Team, reviews, job roles, page FAQs |

The SEO metadata for each page is in `src/seo/meta.ts` (add a route there when you add a page).

---

## 8. Images

All imagery was extracted from the legacy site and optimised (resized + JPEG/PNG compressed) by `scripts/optimize-assets.mjs`:

```bash
npm run assets -- --src=/path/to/legacy/public
```

Result: **5.4 MB** of optimised images for the whole site (down from ~363 MB in the old repository), including a generated 1200×630 social share image, favicons, PWA icons and a real `favicon.ico`.

---

## 9. Deployment

`npm run build` produces a fully static `dist/` — deploy it to any host:

* **Netlify / Cloudflare Pages** — build command `npm run build`, publish directory `dist`. `public/_redirects` and `public/_headers` are copied into the output.
* **Vercel** — framework preset “Vite”, output `dist` (add a rewrite for `/api/*` if you proxy the backend).
* **Nginx / Apache VPS** — use `deploy/nginx.conf.example`; clean URLs are handled by `try_files $uri $uri/index.html $uri/` and `404.html`.
* **GitHub Pages** — publish `dist/` (a `.nojekyll` file is generated). Add a `404.html`-aware host or a custom domain to avoid the Pages 404 page.

Post-deploy checklist:

1. Point DNS, enable HTTPS/HSTS.
2. Google Search Console — verify, submit `sitemap.xml`, request indexing for key pages.
3. Bing Webmaster Tools — import from GSC.
4. Google Business Profile — update website link, hours, services and photos; start posting weekly.
5. Set `VITE_GA4_ID` + `VITE_META_PIXEL_ID`, then verify `generate_lead` events in GA4 DebugView.
6. Add the site to GA4 + Google Ads as a conversion (`generate_lead`) and import it into Google Ads.
7. Review Core Web Vitals in PageSpeed Insights after launch (aim ≥ 90 mobile).
8. Keep publishing insights/GBP posts monthly — organic growth is compounding, not one-off.

---

## 10. Project structure

```
├── index.html                 # HTML shell with default SEO + marked injection points
├── scripts/
│   ├── prerender.mjs          # SSG: routes → static HTML, sitemap, robots, manifest, redirects
│   ├── optimize-assets.mjs    # legacy asset → optimised public/images
│   └── serve.mjs              # production-accurate static server (npm run preview)
├── deploy/nginx.conf.example
├── public/                    # robots.txt, _redirects, _headers, favicon, images/**
└── src/
    ├── main.tsx               # hydrate/createRoot entry
    ├── entry-server.tsx       # SSR entry used by the prerenderer
    ├── App.tsx                # route table
    ├── components/            # Header, Footer, Layout, forms, cards, sections, UI kit
    ├── data/                  # all editable content
    ├── lib/                   # api client, analytics, utils
    ├── pages/                 # one component per route
    └── seo/                   # meta registry + JSON-LD builders
```

---

© Right Serve Infotech System Pvt. Ltd. — internal project documentation.
