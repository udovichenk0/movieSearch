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
