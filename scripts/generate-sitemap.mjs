/**
 * Sitemap generator.
 *
 * Builds public/sitemap.xml from the same metadata used for the pages, so every
 * indexable route appears exactly once with an accurate last-modified value.
 *
 * Usage: npm run sitemap   (run automatically as part of `npm run build`)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const routeMeta = JSON.parse(readFileSync(resolve(root, 'src/data/route-meta.json'), 'utf8'));

/** Routes whose data lives in TypeScript modules are listed here explicitly. */
const readSlugs = (file, pattern) => {
  const source = readFileSync(resolve(root, file), 'utf8');
  return [...source.matchAll(pattern)].map((match) => match[1]);
};

const serviceSlugs = readSlugs('src/data/services.ts', /^\s{4}slug: '([a-z0-9-]+)',/gm);
const solutionSlugs = readSlugs('src/data/solutions.ts', /^\s{4}slug: '([a-z0-9-]+)',/gm);
const caseStudySlugs = readSlugs('src/data/caseStudies.ts', /^\s{4}slug: '([a-z0-9-]+)',/gm);
const blogSlugs = readSlugs('src/data/blog.ts', /^\s{4}slug: '([a-z0-9-]+)',/gm);

const lastmod = new Date().toISOString().slice(0, 10);

const staticRoutes = routeMeta.routes
  .filter((route) => !routeMeta.excludedFromSitemap.includes(route.path))
  .map((route) => ({
    loc: `${routeMeta.siteUrl}${route.path === '/' ? '/' : route.path}`,
    changefreq: route.changefreq ?? 'monthly',
    priority: route.priority ?? '0.5',
  }));

const dynamicRoutes = [
  ...serviceSlugs.map((slug) => ({ path: `/services/${slug}`, changefreq: 'monthly', priority: '0.8' })),
  ...solutionSlugs.map((slug) => ({ path: `/solutions/${slug}`, changefreq: 'monthly', priority: '0.8' })),
  ...caseStudySlugs.map((slug) => ({ path: `/case-studies/${slug}`, changefreq: 'yearly', priority: '0.6' })),
  ...blogSlugs.map((slug) => ({ path: `/blog/${slug}`, changefreq: 'monthly', priority: '0.5' })),
].map((entry) => ({
  loc: `${routeMeta.siteUrl}${entry.path}`,
  changefreq: entry.changefreq,
  priority: entry.priority,
}));

const seen = new Set();
const entries = [...staticRoutes, ...dynamicRoutes].filter((entry) => {
  if (seen.has(entry.loc)) return false;
  seen.add(entry.loc);
  return true;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml written with ${entries.length} URLs`);
