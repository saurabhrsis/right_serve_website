/**
 * Head tag descriptors.
 *
 * The same descriptors are used in two places:
 *   1. In the browser, `src/seo/Seo.tsx` applies them to document.head.
 *   2. At build time, `scripts/prerender.mjs` serialises them into the static
 *      HTML for every route so crawlers receive complete metadata without
 *      executing JavaScript.
 *
 * Keeping one source of truth guarantees the prerendered HTML and the live
 * page never disagree.
 */

export type HeadTag =
  | { tag: 'title'; text: string }
  | { tag: 'meta'; attrs: Record<string, string> }
  | { tag: 'link'; attrs: Record<string, string> }
  | { tag: 'script'; attrs: Record<string, string>; text: string };

export interface SeoInput {
  /** Page title without the site suffix. */
  title?: string;
  description?: string;
  keywords?: string[] | string;
  /** Path beginning with "/" — used to build the canonical URL. */
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  robots?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  /** JSON-LD blocks for this page. */
  schema?: unknown[];
  siteUrl: string;
  siteName: string;
  twitterHandle?: string;
  locale?: string;
}

const absolute = (siteUrl: string, pathOrUrl: string) =>
  /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : `${siteUrl.replace(/\/$/, '')}${pathOrUrl}`;

const normaliseKeywords = (keywords?: string[] | string): string | undefined => {
  if (!keywords) return undefined;
  const list = Array.isArray(keywords) ? keywords : keywords.split(',');
  const cleaned = list.map((keyword) => keyword.trim()).filter(Boolean);
  return cleaned.length ? Array.from(new Set(cleaned)).join(', ') : undefined;
};

export function buildHeadTags(input: SeoInput): HeadTag[] {
  const {
    title,
    description,
    keywords,
    path,
    image = '/assets/brand/og-cover.jpg',
    type = 'website',
    robots = 'index, follow, max-image-preview:large',
    publishedTime,
    modifiedTime,
    author,
    schema = [],
    siteUrl,
    siteName,
    twitterHandle,
    locale = 'en_IN',
  } = input;

  const canonical = absolute(siteUrl, path);
  const ogImage = absolute(siteUrl, image);
  const meta: HeadTag[] = [];

  if (title) {
    meta.push({ tag: 'title', text: title });
    meta.push({ tag: 'meta', attrs: { property: 'og:title', content: title } });
    meta.push({ tag: 'meta', attrs: { name: 'twitter:title', content: title } });
  }

  if (description) {
    meta.push({ tag: 'meta', attrs: { name: 'description', content: description } });
    meta.push({ tag: 'meta', attrs: { property: 'og:description', content: description } });
    meta.push({ tag: 'meta', attrs: { name: 'twitter:description', content: description } });
  }

  const keywordValue = normaliseKeywords(keywords);
  if (keywordValue) {
    meta.push({ tag: 'meta', attrs: { name: 'keywords', content: keywordValue } });
  }

  meta.push({ tag: 'meta', attrs: { name: 'robots', content: robots } });
  meta.push({ tag: 'link', attrs: { rel: 'canonical', href: canonical } });

  meta.push({ tag: 'meta', attrs: { property: 'og:type', content: type === 'product' ? 'website' : type } });
  meta.push({ tag: 'meta', attrs: { property: 'og:site_name', content: siteName } });
  meta.push({ tag: 'meta', attrs: { property: 'og:url', content: canonical } });
  meta.push({ tag: 'meta', attrs: { property: 'og:image', content: ogImage } });
  meta.push({ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } });
  meta.push({ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } });
  meta.push({ tag: 'meta', attrs: { property: 'og:locale', content: locale } });

  meta.push({ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } });
  meta.push({ tag: 'meta', attrs: { name: 'twitter:image', content: ogImage } });
  if (twitterHandle) {
    meta.push({ tag: 'meta', attrs: { name: 'twitter:site', content: twitterHandle } });
  }

  if (type === 'article') {
    if (publishedTime) {
      meta.push({ tag: 'meta', attrs: { property: 'article:published_time', content: publishedTime } });
    }
    if (modifiedTime) {
      meta.push({ tag: 'meta', attrs: { property: 'article:modified_time', content: modifiedTime } });
    }
    if (author) {
      meta.push({ tag: 'meta', attrs: { name: 'author', content: author } });
      meta.push({ tag: 'meta', attrs: { property: 'article:author', content: author } });
    }
  }

  for (const block of schema) {
    meta.push({
      tag: 'script',
      attrs: { type: 'application/ld+json', 'data-jsonld': 'route' },
      text: JSON.stringify(block),
    });
  }

  return meta;
}

/** Serialise descriptors into an HTML string for the prerendered documents. */
export function headTagsToHtml(tags: HeadTag[]): string {
  const escapeAttr = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const escapeText = (value: string) => value.replace(/</g, '\\u003c');

  return tags
    .map((entry) => {
      if (entry.tag === 'title') return `<title>${entry.text}</title>`;
      if (entry.tag === 'meta') {
        const attrs = Object.entries(entry.attrs)
          .map(([key, value]) => `${key}="${escapeAttr(value)}"`)
          .join(' ');
        return `<meta ${attrs} />`;
      }
      if (entry.tag === 'link') {
        const attrs = Object.entries(entry.attrs)
          .map(([key, value]) => `${key}="${escapeAttr(value)}"`)
          .join(' ');
        return `<link ${attrs} />`;
      }
      const attrs = Object.entries(entry.attrs)
        .map(([key, value]) => `${key}="${escapeAttr(value)}"`)
        .join(' ');
      return `<script ${attrs}>${escapeText(entry.text)}</script>`;
    })
    .join('\n    ');
}
