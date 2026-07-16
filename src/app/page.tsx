import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Find Swim Spots - Imported Record Rebuild',
  description: 'Browse imported water-location records and learn what to verify with current local sources before visiting or entering the water.',
};

export default function Home() {
  const recordsWithCity = locations.filter((location) => location.city).length;
  const regions = Array.from(new Map(locations.map((location) => [location.stateSlug, location.state === 'PR' ? 'Puerto Rico' : location.state])).entries()).sort((a, b) => a[1].localeCompare(b[1]));
  const samples = locations.filter((location) => location.city).slice(0, 6);

  return (
    <>
      <div className="notice-bar"><strong>Safety and source rebuild:</strong> these are imported coordinate records, not verified swimming recommendations.</div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org', '@type':'WebSite', url:'https://findswimspots.com', name:'Find Swim Spots',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org', '@type':'Organization', name:'Find Swim Spots', url:'https://findswimspots.com',
        description:'A water-location directory undergoing source and safety review',
      }) }} />

      <section className="home-hero">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: '#a8e6c0' }}>Water-location records</p>
          <h1 className="hero-title">FIND A RECORD.<br /><span>VERIFY BEFORE YOU GO.</span></h1>
          <p className="hero-copy">Browse {locations.length.toLocaleString()} imported names and coordinates. Before visiting, confirm legal access, whether swimming is allowed, current closures, water quality, weather, hazards, fees, parking, and lifeguard status with the responsible operator or agency.</p>
          <a href="#browse-regions" className="btn btn-green">Browse represented regions</a>
        </div>
      </section>

      <section aria-label="Directory inventory" style={{ background: 'var(--white)', borderBottom: '1px solid rgba(26,61,43,0.1)' }}>
        <div className="container stats-grid">
          <div className="stat-item"><div className="stat-number">{locations.length.toLocaleString()}</div><div className="stat-label">Imported records</div></div>
          <div className="stat-item"><div className="stat-number">{recordsWithCity}</div><div className="stat-label">With a city field</div></div>
          <div className="stat-item"><div className="stat-number">{locations.length - recordsWithCity}</div><div className="stat-label">Missing a city field</div></div>
          <div className="stat-item"><div className="stat-number">0</div><div className="stat-label">Reviewed swim profiles</div></div>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">Sample imported records</p>
          <h2 className="section-title">What the current directory contains</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>These examples have a name, city, region, and coordinates. The dataset has no original source, operator website, access authority, water-quality status, conditions, fee, lifeguard, or review-date fields.</p>
          <div className="grid-3">
            {samples.map((location) => (
              <Link key={`${location.stateSlug}-${location.slug}`} href={`/${location.stateSlug}/${location.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <div className="card-img map-placeholder" aria-label={`Recorded coordinate for ${location.name}`}><span>Recorded coordinate</span><strong>{location.lat.toFixed(3)}, {location.lng.toFixed(3)}</strong></div>
                  <div className="card-body">
                    <div className="card-meta"><span aria-hidden>Map</span><span>{location.city}, {location.state === 'PR' ? 'Puerto Rico' : location.state}</span></div>
                    <h3 className="card-title">{location.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65 }}>Imported coordinate record. It does not establish public access, swimming permission, or safe conditions.</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}><p className="section-label" style={{ color: '#a8e6c0' }}>Before entering the water</p><h2 className="section-title" style={{ color: 'var(--white)' }}>CHECK CURRENT LOCAL INFORMATION</h2></div>
          <div className="grid-3">
            {[
              ['Confirm access and permission', 'Find the current land manager, beach operator, park, or local agency. Confirm the access point, hours, fees, closures, rules, and whether swimming is allowed.'],
              ['Check water and weather', 'Review current local water-quality advisories, weather, surf or river conditions, posted signs, and instructions from lifeguards or officials. If in doubt, stay out.'],
              ['Plan for drowning prevention', 'Use the buddy system. Closely and constantly supervise children, use properly fitted life jackets where appropriate, and prefer guarded swimming areas.'],
            ].map(([title, description]) => <article key={title} className="check-card"><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section id="browse-regions" style={{ padding: '5rem 1.5rem', scrollMarginTop: '6rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">Imported directory</p><h2 className="section-title">Browse the {regions.length} represented region labels</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Region and record routes remain out of search indexing while the directory is rebuilt with current, traceable sources.</p>
          </div>
          <div className="grid-states">{regions.map(([slug, name]) => <Link key={slug} href={`/${slug}`} className="state-link">{name}</Link>)}</div>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem', background: 'var(--cream)', borderTop: '1px solid rgba(26,61,43,0.1)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 className="section-title">Current official safety resources</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>This site does not monitor water or determine whether a place is safe. Use current local notices first. The following federal resources provide general guidance and links to relevant advisories:</p>
          <ul className="resource-list">
            <li><a href="https://www.cdc.gov/drowning/prevention/" target="_blank" rel="noopener noreferrer">CDC drowning prevention</a></li>
            <li><a href="https://www.cdc.gov/harmful-algal-blooms/prevention/" target="_blank" rel="noopener noreferrer">CDC harmful algal bloom prevention and advisory guidance</a></li>
            <li><a href="https://www.epa.gov/beaches/find-information-about-particular-us-beach" target="_blank" rel="noopener noreferrer">EPA beach monitoring, closures, and advisory information</a></li>
            <li><a href="https://www.weather.gov/safety/beach-ripcurrents-hazards" target="_blank" rel="noopener noreferrer">National Weather Service beach and rip-current safety</a></li>
          </ul>
          <p style={{ lineHeight: 1.85, marginTop: '1.25rem' }}>A future indexable profile must identify the responsible operator, cite current primary sources, record what was reviewed and when, and separate sourced facts from general safety guidance. Use the <Link href="/contact">contact page</Link> to report a record problem.</p>
        </div>
      </section>
    </>
  );
}
