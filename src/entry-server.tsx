import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '@/App'
import { LeadModalProvider } from '@/components/LeadModal'
import { ToastProvider } from '@/components/Toast'

/**
 * Server entry used only at build time by scripts/prerender.mjs
 * to generate a fully rendered HTML file for every route.
 */
export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <ToastProvider>
        <LeadModalProvider>
          <App />
        </LeadModalProvider>
      </ToastProvider>
    </StaticRouter>,
  )
}

/** Re-exported so the prerender script can build heads, sitemaps and redirects. */
export { ROUTES, SITEMAP_ROUTES, REDIRECTS, renderHeadTags, renderJsonLd, normalizePath } from '@/seo/meta'
export { SITE } from '@/data/site'

export default render
