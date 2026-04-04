import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'About',
    description: 'Learn about Find Swim Spots and our mission to help people discover safe natural swimming locations.',
  };
}

export default function AboutPage() {
  return (
    <article style={{ paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#0056b3', marginBottom: '1.5rem' }}>About Find Swim Spots</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Our Mission</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
          Find Swim Spots exists to help people discover and safely enjoy swimming holes, natural pools, creeks, and scenic water spots across the United States. We believe that everyone should have access to high-quality information about natural swimming locations, from hidden mountain pools to riverside swimming holes.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>What We Do</h2>
        <p>
          We curate and maintain a comprehensive directory of swimming holes and natural water spots across all 50 US states. Our directory includes:
        </p>
        <ul style={{ lineHeight: 1.8 }}>
          <li><strong>Location Details:</strong> Name, address, coordinates, and detailed descriptions of each swimming hole</li>
          <li><strong>Amenities Information:</strong> What facilities and features are available at each location</li>
          <li><strong>Safety Guidelines:</strong> Important information about water conditions, access, and proper safety practices</li>
          <li><strong>Local Tips:</strong> Insights from people familiar with each location</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Safety First Philosophy</h2>
        <p>
          We believe that safety is paramount when swimming in natural water bodies. Every page includes detailed safety information and reminders about the inherent risks of natural water swimming. We encourage users to:
        </p>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Always check current water and weather conditions before visiting</li>
          <li>Never swim alone—always bring a buddy or group</li>
          <li>Verify water quality with local environmental agencies</li>
          <li>Respect all posted warnings and closures</li>
          <li>Be aware of currents, depth, and water temperature</li>
          <li>Wear appropriate safety gear when necessary</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>How We Select Locations</h2>
        <p>
          Swimming holes are included in our directory based on:
        </p>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Public accessibility and legal access rights</li>
          <li>General availability of information about conditions and amenities</li>
          <li>Geographic distribution across the United States</li>
          <li>Variety of types (waterfalls, mountain pools, rivers, etc.)</li>
        </ul>
        <p>
          All locations in our directory are public or legally accessible. We do not include private property or restricted areas.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Our Commitment</h2>
        <p>
          We are committed to:
        </p>
        <ul style={{ lineHeight: 1.8 }}>
          <li><strong>Accuracy:</strong> Providing accurate, up-to-date information about swimming locations</li>
          <li><strong>Safety:</strong> Emphasizing safety practices and warning users about potential risks</li>
          <li><strong>Accessibility:</strong> Making our directory easy to use and navigate</li>
          <li><strong>Respect:</strong> Respecting local communities, the environment, and access rights</li>
          <li><strong>Transparency:</strong> Being clear about our sources and methodology</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Legal Notice</h2>
        <p>
          The information on Find Swim Spots is provided for informational purposes only. We do not guarantee the accuracy or completeness of information about any location. Users are entirely responsible for verifying access rights, checking water conditions, and making their own safety decisions.
        </p>
        <p>
          Swimming in natural water bodies carries inherent risks of injury or death. Users assume all risk when visiting any location listed on this directory.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Contact Us</h2>
        <p>
          Have questions or suggestions? We'd like to hear from you! Please contact us at <strong>contact@findswimspots.com</strong>.
        </p>
      </section>
    </article>
  );
}
