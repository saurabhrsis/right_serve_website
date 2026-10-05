#!/usr/bin/env node
/**
 * Zero-dependency static server for the prerendered `dist/` output.
 *
 * Why not `vite preview`? Vite's preview server applies an SPA fallback and
 * would serve index.html for every URL, hiding the per-route static HTML that
 * this SEO build depends on. This server resolves directory routes the way a
 * production host (nginx, Netlify, Cloudflare Pages) does:
 *
 *   /services/software        -> dist/services/software/index.html
 *   /assets/app-123.js        -> dist/assets/app-123.js (immutable cache)
 *   anything unknown          -> dist/404.html with HTTP 404
 *
 * Usage: node scripts/serve.mjs [--port=4173] [--out=dist]
 */
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value = 'true'] = arg.replace(/^--/, '').split('=')
    return [key, value]
  }),
)

const PORT = Number(args.port || process.env.PORT || 4173)
const HOST = args.host || '0.0.0.0'
const ROOT = path.resolve(args.out || 'dist')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
}

async function fileInfo(target) {
  try {
    const info = await stat(target)
    return info.isFile() ? info : null
  } catch {
    return null
  }
}

/** Resolve a URL pathname to a file inside ROOT (never escapes ROOT). */
async function resolve(pathname) {
  const clean = decodeURIComponent(pathname.split('?')[0])
  const relative = clean.replace(/^\/+/, '')
  const candidates = []

  if (clean.endsWith('/')) candidates.push(path.join(ROOT, relative, 'index.html'))
  else {
    candidates.push(path.join(ROOT, relative))
    candidates.push(path.join(ROOT, relative, 'index.html'))
  }

  for (const candidate of candidates) {
    if (!candidate.startsWith(ROOT)) continue
    const info = await fileInfo(candidate)
    if (info) return { file: candidate, info }
  }
  return null
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`)
  const found = await resolve(url.pathname)

  if (!found) {
    const notFound = path.join(ROOT, '404.html')
    const info = await fileInfo(notFound)
    if (info) {
      const body = await readFile(notFound)
      response.writeHead(404, { 'Content-Type': MIME['.html'], 'Cache-Control': 'no-cache' })
      response.end(body)
      return
    }
    response.writeHead(404, { 'Content-Type': MIME['.txt'] })
    response.end('404 Not Found')
    return
  }

  const ext = path.extname(found.file).toLowerCase()
  const isHashedAsset = found.file.includes(`${path.sep}assets${path.sep}`)
  const cacheControl = ext === '.html' ? 'no-cache' : isHashedAsset ? 'public, max-age=31536000, immutable' : 'public, max-age=2592000'

  const body = await readFile(found.file)
  response.writeHead(200, {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Content-Length': body.length,
    'Cache-Control': cacheControl,
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  })
  if (request.method === 'HEAD') {
    response.end()
    return
  }
  response.end(body)
})

server.listen(PORT, HOST, () => {
  console.log(`[serve] prerendered site available on http://${HOST}:${PORT} (root: ${ROOT})`)
})
