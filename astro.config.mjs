// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://bgleo.netlify.app/',
  // No base path needed for Netlify root domain
  output: 'static',
  integrations: [react(), mdx()]
});
