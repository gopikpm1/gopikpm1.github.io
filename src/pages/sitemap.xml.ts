import { mobileServices } from '../data/mobileServices';
import { seoPages } from '../data/seoPages';

const site = 'https://gopim.dev';
const today = new Date().toISOString().split('T')[0];

const urls: string[] = [
  `${site}/`,
  `${site}/mobile-app-development/`,
  ...mobileServices.map((s) => `${site}/mobile-app-development/${s.slug}/`),
  `${site}/guides/`,
  ...seoPages.map((s) => `${site}/guides/${s.slug}/`),
];

export async function GET() {
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];
  for (const loc of urls) {
    lines.push('  <url>', `    <loc>${loc}</loc>`, `    <lastmod>${today}</lastmod>`, '  </url>');
  }
  lines.push('</urlset>');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
