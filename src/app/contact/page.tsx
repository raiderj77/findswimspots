import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corrections and Source Submissions',
  description: 'Report a Find Swim Spots record problem or submit a current primary source for editorial review.',
};

export default function ContactPage() {
  return (
    <article className="content-page">
      <p className="section-label">Corrections and sources</p>
      <h1>Help us review a record</h1>
      <p className="lead">Email <strong>contact@findswimspots.com</strong>. This inbox is for record corrections, safety-sensitive removal requests, and current primary-source submissions.</p>

      <section>
        <h2>Report a problem</h2>
        <p>Use the subject line <strong>Location correction</strong> and include:</p>
        <ul>
          <li>The exact Find Swim Spots record URL</li>
          <li>What appears wrong or unsafe to publish</li>
          <li>A current operator, land-manager, local-government, public-health, or other primary-source URL when available</li>
          <li>Whether the issue involves private property, restricted access, a closure, no-swimming rule, or an incorrect coordinate</li>
        </ul>
        <p>For an immediate hazard or emergency, contact the responsible local authority or emergency services. Emailing this site is not a substitute for an official report.</p>
      </section>

      <section>
        <h2>Suggest a future reviewed profile</h2>
        <p>A name or coordinate alone is not enough. Include the responsible operator or land manager, a current official page confirming the designated use and access rules, and any official water-quality or conditions page. Submission does not guarantee publication.</p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>Email messages are processed so the request can be reviewed and answered. Do not send sensitive personal information. See the <Link href="/privacy">Privacy Policy</Link>.</p>
      </section>
    </article>
  );
}
