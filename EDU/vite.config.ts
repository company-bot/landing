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
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        pythonBasic: path.resolve(__dirname, 'python-basic.html'),
        pythonAdvanced: path.resolve(__dirname, 'python-advanced.html'),
        course: path.resolve(__dirname, 'course.html'),
        kidsCoding: path.resolve(__dirname, 'kids-coding.html'),
        logicMath: path.resolve(__dirname, 'logic-math.html'),
        machineLearning: path.resolve(__dirname, 'machine-learning.html'),
        dataScience: path.resolve(__dirname, 'data-science.html'),
        python: path.resolve(__dirname, 'python.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      },
    },
  },
});
