import { defineConfig } from 'vite';

export default defineConfig({
  base: '/disaster-system/',
  build: {
    outDir: 'dist',
    // Ensure all assets are included
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});
