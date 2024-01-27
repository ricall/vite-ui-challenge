import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react()],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.spec.ts?'],
    exclude: [],
  },
});
