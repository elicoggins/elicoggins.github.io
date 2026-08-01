import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        keyboardwarrior: resolve(import.meta.dirname, 'keyboardwarrior/index.html'),
      },
    },
  },
});
