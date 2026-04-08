import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base path to match the repository name for GitHub Pages
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
