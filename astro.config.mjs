// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Production site — custom domain on Cloudflare (serves at the root)
  site: 'https://gopim.dev',
  output: 'static',
  // Note: the old /guides/ → /blog/ move is handled by Cloudflare edge Redirect
  // Rules (301). We intentionally do NOT declare `redirects` here — the origin
  // serves clean 404s for the old paths and Cloudflare is the single source of truth.
});


