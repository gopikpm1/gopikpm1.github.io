import { blogs } from '../../data/blogs';

// A machine-readable JSON feed of every blog (guide) on the site.
// Available at /blog/blogs.json — useful for search, syndication and reuse.
export async function GET() {
  return new Response(
    JSON.stringify(
      {
        count: blogs.length,
        site: 'https://gopim.dev',
        blogs,
      },
      null,
      2,
    ),
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    },
  );
}
