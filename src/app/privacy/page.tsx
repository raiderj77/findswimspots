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

      <p style={{ color: '#666', fontStyle: 'italic' }}>Last updated: April 6, 2026</p>

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
            <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to: Email address, Cookies and Usage Data.
          </li>
          <li>
            <strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (IP address), browser type, browser version, the pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
          </li>
          <li>
            <strong>Cookies and Tracking Data:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Use of Data</h2>
        <p>Find Swim Spots uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve the Service</li>
          <li>To monitor the usage of the Service</li>
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
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>AdSense and Advertising</h2>
        <p>
          We use Google AdSense to display advertisements on our website. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visits to this and other websites on the Internet.
        </p>
        <p>
          We work with third-party advertising partners, including Google, who may use cookies to serve ads based on your prior visits to this website or other websites.
        </p>
        <p>
          Google AdSense may collect and use the following information:
        </p>
        <ul>
          <li>Cookies</li>
          <li>Information about user behavior and interests</li>
          <li>IP addresses</li>
          <li>Browser and device information</li>
        </ul>
        <p>
          For more information about Google's privacy practices, please visit the Google Privacy & Terms page: <a href="https://policies.google.com/privacy" style={{ color: '#0056b3' }}>https://policies.google.com/privacy</a>
        </p>
        <p>
          You may opt out of personalized advertising by visiting{' '}
          <a href="https://ads.google.com/settings" rel="nofollow" style={{ color: '#0056b3' }}>Google Ad Settings</a>
          {' '}or the{' '}
          <a href="https://optout.aboutads.info" rel="nofollow" style={{ color: '#0056b3' }}>Digital Advertising Alliance opt-out page</a>.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3' }}>Children's Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we discover that a Child has provided us with Personal Data, we will delete such information and terminate the Child's account immediately.
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
