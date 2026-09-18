// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Production site — custom domain on Cloudflare (serves at the root)
  site: 'https://gopim.dev',
  output: 'static',
});
