import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.biamunareto.com.br',
  integrations: [],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
