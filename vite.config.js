import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
