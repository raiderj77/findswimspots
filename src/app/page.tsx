import type { Metadata } from 'next';
import { STATES } from './states';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export function generateMetadata(): Metadata {
  return {
    title: 'Find Swimming Holes & Natural Water Spots Near You',
    description: 'Find the best swimming holes, natural pools, and water spots across the US. Free directory of tested swim spots with safety ratings and local tips.',
    openGraph: {
      title: 'Find Swimming Holes & Natural Water Spots Near You',
      description: 'Find the best swimming holes, natural pools, and water spots across the US.',
      url: 'https://findswimspots.com',
    },
  };
}

const faqs = [
  {
    question: 'Is it safe to swim in natural water holes?',
    answer: 'Natural water swimming carries inherent risks. Always check local conditions, water quality, weather, and follow posted warnings. Never swim alone, and be aware of currents, depth, and water temperature.',
  },
  {
    question: 'What is the best time to visit swimming holes?',
    answer: 'Summer months (June-August) are peak season, with warmer water temperatures. However, spring and early fall can offer pleasant swimming conditions with fewer crowds. Always check seasonal conditions before visiting.',
  },
  {
    question: 'How is water quality monitored at these swim spots?',
    answer: 'Water quality varies by location and season. We recommend checking with local environmental agencies and park services for current water quality reports before visiting any spot.',
  },
  {
    question: 'Are pets allowed at swimming holes?',
    answer: 'Policies vary by location. Some natural areas allow dogs, while others restrict them. Check local park regulations before bringing pets to any swim spot.',
  },
  {
    question: 'Do I need a permit to swim at these locations?',
    answer: 'Most public swimming holes do not require permits, but some protected areas may have restrictions. Always verify access rules and respect private property.',
  },
];

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Find Swim Spots',
    url: 'https://findswimspots.com',
    description: 'A free directory of swimming holes and natural water spots across the United States',
    image: 'https://findswimspots.com/og-image.jpg',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://findswimspots.com',
    name: 'Find Swim Spots',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://findswimspots.com/search?q={search_term_string}',
      },
      query_input: 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0056b3' }}>Find Swimming Holes Near You</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Discover pristine natural water spots, mountain creeks, and scenic swimming holes across the United States. Find tested locations with safety tips and local knowledge.
          </p>

          {/* Search Bar */}
          <form
            style={{
              display: 'flex',
              gap: '0.5rem',
              maxWidth: '500px',
              margin: '0 auto 2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
            action="/search"
            method="get"
          >
            <input
              type="text"
              name="q"
              placeholder="Search by city or state..."
              style={{
                flex: '1',
                minWidth: '200px',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0056b3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </form>
        </section>

        {/* Featured Listings */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0056b3' }}>Featured Swimming Holes</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            {locations.slice(0, 6).map((location) => (
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
                <h3 style={{ marginTop: 0, color: '#0056b3' }}>
                  <a href={`/${location.stateSlug}/${location.slug}`} style={{ textDecoration: 'none', color: '#0056b3' }}>
                    {location.name}
                  </a>
                </h3>
                <p style={{ margin: '0.5rem 0', color: '#666' }}>
                  <strong>{location.city}, {location.state}</strong>
                </p>
                <p style={{ margin: '1rem 0', lineHeight: 1.5 }}>{location.description}</p>
                <p style={{ margin: '0.5rem 0', fontSize: '0.875rem', color: '#666' }}>
                  <strong>Amenities:</strong> {location.amenities.slice(0, 3).join(', ')}
                </p>
                <a
                  href={`/${location.stateSlug}/${location.slug}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    color: '#0056b3',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <section style={{ marginBottom: '3rem', lineHeight: 1.8 }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#0056b3' }}>About Swimming Holes</h2>
          <p>
            Swimming holes are natural water formations—creeks, rivers, lakes, and waterfalls—that offer opportunities for outdoor swimming and recreation. These pristine locations provide an escape from busy public pools and a chance to connect with nature. From mountain springs to scenic river bends, swimming holes offer unique experiences across diverse landscapes and climates.
          </p>
          <p>
            Our directory features tested swimming locations across the United States, each selected for water quality, accessibility, and natural beauty. Whether you're seeking a cool dip on a hot summer day or an adventurous exploration of hidden natural gems, Find Swim Spots helps you discover the perfect location.
          </p>

          <h3 style={{ fontSize: '1.2rem', color: '#0056b3', marginTop: '2rem' }}>Safety First: Swimming in Natural Water</h3>
          <p>
            Swimming in natural water bodies carries inherent risks. Always prioritize safety when visiting any swim spot:
          </p>
          <ul style={{ lineHeight: 2 }}>
            <li>
              <strong>Check Conditions:</strong> Before visiting, research current water conditions, weather forecasts, and any posted warnings or closures. Water conditions can change rapidly.
            </li>
            <li>
              <strong>Never Swim Alone:</strong> Always bring a buddy or visit with a group. Having someone present increases safety and allows for quick assistance if needed.
            </li>
            <li>
              <strong>Verify Water Quality:</strong> Check with local environmental agencies or park services for water quality reports. Some locations test for harmful bacteria or algae blooms.
            </li>
            <li>
              <strong>Respect Warnings:</strong> Obey all posted signs and warnings. If an area is marked as unsafe or closed, do not enter.
            </li>
            <li>
              <strong>Wear Appropriate Gear:</strong> Consider wearing a life jacket or water shoes, especially at unfamiliar locations or in strong currents.
            </li>
            <li>
              <strong>Be Aware of Surroundings:</strong> Watch for rocks, drop-offs, strong currents, and weather changes while in the water.
            </li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', color: '#0056b3', marginTop: '2rem' }}>How to Use This Directory</h3>
          <p>
            Browse our comprehensive directory by state or search for specific locations. Each listing includes detailed information about amenities, access points, and safety considerations. We recommend reading reviews and checking local resources before planning your visit to ensure the best and safest experience.
          </p>

          <h3 style={{ fontSize: '1.2rem', color: '#0056b3', marginTop: '2rem' }}>Best Seasons for Swimming</h3>
          <p>
            While swimming holes can be enjoyed year-round, different seasons offer unique experiences. Summer (June-August) provides the warmest water temperatures and is the most popular season. Spring and early fall offer pleasant swimming conditions with fewer crowds. Winter swimming is possible at some locations but requires careful preparation. Always check seasonal water temperatures and weather conditions before planning your visit.
          </p>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0056b3' }}>Frequently Asked Questions</h2>
          <div>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                <h3 style={{ color: '#0056b3', marginBottom: '0.5rem', fontSize: '1rem' }}>{faq.question}</h3>
                <p style={{ margin: 0, color: '#666' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by State */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0056b3' }}>Browse Swimming Holes by State</h2>
          <p style={{ marginBottom: '1.5rem' }}>Find swimming holes near you by browsing our state-by-state directory:</p>
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
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: '#0056b3',
                  backgroundColor: '#f9f9f9',
                  transition: 'all 0.2s',
                }}
              >
                {state.name}
              </a>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ textAlign: 'center', marginBottom: '2rem', padding: '2rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <h2 style={{ color: '#0056b3', marginTop: 0 }}>Ready to Find Your Next Swimming Adventure?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Explore our comprehensive directory of swimming holes and natural water spots across the United States.
          </p>
          <a
            href="/browse-states"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              backgroundColor: '#0056b3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '1.05rem',
              fontWeight: 'bold',
            }}
          >
            Browse All States
          </a>
        </section>
      </article>
    </>
  );
}
