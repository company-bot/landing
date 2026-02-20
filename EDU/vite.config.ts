import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3001,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        course: path.resolve(__dirname, 'course.html'),
        kidsCoding: path.resolve(__dirname, 'kids-coding.html'),
        logicMath: path.resolve(__dirname, 'logic-math.html'),
        machineLearning: path.resolve(__dirname, 'machine-learning.html'),
        dataScience: path.resolve(__dirname, 'data-science.html'),
        python: path.resolve(__dirname, 'python.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        fyp: path.resolve(__dirname, 'fyp.html'),
        techStarter: path.resolve(__dirname, 'tech-starter.html'),
        webDevelopment: path.resolve(__dirname, 'web-development.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'vendor-three';
          }

          if (id.includes('node_modules/@react-three')) {
            return 'vendor-react-three';
          }

          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }

          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }

          if (id.includes('node_modules/zustand') || id.includes('node_modules/lucide-react')) {
            return 'vendor-ui';
          }
        },
      },
    },
  },
});
