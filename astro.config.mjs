// @ts-check
import { defineConfig } from 'astro/config';
import { seoPages } from './src/data/seoPages';

// The old /guides/ section is now the /blog/ section.
// Keep old links working with redirects. For static output Astro emits
// meta-refresh HTML pages for each entry below.
const guideRedirects = Object.fromEntries(
  seoPages.map((s) => [`/guides/${s.slug}/`, `/blog/${s.slug}/`]),
);

// https://astro.build/config
export default defineConfig({
  // Production site — custom domain on Cloudflare (serves at the root)
  site: 'https://gopim.dev',
  output: 'static',
  redirects: {
    '/guides/': '/blog/',
    ...guideRedirects,
  },
});


