import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Script from 'next/script';
import { Raleway, Merriweather } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','600','700','800'] });
const merriweather = Merriweather({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['300','400','700'] });

export function generateMetadata(): Metadata {
  return {
    title: { template: '%s | Find Swim Spots', default: 'Find Swimming Holes & Natural Water Spots Near You' },
    description: 'Find the best swimming holes, natural pools, and water spots across the US. Free directory of tested swim spots with safety ratings and local tips.',
    keywords: 'swimming holes, natural pools, water spots, swim locations, creeks, natural swimming, wild swimming',
    alternates: { canonical: 'https://findswimspots.com' },
    verification: { google: 'mYJQ1s35nwTJyI3LV6j-FwtgbKUNIIUg1t6xndmetPU' },
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
  };
}

const toolSites = [
  { name: 'Fiber Tools', href: 'https://fibertools.app' }, { name: 'Mind Check Tools', href: 'https://mindchecktools.com' },
  { name: 'Flip My Case', href: 'https://flipmycase.com' }, { name: 'Creator Revenue Calculator', href: 'https://creatorrevenuecalculator.com' },
  { name: 'Contract Extract', href: 'https://contractextract.com' }, { name: 'Medical Bill Reader', href: 'https://medicalbillreader.com' },
  { name: 'Tax Break Tools', href: 'https://taxbreaktools.com' }, { name: '524 Tracker', href: 'https://524tracker.com' },
];
const directorySites = [
  { name: 'Public Boat Ramps', href: 'https://publicboatramps.com' }, { name: 'Craft Distillery Finder', href: 'https://craftdistilleryfinder.com' },
  { name: 'Drive-In Tonight', href: 'https://driveintonight.com' }, { name: 'All Skate Parks', href: 'https://allskateparks.com' },
  { name: 'Rockhounding Finder', href: 'https://rockhoundingfinder.com' }, { name: 'Nearby Escape Rooms', href: 'https://nearbyescaperooms.com' },
  { name: 'All Skating Rinks', href: 'https://allskatingrinks.com' }, { name: 'Soak USA', href: 'https://soakusa.net' },
];

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const gpcHeader = headersList.get('sec-gpc') === '1'

  return (
    <html lang="en" className={`${raleway.variable} ${merriweather.variable}`}>
      <head>
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1" />
        <Script id="consent-defaults" strategy="beforeInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',wait_for_update:500});`}</Script>
        {!gpcHeader && (
          <>
            <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932" strategy="afterInteractive" />
            <Script id="clarity-init" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","vsqobt7va0");`}</Script>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-6MBVJFSNS6" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-6MBVJFSNS6');`}
            </Script>
          </>
        )}
        <Script id="gpc-client-check" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(){var g=typeof navigator!=='undefined'&&!!navigator.globalPrivacyControl;var c=document.cookie.indexOf('empire_gpc=1')!==-1;if(g||c){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','update',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied'});}})();`
        }} />
      </head>
      <body>
        <header style={{ background: 'var(--forest)', borderBottom: '3px solid var(--forest-mid)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 20px rgba(26,61,43,0.4)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>🏊</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#a8e6c0', letterSpacing: '0.01em' }}>Find Swim Spots</span>
            </a>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: '#c8e6d0', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-display)' }}>Home</a>
              <a href="/browse-states" style={{ color: '#c8e6d0', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-display)' }}>Browse States</a>
              <a href="/about" style={{ color: '#c8e6d0', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-display)' }}>About</a>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>

        <footer style={{ background: 'var(--forest)', borderTop: '3px solid var(--forest-mid)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: '#a8e6c0', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>🏊 Find Swim Spots</p>
                <p style={{ color: '#6a9a78', fontSize: '0.875rem', lineHeight: 1.7 }}>Free directory of swimming holes, natural pools, and water spots across the United States. Always check conditions before visiting.</p>
              </div>
              <div>
                <h4 style={{ color: '#a8e6c0', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Directory Sites</h4>
                <ul style={{ listStyle: 'none' }}>
                  {directorySites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: '#6a9a78', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#a8e6c0', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Tools</h4>
                <ul style={{ listStyle: 'none' }}>
                  {toolSites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: '#6a9a78', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
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
