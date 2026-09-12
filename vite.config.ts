import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/selvakrishnanportfolio/',
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          'gsap-vendor': ['gsap'],
          'lenis-vendor': ['lenis'],
        },
      },
    },
  },
})
