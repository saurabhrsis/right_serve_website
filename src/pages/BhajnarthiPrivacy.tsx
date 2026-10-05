import LegalPage, { type LegalSection } from '@/components/LegalPage'

const sections: LegalSection[] = [
  {
    title: '1. Introduction',
    body: (
      <p>
        The Hindu Bhakti app (“Bhajnarthi”, the “App”) provides devotional content including Aarti, Bhajan, Shlok, Stotra and
        Chalisa for personal spiritual practice. We respect your privacy and protect it completely.
      </p>
    ),
  },
  {
    title: '2. Data We Do NOT Collect',
    body: (
      <ul>
        <li>No login or registration.</li>
        <li>No email, phone number or name.</li>
        <li>No location tracking.</li>
        <li>No camera or microphone access.</li>
      </ul>
    ),
  },
  {
    title: '3. Data Stored on Your Device Only',
    body: (
      <ul>
        <li>Language preference.</li>
        <li>Japa counter value.</li>
        <li>Anonymous usage statistics.</li>
      </ul>
    ),
  },
  {
    title: '4. Where Your Data Lives',
    body: (
      <p>
        All data is stored locally on your device. There are no servers, no cloud storage and no data transmission of any
        kind. Uninstalling the App removes this data.
      </p>
    ),
  },
  {
    title: '5. No Advertising or Tracking',
    body: (
      <ul>
        <li>No ads.</li>
        <li>No third-party analytics.</li>
        <li>No tracking.</li>
      </ul>
    ),
  },
  {
    title: '6. Permissions',
    body: (
      <ul>
        <li>No internet required for devotional content.</li>
        <li>No camera, contacts or location permissions.</li>
      </ul>
    ),
  },
  {
    title: '7. Content &amp; Age Rating',
    body: (
      <ul>
        <li>Offline devotional content — works without a network connection.</li>
        <li>Rated: Everyone.</li>
      </ul>
    ),
  },
  {
    title: '8. Contact',
    body: <p>For any questions about this policy, email us at rightserveinfotechSystem@gmail.com.</p>,
  },
]

export default function BhajnarthiPrivacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      accent="saffron"
      updated="20 December 2025"
      breadcrumb={[{ name: 'Bhajnarthi Privacy Policy', path: '/privacy-policy-bhajnarthi-app' }]}
      intro={<p>Your bhakti, your data, your device 🙏 — a plain-language summary of how the Bhajnarthi app handles (and does not handle) your information.</p>}
      sections={sections}
    />
  )
}
