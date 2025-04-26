// Simple script to run Vite without Express server for a fully client-side app
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startViteClientOnly() {
  // Load config from the client-only Vite config file
  const clientOnlyConfig = resolve(__dirname, 'vite.config.client.ts');
  
  // Default config in case the file doesn't exist
  const defaultConfig = {
    root: './client',
    server: {
      port: 5000,
      host: '0.0.0.0',
    },
    plugins: []
  };
  
  // Create and start the Vite server
  const server = await createServer(defaultConfig);
  
  await server.listen();
  console.log('\n🚀 Client-only app is running at port 5000');
  console.log('💻 No server component - fully static application\n');
}

startViteClientOnly().catch(err => {
  console.error('Error starting Vite server:', err);
  process.exit(1);
});