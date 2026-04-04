import type { Metadata } from 'next';
import Script from 'next/script';

export function generateMetadata(): Metadata {
  return {
    title: {
      template: '%s | Swimming Holes & Water Spots Directory',
      default: 'Find Swimming Holes & Natural Water Spots Near You',
    },
    description: 'Find the best swimming holes, natural pools, and water spots across the US. Free directory of tested swim spots with safety ratings and local tips.',
    keywords: 'swimming holes, natural pools, water spots, swim locations, creeks, natural swimming, wild swimming, US swimming holes',
    alternates: {
      canonical: 'https://findswimspots.com',
    },
    openGraph: {
      type: 'website',
      url: 'https://findswimspots.com',
      title: 'Find Swimming Holes & Natural Water Spots Near You',
      description: 'Find the best swimming holes, natural pools, and water spots across the US.',
      images: [
        {
          url: 'https://findswimspots.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Swimming holes and natural water spots directory',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Find Swimming Holes & Natural Water Spots Near You',
      description: 'Find the best swimming holes, natural pools, and water spots across the US.',
      images: ['https://findswimspots.com/og-image.jpg'],
    },
  };
}

const sisterSites = {
  tools: [
    { name: 'fibertools.app', href: 'https://fibertools.app' },
    { name: 'mindchecktools.com', href: 'https://mindchecktools.com' },
    { name: 'flipmycase.com', href: 'https://flipmycase.com' },
    { name: 'creatorrevenuecalculator.com', href: 'https://creatorrevenuecalculator.com' },
    { name: 'contractextract.com', href: 'https://contractextract.com' },
    { name: 'medicalbillreader.com', href: 'https://medicalbillreader.com' },
    { name: 'taxbreaktools.com', href: 'https://taxbreaktools.com' },
    { name: '524tracker.com', href: 'https://524tracker.com' },
  ],
  directories: [
    { name: 'publicboatramps.com', href: 'https://publicboatramps.com' },
    { name: 'craftdistilleryfinder.com', href: 'https://craftdistilleryfinder.com' },
    { name: 'driveintonight.com', href: 'https://driveintonight.com' },
    { name: 'allskateparks.com', href: 'https://allskateparks.com' },
    { name: 'rockhoundingfinder.com', href: 'https://rockhoundingfinder.com' },
    { name: 'nearbyescaperooms.com', href: 'https://nearbyescaperooms.com' },
    { name: 'allskatingrinks.com', href: 'https://allskatingrinks.com' },
    { name: 'soakusa.net', href: 'https://soakusa.net' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta name="robots" content="index, follow, max-snippet:-1" />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          strategy="afterInteractive"
        />
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1.6, color: '#333' }}>
        <header
          style={{
            backgroundColor: '#0056b3',
            color: 'white',
            padding: '1.5rem 2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Find Swim Spots</h1>
            <nav>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '2rem' }}>
                <li>
                  <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/browse-states" style={{ color: 'white', textDecoration: 'none' }}>
                    Browse States
                  </a>
                </li>
                <li>
                  <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>{children}</main>

        <footer
          style={{
            backgroundColor: '#f5f5f5',
            borderTop: '1px solid #ddd',
            padding: '2rem',
            marginTop: '3rem',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ marginTop: 0 }}>Tools</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {sisterSites.tools.map((site) => (
                    <li key={site.name} style={{ marginBottom: '0.5rem' }}>
                      <a href={site.href} target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'none' }}>
                        {site.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ marginTop: 0 }}>Directory Sites</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {sisterSites.directories.map((site) => (
                    <li key={site.name} style={{ marginBottom: '0.5rem' }}>
                      <a href={site.href} target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'none' }}>
                        {site.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
              <p>Find Swim Spots is a free directory of swimming holes and natural water spots across the United States. Always check local conditions and follow posted guidelines.</p>
              <nav style={{ marginTop: '1rem' }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <li>
                    <a href="/privacy" style={{ color: '#0056b3', textDecoration: 'none' }}>
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" style={{ color: '#0056b3', textDecoration: 'none' }}>
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="/contact" style={{ color: '#0056b3', textDecoration: 'none' }}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
