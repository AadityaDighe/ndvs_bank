import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],

  // Development
  
  base: "/",

  // Production

  // base: "/ndvs/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  assetsInclude: ['**/*.PNG'],
})
