/**
 * Base-path helpers.
 *
 * The site is served from /sc-500-study-notes/, so every internal link and
 * asset reference has to carry that prefix. Astro exposes it as BASE_URL;
 * these two helpers normalise it so callers never have to think about
 * leading or trailing slashes.
 */

const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;

/** Link to a page. Always ends in a slash to match trailingSlash: 'always'. */
export function href(slug = ''): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE}${clean}/` : BASE;
}

/** Link to a file in public/. Never gets a trailing slash. */
export function asset(path: string): string {
  return `${BASE}${path.replace(/^\/+/, '')}`;
}

/** Absolute URL, for canonical tags, Open Graph and the sitemap. */
export function absolute(origin: string, slug = ''): string {
  return `${origin.replace(/\/+$/, '')}${href(slug)}`;
}
