import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths for assets for maximum flexibility
  base: './',
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
