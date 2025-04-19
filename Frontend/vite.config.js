import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'frontend/build', // Ensures build files go to 'frontend/build'
  },
  base: '/', // Ensure base URL is set to root, so assets load correctly
});
