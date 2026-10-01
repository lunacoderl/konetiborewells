# Koneti Borewells & Motors

A modern, high-performance web application for **Koneti Borewells & Motors**, premier borewell drilling and water pump motor contractors located in Lalitha Colony, Seethammadara, Visakhapatnam.

> **Design Theme**: *"Where the Earth Meets Water"* — blending fluid water visuals, warm geological strata, and technical precision engineering with uncropped field photography.

---

## 🌟 Key Features

### 1. 20-Section Continuous Storytelling Homepage
- **Dynamic Navbar**: Transparent-to-blur on scroll, Koneti logo, `● Available 24/7` live indicator, desktop navigation, and full-height mobile drawer.
- **Hero Section (90–100vh)**: Single semantic `<h1>`, visual brand statement *"Reliable Water Starts Beneath the Surface"*, dual CTAs, verified trust row (4.8★ / 37+ reviews), and uncropped drilling rig visual with floating badges.
- **Micro Trust Strip**: Continuous horizontal marquee ticker transition.
- **About Section**: Asymmetric 70/30 image collage with grounded narrative on Vizag's coastal sand-to-granite geology.
- **Geological Strata Cross-Section (Signature Visual)**: Interactive SVG cross-section showing ground strata from surface to deep water aquifer with 5 illuminated stages (`01 SITE → 02 DRILL → 03 CASING → 04 PUMP → 05 WATER`).
- **Services Section**: Featured large card for `01 4½" & 6½" Borewell Drilling` plus companion cards linking to individual service URLs.
- **5-Step Service Process**: Structured execution timeline from Requirement to Handover.
- **Full-Width CTA Break**: Vibrant deep aqua/blue panel with water contour ripples.
- **Field Work Masonry Gallery**: Uncropped real field photos with frontend category filters and fullscreen keyboard-accessible Lightbox.
- **Who We Serve**: 4 application sectors (`HOME`, `FARM`, `BUSINESS`, `PROJECT`).
- **Customer Testimonials & Dedicated Google Reviews**: Separated sections showcasing verified 4.8★ rating from 37 Google reviews.
- **Service Areas**: Stylized Vizag coastal map SVG with radiating connection lines from Seethammadara to 8+ localities.
- **FAQ Accordion**: 7 high-intent local borewell questions with accessible accordions.
- **Contact Action Section & Interactive WhatsApp Quote Builder**: Zero fake backend; interactive 3-step quote configurator compiling a pre-formatted message directly to `+91 92466 22995`.
- **Final CTA**: Earth-to-water gradient wave transition.
- **Footer**: 4-column architecture with confirmed services, areas, and legal notices.
- **Floating Actions**: Desktop right rail + Mobile sticky bottom bar (`[ Call 24/7 ] [ WhatsApp ] [ Get Quote ]`).
- **Rising-Water Scroll-to-Top**: Custom SVG borehole indicator whose water level fills proportionally as the user scrolls.

---

### 2. Reusable Data-Driven Service Details Architecture
- Single reusable component: `src/pages/ServiceDetails.jsx` reading from `src/data/services.js`.
- Dedicated URLs:
  - `/services/borewell-drilling`
  - `/services/pump-motor-solutions`
  - `/services/borewell-cleaning-maintenance`
  - `/services/groundwater-survey`
- Dynamic SEO metadata, breadcrumbs, single H1, technical quick facts table, 4 core engineering highlights, target applications, custom 5-step process, technical guide, service field gallery, service-specific FAQs, and dynamic WhatsApp CTA.

---

### 3. Local SEO & Technical Compliance
- **Strict Single H1 Policy** per route.
- **Complete LocalBusiness JSON-LD Schema**: Verified telephone (`092466 22995`), Lalitha Colony, Seethammadara address, 24/7 hours, geo coordinates (17.7384; 83.3168), and 4.8 rating from 37 reviews.
- **BreadcrumbList Schema** on service pages.
- `robots.txt` and `sitemap.xml` included in `public/`.
- `vercel.json` configured for SPA route rewrites and security headers.

---

## 🛠️ Tech Stack
- **Framework**: React 19 + Vite
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Styling**: Custom CSS Design Tokens (Zero Tailwind bloat, complete responsive control)
- **Deployment**: Vercel ready (`vercel.json`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
git clone https://github.com/lunacoderl/konetiborewells.git
cd konetiborewells
npm install
```

### Development
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Production Build
```bash
npm run build
```

---

## 📍 Business Information
- **Name**: Koneti Borewells & Motors
- **Location**: Lalitha Colony, Seethammadara, Visakhapatnam, Andhra Pradesh 530013
- **Phone**: 092466 22995 / +91 92466 22995
- **Hours**: Open 24 Hours / 7 Days a Week
- **Rating**: 4.8 ★★★★★ (37+ Google Reviews)
