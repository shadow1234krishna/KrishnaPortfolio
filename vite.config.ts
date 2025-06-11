import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ Important: root base for custom domain
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
