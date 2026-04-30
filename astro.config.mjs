import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lp-bia-munaretto.vercel.app',
  integrations: [],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
