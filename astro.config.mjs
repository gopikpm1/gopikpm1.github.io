// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production site — custom domain on Cloudflare (serves at the root)
  site: 'https://gopim.dev',
  output: 'static',
  integrations: [sitemap()],
});
