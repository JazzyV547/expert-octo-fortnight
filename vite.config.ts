import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: 'iife',          // ← classic script instead of module
        entryFileNames: 'assets/[name].js',
        inlineDynamicImports: true,
      },
    },
  },
})