import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression';
const assetUrl = ['fonts/*.ttf', 'images/*.svg']
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    VitePWA({
      injectRegister: 'auto',
      strategies: 'generateSW',
      includeAssets: ['images/*.png'],
      srcDir: 'src',
      filename: 'sw.ts',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: true,
        globDirectory: '.',
        swDest: path.resolve('dist', 'sw.js'),
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
            }
          },
          // {
          //   urlPattern: RegExp('^http:\/\/127\.0\.0\.1:5173\/.**\.{html}'),
          //   //https://firebasestorage\.googleapis\.com/.*media&token
          //   handler: 'CacheFirst',
          //   options: {
          //     cacheName: 'cross-origin',
          //     expiration: {
          //       maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
          //     },
          //     cacheableResponse: {
          //       statuses: [0, 200]
          //     }
          //   }
          // },
          {
            urlPattern: RegExp('^https:\/\/st\.kp\.yandex\.net\/.*'),
            //https:\/\/st\.kp\.yandex\.net\/.*
            //https://firebasestorage\.googleapis\.com/.*media&token
            handler: 'CacheFirst',
            options: {
              cacheName: 'cross-origin',
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
        ]
      },
      devOptions: {
        type: 'module',
        enabled: true
      }
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})

//https:\/\/avatars\.mds\.yandex\.net\/get-kinopoisk-image/