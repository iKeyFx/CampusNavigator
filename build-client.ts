import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildClientOnly() {
  try {
    console.log('🔨 Building client-only application...');
    
    // Build the client application
    await build({
      configFile: path.resolve(__dirname, 'vite.config.ts'),
      root: path.resolve(__dirname, 'client'),
      build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
      }
    });
    
    // Create a simple server.js in dist to serve the static files
    const serverContent = `
// Simple static file server for the client-only app
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// For SPA routing - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

app.listen(PORT, () => {
  console.log(\`Static file server running on port \${PORT}\`);
});
`;

    fs.writeFileSync(path.resolve(__dirname, 'dist', 'server.js'), serverContent);
    
    // Create a simple package.json in dist
    const packageJson = {
      "name": "futminna-smart-navigation",
      "version": "1.0.0",
      "type": "module",
      "main": "server.js",
      "scripts": {
        "start": "node server.js"
      },
      "dependencies": {
        "express": "^4.18.2"
      }
    };
    
    fs.writeFileSync(
      path.resolve(__dirname, 'dist', 'package.json'), 
      JSON.stringify(packageJson, null, 2)
    );
    
    console.log('✅ Client-only build completed successfully!');
    console.log('📂 Output directory: dist/');
    console.log('🚀 To run: cd dist && npm start');
  } catch (e) {
    console.error('❌ Build failed:', e);
    process.exit(1);
  }
}

buildClientOnly();