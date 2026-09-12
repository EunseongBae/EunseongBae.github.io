import { defineConfig } from 'astro/config';
import rehypeTargetBlank from './src/plugins/rehype-target-blank.js';

export default defineConfig({
  markdown: {
    rehypePlugins: [
      rehypeTargetBlank
    ],
  },
});
