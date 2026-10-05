/**
 * Static prerenderer.
 *
 * After the client build and the SSR build complete, this script renders every
 * route to HTML and writes dist/<route>/index.html. Each output file contains:
 *   - the complete prerendered markup for the route (no content hidden behind JS)
 *   - route-specific title, description, canonical, Open Graph, Twitter and
 *     JSON-LD tags in the document head
 *
 * Direct URL access therefore works on any static host, with or without a
 * rewrite rule, and crawlers receive complete metadata without executing
 * JavaScript.
 *
 * Usage: node scripts/prerender.mjs   (invoked by `npm run build`)
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const distDir = resolve(root, 'dist');
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js');

if (!existsSync(ssrEntry)) {
  console.error('SSR bundle not found. Run `vite build --ssr src/entry-server.tsx --outDir dist-ssr` first.');
  process.exit(1);
}

const templatePath = resolve(distDir, 'index.html');
if (!existsSync(templatePath)) {
  console.error('dist/index.html not found. Run the client build first.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf8');

const routeMeta = JSON.parse(readFileSync(resolve(root, 'src/data/route-meta.json'), 'utf8'));
const { render, renderHead, warmRoutes } = await import(pathToFileURL(ssrEntry).href);

const readSlugs = (file, pattern) => {
  const source = readFileSync(resolve(root, file), 'utf8');
  return [...source.matchAll(pattern)].map((match) => match[1]);
};

const serviceSlugs = readSlugs('src/data/services.ts', /^\s{4}slug: '([a-z0-9-]+)',/gm);
const solutionSlugs = readSlugs('src/data/solutions.ts', /^\s{4}slug: '([a-z0-9-]+)',/gm);
const caseStudySlugs = readSlugs('src/data/caseStudies.ts', /^\s{4}slug: '([a-z0-9-]+)',/gm);
const blogSlugs = readSlugs('src/data/blog.ts', /^\s{4}slug: '([a-z0-9-]+)',/gm);

const routes = [
  ...routeMeta.routes.map((route) => route.path),
  ...serviceSlugs.map((slug) => `/services/${slug}`),
  ...solutionSlugs.map((slug) => `/solutions/${slug}`),
  ...caseStudySlugs.map((slug) => `/case-studies/${slug}`),
  ...blogSlugs.map((slug) => `/blog/${slug}`),
  '/404',
];

const uniqueRoutes = [...new Set(routes)];

/**
 * Injects the prerendered head and markup into the built template.
 * Falls back to insertion points if the build process strips HTML comments.
 */
const buildDocument = (head, body) => {
  let document = template;

  if (document.includes('<!--app-head-->')) {
    document = document.replace('<!--app-head-->', head);
  } else {
    document = document.replace('</head>', `${head}\n  </head>`);
  }

  const rootVariants = ['<div id="root"><!--app-html--></div>', '<div id="root"></div>'];
  const rootTag = rootVariants.find((variant) => document.includes(variant));

  if (rootTag) {
    document = document.replace(rootTag, `<div id="root">${body}</div>`);
  } else {
    document = document.replace('</body>', `<div id="root">${body}</div>\n  </body>`);
  }

  return document;
};

await warmRoutes();

let written = 0;
for (const route of uniqueRoutes) {
  const html = await render(route);
  const head = renderHead(route);
  const document = buildDocument(head, html);

  const outDir = route === '/' ? distDir : resolve(distDir, route.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), document, 'utf8');
  written += 1;
}

// The client-only shell stays available as a fallback for unmatched paths
// (servers rewrite unknown URLs to /200.html or /index.html).
writeFileSync(resolve(distDir, '200.html'), buildDocument('<!--app-head-->', '<!--app-html-->'), 'utf8');

console.log(`prerendered ${written} routes (plus 200.html fallback)`);
