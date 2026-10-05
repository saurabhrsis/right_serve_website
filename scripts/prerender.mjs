#!/usr/bin/env node
/**
 * Static prerenderer.
 *
 * 1. Loads the SSR bundle produced by `vite build --ssr src/entry-server.tsx`.
 * 2. Renders every route to real HTML and injects its own title, description,
 *    canonical, social tags and JSON-LD (so crawlers see complete markup for
 *    each URL - the single most important SEO requirement for a React site).
 * 3. Writes dist/<path>/index.html, a 404 page, legacy redirect stubs,
 *    sitemap.xml, robots.txt and the web app manifest.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const DIST = path.resolve('dist')

async function main() {
  const ssr = await import(path.resolve('dist-ssr/entry-server.js'))
  const { render, ROUTES, SITEMAP_ROUTES, REDIRECTS, renderHeadTags, renderJsonLd, SITE } = ssr

  const template = await readFile(path.join(DIST, 'index.html'), 'utf8')
  const siteUrl = (process.env.VITE_SITE_URL || SITE.url).replace(/\/$/, '')
  const buildDate = new Date().toISOString()

  /** Replaces the marked SEO block + static JSON-LD with route specific tags. */
  function buildHtml(routePath) {
    const meta = ROUTES.find((route) => route.path === routePath)
    const head = meta ? renderHeadTags(meta, siteUrl) : ''
    const jsonLd = meta ? renderJsonLd(meta) : ''

    let html = template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, `<!--seo:start-->\n    ${head}\n    <!--seo:end-->`)

    // Route specific JSON-LD replaces the static organization block; routes without
    // their own schema keep the static organization markup as a sensible default.
    if (jsonLd) {
      html = html.replace(
        /<!--ld-static:start-->[\s\S]*?<!--ld-static:end-->/,
        `<!--ld-static:start-->\n    ${jsonLd}\n    <!--ld-static:end-->`,
      )
    }

    html = html.replace('<div id="root"></div>', `<div id="root">${render(routePath)}</div>`)
    return html
  }

  async function writePage(routePath, html) {
    if (routePath === '/') {
      await writeFile(path.join(DIST, 'index.html'), html)
      return
    }
    const dir = path.join(DIST, routePath.replace(/^\//, ''))
    await mkdir(dir, { recursive: true })
    await writeFile(path.join(dir, 'index.html'), html)
  }

  let count = 0
  for (const route of ROUTES) {
    const html = buildHtml(route.path)
    await writePage(route.path, html)
    count += 1
  }

  // 404 page (also used by most static hosts automatically)
  await writeFile(path.join(DIST, '404.html'), buildHtml('/404'))

  // Legacy URL redirect stubs
  for (const rule of REDIRECTS) {
    const html = `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting… | ${SITE.name}</title>
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${siteUrl}${rule.to}" />
    <meta http-equiv="refresh" content="0; url=${rule.to}" />
    <script>window.location.replace('${rule.to}')</script>
  </head>
  <body>
    <p>This page has moved. <a href="${rule.to}">Continue to ${rule.to}</a></p>
  </body>
</html>`
    const dir = path.join(DIST, rule.from.replace(/^\//, ''))
    await mkdir(dir, { recursive: true })
    await writeFile(path.join(dir, 'index.html'), html)
  }

  // sitemap.xml
  const urls = SITEMAP_ROUTES.map((route) => {
    const loc = `${siteUrl}${route.path === '/' ? '/' : route.path}`
    const lastmod = route.lastmod ?? buildDate.slice(0, 10)
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq ?? 'monthly'}</changefreq>
    <priority>${(route.priority ?? 0.5).toFixed(1)}</priority>
  </url>`
  }).join('\n')

  await writeFile(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  )

  // robots.txt
  await writeFile(
    path.join(DIST, 'robots.txt'),
    `# robots.txt - ${SITE.name}
User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /*?utm_
Disallow: /*?gclid=

# Common AI/SEO crawlers are welcome
User-agent: Googlebot
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl.replace(/^https?:\/\//, '')}
`,
  )

  // Web app manifest
  await writeFile(
    path.join(DIST, 'manifest.webmanifest'),
    JSON.stringify(
      {
        name: SITE.name,
        short_name: SITE.shortName,
        description: SITE.shortDescription,
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0b2545',
        orientation: 'portrait',
        lang: 'en-IN',
        categories: ['business', 'developer', 'productivity'],
        icons: [
          { src: '/images/icon-192.png', type: 'image/png', sizes: '192x192' },
          { src: '/images/icon-512.png', type: 'image/png', sizes: '512x512', purpose: 'any maskable' },
        ],
      },
      null,
      2,
    ),
  )

  // GitHub Pages friendliness
  await writeFile(path.join(DIST, '.nojekyll'), '')

  console.log(`[prerender] ${count} routes rendered, ${REDIRECTS.length} redirects, sitemap + robots written to dist/`)
}

main().catch((error) => {
  console.error('[prerender] failed:', error)
  process.exit(1)
})
