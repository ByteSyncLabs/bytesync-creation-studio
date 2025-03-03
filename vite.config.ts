import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { ViteDevServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';
import emailRouter from './src/server/emailApi';
import express from 'express';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // We'll use middleware instead of proxy for email functionality
    },
    middlewareMode: 'html',
    configureServer: (server: ViteDevServer) => {
      // Use Express middleware for API routes
      const app = express();
      app.use('/api', emailRouter);
      
      // Apply Express as middleware to Vite server
      server.middlewares.use(app);
      
      console.log('📧 Email API middleware configured');
    }
  },
  plugins: [
    react({
      // Only keeping the TypeScript decorators option
      tsDecorators: true,
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Adding additional TypeScript handling without modifying tsconfig.json
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  }
}));
