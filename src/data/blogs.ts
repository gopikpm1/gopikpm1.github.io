import { seoPages, moreMenuGroups } from './seoPages';

export interface BlogEntry {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  keywords: string;
  icon: string;
  url: string;
}

// Map each guide slug to the heading of the group it belongs to (its "category").
const categoryBySlug = new Map<string, string>();
for (const group of moreMenuGroups) {
  for (const slug of group.links) {
    categoryBySlug.set(slug, group.heading);
  }
}

// Take the content that already lives on the site (the guides / SEO pages)
// and expose it as a flat, searchable list of blog entries.
export const blogs: BlogEntry[] = seoPages.map((s) => ({
  slug: s.slug,
  title: s.label,
  tagline: s.tagline,
  category: categoryBySlug.get(s.slug) ?? 'Guides',
  description: s.metaDescription,
  keywords: s.keywords,
  icon: s.icon,
  url: `/blog/${s.slug}/`,
}));

export const blogCategories: string[] = Array.from(
  new Set(blogs.map((b) => b.category)),
);
