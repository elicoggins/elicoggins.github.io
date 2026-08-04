import { resolve } from 'node:path';
import { defineConfig } from 'vite';

import { template } from './src/template.js';

// The home page markup lives in JS so it can stay a single source of truth,
// but shipping an empty <div id="app"> means anything that does not execute
// JavaScript — most crawlers, link unfurlers, feed readers — sees a blank
// page. Inline the markup at build time so the served HTML is complete on
// arrival. main.js skips its own injection when the container is already
// filled, so dev and prod render identically.
function prerenderApp() {
  return {
    name: 'prerender-app',
    apply: 'build',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        if (ctx.path !== '/index.html') return html;
        return html.replace(
          '<div id="app"></div>',
          `<div id="app">${template}</div>`
        );
      },
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [prerenderApp()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        keyboardwarrior: resolve(import.meta.dirname, 'keyboardwarrior/index.html'),
      },
    },
  },
});
