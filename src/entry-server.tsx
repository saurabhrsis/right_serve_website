import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { pageLoaders } from './routes';
import { resolvePageMeta } from './seo/pageMeta';
import { buildHeadTags, headTagsToHtml } from './seo/headTags';
import routeMeta from './data/route-meta.json';

/**
 * Server entry used only by `scripts/prerender.mjs`.
 *
 * It renders the real application tree for a given URL so crawlers and social
 * previews receive complete HTML, and returns the metadata for the document
 * head from the same single source used in the browser.
 */

/** Pre-loads every route chunk so lazy pages resolve during prerendering. */
export async function warmRoutes() {
  await Promise.all(Object.values(pageLoaders).map((load) => load()));
}

/** Renders the application for a URL, retrying until lazy chunks have resolved. */
export async function render(url: string): Promise<string> {
  let html = '';

  for (let attempt = 0; attempt < 6; attempt += 1) {
    const next = renderToString(
      <StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StrictMode>,
    );

    if (next === html) break;
    html = next;

    // Allow pending lazy-route promises to settle before rendering again.
    await new Promise((resolve) => setTimeout(resolve, 5));
  }

  return html;
}

/** Returns the serialised head tags for a URL. */
export function renderHead(url: string): string {
  const meta = resolvePageMeta(url);
  return headTagsToHtml(
    buildHeadTags({
      ...meta,
      siteUrl: routeMeta.siteUrl,
      siteName: 'Right Serve Infotech System Pvt. Ltd.',
    }),
  );
}

export { resolvePageMeta };
