/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import { STATES } from '../../states';
import locations from '@/data/locations.json';

export const revalidate = 86400;

function getStateName(slug: string) {
  return STATES.find((s) => s.slug === slug)?.name ?? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

export async function generateStaticParams() {
  return locations.map((l) => ({ state: l.stateSlug, slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; slug: string }> }): Promise<Metadata> {
  const { state, slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  const stateName = getStateName(state);
  return {
    title: `${location?.name ?? 'Swim Spot'} — Natural Swimming in ${stateName}`,
    description: location?.description ?? `Natural swimming spot in ${stateName}. Find GPS coordinates, amenities, and safety info.`,
    alternates: { canonical: `https://findswimspots.com/${state}/${slug}` },
    openGraph: { title: `${location?.name} | Find Swim Spots`, description: location?.description, url: `https://findswimspots.com/${state}/${slug}` },
  };
}

const AMENITY_ICONS: Record<string, string> = {
  'Parking': '🅿️', 'Restrooms': '🚻', 'Picnic area': '🌳', 'Trails': '🥾',
  'Lifeguard': '🛟', 'Camping': '⛺', 'Fishing': '🎣', 'Dog friendly': '🐕',
  'Wheelchair accessible': '♿', 'No fee': '✅', 'Fire pit': '🔥', 'Shade': '🌿',
};

const HERO_KEYWORDS = ['swimming+hole', 'waterfall+pool', 'river+swimming', 'natural+pool', 'creek+swim', 'mountain+lake', 'forest+river', 'waterfall'];

export default async function SpotPage({ params }: { params: Promise<{ state: string; slug: string }> }) {
  const { state, slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  const stateName = getStateName(state);

  if (!location) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌊</p>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--forest)' }}>Spot Not Found</h1>
        <Link href="/" className="btn btn-green" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>← Back to Home</Link>
      </div>
    );
  }

  const related = locations.filter((l) => l.stateSlug === state && l.slug !== slug).slice(0, 3);
  const heroKeyword = HERO_KEYWORDS[slug.length % HERO_KEYWORDS.length];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://findswimspots.com' },
          { '@type': 'ListItem', position: 2, name: stateName, item: `https://findswimspots.com/${state}` },
          { '@type': 'ListItem', position: 3, name: location.name, item: `https://findswimspots.com/${state}/${slug}` },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Park',
        name: location.name, description: location.description,
        geo: { '@type': 'GeoCoordinates', latitude: location.lat, longitude: location.lng },
        address: { '@type': 'PostalAddress', addressLocality: location.city, addressRegion: location.state, addressCountry: 'US' },
        amenityFeature: location.amenities.map((a) => ({ '@type': 'LocationFeatureSpecification', name: a, value: true })),
      }) }} />

      {/* Hero */}
      <div style={{ position: 'relative', height: '460px', overflow: 'hidden' }}>
        <img
          src={`https://source.unsplash.com/1600x800/?${heroKeyword}&sig=${slug.length + 100}`}
          alt={`${location.name} natural swimming spot`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          width={1600}
          height={800}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,30,18,0.9) 0%, rgba(10,30,18,0.3) 55%, transparent 100%)' }} />
        <div className="container" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.5rem' }}>
          <Link href={`/${state}`} style={{ color: '#a8e6c0', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
            ← {stateName} Swim Spots
          </Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: 'white', marginBottom: '0.6rem', fontWeight: 800 }}>{location.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#a8e6c0', fontSize: '0.9rem', fontFamily: 'var(--font-display)' }}>📍 {location.city ? `${location.city}, ` : ''}{location.state}</span>
            <span className="chip chip-white">🌿 Natural Spot</span>
            <span className="chip chip-white">Free Access</span>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,30 C240,50 480,10 720,30 C960,50 1200,10 1440,30 L1440,50 L0,50 Z" fill="var(--ivory)" />
        </svg>
      </div>

      {/* Main content */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3rem', alignItems: 'start' }}>

          {/* Left — details */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--forest)', marginBottom: '1rem' }}>About This Spot</h2>
            <p style={{ lineHeight: 1.9, marginBottom: '2.5rem', color: 'var(--text)', fontSize: '1.025rem' }}>{location.description}</p>

            {location.amenities.length > 0 && (
              <>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--forest)', marginBottom: '1.25rem' }}>Amenities &amp; Features</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
                  {location.amenities.map((amenity) => (
                    <div key={amenity} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'var(--white)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', boxShadow: '0 1px 6px rgba(26,61,43,0.08)', border: '1px solid rgba(45,110,74,0.15)' }}>
                      <span>{AMENITY_ICONS[amenity] ?? '✓'}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--forest)', fontFamily: 'var(--font-display)' }}>{amenity}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Map */}
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--forest)', marginBottom: '1rem' }}>Location</h2>
            <div style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #0a2d1e 100%)', borderRadius: 'var(--radius)', height: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🗺️</span>
              <p style={{ color: '#a8e6c0', fontFamily: 'var(--font-display)', fontWeight: 700 }}>GPS: {location.lat.toFixed(5)}, {location.lng.toFixed(5)}</p>
              <p style={{ color: '#6a9a78', fontSize: '0.875rem' }}>Open in your mapping app for directions</p>
              <a
                href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green"
                style={{ marginTop: '0.5rem', padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}
              >
                Get Directions →
              </a>
            </div>

            {/* Safety notice */}
            <div style={{ background: 'rgba(45,110,74,0.06)', border: '1px solid rgba(45,110,74,0.2)', borderRadius: 'var(--radius-sm)', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--forest)', fontSize: '1rem', marginBottom: '0.6rem' }}>🛟 Safety Reminder</h3>
              <p style={{ fontSize: '0.875rem', color: '#556', lineHeight: 1.75 }}>
                Wild swimming carries risks. Always check water quality and current conditions before entering. Never swim alone, be aware of underwater hazards, and know your limits. Conditions can change seasonally — verify access before visiting.
              </p>
            </div>

            <div style={{ background: 'rgba(168,230,192,0.08)', border: '1px solid rgba(45,110,74,0.15)', borderRadius: 'var(--radius-sm)', padding: '1rem 1.25rem' }}>
              <p style={{ fontSize: '0.82rem', color: '#667', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--forest)' }}>Disclaimer:</strong> Information is provided for reference only. Always verify access, conditions, and any required permits before visiting. Land ownership and access rules can change.
              </p>
            </div>
          </div>

          {/* Right — info panel */}
          <aside>
            <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', border: '1px solid rgba(45,110,74,0.15)', position: 'sticky', top: '90px' }}>
              <div style={{ background: 'var(--forest)', padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', color: '#a8e6c0', fontSize: '1.1rem', margin: 0 }}>Spot Details</h3>
              </div>
              <div style={{ padding: '1.25rem 1.5rem' }}>
                {[
                  ['📍 Location', `${location.city ? `${location.city}, ` : ''}${location.state}`],
                  ['🌐 State', location.state],
                  ['🗺️ Latitude', location.lat.toFixed(5)],
                  ['🗺️ Longitude', location.lng.toFixed(5)],
                  ['🌿 Features', `${location.amenities.length} listed`],
                  ['💰 Entry', 'Free / Public'],
                  ['🏊 Type', 'Natural Swimming'],
                ].map(([label, value]) => (
                  <div key={String(label)} style={{ paddingBottom: '0.85rem', marginBottom: '0.85rem', borderBottom: '1px solid rgba(26,61,43,0.07)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.2rem', fontFamily: 'var(--font-display)' }}>{label}</div>
                    <div style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '0.9rem', fontFamily: 'var(--font-display)' }}>{value}</div>
                  </div>
                ))}
                <Link href={`/${state}`} className="btn btn-green" style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}>
                  More in {stateName} →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related spots */}
      {related.length > 0 && (
        <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(26,61,43,0.06)', padding: '4rem 1.5rem' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', marginBottom: '2rem' }}>More Spots in {stateName}</h2>
            <div className="grid-3">
              {related.map((spot, i) => (
                <Link key={spot.slug} href={`/${state}/${spot.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <img src={`https://source.unsplash.com/800x400/?swimming+hole,nature&sig=${i + 70}`} alt={spot.name} className="card-img" loading="lazy" width={800} height={400} />
                    <div className="card-body">
                      <div className="card-meta"><span>📍</span><span>{spot.city ? `${spot.city}, ` : ''}{spot.state}</span></div>
                      <h3 className="card-title">{spot.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#667', lineHeight: 1.6 }}>{spot.description.slice(0, 85)}…</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
