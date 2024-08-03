import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import react from "@astrojs/react";
import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: 'https://a.conao3.com',
  integrations: [expressiveCode(), mdx(), sitemap(), react()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-dark',
    }
  }
});
