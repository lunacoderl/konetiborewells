# Project Changelog - Koneti Borewells & Motors

## [2026-10-15] - Technical SEO & Google Search Console Certification Rollout

### Summary of Changes
- Replaced incorrect development/unregistered domain (`www.konetiborewellsvizag.com`) across all technical SEO surfaces with approved live production domain: `https://www.konetiborewellsmotors.online`.
- Fixed hardcoded canonical overwrite in `src/pages/Home.jsx`.
- Created dynamic `src/components/common/SeoHead.jsx` component ensuring synchronized `<title>`, `<meta name="description">`, `<meta name="robots">`, and `<link rel="canonical">`.
- Updated `src/pages/ServiceDetails.jsx` to render dynamic `SeoHead` per service slug.
- Updated `src/pages/NotFound.jsx` to render `SeoHead` with `noIndex={true}` to prevent soft 404 indexing.
- Updated `src/data/services.js`: replaced all 4 hardcoded canonical URLs with `www.konetiborewellsmotors.online`.
- Updated `src/components/common/Breadcrumbs.jsx`: bound schema item URLs to `siteSeo.baseUrl`.
- Updated `index.html`: updated canonical link, OpenGraph image/url, Twitter image, and LocalBusiness JSON-LD structured data.
- Updated `public/robots.txt`: pointed to `https://www.konetiborewellsmotors.online/sitemap.xml`.
- Updated `public/sitemap.xml`: replaced all 7 URLs with certified HTTPS production URLs.
- Created `src/siteSeo.js` providing centralized metadata configuration.
- Updated `vercel.json` SPA rewrites to exempt static assets.

### Files Created / Modified
- `index.html` (modified - updated canonical, OpenGraph, Twitter, and LocalBusiness schema to live domain)
- `src/siteSeo.js` (created - centralized metadata manifest)
- `src/components/common/SeoHead.jsx` (created - dynamic head manager)
- `src/pages/Home.jsx` (modified - removed hardcoded old domain canonical, integrated SeoHead)
- `src/pages/ServiceDetails.jsx` (modified - integrated dynamic SeoHead)
- `src/pages/NotFound.jsx` (modified - integrated SeoHead with noIndex)
- `src/data/services.js` (modified - updated 4 canonical URLs)
- `src/components/common/Breadcrumbs.jsx` (modified - bound schema items to siteSeo.baseUrl)
- `public/robots.txt` (modified - updated sitemap directive)
- `public/sitemap.xml` (modified - all 7 URLs updated to live domain)
- `vercel.json` (modified - static asset exemption on SPA rewrites)
- `PROJECT_CHANGELOG.md` (created - persistent changelog)
