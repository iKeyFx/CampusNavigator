import { createServer } from 'vite';

// Create a Vite server for client-only development
async function startViteServer() {
  const server = await createServer({
    // configure Vite
    root: './client',
    server: {
      host: '0.0.0.0',
      port: 5000
    }
  });
  
  await server.listen();
  
  server.printUrls();
}

startViteServer();