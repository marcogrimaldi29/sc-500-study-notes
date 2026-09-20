// @ts-check
import { defineConfig } from 'astro/config';

// The site is published to GitHub Pages as a project site and surfaced through
// the personal domain, so it lives under the /sc-500-study-notes/ base path.
// `site` + `base` also feed the canonical URLs and src/pages/sitemap.xml.ts.
export default defineConfig({
  site: 'https://marcogrimaldi29.com',
  base: '/sc-500-study-notes',
  trailingSlash: 'always',
  build: {
    // Emit /page/index.html so every note has a clean, extensionless URL.
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
  vite: {
    optimizeDeps: {
      // Mermaid is reached only through a dynamic import() inside a client
      // script (see src/components/Mermaid.astro), so Vite's startup dependency
      // scan never sees it. It would instead be discovered on first request,
      // triggering a re-optimization that invalidates the ?v= hash the loaded
      // page already holds — the import then fails with "504 Outdated Optimize
      // Dep" and diagrams silently fall back to their source text.
      // Pre-bundling it up front keeps that from happening during dev.
      include: ['mermaid'],
    },
  },
});
