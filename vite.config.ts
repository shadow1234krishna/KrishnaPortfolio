import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // or '/KrishnaPortfolio/' if deploying under a sub-path
  plugins: [react()],
});
