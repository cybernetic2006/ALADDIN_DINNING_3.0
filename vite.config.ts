import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Optional environment variables
const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  base: basePath,

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
    dedupe: ['react', 'react-dom'],
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },

  server: {
    host: '0.0.0.0',
    port,
    strictPort: true,
  },

  preview: {
    host: '0.0.0.0',
    port,
  },
});
