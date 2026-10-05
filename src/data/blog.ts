/**
 * Blog architecture.
 *
 * Articles are stored as structured data so the list page and the individual
 * article page render from the same source, and so metadata, canonical URLs
 * and Article schema are generated consistently from one record.
 *
 * Content policy: no bulk AI filler. Each article answers a question business
 * buyers actually ask, and links back to the relevant service or solution.
 */

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  sections: ArticleSection[];
  takeaways: string[];
  related: { label: string; path: string }[];
}

export const articleCategories = [
  'Business Software',
  'ERP & Operations',
  'Web & Digital',
  'AI & Automation',
] as const;

export const articles: Article[] = [
  {
    slug: 'how-to-choose-billing-software',
    title: 'How to choose billing software for a distribution or retail business',
    description:
      'A practical checklist for evaluating billing software — what to test before you buy, the questions to ask vendors, and the mistakes that make teams abandon a new system.',
    category: 'Business Software',
    publishedAt: '2026-02-18',
    updatedAt: '2026-02-18',
    readingMinutes: 7,
    heroImage: '/assets/tech/workspace-team.jpg',
    heroAlt: 'Business team reviewing billing software requirements on screen',
    intro: [
      'Most billing software looks similar in a demonstration. The difference shows up on the third day of use, at peak counter hours, when a customer is waiting and the bill format does not match what your accountant expects.',
      'This checklist is drawn from the questions we ask in implementation discussions. Whether you choose our software or someone else\'s, these are the things worth testing before you commit.',
    ],
    sections: [
      {
        id: 'start-from-your-bills',
        heading: 'Start from the bills you already issue',
        paragraphs: [
          'Collect twenty real bills from the last month — the awkward ones, not the ideal ones. Look for partial payments, rate differences between parties, exchange or return items, and the notes your staff add by hand. Then check how the software handles each case.',
          'A system that cannot match your existing bill format will either be worked around or abandoned. If you cannot reproduce your last month\'s bills in the software during a demo, the implementation will be difficult.',
        ],
      },
      {
        id: 'speed-at-the-counter',
        heading: 'Test speed at the counter, not in a quiet room',
        paragraphs: [
          'Billing speed is about keystrokes, search behaviour and how quickly the software responds when it holds thousands of items. Ask to see the item search with your own item count loaded.',
        ],
        bullets: [
          'How many keystrokes does a typical bill take?',
          'Can the operator search by item code, partial name and barcode?',
          'What happens when two counters bill the same item at once?',
          'Does the software stay responsive with your full item and party list?',
        ],
      },
      {
        id: 'stock-and-reconciliation',
        heading: 'Check whether stock will actually match',
        paragraphs: [
          'Stock mismatch is the most common reason a business loses faith in billing software. Ask what happens with purchases arriving after the sale is billed, returns, damaged goods and transfers between godowns.',
          'If your business runs on credit, test the outstanding and ledger views next. Being able to see a party\'s balance before releasing goods is often worth more than any other feature.',
        ],
      },
      {
        id: 'platform-and-connectivity',
        heading: 'Decide desktop, web or mobile before you are sold one',
        paragraphs: [
          'Desktop software keeps billing running when the internet fails, but ties data to one machine. Web software gives access from anywhere, including to the owner on a phone, but depends on connectivity. Mobile is usually best for reports, approvals and field staff rather than the main counter.',
          'Many businesses end up with a combination: desktop or web at the counter, mobile for the owner. Whatever you choose, test the system with a realistic internet interruption to see how it behaves.',
        ],
      },
      {
        id: 'reports-management-asks-for',
        heading: 'List the reports management already asks for',
        paragraphs: [
          'Every business has a handful of reports that get requested repeatedly — daily sales by counter, party-wise outstanding, item movement, stock valuation. Write them down and ask the vendor to show each one from live data.',
          'If a report is missing, ask whether it can be added and what that costs. Reports are usually the cheapest and most valuable extension you will request.',
        ],
      },
      {
        id: 'implementation-and-support',
        heading: 'Ask about implementation, data and support',
        paragraphs: [
          'The software is only part of what you are buying. The rest is configuration, data migration and the person you will call when something goes wrong.',
        ],
        bullets: [
          'Who enters the item and party masters, and is there a charge for it?',
          'Will your historical balances be migrated, and in what form?',
          'What training is included, and for how many staff?',
          'How are support requests raised, and what is a realistic response time?',
          'What happens if you need a new report or bill format six months later?',
        ],
      },
      {
        id: 'red-flags',
        heading: 'Red flags worth taking seriously',
        bullets: [
          'Demonstrations that only use demo data because loading yours "takes time"',
          'No written scope of what is included and what is charged extra',
          'Unwillingness to share a client reference in a similar business',
          'A price with no mention of implementation, training or support',
          'Promises that the software "does everything" without a specific answer',
        ],
      },
    ],
    takeaways: [
      'Test the software with your own bills, item list and reports — not demo data.',
      'Decide the platform (desktop, web, mobile) from how your team works, and test connectivity behaviour.',
      'Treat implementation, data migration and support as part of the product you are buying.',
      'Get the scope in writing, including what is charged extra later.',
    ],
    related: [
      { label: 'FMCG billing software', path: '/solutions/fmcg-billing' },
      { label: 'Jewellery billing software', path: '/solutions/jewellery-billing' },
      { label: 'Business management software', path: '/solutions/business-management' },
    ],
  },
  {
    slug: 'erp-vs-spreadsheets',
    title: 'Running operations on spreadsheets: when is it time for a proper system?',
    description:
      'Spreadsheets are excellent tools that quietly become business risks. Here are the signals that your operation has outgrown them, and how to move without disruption.',
    category: 'ERP & Operations',
    publishedAt: '2026-03-06',
    updatedAt: '2026-03-06',
    readingMinutes: 6,
    heroImage: '/assets/tech/team-meeting.jpg',
    heroAlt: 'Team reviewing operational data and planning an ERP rollout',
    intro: [
      'Spreadsheets are not the problem. Most growing businesses run perfectly well on them, and replacing them too early adds cost without benefit.',
      'The problem is that a spreadsheet has no memory of who changed what, no protection against two people editing the same version, and no way to enforce a process. The signals below tell you when those limits start costing more than a system would.',
    ],
    sections: [
      {
        id: 'signals',
        heading: 'Signals you have outgrown the spreadsheet',
        bullets: [
          'Two people regularly prepare the same report and get different numbers.',
          'Month-end closing takes days of manual reconciliation.',
          'You keep multiple versions of the same file — "final", "final-2", "final-corrected".',
          'Approvals happen on WhatsApp and nobody can trace who approved what.',
          'Stock or balance figures cannot be trusted without a physical check.',
          'The person who built the master file is a single point of failure.',
          'Customers or vendors wait while someone finds information in a file.',
        ],
      },
      {
        id: 'cost-of-waiting',
        heading: 'What waiting actually costs',
        paragraphs: [
          'The cost of manual operation rarely appears as a line item. It shows up as delayed decisions, rework, disputes with customers or vendors, and the hours senior staff spend assembling data instead of acting on it.',
          'If reconciling a month takes two people three days, that is a measurable number. Compare it against the cost of implementing a system before concluding that software is expensive.',
        ],
      },
      {
        id: 'start-small',
        heading: 'Start with one workflow, not the whole business',
        paragraphs: [
          'The most common ERP failure is trying to replace everything at once. A better approach: choose the one workflow causing the most pain, digitise only that, and let the team adjust before expanding.',
          'Good candidates for the first module are the ones where information is currently captured twice, or where a delay causes downstream problems — purchase entry, dispatch confirmation, or billing.',
        ],
        bullets: [
          'Pick a module with a clear owner and visible daily pain.',
          'Migrate master data once, properly, before going live.',
          'Run in parallel for one cycle rather than switching overnight.',
          'Expand only after the first module is stable and used.',
        ],
      },
      {
        id: 'data-before-software',
        heading: 'Clean data matters more than features',
        paragraphs: [
          'Item names with five different spellings, duplicate customer records and inconsistent units will make any system produce unreliable reports. Before implementation, decide on naming conventions and merge duplicates — this is the least glamorous and most valuable preparation work.',
        ],
      },
      {
        id: 'buy-or-build',
        heading: 'Buy a product, extend a product, or build custom?',
        paragraphs: [
          'A ready product gets you running quickly but expects you to adapt. Custom software follows your process but requires design and development time. Most growing businesses do well in the middle: adopt a configurable system for standard functions such as billing, purchase and stock, and build custom modules only for the parts that are genuinely specific to them.',
          'If more than half of your workflow is industry-specific — as with jewellery billing or project-based construction billing — start from an industry product rather than a generic one.',
        ],
      },
    ],
    takeaways: [
      'Spreadsheets become a risk when multiple people depend on the same data and process control matters.',
      'Digitise one high-pain workflow first and expand after it is stable.',
      'Master data quality determines whether reports will be trusted.',
      'A hybrid of configurable product plus custom modules is often the most practical route.',
    ],
    related: [
      { label: 'ERP development', path: '/services/erp-development' },
      { label: 'Business management software', path: '/solutions/business-management' },
      { label: 'Custom software development', path: '/services/software-development' },
    ],
  },
  {
    slug: 'desktop-web-mobile-software-deployment',
    title: 'Desktop, web or mobile: where should your business software run?',
    description:
      'Each platform changes how your team works and what happens when the internet fails. A practical comparison for business owners deciding on deployment.',
    category: 'Business Software',
    publishedAt: '2026-04-10',
    updatedAt: '2026-04-10',
    readingMinutes: 5,
    heroImage: '/assets/tech/cloud-infrastructure.jpg',
    heroAlt: 'Cloud and on-premise infrastructure supporting business software deployment',
    intro: [
      'When a software vendor says the product is available on "desktop, web and mobile", it does not mean all three behave the same way. Each changes how fast your team works, what happens during an internet outage, and how much control you have over your data.',
      'This comparison covers the trade-offs we discuss with clients before implementation.',
    ],
    sections: [
      {
        id: 'desktop',
        heading: 'Desktop software',
        paragraphs: [
          'Desktop installations run on the machine they are installed on. Billing continues during an internet outage, printing and peripheral integration are dependable, and an experienced operator can work extremely fast with keyboard-driven screens.',
        ],
        bullets: [
          'Best for: high-volume billing counters, single-location operations, unreliable connectivity',
          'Consider carefully: data lives on machines or a local server, so backups and access from outside the office need planning',
        ],
      },
      {
        id: 'web',
        heading: 'Web software',
        paragraphs: [
          'Web applications run in a browser, so the same data is available to every authorised user regardless of location. Owners can check figures from home, and updates are deployed centrally rather than machine by machine.',
        ],
        bullets: [
          'Best for: multi-location businesses, owners who need remote visibility, teams that change devices often',
          'Consider carefully: an internet outage interrupts work unless the application is designed for offline use',
        ],
      },
      {
        id: 'mobile',
        heading: 'Mobile applications',
        paragraphs: [
          'Mobile is rarely the right place for high-volume billing, but it is excellent for work that happens away from a desk: field visits, deliveries, attendance, approvals and quick reporting.',
        ],
        bullets: [
          'Best for: field sales, service teams, site staff, owners needing figures on the move',
          'Consider carefully: small screens suit short interactions, not long data entry sessions',
        ],
      },
      {
        id: 'hybrid',
        heading: 'The combination most businesses settle on',
        paragraphs: [
          'In practice, most of our clients run a combination: a desktop or web system at the counter or office, mobile access for management and field staff, and a shared backend so everyone is looking at the same data.',
          'The important decision is not which platform is best in general, but which workflow runs on which platform. Write down the workflows and assign a platform to each before deciding.',
        ],
      },
      {
        id: 'questions',
        heading: 'Questions to settle with your vendor',
        bullets: [
          'What exactly happens to billing if the internet goes down?',
          'Where is the data stored, who can access it, and how are backups taken?',
          'Can mobile users see all data, or is the mobile view limited?',
          'How are software updates delivered, and do they interrupt work?',
          'What does running the system cost per year after the first year?',
        ],
      },
    ],
    takeaways: [
      'Decide per workflow, not per company — different teams need different platforms.',
      'Test failure behaviour (network outage, power cut, machine failure) before going live.',
      'Multi-location businesses benefit most from web deployment with mobile visibility.',
      'Settle backup, data ownership and annual costs before signing.',
    ],
    related: [
      { label: 'FMCG billing software', path: '/solutions/fmcg-billing' },
      { label: 'Mobile app development', path: '/services/mobile-app-development' },
      { label: 'Hardware & IT infrastructure', path: '/services/hardware-it-infrastructure' },
    ],
  },
  {
    slug: 'what-affects-business-website-cost',
    title: 'What actually determines the cost of a business website',
    description:
      'Two websites can differ tenfold in cost. Here is what genuinely drives the number — content, integrations, custom design and the work that happens after launch.',
    category: 'Web & Digital',
    publishedAt: '2026-05-22',
    updatedAt: '2026-05-22',
    readingMinutes: 6,
    heroImage: '/assets/tech/dev-workspace.jpg',
    heroAlt: 'Website development workspace with design and code on screen',
    intro: [
      'Website quotations vary wildly because vendors are quoting different things under the same word. Understanding the components makes it easier to compare proposals fairly — and to avoid paying for work your business does not need.',
    ],
    sections: [
      {
        id: 'page-count-and-content',
        heading: 'Page count is less important than content readiness',
        paragraphs: [
          'Twenty pages of existing text are cheaper to build than six pages that need research, writing and approval cycles. Content work is usually the largest hidden variable, and it is also the part that most affects whether the site brings enquiries.',
          'If your business has clear service information, photographs and a defined audience, the project moves faster. If the content must be developed, budget for that time explicitly rather than treating it as an afterthought.',
        ],
      },
      {
        id: 'design',
        heading: 'Template or custom design',
        paragraphs: [
          'A template-based build is faster and cheaper but looks like other sites using the same template. Custom design costs more up front and gives you an interface built around how your buyers evaluate your business.',
        ],
      },
      {
        id: 'functionality',
        heading: 'Functionality and integrations',
        bullets: [
          'Contact and enquiry forms with email or CRM delivery',
          'Content management so your team can publish without a developer',
          'Product catalogues, filters and search',
          'Payment gateway or quotation flows',
          'Connections to internal software, ERP or accounting systems',
          'Multi-language or location-specific pages',
          'Customer or dealer login areas',
        ],
        paragraphs: [
          'Each item adds development and testing time. Dealer portals, customer logins and ERP-connected pages are application work rather than website work, and should be estimated as such.',
        ],
      },
      {
        id: 'seo-and-performance',
        heading: 'SEO and performance are not optional extras',
        paragraphs: [
          'A website that loads slowly or cannot be indexed properly will not reach the buyers it was built for. Technical foundations — clean structure, metadata, canonical URLs, structured data, compressed images, mobile testing — should be part of the build, not a later project.',
          'If a proposal does not mention how the site will be made findable and fast, ask about it.',
        ],
      },
      {
        id: 'after-launch',
        heading: 'What happens after launch',
        paragraphs: [
          'Hosting, SSL, backups, security updates, content changes and improvement cycles continue after the site goes live. Ask whether these are included, priced separately or assumed to be your responsibility.',
          'A website treated as a one-time project tends to decay. The businesses that get consistent enquiries usually treat it as a system that gets reviewed and improved.',
        ],
      },
    ],
    takeaways: [
      'Content readiness affects cost and timeline more than page count.',
      'Separate website work from application work (portals, logins, ERP integrations) when comparing quotes.',
      'Insist that SEO fundamentals and performance are included in the build.',
      'Plan and budget for hosting, maintenance and content updates after launch.',
    ],
    related: [
      { label: 'Website development', path: '/services/website-development' },
      { label: 'SEO & digital marketing', path: '/services/seo-digital-marketing' },
      { label: 'Request a quote', path: '/request-quote' },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);

/** Newest first. */
export const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);
