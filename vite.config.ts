import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from 'vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'orders',
      filename: 'remoteEntry.js',

      exposes: {
        './Orders': './src/Orders.tsx',
      },

      shared: [],

      dts: false,
    }),
  ],

  build: {
    target: 'esnext',
  },

  server: {
    port: 3002,
  },
});