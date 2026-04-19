/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

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

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://findswimspots.com',
        name:'Find Swim Spots',dateModified:'2026-04-07',potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:'https://findswimspots.com/search?q={search_term_string}'},'query-input':'required name=search_term_string'},
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Organization',
        name:'Find Swim Spots',url:'https://findswimspots.com',
        description:'Directory of public swimming spots across the United States',
        dateModified:'2026-04-07',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'LocalBusiness',
        name:'Find Swim Spots Directory',url:'https://findswimspots.com',
        description:'Find public swimming holes, lakes, rivers, and beaches near you',
        areaServed:'United States',dateModified:'2026-04-07',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        dateModified:'2026-04-07',
        mainEntity:[
          {'@type':'Question',name:'How do I find a public swimming spot near me?',acceptedAnswer:{'@type':'Answer',text:'Use the Find Swim Spots directory to search by state, county, or city. Each listing includes the location type (lake, river, swimming hole, or beach), water quality information, parking availability, and amenities like restrooms and lifeguards.'}},
          {'@type':'Question',name:'Are public swimming spots free to use?',acceptedAnswer:{'@type':'Answer',text:'Many natural swimming spots are free, but some state parks and managed recreation areas charge a day-use fee ranging from $5 to $15 per vehicle. Always check the individual listing for current fee information before visiting.'}},
          {'@type':'Question',name:'Is it safe to swim in natural swimming holes?',acceptedAnswer:{'@type':'Answer',text:'Safety varies by location and conditions. Always check local water quality advisories before swimming, look for posted warnings about currents or depth, and never swim alone. Blue-green algae blooms can make water unsafe — check with local health departments for current advisories.'}},
          {'@type':'Question',name:'What should I bring to a public swimming spot?',acceptedAnswer:{'@type':'Answer',text:'Bring sunscreen, water shoes for rocky or uneven bottoms, a life jacket for children or non-swimmers, plenty of water to stay hydrated, and a first aid kit. Check whether lifeguards are on duty — many natural swimming areas are unguarded.'}},
          {'@type':'Question',name:'Do public swimming spots have restrooms and parking?',acceptedAnswer:{'@type':'Answer',text:'Facilities vary widely. Managed state park swim areas typically have restrooms, changing areas, and defined parking. Natural swimming holes on public land may have minimal or no facilities. Check individual listings for available amenities before your trip.'}},
        ],
      }) }} />

      <div style={{ background: '#1e1b4b', borderBottom: '3px solid #f59e0b', padding: '0.875rem 1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
        <strong style={{ color: '#f59e0b' }}>This directory is paused for editorial enrichment.</strong>{' '}
        Visit our active sites:{' '}
        <a href="https://soakusa.net" style={{ color: '#93c5fd', textDecoration: 'underline' }}>soakusa.net</a>
        {' | '}
        <a href="https://publicboatramps.com" style={{ color: '#93c5fd', textDecoration: 'underline' }}>publicboatramps.com</a>
        {' | '}
        <a href="https://fibertools.app" style={{ color: '#93c5fd', textDecoration: 'underline' }}>fibertools.app</a>
      </div>

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
          <div className="anim-fade-up anim-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="/browse-states" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: 'var(--radius-pill)', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.03em', background: 'var(--forest-mid)', color: 'white', textDecoration: 'none', transition: 'background 0.2s' }}>Browse by State →</a>
            <a href="/florida" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: 'var(--radius-pill)', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.03em', background: 'transparent', color: 'white', border: '2px solid rgba(168,230,192,0.4)', textDecoration: 'none', transition: 'background 0.2s' }}>View Sample Spots</a>
          </div>
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
                  <img src={getMapboxImage(spot.lat, spot.lng)} alt={spot.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{spot.city ? `${spot.city}, ` : ''}{spot.state}</span></div>
                    <h3 className="card-title">{spot.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{getSpotPreview(spot)}</p>
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

      {/* GEO Content */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--ivory)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', marginBottom: '0.75rem' }}>How to find the best swimming spot for your group</h2>
          <p style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.7, marginBottom: '0.75rem', color: '#2a4a35' }}>Search by state and filter by water type — lakes offer calmer water for families, rivers provide current and scenery, and swimming holes offer seclusion. Check water quality ratings and lifeguard status before visiting.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.75rem' }}>Matching the right spot to your group comes down to skill level and what the group enjoys. Families with young children do better at managed lake beaches with designated swim zones and lifeguards on duty. More experienced swimmers may prefer the solitude and scenery of a backcountry river hole. There are over 30,000 publicly accessible natural swimming areas in the United States managed by federal, state, and local agencies — the variety is enormous.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2.5rem' }}>Use the directory to filter by amenities and read the individual spot description to understand access difficulty, parking, and typical crowd levels before committing to a day trip.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', marginBottom: '0.75rem' }}>What water quality signs should I look for before swimming?</h2>
          <p style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.7, marginBottom: '0.75rem', color: '#2a4a35' }}>Look for posted water quality advisories, check the local health department website, and avoid water that appears green, has an unusual smell, or has visible foam — these can indicate harmful algae blooms.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.75rem' }}>Blue-green algae (cyanobacteria) affects thousands of water bodies every summer and can produce toxins harmful to humans and pets. Symptoms of exposure include skin rashes, stomach illness, and in severe cases liver damage. Always check your state health department's current advisories and the EPA's beach monitoring data before visiting any natural swimming area.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2.5rem' }}>The EPA monitors water quality at over 3,000 swimming beaches nationally through the BEACH Act program, providing public advisories when bacterial or algae levels exceed safe thresholds. For inland swimming holes not covered by the BEACH program, check with the county health department or the land management agency responsible for the site.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', marginBottom: '0.75rem' }}>When is the best time to visit public swimming spots?</h2>
          <p style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.7, marginBottom: '0.75rem', color: '#2a4a35' }}>Weekday mornings offer the least crowding at most public swimming areas. Peak season runs June through August — arriving before 10am on weekends dramatically reduces crowds at popular spots.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.75rem' }}>Water temperature peaks in July and August in most U.S. regions, making those months the most comfortable for extended swimming. In the South and Southwest, late May and early June can offer ideal conditions before summer heat and algae season peak. Mountain swimming holes, fed by snowmelt, often reach swimmable temperatures in late June and remain good through September.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2.5rem' }}>Shoulder season visits — May and September — reward early planners with lower crowds, intact parking, and often cleaner water. Many natural areas see 60–70% of their annual foot traffic in the eight weeks between July 4th and Labor Day.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', marginBottom: '0.75rem' }}>Are children safe at natural swimming areas?</h2>
          <p style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.7, marginBottom: '0.75rem', color: '#2a4a35' }}>Natural swimming areas require extra supervision for children — depths and currents can change rapidly and lifeguards are often absent. Life jackets are recommended for children under 12 at unguarded sites.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2.5rem' }}>Drowning is the second leading cause of unintentional injury death in the U.S. for children ages 1 to 14, according to the CDC — proper supervision and life jackets significantly reduce risk. When visiting natural swimming holes with children, look for listings that specifically note a designated shallow swimming area, gradual entry, and minimal current. Always assign a dedicated water watcher whose sole responsibility is keeping eyes on children in and near the water.</p>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(26,61,43,0.05)', borderLeft: '4px solid var(--forest-mid)', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--forest)', marginBottom: '0.75rem' }}>Further Reading</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><a href="https://www.epa.gov/beach-tech" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#0056b3', fontSize: '0.9rem' }}>EPA Swim Healthy — Beach monitoring and water quality resources</a></li>
              <li><a href="https://www.cdc.gov/healthywater/swimming" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#0056b3', fontSize: '0.9rem' }}>CDC Healthy Swimming — Safety guidelines and illness prevention</a></li>
              <li><a href="https://www.recreation.gov" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#0056b3', fontSize: '0.9rem' }}>U.S. Army Corps of Engineers — Recreation.gov facility finder</a></li>
            </ul>
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
