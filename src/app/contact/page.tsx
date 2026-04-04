import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Contact',
    description: 'Get in touch with Find Swim Spots. Submit new swimming holes, ask questions, or report issues.',
  };
}

export default function ContactPage() {
  return (
    <article style={{ paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#0056b3', marginBottom: '1.5rem' }}>Contact Us</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Get In Touch</h2>
        <p>
          We'd love to hear from you! Whether you have questions, feedback, or want to suggest a new swimming hole, please don't hesitate to contact us.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Email</h2>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>contact@findswimspots.com</strong>
        </p>
        <p>
          Feel free to email us with any questions, suggestions, or feedback. We typically respond within 2-3 business days.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Submit a New Swimming Hole</h2>
        <p>
          Found a great swimming spot that you think should be in our directory? We're always looking to expand our listings! When you submit a new location, please include:
        </p>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Name of the location</li>
          <li>City and state</li>
          <li>Geographic coordinates (latitude and longitude)</li>
          <li>Description of the area and what makes it special</li>
          <li>Available amenities (parking, restrooms, hiking access, etc.)</li>
          <li>Safety considerations or hazards to be aware of</li>
          <li>Access information and any restrictions</li>
        </ul>
        <p>
          Email your submission to <strong>contact@findswimspots.com</strong> with "New Location Submission" in the subject line.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Report an Issue</h2>
        <p>
          If you've visited a location in our directory and found that information is outdated or inaccurate, or if there's a safety issue we should know about, please let us know. Your feedback helps us maintain the quality of our directory.
        </p>
        <p>
          Send reports to <strong>contact@findswimspots.com</strong> with "Location Update" or "Safety Issue" in the subject line.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Other Inquiries</h2>
        <p>
          For partnership opportunities, media inquiries, or other questions, please contact us at <strong>contact@findswimspots.com</strong>.
        </p>
      </section>

      <section style={{ marginBottom: '2rem', backgroundColor: '#f0f0f0', padding: '1.5rem', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0, color: '#0056b3' }}>Response Times</h2>
        <p>
          We strive to respond to all inquiries within 2-3 business days. During peak seasons or if we receive a high volume of submissions, response times may be longer. Thank you for your patience!
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Privacy</h2>
        <p>
          We respect your privacy. Any information you provide will be handled in accordance with our <a href="/privacy" style={{ color: '#0056b3', textDecoration: 'none' }}>Privacy Policy</a>.
        </p>
      </section>
    </article>
  );
}
