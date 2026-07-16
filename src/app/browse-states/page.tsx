import type { Metadata } from 'next';
import { STATES } from '../states';

export function generateMetadata(): Metadata {
  return {
    title: 'Browse Imported Water-Location Records by Region',
    description: 'Browse imported coordinate records by represented region while the directory is rebuilt with current primary sources.',
    robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  };
}

export default function BrowseStatesPage() {
  return (
    <article className="content-page">
      <p className="section-label">Imported directory</p>
      <h1>Browse records by region</h1>
      <p className="lead">
        These routes contain imported names and coordinates. They do not establish public access, swimming permission, or current safety. Verify every record with the responsible operator or agency.
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
              color: 'var(--forest)',
              backgroundColor: 'white',
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
