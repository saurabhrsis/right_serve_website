import LegalPage, { type LegalSection } from '@/components/LegalPage'

const sections: LegalSection[] = [
  {
    title: '1. Acceptance of Terms',
    body: <p>By downloading or using the Bhajnarthi devotional app (“App”), you agree to these Terms &amp; Conditions. If you do not agree, please uninstall the App.</p>,
  },
  {
    title: '2. Permitted Use',
    body: (
      <ul>
        <li>Use the App only for lawful and devotional purposes.</li>
        <li>Do not misuse, reverse engineer, or modify the App.</li>
        <li>Do not attempt to disrupt the App’s functionality.</li>
        <li>No commercial redistribution of content.</li>
      </ul>
    ),
  },
  {
    title: '3. Content Ownership',
    body: (
      <p>
        All devotional content, artwork, audio and design within the App is provided for personal spiritual use. Content may
        not be resold, republished or redistributed commercially without written permission.
      </p>
    ),
  },
  {
    title: '4. No Warranty',
    body: (
      <p>
        The App is provided “as is”. While we work to keep audio and text accurate and available offline, we do not warrant
        uninterrupted or error-free operation on every device.
      </p>
    ),
  },
  {
    title: '5. Limitation of Liability',
    body: <p>The developer shall not be liable for any indirect or consequential loss arising from the use of the App.</p>,
  },
  {
    title: '6. Changes to the App or Terms',
    body: <p>We may update the App or these Terms from time to time. Continued use of the App indicates acceptance of the revised Terms.</p>,
  },
  {
    title: '7. Contact',
    body: <p>For any questions regarding these Terms &amp; Conditions, email rightserveinfotechSystem@gmail.com.</p>,
  },
]

export default function BhajnarthiTerms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      accent="saffron"
      updated="20 December 2025"
      breadcrumb={[{ name: 'Bhajnarthi Terms & Conditions', path: '/terms-and-conditions-bhajnarthi-app' }]}
      intro={<p>Use the app with devotion and respect 🙏 — these terms describe permitted use of the Bhajnarthi app and its content.</p>}
      sections={sections}
    />
  )
}
