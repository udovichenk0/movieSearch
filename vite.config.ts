import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression';
const assetUrl = ['fonts/*.ttf', 'images/*.svg']
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})