import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  define: {
    'process.env': {},
    'process.platform': JSON.stringify(process.platform)
  },
})