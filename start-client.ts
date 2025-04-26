import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startClientOnly() {
  try {
    // Create Vite server with configuration that matches project structure
    const server = await createServer({
      configFile: path.resolve(__dirname, 'vite.config.ts'),
      server: {
        port: 5000,
        host: '0.0.0.0',
      },
      root: path.resolve(__dirname, 'client'),
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'client/src'),
          '@shared': path.resolve(__dirname, 'shared'),
          '@assets': path.resolve(__dirname, 'attached_assets'),
        },
      },
    });
    
    // Start the server
    await server.listen();
    
    console.log('\n🚀 Client-only app running at http://localhost:5000');
    console.log('💻 No server component - pure frontend application\n');
    
    // Output server URLs
    server.printUrls();
  } catch (e) {
    console.error('Failed to start client-only application:', e);
    process.exit(1);
  }
}

startClientOnly();