# Find Swim Spots, CLAUDE.md

> Source of truth for Claude Code on this project. Last updated: 2026-04-30

## Project Identity

- **Site**: Find Swim Spots
- **Domain**: findswimspots.com
- **Purpose**: Location finder for public swimming spots (lakes, rivers, ocean beaches, public pools) across the United States
- **Type**: utility-site (ad-supported location directory)
- **Compliance Tier**: Standard, SAFETY NOTE: water safety content requires extra care

## Tech Stack

- **Framework**: Next.js | **Deployment**: Vercel | **Language**: TypeScript | **Styling**: Tailwind CSS | **Package Manager**: npm

## 1. AdSense & Monetization

- **Publisher ID**: `ca-pub-7171402107622932`
- **ads.txt**: `google.com, pub-7171402107622932, DIRECT, f08c47fec0942fa0`

## 2. SEO

- SSR/SSG required
- Each swim spot page: location name, address/coordinates, water type, depth info if available, lifeguard status, accessibility, parking
- CRITICAL: Water quality and safety data changes, include "check local conditions before visiting" disclaimer on every page

## 3. Core Web Vitals

- **LCP** ≤ 2.5s | **INP** ≤ 200ms | **CLS** ≤ 0.1

## 4. E-E-A-T

- Attribution: "Built by an experienced web developer", no personal name
- IMPORTANT: Include water safety disclaimer on every swim spot page
- Never present this site as an official water safety resource

## 5. Structured Data

- Organization, WebSite, LocalBusiness (for pools/managed beaches), BreadcrumbList
- Natural swim spots: Place schema rather than LocalBusiness

## 6. Mobile-First

- Touch targets 48px+, responsive, body text 16px+

## 7. Bing Optimization

- meta keywords, SSR mandatory, IndexNow on deploy

## 8. GEO / AI

- `/llms.txt` at root
- Standard AI crawler rules

## 9. Privacy & Consent

- `/privacy` and `/terms` required

## 10. Accessibility (WCAG 2.1 AA)

- Alt text on all location photos, keyboard navigation, skip links

## 11. Security Headers

Standard Empire security headers

## 12. Sitemaps & Metadata

- Sitemap via `app/sitemap.ts`

## Cross-Site Links

Footer: all sister sites (excluding self)

## Deployment

Vercel | main | `npm run build` | Env: INDEXNOW_API_KEY

## Warnings

Standard Empire warnings + NEVER present water conditions as verified/current without official data source. Always disclaim "verify local conditions before visiting." Water safety information should never be presented as authoritative, users are responsible for their own safety decisions.
