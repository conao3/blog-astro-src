import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://a.conao3.com',
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }
});
