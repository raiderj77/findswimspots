import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Privacy Policy',
    description: 'Privacy policy for Find Swim Spots',
  };
}

export default function PrivacyPage() {
  return (
    <article style={{ paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#0056b3', marginBottom: '1.5rem' }}>Privacy Policy</h1>

      <p style={{ color: '#666', fontStyle: 'italic' }}>Last updated: July 13, 2026</p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Introduction</h2>
        <p>
          Find Swim Spots ("we," "us," "our," or "Company") operates the findswimspots.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>

        <h3 style={{ fontSize: '1.1rem', color: '#555' }}>Types of Data Collected</h3>
        <ul>
          <li>
            <strong>Contact Data:</strong> If you contact us, we may process your email address and the information in your message to respond.
          </li>
          <li>
            <strong>Service and Security Data:</strong> Hosting and security providers may process request metadata such as IP address, browser type, requested page, and timestamp to deliver and protect the Service.
          </li>
          <li>
            <strong>Optional Tracking:</strong> Google AdSense, Google Analytics, and Microsoft Clarity are not currently enabled.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Use of Data</h2>
        <p>Find Swim Spots uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer support</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Security of Data</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>GDPR Privacy Rights</h2>
        <p>
          If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Find Swim Spots aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
        </p>
        <p>
          If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us at <strong>privacy@findswimspots.com</strong>.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>CCPA Privacy Rights (California Residents)</h2>
        <p>
          If you are a California resident, you are entitled to learn about the categories of personal information we collect, the purposes for which we use the information, and how we share it.
        </p>
        <p>
          California residents have the right to request deletion of collected information and the right to know what information is collected, used, and shared. To submit a request, please contact us at <strong>privacy@findswimspots.com</strong>.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>MODPA Privacy Rights (Maryland Residents)</h2>
        <p>
          Find Swim Spots complies with the <strong>Maryland Online Data Privacy Act (MODPA)</strong>, effective April 1, 2026. If you are a Maryland resident, you have the following consumer rights:
        </p>
        <ol style={{ marginLeft: '1.5rem' }}>
          <li><strong>Right to Access:</strong> Request what personal data we collect and how we use it.</li>
          <li><strong>Right to Correct:</strong> Request correction of inaccurate personal data.</li>
          <li><strong>Right to Delete:</strong> Request deletion of personal data we hold about you.</li>
          <li><strong>Right to Opt-Out:</strong> Opt out of the sale or targeted advertising of your personal data.</li>
          <li><strong>Right to Data Portability:</strong> Request a copy of your personal data in a portable format.</li>
        </ol>
        <p style={{ marginTop: '1rem' }}>
          <strong>Global Privacy Control (GPC):</strong> The Service does not currently sell personal data or run targeted advertising. If processing subject to an opt-out is introduced later, we will honor applicable GPC signals.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <strong>Data Sales:</strong> Find Swim Spots does <strong>not sell</strong> your personal data.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <strong>Response Timeline:</strong> We will respond to consumer rights requests within <strong>45 days</strong> of receipt.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          To submit a MODPA consumer rights request, contact us at <strong>privacy@findswimspots.com</strong> with your name, email, and the specific right you wish to exercise.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Advertising and Analytics Status</h2>
        <p>
          Google AdSense, Google Analytics, and Microsoft Clarity are not currently enabled. The Service does not load their scripts or set their advertising or analytics cookies.
        </p>
        <p>
          A publisher identifier may remain in ads.txt or public metadata solely for ownership verification. It does not itself place cookies or serve ads.
        </p>
        <p>
          If optional advertising or analytics is enabled later, this policy and any required consent and opt-out controls will be updated first.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Children's Privacy</h2>
        <p>
          Our Service is a general-audience directory and does not offer user accounts. We do not knowingly solicit personal information from children. If you believe a child sent us personal information, please contact us so we can address it.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p style={{ fontSize: '1.05rem' }}>
          <strong>Email:</strong> privacy@findswimspots.com
        </p>
      </section>
    </article>
  );
}
