import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    ViteMinifyPlugin({}),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  define: {
    'process.env': {},
    'process.platform': JSON.stringify(process.platform)
  },
})
