import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Client-only configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, '../attached_assets'),
    },
  },
});