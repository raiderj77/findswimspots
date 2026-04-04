import type { Metadata } from 'next';
import { STATES } from '../../states';
import locations from '@/data/locations.json';

export const revalidate = 86400;

function formatStateName(slug: string): string {
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export function generateMetadata({ params }: { params: { state: string; slug: string } }): Metadata {
  const location = locations.find((loc) => loc.stateSlug === params.state && loc.slug === params.slug);
  if (!location) {
    return { title: 'Not Found' };
  }
  return {
    title: `${location.name} — Swimming Hole in ${location.city}, ${location.state}`,
    description: `${location.description} Located in ${location.city}, ${location.state}. Amenities: ${location.amenities.join(', ')}.`,
  };
}

export function generateStaticParams() {
  return locations.map((location) => ({
    state: location.stateSlug,
    slug: location.slug,
  }));
}

export default function LocationPage({ params }: { params: { state: string; slug: string } }) {
  const location = locations.find((loc) => loc.stateSlug === params.state && loc.slug === params.slug);
  const stateName = formatStateName(params.state);

  if (!location) {
    return (
      <article style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h1 style={{ color: '#d32f2f' }}>Location Not Found</h1>
        <p>The swimming hole you're looking for could not be found.</p>
        <a href="/" style={{ color: '#0056b3', textDecoration: 'none' }}>
          ← Back to Home
        </a>
      </article>
    );
  }

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
      {
        '@type': 'ListItem',
        position: 3,
        name: location.name,
        item: `https://findswimspots.com/${params.state}/${params.slug}`,
      },
    ],
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'BodyOfWater',
    name: location.name,
    description: location.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'US',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />

      <article style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <nav style={{ marginBottom: '1.5rem' }}>
          <a href="/" style={{ color: '#0056b3', textDecoration: 'none' }}>
            Home
          </a>
          {' > '}
          <a href={`/${params.state}`} style={{ color: '#0056b3', textDecoration: 'none' }}>
            {stateName}
          </a>
          {' > '}
          <span>{location.name}</span>
        </nav>

        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#0056b3' }}>{location.name}</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem' }}>
          {location.city}, {location.state}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          <div>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>About This Location</h2>
              <p style={{ lineHeight: 1.8 }}>{location.description}</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>Amenities</h2>
              <ul style={{ columnCount: 2, columnGap: '2rem' }}>
                {location.amenities.map((amenity, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
                    {amenity}
                  </li>
                ))}
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>Safety Information</h2>
              <p>
                <strong>Always prioritize safety when visiting this location:</strong>
              </p>
              <ul style={{ lineHeight: 2 }}>
                <li>Check local weather and water conditions before visiting</li>
                <li>Never swim alone; always bring a buddy</li>
                <li>Verify water quality with local environmental agencies</li>
                <li>Respect all posted signs and warnings</li>
                <li>Be aware of currents, depth changes, and underwater hazards</li>
                <li>Wear appropriate safety gear such as a life jacket if needed</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>Getting There</h2>
              <p>
                <strong>Coordinates:</strong> {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </p>
              <p>
                Use these coordinates in your GPS or mapping application to navigate to this swimming hole. Always verify access rights and respect private property.
              </p>
            </section>
          </div>

          <div style={{ position: 'sticky', top: '20px', height: 'fit-content' }}>
            <div
              style={{
                backgroundColor: '#f0f0f0',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #ddd',
              }}
            >
              <h3 style={{ marginTop: 0, color: '#0056b3' }}>Quick Info</h3>
              <div style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
                <p>
                  <strong>Location:</strong>
                  <br />
                  {location.city}, {location.state}
                </p>
                <p>
                  <strong>Type:</strong>
                  <br />
                  Natural Water Spot
                </p>
                <p>
                  <strong>Coordinates:</strong>
                  <br />
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
                <a
                  href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#0056b3',
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
          <a href={`/${params.state}`} style={{ color: '#0056b3', textDecoration: 'none' }}>
            ← Back to {stateName}
          </a>
        </div>
      </article>
    </>
  );
}
