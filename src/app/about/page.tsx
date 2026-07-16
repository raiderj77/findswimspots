import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const metadata: Metadata = {
  title: 'About the Find Swim Spots Rebuild',
  description: 'Learn what the imported Find Swim Spots records contain, what they do not establish, and the standard for future reviewed profiles.',
};

export default function AboutPage() {
  const withCity = locations.filter((location) => location.city).length;

  return (
    <article className="content-page">
      <p className="section-label">About this rebuild</p>
      <h1>Source transparency before recommendations</h1>
      <p className="lead">Find Swim Spots is being rebuilt from an imported coordinate directory into a smaller, source-backed resource. The current records are useful only as research leads.</p>

      <section>
        <h2>What the repository contains</h2>
        <ul>
          <li>{locations.length.toLocaleString()} names with latitude and longitude</li>
          <li>{withCity} records with a city field and {locations.length - withCity} without one</li>
          <li>{new Set(locations.map((location) => location.state)).size} region labels</li>
          <li>The same two generic labels, <code>Swimming</code> and <code>Public access</code>, on every record</li>
        </ul>
      </section>

      <section>
        <h2>What the repository does not contain</h2>
        <p>It does not record the original source, collection date, land manager, operator website, legal-access authority, swimming permission, water type, water quality, depth, currents, temperature, closures, fees, parking, accessibility, lifeguard status, or review date.</p>
        <p>For that reason, the generic labels and generated descriptions are not presented as current facts. A coordinate is not proof that an entrance exists, that the public may enter, that swimming is permitted, or that conditions are safe.</p>
      </section>

      <section>
        <h2>Publication standard</h2>
        <p>A future reviewed profile must identify the responsible operator or land manager, cite current primary sources, include a review date, and clearly distinguish ongoing facts from conditions that must be checked immediately before a visit.</p>
        <p>Water quality, weather, currents, closures, and posted rules can change. This site will not label a location safe, and it is not an emergency, weather, water-quality, or public-safety authority.</p>
      </section>

      <section>
        <h2>Corrections</h2>
        <p>If a record is inaccurate, restricted, private, unsafe to expose, or not a swimming location, please use the <Link href="/contact">contact instructions</Link>. Include the record URL and a current official source when possible.</p>
      </section>
    </article>
  );
}
