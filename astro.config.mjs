// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// This is a *project* GitHub Pages site, so it is served from a sub-path.
// If you later use a custom domain, set `site` to it and drop `base`.
export default defineConfig({
  site: 'https://olehomelchenko.github.io',
  base: '/chart-sins',
  integrations: [mdx()],
});
