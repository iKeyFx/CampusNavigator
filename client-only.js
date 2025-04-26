// Simple client-only starter script
import { createServer } from 'vite';

async function startClientOnly() {
  console.log('Starting client-only application...');
  
  const server = await createServer({
    configFile: false,
    root: './client',
    server: {
      port: 5000,
      host: '0.0.0.0'
    },
    resolve: {
      alias: {
        '@': '/src',
        '@assets': '/attached_assets',
      },
    },
    plugins: []
  });
  
  await server.listen();
  
  console.log('✅ Client-only app running at http://localhost:5000');
  console.log('📱 No server component - fully static application');
}

startClientOnly().catch(err => {
  console.error('❌ Error starting client app:', err);
  process.exit(1);
});