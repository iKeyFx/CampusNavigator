import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import RuntimeErrorModal from '@replit/vite-plugin-runtime-error-modal';
import cartographer from '@replit/vite-plugin-cartographer';

// This is a simplified Vite config for client-side only operation
export default defineConfig({
  root: 'client',
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  plugins: [
    react(),
    RuntimeErrorModal(),
    cartographer(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './attached_assets'),
    },
  },
});