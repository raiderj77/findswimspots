import type { Metadata } from 'next';
import Link from 'next/link';
import { STATES } from '../states';
import locations from '@/data/locations.json';

export const revalidate = 86400;
function getStateName(slug: string) {
  if (slug === 'pr') return 'Puerto Rico';
  return STATES.find((state) => state.slug === slug)?.name ?? slug.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

export function generateStaticParams() {
  return Array.from(new Set(locations.map((location) => location.stateSlug))).map((state) => ({ state }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const stateName = getStateName(state);
  return {
    title: `Imported Water-Location Records in ${stateName}`,
    description: `Browse imported names and coordinates in ${stateName}. Verify access, swimming permission, advisories, and conditions with current local sources.`,
    alternates: { canonical: `https://findswimspots.com/${state}` },
    robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const stateName = getStateName(state);
  const spots = locations.filter((location) => location.stateSlug === state);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[
          { '@type':'ListItem', position:1, name:'Home', item:'https://findswimspots.com' },
          { '@type':'ListItem', position:2, name:stateName, item:`https://findswimspots.com/${state}` },
        ],
      }) }} />
      <section className="route-hero">
        <div className="container">
          <Link href="/browse-states" className="back-link">← All represented regions</Link>
          <h1>Imported records in <span>{stateName}</span></h1>
          <p>{spots.length.toLocaleString()} coordinate {spots.length === 1 ? 'record' : 'records'} · Not source-reviewed</p>
        </div>
      </section>
      <section style={{ padding: '2.5rem 1.5rem 4rem' }}>
        <div className="container">
          <div className="source-warning"><strong>Research leads only.</strong> The repository does not record the original source, collection date, operator, access authority, swimming permission, water quality, conditions, or review date. Confirm all of those before visiting.</div>
          {spots.length > 0 ? (
            <div className="grid-3" style={{ marginTop: '2rem' }}>
              {spots.map((spot) => (
                <Link key={`${spot.stateSlug}-${spot.slug}`} href={`/${state}/${spot.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <div className="card-img map-placeholder" aria-label={`Recorded coordinate for ${spot.name}`}><span>Recorded coordinate</span><strong>{spot.lat.toFixed(3)}, {spot.lng.toFixed(3)}</strong></div>
                    <div className="card-body">
                      <div className="card-meta">Recorded region: {spot.city ? `${spot.city}, ` : ''}{stateName}</div>
                      <h2 className="card-title">{spot.name}</h2>
                      <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65 }}>Imported coordinate record. Public access and swimming permission are not verified.</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : <p>No imported records are currently stored for this region.</p>}
        </div>
      </section>
    </>
  );
}
