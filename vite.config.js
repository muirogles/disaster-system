import { defineConfig } from 'vite';

export default defineConfig({
  // Use absolute path for the repository base on GitHub Pages
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
