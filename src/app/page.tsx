/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Find Swimming Holes & Natural Water Spots Near You',
  description: 'Discover the best swimming holes, natural pools, and wild swim spots across the USA. Free directory with safety tips and local knowledge.',
};

const ALL_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const IMG_KEYWORDS = ['swimming+hole','waterfall+pool','river+swimming','natural+pool','creek+swimming','lake+swimming'];

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://findswimspots.com',
        name:'Find Swim Spots',potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:'https://findswimspots.com/search?q={search_term_string}'},'query-input':'required name=search_term_string'},
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(155deg, var(--forest) 0%, #0a2d1e 40%, #0b3d4f 100%)', overflow: 'hidden', padding: '7rem 1.5rem 8rem' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(168,230,192,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="anim-fade-up" style={{ display: 'inline-block', color: '#a8e6c0', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-display)', background: 'rgba(168,230,192,0.1)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid rgba(168,230,192,0.2)' }}>
            🌿 Wild Swimming Directory
          </p>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.4rem)', color: 'var(--white)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Discover <span style={{ color: '#a8e6c0' }}>Hidden</span> Swimming Holes<br />Across America
          </h1>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1.05rem', color: '#7ab89a', marginBottom: '2.75rem', maxWidth: '500px', margin: '0 auto 2.75rem', fontFamily: 'var(--font-display)', lineHeight: 1.65 }}>
            Natural pools, waterfalls, creek swims &amp; wild swimming spots — all free, all verified.
          </p>
          <form method="GET" action="/search" className="anim-fade-up anim-delay-3">
            <div className="search-wrap">
              <input type="text" name="q" placeholder="Search by state, city, or spot name…" className="search-input" />
              <button type="submit" className="search-btn">Find Spots</button>
            </div>
          </form>
        </div>
        <svg aria-hidden viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,40 C180,70 360,10 540,40 C720,70 900,10 1080,40 C1260,70 1380,30 1440,40 L1440,70 L0,70 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid rgba(26,61,43,0.07)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n:`${locations.length}+`, l:'Swim Spots' },
            { n:`${statesWithData}`, l:'States Covered' },
            { n:'100%', l:'Free Access' },
            { n:'Wild', l:'& Natural' },
          ].map(({n,l}) => (
            <div key={l} className="stat-item">
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">🌊 Top Picks</p>
          <h2 className="section-title">Featured Swim Spots</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>The most popular natural swimming locations across the US.</p>
          <div className="grid-3">
            {featured.map((spot, i) => (
              <Link key={spot.slug} href={`/${spot.stateSlug}/${spot.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <img src={`https://source.unsplash.com/800x500/?${IMG_KEYWORDS[i%IMG_KEYWORDS.length]}&sig=${i+1}`} alt={spot.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{spot.city ? `${spot.city}, ` : ''}{spot.state}</span></div>
                    <h3 className="card-title">{spot.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{spot.description.slice(0,110)}…</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {spot.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #0a2d1e 100%)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: '#a8e6c0', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>Simple Process</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--white)' }}>How to Find Your Spot</h2>
          </div>
          <div className="grid-3">
            {[
              { icon:'🗺️', title:'Browse by State', desc:'Pick your state to see all natural swimming holes and water spots in that area.' },
              { icon:'🔍', title:'Check Details', desc:'Review the spot description, amenities, GPS coordinates, and safety notes.' },
              { icon:'🏊', title:'Take the Plunge', desc:'Navigate to your chosen spot and experience the best wild swimming in America.' },
            ].map(({icon,title,desc}) => (
              <div key={title} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="step-num">{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: '#a8e6c0', fontSize: '1.15rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: '#6a9a78', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--forest)', marginBottom: '1.25rem' }}>{"America's Best Swimming Holes"}</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Swimming holes are one of nature's greatest gifts — cool, clear water surrounded by rock and forest, a world away from crowded pools and beach resorts. From the limestone-filtered springs of Florida to the glacial pools of the Pacific Northwest, the United States is home to thousands of natural swimming destinations waiting to be discovered.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Natural swimming spots come in many forms: deep creek holes carved by rushing water, mountain pools fed by snowmelt waterfalls, coastal tidal pools teeming with life, and thermally-heated springs that remain warm even in winter. Each has its own character and seasonal rhythm.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--forest)', marginTop: '2rem', marginBottom: '0.75rem' }}>Safety First</h3>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Wild swimming is exhilarating but requires care. Always check water quality reports before swimming, be aware of current and depth, never swim alone, and know your limits. Many natural spots have seasonal closures due to weather conditions or wildlife protection.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--forest)', marginTop: '2rem', marginBottom: '0.75rem' }}>Leave No Trace</h3>
          <p style={{ lineHeight: 1.85 }}>Natural swimming holes are fragile ecosystems. Pack out all trash, avoid using soaps or sunscreen in the water, and stay on established paths. Leave each spot exactly as you found it — or better.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(26,61,43,0.06)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">Common Questions</p>
            <h2 className="section-title">FAQ</h2>
          </div>
          {[
            { q:'Are swimming holes safe?', a:'Natural swimming spots vary in safety. Always check current conditions, water quality reports, and depth before entering. Never swim alone and be aware of underwater hazards like submerged rocks and strong currents.' },
            { q:'Do I need permission to swim in natural spots?', a:'Many natural swimming holes are on public land and freely accessible. Some are on private land — always check before accessing. Respect any closures or posted regulations.' },
            { q:'When is the best time to visit swimming holes?', a:'Most swimming holes are best in summer (June–September). Spring runoff can make some spots dangerous. Fall offers uncrowded conditions in milder climates.' },
            { q:'What should I bring?', a:'Bring water shoes, a dry bag, sunscreen, water, snacks, and a towel. A first aid kit is always wise. Check for parking requirements.' },
            { q:'How do I find swimming holes near me?', a:'Use our directory to browse by state. Each listing includes GPS coordinates for direct navigation.' },
          ].map(({q,a}) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Browse States */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">All 50 States</p>
            <h2 className="section-title">Browse by State</h2>
          </div>
          <div className="grid-states">
            {ALL_STATES.map((s) => (
              <Link key={s} href={`/${s.toLowerCase().replace(/\s+/g,'-')}`} className="state-link">{s}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--forest)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Ready to Take the Plunge?</h2>
          <p style={{ color: '#6a9a78', marginBottom: '2rem', lineHeight: 1.7, fontFamily: 'var(--font-display)' }}>Explore {locations.length}+ natural swim spots across {statesWithData} states — all free.</p>
          <Link href="/browse-states" className="btn" style={{ background: '#a8e6c0', color: 'var(--forest)', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, fontFamily: 'var(--font-display)', display: 'inline-flex' }}>Explore Swim Spots →</Link>
        </div>
      </section>
    </>
  );
}
