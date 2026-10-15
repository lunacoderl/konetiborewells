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
- `public/sitemap.xml` (modified - all 7 URLs updated to live domain, added Google image metadata)
- `vercel.json` (modified - fixed rewrite rule to standard valid schema to unblock Vercel deployments)
- `PROJECT_CHANGELOG.md` (updated - persistent changelog)

## [2026-10-15 Update] - GSC "URL Not Allowed" & Vercel Deployment Fix
- Fixed Vercel deployment block: removed complex negative lookahead regex from `vercel.json` and applied standard valid Vercel SPA rewrite schema so Vercel can deploy the updated site and purge edge cache.
- Resolved Google Search Console "URL not allowed (7 instances)" error by ensuring all sitemap entries strictly match the verified GSC domain `https://www.konetiborewellsmotors.online/`.
- Enriched all 7 URLs in `public/sitemap.xml` with `<image:image>` metadata for brand banner, logo, and all 4 specialized borewell/pump service photographs for Google Image Search discovery.

