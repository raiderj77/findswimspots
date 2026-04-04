import type { Metadata } from 'next';
import { STATES } from '../states';

export function generateMetadata(): Metadata {
  return {
    title: 'Browse Swimming Holes by State',
    description: 'Browse our directory of swimming holes and natural water spots by state.',
  };
}

export default function BrowseStatesPage() {
  return (
    <article style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#0056b3', marginBottom: '1rem' }}>Browse by State</h1>
      <p style={{ fontSize: '1.05rem', color: '#666', marginBottom: '2rem' }}>
        Select a state to browse all swimming holes and natural water spots in that area.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {STATES.map((state) => (
          <a
            key={state.slug}
            href={`/${state.slug}`}
            style={{
              padding: '1.25rem',
              border: '2px solid #0056b3',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#0056b3',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
          >
            {state.name}
          </a>
        ))}
      </div>
    </article>
  );
}
