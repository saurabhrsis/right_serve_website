import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '@/components/LegalPage'
import { SITE } from '@/data/site'

const sections: LegalSection[] = [
  {
    title: '1. Acceptance of Terms',
    body: (
      <p>
        By accessing our website <Link to="/">rightserveinfotechsystem.com</Link> or using our software development, hardware
        or digital marketing services, you agree to be legally bound by these Terms &amp; Conditions. If you do not agree,
        please discontinue use of the website and services.
      </p>
    ),
  },
  {
    title: '2. Scope of Services',
    body: (
      <>
        <p>We provide:</p>
        <ul>
          <li>Custom software, website and mobile application development.</li>
          <li>ERP, CRM and business automation solutions.</li>
          <li>IT hardware supply, networking, CCTV and AMC support.</li>
          <li>Digital marketing services including SEO, advertising and content.</li>
        </ul>
        <p>
          The exact scope, deliverables, timelines and commercials for each engagement are defined in the written proposal or
          work order agreed with the client.
        </p>
      </>
    ),
  },
  {
    title: '3. Acceptable Use',
    body: (
      <ul>
        <li>Services must be used only for lawful business purposes.</li>
        <li>Unauthorised access, hacking, or reverse engineering is prohibited.</li>
        <li>You must not attempt to disrupt website or server operations.</li>
        <li>You are responsible for the accuracy of data and content supplied to us.</li>
      </ul>
    ),
  },
  {
    title: '4. Payments &amp; Billing',
    body: (
      <ul>
        <li>Payments must be made as per agreed proposals or invoices.</li>
        <li>Advance or milestone payments are non-refundable once work has commenced.</li>
        <li>Failure to pay may result in service suspension or termination.</li>
      </ul>
    ),
  },
  {
    title: '5. Project Timelines &amp; Approvals',
    body: (
      <p>
        Timelines are indicative and dependent on timely client feedback, approvals, content and access to systems. Delays in
        approvals may extend delivery dates correspondingly.
      </p>
    ),
  },
  {
    title: '6. Intellectual Property',
    body: (
      <p>
        Upon full payment, ownership of custom deliverables (source code, designs and documentation created specifically for
        the client) transfers to the client unless agreed otherwise in writing. Our pre-existing tools, frameworks,
        libraries and product platforms (including our ready-to-deploy products) remain our intellectual property and are
        licensed for use.
      </p>
    ),
  },
  {
    title: '7. Confidentiality',
    body: (
      <p>
        Both parties agree to maintain confidentiality of all business, technical, financial, and proprietary information
        exchanged during the engagement. We sign client NDAs on request.
      </p>
    ),
  },
  {
    title: '8. Limitation of Liability',
    body: (
      <p>
        RIGHT SERVE INFOTECH SYSTEM PVT. LTD. shall not be liable for any indirect, incidental, special, or consequential
        damages arising from service usage. Our total liability in any matter is limited to the fees paid for the specific
        service in question.
      </p>
    ),
  },
  {
    title: '9. Third-Party Integrations',
    body: (
      <p>
        We may integrate third-party tools, APIs, hosting or payment platforms. We are not responsible for service
        interruptions, policy changes or pricing changes caused by external providers.
      </p>
    ),
  },
  {
    title: '10. Termination of Services',
    body: (
      <p>
        We reserve the right to suspend or terminate services if these Terms are violated, payments are delayed, or unlawful
        activities are detected.
      </p>
    ),
  },
  {
    title: '11. Governing Law &amp; Jurisdiction',
    body: <p>These Terms shall be governed by and interpreted in accordance with the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts at Nagpur, Maharashtra.</p>,
  },
  {
    title: '12. Modifications to Terms',
    body: <p>We may revise these Terms at any time. Continued usage of the website or services indicates acceptance of the updated Terms.</p>,
  },
  {
    title: '13. Contact Information',
    body: (
      <p>
        For any legal, service-related, or compliance inquiries, contact us at{' '}
        <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a> or {SITE.contact.phones[0]}, or use our{' '}
        <Link to="/contact">contact form</Link>.
      </p>
    ),
  },
]

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="1 January 2026"
      breadcrumb={[{ name: 'Terms & Conditions', path: '/terms-and-conditions' }]}
      intro={
        <p>
          These Terms govern the access, usage, and delivery of our software development, IT hardware and digital marketing
          services.
        </p>
      }
      sections={sections}
    />
  )
}
