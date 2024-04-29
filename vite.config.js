import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'), // Path to your Tailwind CSS config file
  ],
});
