import type { Metadata } from 'next';
import { Raleway, Merriweather } from 'next/font/google';
import './globals.css';
const raleway = Raleway({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','600','700','800'] });
const merriweather = Merriweather({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['300','400','700'] });
export function generateMetadata(): Metadata {
  return {
    title: { template: '%s | Find Swim Spots', default: 'Find Swim Spots - Imported Record Rebuild' },
    description: 'Imported water-location records undergoing primary-source and safety review.',
    keywords: 'swimming holes, natural pools, water spots, swim locations, creeks, natural swimming, wild swimming',
    alternates: { canonical: 'https://findswimspots.com' },
    verification: { google: 'mYJQ1s35nwTJyI3LV6j-FwtgbKUNIIUg1t6xndmetPU' },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${merriweather.variable}`}>
      <head>
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <header style={{ background: 'var(--forest)', borderBottom: '3px solid var(--forest-mid)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 20px rgba(26,61,43,0.4)' }}>
          <div className="container site-header-inner">
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>🏊</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#a8e6c0', letterSpacing: '0.01em' }}>Find Swim Spots</span>
            </a>
            <nav aria-label="Primary" className="primary-nav">
              <a href="/" style={{ color: '#c8e6d0', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-display)' }}>Home</a>
              <a href="/browse-states" style={{ color: '#c8e6d0', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-display)' }}>Browse States</a>
              <a href="/about" style={{ color: '#c8e6d0', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-display)' }}>About</a>
            </nav>
          </div>
        </header>
        <main id="main-content" style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>
        <footer style={{ background: 'var(--forest)', borderTop: '3px solid var(--forest-mid)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: '#a8e6c0', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>🏊 Find Swim Spots</p>
                <p style={{ color: '#9cc8a8', fontSize: '0.875rem', lineHeight: 1.7 }}>Imported coordinate records undergoing source and safety review. Confirm access, swimming permission, advisories, and conditions with current local authorities.</p>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: '#4a6a52', fontSize: '0.85rem' }}>© 2026 Find Swim Spots. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Contact', '/contact'], ['About', '/about']].map(([l, h]) => (
                  <a key={h} href={h} style={{ color: '#4a6a52', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-display)' }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
