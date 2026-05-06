import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com.br',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
