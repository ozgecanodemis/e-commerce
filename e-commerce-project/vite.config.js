import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({


  resolve: {
    alias: {
      '@': '/src', // Ensure this matches the path to your 'src' directory
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        secure: false,
      },
    }
  },

});