import path from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,
      includeAssets: ['naguilian-icon.svg'],
      manifest: {
        name: 'Better Naguilian LU',
        short_name: 'Better Naguilian',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: '#1b4332',
        background_color: '#ffffff',
        lang: 'en',
        icons: [
          {
            src: '/pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: ['any', 'maskable'],
          },
          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: ['any', 'maskable'],
          },
        ],
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest,woff2}'],
        navigateFallback: '/index.html',
        navigateFallbackAllowlist: [/^\/.*$/],
        // let /docs (the charter PDF) load from the network instead of the SPA shell
        navigateFallbackDenylist: [/^\/docs\//, /\.pdf$/],
        // keep the last forecast available offline, but never serve it for long
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.open-meteo\.com\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'weather-forecast',
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 4, maxAgeSeconds: 3 * 60 * 60 },
              cacheableResponse: { statuses: [200] },
            },
          },
          // the charter PDF (3 MB) is too big to precache; keep a copy once someone opens it
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/docs/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'charter-docs',
              expiration: { maxEntries: 4 },
              cacheableResponse: { statuses: [0, 200] },
              rangeRequests: true,
              plugins: [
                {
                  // a ranged miss would come back as a 206, which can't be cached; fetch the
                  // whole PDF instead so later range requests are served from the cache
                  requestWillFetch: async ({ request }) => {
                    if (!request.headers.has('range')) return request
                    const headers = new Headers(request.headers)
                    headers.delete('range')
                    return new Request(request.url, { headers, credentials: request.credentials })
                  },
                },
              ],
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
