import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Khrrousheh/',  // <-- Add this line
  plugins: [react()],
});
