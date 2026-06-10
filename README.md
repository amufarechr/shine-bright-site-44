# SW Ingeniería — Company Website

**Live site:** [swingenieria.com](https://swingenieria.com)

Production website for SW Ingeniería, an agro-industrial engineering firm specializing in evaporative cooling, industrial HVAC, and operational efficiency for large-scale food production facilities in Peru and Mexico.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion |
| Routing | React Router v6 |
| Forms | Formspree |
| Analytics | Vercel Analytics + Google Analytics 4 (via GTM) |
| Hosting | Vercel Pro |

---

## Architecture

Single-page application with a centralized data layer. All content — case studies, testimonials, service descriptions, SEO metadata — lives in `src/data/siteData.ts` as a single source of truth. UI components consume this data directly; no CMS or external API.

```
src/
├── data/
│   └── siteData.ts        # Single source of truth for all content
├── components/
│   ├── ui/                # shadcn/ui primitives
│   └── ...                # Page sections and shared components
├── pages/                 # Route-level components
└── hooks/                 # Custom hooks (e.g. useNavigateToContact)
```

---

## Key implementation details

**Content architecture** — All 10 case studies, service cards, and testimonials are typed TypeScript objects in `siteData.ts`. Adding or editing a case study requires no component changes.

**Navigation** — Custom `useNavigateToContact` hook handles cross-page hash navigation with React Router, ensuring the contact section scrolls correctly whether the user is navigating from within the SPA or arriving from an external link.

**Conversion tracking** — GTM container fires a `generate_lead` GA4 event on Formspree form submission. Google Ads conversion linked to the same event.

**Performance** — SPA with no SSR. Static assets served via Vercel's CDN. Lighthouse scores optimized for Core Web Vitals.

---

## Features

- 10 engineering case studies with before/after metrics
- Testimonials carousel (autoplay + manual navigation)
- Framer Motion scroll-triggered animations
- WhatsApp floating CTA
- Formspree contact form with GTM event tracking
- Responsive layout (mobile-first)
- SEO: sitemap.xml, robots.txt, OG tags, structured metadata

---

## Local development

```bash
npm install
npm run dev
```

Requires Node 18+. No environment variables needed for local development (Formspree endpoint is public).

---

## Deployment

Deployed on Vercel Pro via GitHub integration. Every push to `main` triggers a production deployment.

---

## About

Built and maintained by [Álvaro Mufarech](https://github.com/amufarechr). Design, development, and content strategy by the same person.
