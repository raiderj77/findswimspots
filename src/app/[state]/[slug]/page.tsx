import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATES } from '../../states';
import locations from '@/data/locations.json';

export const revalidate = 86400;
function getStateName(slug: string) {
  if (slug === 'pr') return 'Puerto Rico';
  return STATES.find((state) => state.slug === slug)?.name ?? slug.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

export function generateStaticParams() {
  return locations.map((location) => ({ state: location.stateSlug, slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; slug: string }> }): Promise<Metadata> {
  const { state, slug } = await params;
  const location = locations.find((record) => record.stateSlug === state && record.slug === slug);
  const stateName = getStateName(state);
  return {
    title: `${location?.name ?? 'Water-Location Record'} in ${stateName}`,
    description: `Imported coordinate record in ${stateName}. Verify legal access, swimming permission, advisories, and conditions with current official sources.`,
    alternates: { canonical: `https://findswimspots.com/${state}/${slug}` },
    robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  };
}

export default async function SpotPage({ params }: { params: Promise<{ state: string; slug: string }> }) {
  const { state, slug } = await params;
  const location = locations.find((record) => record.stateSlug === state && record.slug === slug);
  if (!location) notFound();
  const stateName = getStateName(state);
  const related = locations.filter((record) => record.stateSlug === state && record.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[
          { '@type':'ListItem', position:1, name:'Home', item:'https://findswimspots.com' },
          { '@type':'ListItem', position:2, name:stateName, item:`https://findswimspots.com/${state}` },
          { '@type':'ListItem', position:3, name:location.name, item:`https://findswimspots.com/${state}/${slug}` },
        ],
      }) }} />

      <div className="record-hero">
        <div className="record-hero-overlay" />
        <div className="container record-hero-content">
          <Link href={`/${state}`} className="back-link">← {stateName} records</Link>
          <h1>{location.name}</h1>
          <p>Imported coordinate record · Not a verified swimming recommendation</p>
        </div>
      </div>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container detail-layout">
          <div>
            <h2>What this record establishes</h2>
            <p className="detail-copy">The repository stores the name <strong>{location.name}</strong>, the region {stateName}, {location.city ? `the city ${location.city}, ` : 'no city, '}and a latitude/longitude pair. It does not record the original source or collection date.</p>

            <h2>What must be verified</h2>
            <ul className="check-list">
              <li>Who owns or manages the land and whether the mapped access point is correct</li>
              <li>Whether public entry and swimming are currently allowed</li>
              <li>Closures, hours, permits, fees, parking, accessibility, and lifeguard status</li>
              <li>Current water-quality advisories, weather, water level, temperature, currents, surf, and posted hazards</li>
            </ul>

            <div className="source-warning"><strong>No safety determination:</strong> a stored coordinate and generated label do not show that this is a designated swimming area or that conditions are safe. Check a current operator or government source and obey all posted instructions. If in doubt, stay out.</div>

            <h2 style={{ marginTop: '2rem' }}>Recorded coordinate</h2>
            <div className="coordinate-box">
              <p>{location.lat.toFixed(5)}, {location.lng.toFixed(5)}</p>
              <p>This may not be an entrance, parking area, or legal access point.</p>
              <a href={`https://maps.google.com/?q=${location.lat},${location.lng}`} target="_blank" rel="noopener noreferrer" className="btn btn-green">Inspect coordinate in Google Maps</a>
            </div>
          </div>

          <aside className="detail-panel">
            <h2>Record fields</h2>
            <dl>
              <div><dt>Name</dt><dd>{location.name}</dd></div>
              <div><dt>City</dt><dd>{location.city || 'Not recorded'}</dd></div>
              <div><dt>Region</dt><dd>{stateName}</dd></div>
              <div><dt>Primary source</dt><dd>Not recorded</dd></div>
              <div><dt>Review date</dt><dd>Not recorded</dd></div>
              <div><dt>Access / swim status</dt><dd>Not verified</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ background: 'var(--cream)', padding: '4rem 1.5rem' }}>
          <div className="container"><h2>Other imported records in {stateName}</h2><div className="grid-3" style={{ marginTop: '2rem' }}>
            {related.map((spot) => <Link key={`${spot.stateSlug}-${spot.slug}`} className="simple-card" href={`/${state}/${spot.slug}`}><strong>{spot.name}</strong><span>Unreviewed coordinate record</span></Link>)}
          </div></div>
        </section>
      )}
    </>
  );
}
