import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Serves the prerendered `dist/<route>/index.html` output when a visitor opens
 * an extensionless URL such as `/about` on the local preview server.
 *
 * Production hosts resolve this automatically (directory index) or through the
 * rewrite rules documented in README.md; this keeps `npm run preview` an
 * accurate representation of the deployed site.
 */
function prerenderedRoutes(): Plugin {
  return {
    name: 'prerender-directory-index',
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = (req.url ?? '/').split('?')[0];
        const isExtensionless = !url.endsWith('/') && !/\.[a-z0-9]+$/i.test(url);
        if (isExtensionless && req.method === 'GET') {
          const candidate = resolve(server.config.root, 'dist', url.replace(/^\//, ''), 'index.html');
          if (existsSync(candidate)) {
            req.url = `${url}/index.html${(req.url ?? '').includes('?') ? `?${(req.url ?? '').split('?')[1]}` : ''}`;
          }
        }
        next();
      });
    },
  };
}

/**
 * Vite configuration for the Right Serve Infotech System website.
 *
 * Dev server notes:
 *  - Binds to 0.0.0.0 so the site can be previewed from any host (containers, sandboxes, LAN).
 *  - `/api/*` is proxied to the existing production API so contact/quote/apply forms work in
 *    development without needing CORS changes on the backend.
 */
export default defineConfig(({ mode, isSsrBuild }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiOrigin = (env.VITE_API_ORIGIN || 'https://backend.rightserveinfotechsystem.com').replace(/\/+$/, '');

  // The backend keeps its existing URL contract: the frontend calls ./api/...,
  // and the server (dev, preview or production) strips the prefix.
  const apiProxy = {
    '/api': {
      target: apiOrigin,
      changeOrigin: true,
      secure: true,
      rewrite: (path: string) => path.replace(/^\/api/, ''),
    },
  };

  return {
    plugins: [react(), prerenderedRoutes()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: false,
      // Allow preview hosts / reverse proxies (e.g. *.e2b.app) in development.
      allowedHosts: true,
      proxy: apiProxy,
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
      strictPort: false,
      allowedHosts: true,
      proxy: apiProxy,
    },
    build: {
      target: 'es2019',
      cssCodeSplit: true,
      sourcemap: false,
      chunkSizeWarningLimit: 900,
      // Vendor chunking applies to the browser build only; the SSR bundle keeps
      // React external so the prerenderer runs against the installed packages.
      rollupOptions: isSsrBuild
        ? {}
        : {
            output: {
              manualChunks: {
                react: ['react', 'react-dom'],
                router: ['react-router-dom'],
              },
            },
          },
    },
  };
});
