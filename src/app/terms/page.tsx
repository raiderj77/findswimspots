import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Terms of Service',
    description: 'Terms of service for Find Swim Spots',
  };
}

export default function TermsPage() {
  return (
    <article style={{ paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#0056b3', marginBottom: '1.5rem' }}>Terms of Service</h1>

      <p style={{ color: '#666', fontStyle: 'italic' }}>Last updated: April 4, 2026</p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Agreement to Terms</h2>
        <p>
          By accessing and using the findswimspots.com website and service (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on Find Swim Spots's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>Modifying or copying the materials</li>
          <li>Using the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
          <li>Attempting to decompile or reverse engineer any software contained on the website</li>
          <li>Removing any copyright or other proprietary notations from the materials</li>
          <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Disclaimer</h2>
        <p>
          The materials on Find Swim Spots's website are provided "as is" without any express or implied warranty of any kind, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Further, Find Swim Spots does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Safety Disclaimer</h2>
        <p style={{ fontWeight: 'bold', backgroundColor: '#fff3cd', padding: '1rem', borderRadius: '4px', borderLeft: '4px solid #ffc107' }}>
          Swimming in natural water bodies carries inherent risks. Users are entirely responsible for their own safety. Never swim alone. Always verify water conditions, weather, and access rights before visiting any location. Check for water quality warnings, dangerous currents, or hazards. Respect all posted signs and warnings. The information provided on this website is for informational purposes only and does not guarantee safety or suitability of any location.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Limitations</h2>
        <p>
          In no event shall Find Swim Spots or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Find Swim Spots's website, even if Find Swim Spots or an authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Accuracy of Materials</h2>
        <p>
          The materials appearing on Find Swim Spots's website could include technical, typographical, or photographic errors. Find Swim Spots does not warrant that any of the materials on the website are accurate, complete, or current. Find Swim Spots may make changes to the materials contained on its website at any time without notice. However, Find Swim Spots does not make any commitment to update the materials.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Links</h2>
        <p>
          Find Swim Spots has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Find Swim Spots of the site. Use of any such linked website is at the user's own risk.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Modifications</h2>
        <p>
          Find Swim Spots may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>User Content</h2>
        <p>
          By submitting, posting, or displaying content on Find Swim Spots, you grant Find Swim Spots a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content. You represent and warrant that you own or have the necessary rights to the content you submit.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Prohibited Activities</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website for any unlawful purpose or in violation of any applicable laws</li>
          <li>Harass, threaten, defame, or otherwise abuse other users</li>
          <li>Attempt to gain unauthorized access to the website or its systems</li>
          <li>Interfere with or disrupt the website or its services</li>
          <li>Collect or track personal information of others without consent</li>
          <li>Spam or flood the website with unsolicited messages</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at <strong>contact@findswimspots.com</strong>.
        </p>
      </section>
    </article>
  );
}
