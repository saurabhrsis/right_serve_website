export type InsightSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type Insight = {
  slug: string
  title: string
  seoTitle: string
  metaDescription: string
  excerpt: string
  category: 'Web Development' | 'Digital Marketing' | 'Software' | 'IT Infrastructure'
  date: string
  updated?: string
  author: string
  readingTime: string
  image: string
  keywords: string[]
  sections: InsightSection[]
  faqs?: { question: string; answer: string }[]
}

/**
 * Insights / blog.
 * Long-form, locally relevant content is one of the strongest organic-growth levers
 * for a service business, so each article targets real search questions.
 */
export const INSIGHTS: Insight[] = [
  {
    slug: 'website-cost-nagpur',
    title: 'How much does a website cost in Nagpur? A transparent 2026 breakdown',
    seoTitle: 'Website Cost in Nagpur 2026 | Price Guide by RSIS',
    metaDescription:
      'A transparent breakdown of website development costs in Nagpur for 2026 — what a ₹25,000 site includes, when to budget ₹1 lakh+, and the hidden costs to watch for.',
    excerpt:
      'Prices in Nagpur range from ₹15,000 to ₹3,00,000+. Here is exactly what changes the number, and how to compare quotes without getting burned.',
    category: 'Web Development',
    date: '2026-01-12',
    updated: '2026-09-18',
    author: 'Right Serve Infotech System',
    readingTime: '6 min read',
    image: '/images/insights/website-cost.jpg',
    keywords: ['website cost in Nagpur', 'website development price Nagpur', 'web design charges India'],
    sections: [
      {
        heading: 'The short answer',
        paragraphs: [
          'For a professionally built 5–8 page corporate website in Nagpur, expect ₹25,000–₹60,000. A custom-designed website with a CMS, blog, SEO setup and integrations usually lands between ₹60,000 and ₹1,20,000. E-commerce stores, portals and multilingual sites with complex functionality range from ₹1,20,000 to ₹3,00,000+.',
          'Anything quoted below ₹15,000 is usually a template with your logo dropped in — fine for a temporary presence, but it rarely ranks, rarely converts, and often costs more to repair later than to build properly.',
        ],
      },
      {
        heading: 'What actually drives the price',
        bullets: [
          'Number of unique page designs — not pages, designs. Ten pages built from three layouts cost far less than ten bespoke pages.',
          'Content readiness — if you supply final copy and images, development time drops significantly.',
          'Functionality — enquiry forms are cheap; dashboards, payments, logins and integrations are not.',
          'SEO maturity — meta data, schema, sitemaps and speed optimisation cost extra effort but pay back for years.',
          'Who writes the code — freelancers cost less per hour but carry key-person risk; agencies cost more and provide continuity, QA and support.',
        ],
      },
      {
        heading: 'The costs nobody mentions in the quote',
        paragraphs: [
          'Domain and hosting (₹3,000–₹12,000 per year), business email (₹600–₹2,000 per user per year), SSL (free with most hosts), content writing and photography (₹5,000–₹40,000), and the ongoing cost of updates and SEO.',
          'Ask every vendor for a three-year total cost of ownership, not just the build price. A ₹40,000 website with no support can quietly become a ₹1,50,000 website after two rebuilds.',
        ],
      },
      {
        heading: 'How to compare quotes fairly',
        bullets: [
          'Ask for the sitemap and a page-by-page scope in writing.',
          'Confirm who owns the code, domain, hosting account and analytics data — it should always be you.',
          'Check whether on-page SEO, speed optimisation, forms, analytics and training are included.',
          'Request two live websites they built in the last 12 months and test their speed on mobile data.',
          'Confirm warranty period, AMC cost and response times after launch.',
        ],
        paragraphs: [
          'Send us your requirement and we will share a written scope with milestone pricing — including exactly what is included, what is not, and how long each stage takes. Free consultation, no obligation.',
        ],
      },
    ],
    faqs: [
      { question: 'Is a ₹25,000 website good enough for my business?', answer: 'For most local service businesses a well-structured ₹25,000–₹40,000 website generates enquiries reliably, provided the content is specific and the site loads fast. Invest in SEO content once the foundation is right.' },
      { question: 'Do you charge monthly for a website?', answer: 'No — the build is a one-time cost. Optional AMC covers updates, backups, security and support; hosting and domain renewals are annual.' },
    ],
  },
  {
    slug: 'local-seo-checklist-nagpur',
    title: 'Local SEO checklist for Nagpur businesses (2026 edition)',
    seoTitle: 'Local SEO Checklist for Nagpur Businesses | Rank on Google Maps',
    metaDescription:
      'A practical local SEO checklist for Nagpur businesses — Google Business Profile, reviews, citations, location pages, schema and the metrics that actually matter.',
    excerpt:
      'Google Maps is where most Nagpur buyers decide. This is the checklist we use to move businesses into the local 3-pack.',
    category: 'Digital Marketing',
    date: '2026-02-04',
    updated: '2026-08-22',
    author: 'Digital Marketing Team, RSIS',
    readingTime: '7 min read',
    image: '/images/insights/local-seo.jpg',
    keywords: ['local SEO Nagpur', 'Google Business Profile Nagpur', 'rank on Google Maps Nagpur'],
    sections: [
      {
        heading: 'Start with your Google Business Profile',
        bullets: [
          'Claim and verify your profile, then complete every field — categories, services, attributes, service areas and opening hours.',
          'Choose the most specific primary category available. This single field influences local rankings more than any other.',
          'Add 20+ genuine photos and refresh them monthly; profiles with recent photos get materially more calls.',
          'Publish weekly updates (offers, events, projects) and use Google Posts consistently.',
          'Answer questions in the Q&A section yourself — most profiles leave it empty and lose the click.',
        ],
      },
      {
        heading: 'Reviews: ask systematically',
        paragraphs: [
          'Reviews influence both rankings and conversion. Build a habit: ask every satisfied customer within 24 hours, using a short link to your review form. Aim for a steady trickle rather than bursts.',
          'Reply to every review — including the negative ones — professionally and within 48 hours. Responses show prospects you handle problems well, which is often what they are testing for.',
        ],
      },
      {
        heading: 'On-site work that supports local rankings',
        bullets: [
          'One clear page per service, each optimised for the phrase a customer would search.',
          'Location pages for the areas you genuinely serve (Nagpur, Wardha, Amravati, Bhandara…), with real, unique content — never copy-paste city pages.',
          'LocalBusiness structured data with your exact name, address, phone, hours and geo coordinates.',
          'Embedded Google Map, click-to-call buttons and WhatsApp chat on mobile.',
          'Consistent NAP (name, address, phone) in your footer, contact page and every directory listing.',
        ],
      },
      {
        heading: 'Citations, links and measurement',
        paragraphs: [
          'Register on high-value Indian directories — JustDial, Sulekha, IndiaMART, Yellow Pages, local association sites — with identical business details. Then earn local links through sponsorships, chamber memberships, supplier pages and local press.',
          'Track rankings by grid area, calls from the profile, direction requests, website clicks and form submissions in GA4. Review the numbers monthly and adjust the service pages that are underperforming.',
        ],
      },
    ],
    faqs: [
      { question: 'How long does local SEO take to work?', answer: 'Profile optimisation and review growth often show movement in 3–6 weeks. Competitive local keywords typically take 3–5 months of consistent work.' },
      { question: 'Can I do local SEO myself?', answer: 'Yes, the checklist above is doable in-house with a few hours a month. Agencies add value on technical fixes, content production and competitive keyword strategy.' },
    ],
  },
  {
    slug: 'custom-software-vs-ready-made-erp',
    title: 'Custom software vs ready-made ERP: which is right for your business?',
    seoTitle: 'Custom Software vs Ready-Made ERP | Decision Guide | RSIS Nagpur',
    metaDescription:
      'Compare custom software and ready-made ERP on cost, fit, flexibility, risk and ROI — with a practical decision framework for Indian SMBs and manufacturers.',
    excerpt:
      'Subscription ERP or bespoke software? The right answer depends on how much of your competitive advantage lives in your process.',
    category: 'Software',
    date: '2026-03-18',
    updated: '2026-07-30',
    author: 'Engineering Team, RSIS',
    readingTime: '6 min read',
    image: '/images/insights/custom-software.jpg',
    keywords: ['custom software vs ERP', 'ERP for small business India', 'custom software development Nagpur'],
    sections: [
      {
        heading: 'Where ready-made ERP wins',
        bullets: [
          'Standard processes — accounting, payables, basic inventory, payroll — that most companies run the same way.',
          'Lower initial cost and faster go-live, often within weeks.',
          'Continuous compliance updates (GST, e-invoicing, statutory changes) handled by the vendor.',
          'A wider support ecosystem, so you are not dependent on one team.',
        ],
        paragraphs: [
          'If your operations are conventional and your team is happy to adapt, a good ERP product is usually the sensible first step.',
        ],
      },
      {
        heading: 'Where custom software wins',
        bullets: [
          'Your process is your differentiator — job-work rate structures, project billing, dealer schemes, site workflows.',
          'You need deep integrations with machines, biometric devices, portals or legacy systems.',
          'Licensing costs scale painfully with users, or you need multi-company/multi-branch controls the product does not support.',
          'You are forced to pay for 40 modules to use 6, or to keep critical data on someone else’s terms.',
        ],
        paragraphs: [
          'Custom software usually costs more upfront and 20–40% less per year once licence fees, add-ons and workarounds are counted over a three-to-five-year horizon.',
        ],
      },
      {
        heading: 'A practical decision framework',
        bullets: [
          'List every process you consider non-negotiable. If more than a third cannot be configured in the product, custom wins.',
          'Price three options over five years: licence + implementation + customisation + support.',
          'Check the export/exit path — can you get your data out in a usable format?',
          'Pilot the highest-risk module for one department before committing company-wide.',
          'Weigh the cost of your team’s workarounds in hours per week; that number is usually bigger than the software budget.',
        ],
      },
      {
        heading: 'Hybrid works too',
        paragraphs: [
          'Many of our clients keep accounting in an established product and build custom layers for operations, sales and field teams — connecting both through APIs. You get statutory safety and process fit without rebuilding everything.',
        ],
      },
    ],
    faqs: [
      { question: 'Can custom software be built in phases?', answer: 'Yes, and it usually should be. We deploy the highest-value module first, prove ROI, then expand — so budget is released against visible results.' },
      { question: 'What about maintenance costs for custom software?', answer: 'Typical AMC is 15–20% of the development cost per year, covering bug fixes, security updates, backups and a defined number of enhancement hours.' },
    ],
  },
  {
    slug: 'google-ads-vs-seo-budget',
    title: 'Google Ads vs SEO: how to split your marketing budget in 2026',
    seoTitle: 'Google Ads vs SEO Budget Split | Lead Generation Guide | RSIS',
    metaDescription:
      'How much should go to Google Ads versus SEO? A practical budget-split framework for Indian SMBs, with timeline, cost-per-lead and risk comparisons.',
    excerpt:
      'Ads buy speed; SEO buys durability. Most businesses need both — the question is the ratio, and it changes with your stage.',
    category: 'Digital Marketing',
    date: '2026-04-22',
    updated: '2026-09-02',
    author: 'Performance Marketing Team, RSIS',
    readingTime: '5 min read',
    image: '/images/insights/ads-vs-seo.jpg',
    keywords: ['Google Ads vs SEO', 'digital marketing budget India', 'cost per lead Nagpur'],
    sections: [
      {
        heading: 'The fundamental trade-off',
        bullets: [
          'Google Ads: enquiries within days, precise control, but cost per lead rises with competition and stops the moment you stop paying.',
          'SEO: slow for 3–6 months, compounding afterwards, with a cost per lead that typically falls by 40–70% in year two.',
          'Local SEO + Google Business Profile: the cheapest source of qualified local leads for most service businesses.',
        ],
      },
      {
        heading: 'A stage-wise budget framework',
        paragraphs: [
          'New business with no pipeline: put 70% into ads and 30% into SEO foundation work, so cash flows while organic assets build.',
          'Established business with stable enquiries: shift toward 50/50, then 40% ads / 60% SEO as content and links mature.',
          'Market leader defending share: keep ads for brand defence and competitor terms, and direct the majority of budget to content depth, video and retention marketing.',
        ],
      },
      {
        heading: 'Numbers to watch every month',
        bullets: [
          'Cost per qualified lead (not per raw form fill) — disqualify spam and unqualified enquiries before judging performance.',
          'Lead-to-order conversion by source — a channel with a higher CPL can still be cheaper per order.',
          'Share of clicks from ads vs organic on your most commercial keywords.',
          'Organic ranking movement for the 10–15 phrases that actually carry revenue.',
          'Return on ad spend and payback period for every campaign.',
        ],
      },
      {
        heading: 'The mistake that wastes the most money',
        paragraphs: [
          'Sending paid traffic to a slow, vague landing page. Fix conversion rate first: a page that converts at 6% instead of 2% cuts your cost per lead by two thirds without increasing ad spend.',
          'Before scaling any campaign, check page load on 4G, the clarity of the offer, the credibility signals, and whether the form asks for more than it needs to.',
        ],
      },
    ],
    faqs: [
      { question: 'What is a realistic cost per lead in Nagpur?', answer: 'Local service categories commonly see ₹120–₹600 per qualified lead on Google Ads. B2B and industrial categories can be higher; conversion-rate optimisation is what brings it down.' },
      { question: 'Should I run ads if my website is poor?', answer: 'Fix the page first. Ads amplify whatever you send traffic to — including weak messaging and slow pages. A one-week landing page sprint usually pays for itself immediately.' },
    ],
  },
  {
    slug: 'office-cctv-networking-guide-nagpur',
    title: 'CCTV and office networking guide for Nagpur businesses',
    seoTitle: 'CCTV & Office Networking Guide | Nagpur Business IT Setup',
    metaDescription:
      'Plan office networking and CCTV properly — cabling standards, Wi-Fi design, camera placement, storage sizing, bandwidth planning, AMC and compliance basics.',
    excerpt:
      'Most office IT failures trace back to shortcuts taken during cabling and coverage planning. This guide shows what to specify before installation.',
    category: 'IT Infrastructure',
    date: '2026-05-15',
    updated: '2026-08-10',
    author: 'Infrastructure Team, RSIS',
    readingTime: '6 min read',
    image: '/images/insights/cctv-networking.jpg',
    keywords: ['CCTV installation Nagpur', 'office networking Nagpur', 'structured cabling India'],
    sections: [
      {
        heading: 'Plan cabling before buying equipment',
        bullets: [
          'Use Cat6 (or Cat6A for long runs) with tested, labelled runs — never daisy-chain switches across departments.',
          'Separate CCTV, data, Wi-Fi and voice onto VLANs so a camera fault or bandwidth spike cannot stall billing or ERP traffic.',
          'PoE for access points and cameras reduces power-point dependency and simplifies UPS coverage.',
          'Document every port, patch panel and camera with a floor map; this saves hours on every future fault.',
        ],
      },
      {
        heading: 'Wi-Fi that survives a full office',
        bullets: [
          'Do a site survey — wall material, racking, partitions and even water tanks change coverage significantly.',
          'Place access points on ceilings in open areas, stagger channels, and avoid mounting next to metal or electrical panels.',
          'Use controller-based APs for seamless roaming; consumer routers collapse beyond 15–20 devices.',
          'Reserve bandwidth for video calls and CCTV with QoS rules on the firewall.',
        ],
      },
      {
        heading: 'CCTV: coverage, retention and access',
        bullets: [
          'Cover entry/exit, cash counters, stores, server rooms, production areas and delivery gates — not just the parking lot.',
          'Choose resolution by purpose: 2MP is fine for corridors; 4MP/4K for gates, number plates and cash counters.',
          'Size storage for your retention requirement (30, 45 or 90 days) at the chosen resolution and frame rate.',
          'Restrict playback access by role, keep credentials unique, and enable motion alerts for after-hours activity.',
        ],
      },
      {
        heading: 'Maintenance and compliance',
        paragraphs: [
          'Cameras drift out of focus, fans clog, drives fail silently. A quarterly preventive check — cleaning, firmware, storage health, coverage verification — prevents the classic situation where footage is needed and unreadable.',
          'Keep an AMC with defined response times, maintain an asset register with serials and warranty dates, and store CCTV footage in line with your privacy notice. Employees should be informed about surveillance areas, and cameras should not cover private spaces.',
        ],
      },
    ],
    faqs: [
      { question: 'How many days of CCTV recording will my NVR hold?', answer: 'Approximate: a 2MP camera at 15fps uses 12–18GB per day. Eight cameras for 30 days need roughly 4TB, so a 6TB surveillance drive leaves healthy headroom.' },
      { question: 'Do I need a firewall for a small office?', answer: 'Yes. A basic UTM firewall protects against intrusion, filters malicious content and enables secure remote access for staff working from home.' },
    ],
  },
]

export const INSIGHT_CATEGORIES = [
  'All',
  'Web Development',
  'Digital Marketing',
  'Software',
  'IT Infrastructure',
] as const

export const getInsight = (slug: string) => INSIGHTS.find((post) => post.slug === slug)
