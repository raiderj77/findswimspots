/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import { STATES } from '../states';
import locations from '@/data/locations.json';

export const revalidate = 86400;

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

function getMapboxImage(lat: number, lng: number, width = 800, height = 500): string {
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng},${lat},13,0/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

function getSpotPreview(spot: { name: string; state: string; city: string; amenities: string[]; description: string }): string {
  const amenityCount = spot.amenities.length;
  const location = spot.city ? `${spot.city}, ${spot.state}` : spot.state;
  if (amenityCount >= 2) {
    return `Swimming spot in ${location} with ${amenityCount} amenities including ${spot.amenities.slice(0, 2).join(' and ').toLowerCase()}.`;
  }
  return `Public swimming spot in ${location}. Free access to natural waterways.`;
}

function getStateName(slug: string) {
  return STATES.find((s) => s.slug === slug)?.name ?? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const stateName = getStateName(state);
  return {
    title: `Swimming Holes in ${stateName}`,
    description: `Find natural swimming holes, pools, and wild swim spots in ${stateName}. Browse free public swimming locations with GPS coordinates.`,
    alternates: { canonical: `https://findswimspots.com/${state}` },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const stateName = getStateName(state);
  const spots = locations.filter((l) => l.stateSlug === state);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BreadcrumbList',
        itemListElement:[
          {  '@type':'ListItem',position:1,name:'Home',item:'https://findswimspots.com'},
          {'@type':'ListItem',position:2,name:stateName,item:`https://findswimspots.com/${state}`},
        ],
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, var(--forest) 0%, #0a2d1e 100%)', padding: '4rem 1.5rem 3.5rem', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', background: 'rgba(61,139,94,0.08)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/" style={{ color: '#a8e6c0', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>← All States</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: 'white', marginBottom: '0.75rem' }}>
            Swimming Holes in <span style={{ color: '#a8e6c0' }}>{stateName}</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="chip chip-white">{spots.length} {spots.length===1?'Spot':'Spots'} Listed</span>
            <span style={{ color: '#7ab89a', fontSize: '0.9rem', fontFamily: 'var(--font-display)' }}>Natural &amp; free access</span>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Grid */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          {spots.length > 0 ? (
            <div className="grid-3">
              {spots.map((spot, i) => (
                <Link key={spot.slug} href={`/${state}/${spot.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <img src={getMapboxImage(spot.lat, spot.lng)} alt={spot.name} className="card-img" loading="lazy" width={800} height={500} />
                    <div className="card-body">
                      <div className="card-meta"><span>📍</span><span>{spot.city ? `${spot.city}, ` : ''}{spot.state}</span></div>
                      <h2 className="card-title">{spot.name}</h2>
                      <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{getSpotPreview(spot)}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {spot.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '5rem 2rem', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌿</p>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--forest)', marginBottom: '0.75rem' }}>Coming Soon</h2>
              <p style={{ color: 'var(--gray)' }}>{"We're adding swim spots in "}{stateName}{" — check back soon!"}</p>
              <Link href="/" className="btn btn-green" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>Browse Other States</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
