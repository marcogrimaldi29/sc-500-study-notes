import type { APIRoute } from 'astro';
import { PAGES, SITE } from '../data/site';
import { absolute } from '../lib/urls';

/**
 * Hand-rolled sitemap so the file lands at exactly /sitemap.xml.
 *
 * The notes are reached from the Study Notes section of marcogrimaldi29.com,
 * whose robots.txt lives in the marcogrimaldi29.github.io repository; this
 * sitemap covers the pages under /sc-500-study-notes/ only.
 */

function priority(slug: string): string {
  if (slug === '') return '1.0';
  const page = PAGES.find((p) => p.slug === slug);
  if (page?.group === 'skills' || slug === 'security-foundations') return '0.9';
  return '0.8';
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = PAGES.map(
    (page) => `  <url>
    <loc>${absolute(SITE.origin, page.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority(page.slug)}</priority>
  </url>`,
  ).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
