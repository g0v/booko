import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
  };
});
