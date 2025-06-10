import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/KrishnaPortfolio/',  // <-- add your GitHub repo name here with trailing slash
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
