// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://surangamadhushan24.github.io/',
  base: '/leo-new/',
  output: 'static',
  integrations: [react(), mdx()]
});
