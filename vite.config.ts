import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration - Right Serve Infotech System website
 *
 * Notes:
 *  - `server.host` is 0.0.0.0 so the dev server works in containers / live previews.
 *  - `/api/*` is proxied to the existing production backend, which keeps the browser
 *    request same-origin in development (no CORS issues).
 *  - For production you can either keep a same-origin `/api` reverse proxy (recommended,
 *    best for Core Web Vitals - no extra DNS/TLS handshake) or set VITE_API_BASE_URL
 *    to the absolute backend URL.
 */
export default defineConfig(({ mode, isSsrBuild }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const backend = env.VITE_BACKEND_URL || 'https://backend.rightserveinfotechsystem.com'

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      dedupe: ['react', 'react-dom'],
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: false,
      allowedHosts: true,
      proxy: {
        '/api': {
          target: backend,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
      allowedHosts: true,
    },
    build: {
      target: 'es2019',
      outDir: 'dist',
      assetsDir: 'assets',
      cssCodeSplit: true,
      sourcemap: false,
      chunkSizeWarningLimit: 900,
      rollupOptions: {
        output: {
          // Only applied to the client bundle (SSR keeps React external).
          manualChunks: isSsrBuild
            ? undefined
            : {
                react: ['react', 'react-dom', 'react-router-dom'],
                icons: ['lucide-react'],
              },
        },
      },
    },
    define: {
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
  }
})
