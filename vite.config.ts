import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },

  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    proxy: {
      '/api': { target: 'http://localhost:5000', changeOrigin: true, secure: false },
    },
  },

  // Pre-bundle only what's actually used — GSAP removed (was unused)
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },

  build: {
    target: 'es2018',
    // Warn on chunks > 500 KB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Split vendor code into predictable named chunks for better caching
        manualChunks: {
          'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-ui':     ['lucide-react', 'react-hot-toast'],
          'vendor-form':   ['react-hook-form', '@hookform/resolvers', 'zod'],
        },
      },
    },
  },
})
