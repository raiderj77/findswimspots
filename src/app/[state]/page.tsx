import type { Metadata } from 'next';
import { STATES } from '../states';
import locations from '@/data/locations.json';

export const revalidate = 86400;

function formatStateName(slug: string): string {
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const stateName = formatStateName(params.state);
  return {
    title: `Swimming Holes in ${stateName}`,
    description: `Find swimming holes and natural water spots in ${stateName}. Browse tested locations with safety tips and local information.`,
  };
}

export function generateStaticParams() {
  return STATES.map((state) => ({
    state: state.slug,
  }));
}

export default function StatePage({ params }: { params: { state: string } }) {
  const stateName = formatStateName(params.state);
  const stateLocations = locations.filter((loc) => loc.stateSlug === params.state);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://findswimspots.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: stateName,
        item: `https://findswimspots.com/${params.state}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <nav style={{ marginBottom: '1.5rem' }}>
          <a href="/" style={{ color: '#0056b3', textDecoration: 'none' }}>
            Home
          </a>
          {' > '}
          <span>{stateName}</span>
        </nav>

        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#0056b3' }}>Swimming Holes in {stateName}</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          Explore swimming holes and natural water spots across {stateName}. Find the best locations with detailed information about amenities, access, and safety.
        </p>

        {stateLocations.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {stateLocations.map((location) => (
              <div
                key={location.slug}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  backgroundColor: '#f9f9f9',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
              >
                <h2 style={{ marginTop: 0, color: '#0056b3', fontSize: '1.25rem' }}>
                  <a href={`/${params.state}/${location.slug}`} style={{ textDecoration: 'none', color: '#0056b3' }}>
                    {location.name}
                  </a>
                </h2>
                <p style={{ margin: '0.5rem 0', color: '#666' }}>
                  <strong>{location.city}, {location.state}</strong>
                </p>
                <p style={{ margin: '1rem 0', lineHeight: 1.5 }}>{location.description}</p>
                <p style={{ margin: '0.5rem 0', fontSize: '0.875rem', color: '#666' }}>
                  <strong>Amenities:</strong> {location.amenities.slice(0, 4).join(', ')}
                </p>
                <p style={{ margin: '0.5rem 0', fontSize: '0.875rem', color: '#666' }}>
                  <strong>Coordinates:</strong> {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
                <a
                  href={`/${params.state}/${location.slug}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    color: '#0056b3',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  View Details →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ padding: '2rem', backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
            <h2 style={{ color: '#666', marginTop: 0 }}>Coming Soon</h2>
            <p style={{ color: '#888' }}>
              We're working on adding swimming holes for {stateName}. Check back soon for updated listings!
            </p>
            <a
              href="/"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: '#0056b3',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              ← Back to Home
            </a>
          </div>
        )}
      </article>
    </>
  );
}
