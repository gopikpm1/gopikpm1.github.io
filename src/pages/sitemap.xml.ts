import { mobileServices } from '../data/mobileServices';

const site = 'https://gopim.dev';
const today = new Date().toISOString().split('T')[0];

const urls: { loc: string; changefreq: string; priority: string }[] = [
  { loc: `${site}/`, changefreq: 'weekly', priority: '1.0' },
  { loc: `${site}/mobile-app-development/`, changefreq: 'weekly', priority: '0.9' },
  ...mobileServices.map((s) => ({
    loc: `${site}/mobile-app-development/${s.slug}/`,
    changefreq: 'monthly',
    priority: '0.8',
  })),
];

export async function GET() {
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    ),
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
