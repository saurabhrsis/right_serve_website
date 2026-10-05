import LegalPage, { type LegalSection } from '@/components/LegalPage'
import { Link } from 'react-router-dom'

const sections: LegalSection[] = [
  {
    title: '1. Information We Collect',
    body: (
      <ul>
        <li>Personal details such as name, email address, phone number, company name, and designation.</li>
        <li>Business communication data shared via emails, forms, or calls.</li>
        <li>Technical data including IP address, browser type, device details, and operating system.</li>
        <li>Usage data such as pages visited, time spent, and interaction patterns.</li>
      </ul>
    ),
  },
  {
    title: '2. Legal Basis for Data Processing',
    body: (
      <>
        <p>We collect and process personal information based on:</p>
        <ul>
          <li>Your consent when submitting forms or inquiries.</li>
          <li>Contractual necessity to deliver services.</li>
          <li>Legal obligations under applicable laws.</li>
          <li>Legitimate business interests such as service improvement.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. How We Use Your Information',
    body: (
      <ul>
        <li>To provide, manage, and improve our IT and software services.</li>
        <li>To communicate regarding projects, proposals, or support.</li>
        <li>To send important service-related or operational updates.</li>
        <li>To improve website functionality and customer experience.</li>
      </ul>
    ),
  },
  {
    title: '4. Cookies &amp; Tracking Technologies',
    body: (
      <p>
        We use cookies, pixels, and analytics tools to understand user behaviour and enhance website performance. You can
        manage or disable cookies through your browser settings; however, some features may not function properly. Essential
        cookies are required for the website to operate, while analytics cookies are optional and can be declined through
        our cookie notice.
      </p>
    ),
  },
  {
    title: '5. Data Sharing &amp; Third-Party Disclosure',
    body: (
      <>
        <p>We do not sell, rent, or trade personal data. Information may be shared only with:</p>
        <ul>
          <li>Trusted service providers under confidentiality agreements.</li>
          <li>Legal or regulatory authorities if required by law.</li>
          <li>Technology partners strictly for service execution.</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. International Data Transfers',
    body: (
      <p>
        If data is transferred outside India, we ensure appropriate safeguards are in place to protect your information in
        accordance with applicable data protection laws.
      </p>
    ),
  },
  {
    title: '7. Data Security Measures',
    body: (
      <p>
        We employ administrative, technical, and physical security controls including encryption, access control, and
        secure servers. Despite best practices, no system is completely immune from cyber risks.
      </p>
    ),
  },
  {
    title: '8. Data Retention Policy',
    body: (
      <p>
        Personal data is retained only for the duration necessary to fulfil contractual, legal, or business requirements
        and is securely deleted thereafter.
      </p>
    ),
  },
  {
    title: '9. Your Privacy Rights',
    body: (
      <>
        <p>Subject to applicable laws, you may have the right to:</p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request correction or deletion of information.</li>
          <li>Withdraw consent for data processing.</li>
          <li>Request data portability where applicable.</li>
        </ul>
      </>
    ),
  },
  {
    title: '10. Third-Party Website Links',
    body: (
      <p>
        Our website may include links to external websites. We are not responsible for their privacy practices or content
        and advise reviewing their respective privacy policies.
      </p>
    ),
  },
  {
    title: '11. Children’s Privacy',
    body: <p>Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal data from minors.</p>,
  },
  {
    title: '12. Changes to This Privacy Policy',
    body: (
      <p>
        We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and
        continued usage constitutes acceptance of the revised policy.
      </p>
    ),
  },
  {
    title: '13. Contact &amp; Grievance Information',
    body: (
      <p>
        For questions, concerns, or data-related requests, please contact us through our official website or authorised
        business communication channels. See our{' '}
        <Link to="/contact">contact page</Link> for phone numbers, email and office address.
      </p>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 January 2026"
      breadcrumb={[{ name: 'Privacy Policy', path: '/privacy-policy' }]}
      intro={
        <p>
          <strong>RIGHT SERVE INFOTECH SYSTEM PVT. LTD.</strong> (“Company”, “we”, “our”, “us”) is committed to protecting the
          privacy of visitors, clients, and partners who access rightserveinfotechsystem.com. This Privacy Policy outlines
          how your information is collected, used, and protected.
        </p>
      }
      sections={sections}
    />
  )
}
