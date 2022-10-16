import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression';
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    VitePWA({
      injectRegister: 'auto',
      strategies: 'injectManifest',
      registerType: 'autoUpdate',
      srcDir: 'src',
      filename: 'sw.ts',
      injectManifest: {
        globDirectory: 'dist/',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2,woff,ttf,jpg,jpeg}'],
        swDest: 'dist/sw.js',
        maximumFileSizeToCacheInBytes: 30000000
      },
      workbox: {
        importScripts: ["sw.js"]
      },
      devOptions: {
        navigateFallbackAllowlist: [/^index.html$/],
        type: 'module',
        enabled: true
      },
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})

//https:\/\/avatars\.mds\.yandex\.net\/get-kinopoisk-image/
// {
// 	"name": "movieSearch",
// 	"short_name": "VM PWA",
// 	"theme_color": "#141414",
// 	"background_color": "#141414",
// 	"display": "standalone",
// 	"orientation": "portrait",
// 	"scope": "/",
// 	"start_url": "/?source=pwa",
// 	"icons": [
// 		{
// 			"src": "icons/512.png",
// 			"sizes": "512x512",
// 			"type": "image/png"
// 		},
// 		{
// 			"src": "icons/256.png",
// 			"sizes": "256x256",
// 			"type": "image/png"
// 		},
// 		{
// 			"src": "icons/and-192.png",
// 			"sizes": "192x192",
// 			"type": "image/png"
// 		},
// 		{
// 			"src": "icons/120.png",
// 			"sizes": "120x120",
// 			"type": "image/png"
// 		},
// 		{
// 			"src": "icons/and-96.png",
// 			"sizes": "96x96",
// 			"type": "image/png"
// 		},
// 		{
// 			"src": "icons/72.png",
// 			"sizes": "72x72",
// 			"type": "image/png"
// 		}
// 	]
//   }
