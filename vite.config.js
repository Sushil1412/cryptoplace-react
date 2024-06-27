// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/cryptoplace-react/',
  build: {
    outDir: 'dist' // Ensure this matches your deployment setup
  }
});
