/**
 * Company facts.
 *
 * Every value in this file is taken from the existing Right Serve Infotech
 * System website, repository content or the company's own published profiles.
 * Values that still need a final confirmation from the business are listed in
 * docs/content-review-checklist.md — do not add unverified claims here.
 */

export const site = {
  name: 'Right Serve Infotech System',
  nameWithSuffix: 'Right Serve Infotech System Pvt. Ltd.',
  legalName: 'RIGHT SERVE INFOTECH SYSTEM PRIVATE LIMITED',
  shortName: 'RSIS',
  tagline: 'Custom software, business systems and industry solutions',
  url: 'https://rightserveinfotechsystem.com',
  description:
    'Right Serve Infotech System is a software development and technology solutions company in Nagpur, India. We build custom software, web and mobile applications, ERP systems and industry-specific business software.',
  /** The company has been delivering software and IT solutions since 2019. */
  workingSince: '2019',
  logo: '/assets/brand/rsis-logo.png',
  logoMark: '/assets/brand/rsis-mark.png',
  ogImage: '/assets/brand/og-cover.jpg',
  email: 'rightserveinfotechSystem@gmail.com',
  emailHref: 'mailto:rightserveinfotechSystem@gmail.com',
  phones: [
    { display: '+91 95450 73418', href: 'tel:+919545073418' },
    { display: '+91 86693 08288', href: 'tel:+918669308288' },
  ],
  /** WhatsApp uses the primary mobile number published on the website. */
  whatsapp: {
    number: '919545073418',
    display: '+91 95450 73418',
  },
  address: {
    street: '10, Saurabh Nagar-2, Besa Road, near Hanuman Mandir',
    locality: 'Saubhagya Nagar, Ghogali',
    city: 'Nagpur',
    region: 'Maharashtra',
    postalCode: '440034',
    country: 'IN',
    countryName: 'India',
  },
  addressOneLine:
    '10, Saurabh Nagar-2, Besa Road, near Hanuman Mandir, Saubhagya Nagar, Ghogali, Nagpur, Maharashtra 440034',
  geo: { latitude: '21.0718299', longitude: '79.090919' },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=10%2C%20Saurabh%20Nagar-2%2C%20Besa%20Rd%2C%20near%20Hanuman%20Mandir%2C%20Saubhagya%20Nagar%2C%20Ghogali%2C%20Nagpur%2C%20Maharashtra%20440034',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=10,+Saurabh+Nagar-2,+Besa+Rd,+near+Hanuman+Mandir,+Saubhagya+Nagar,+Ghogali,+Nagpur,+Maharashtra+440034&output=embed',
  hours: {
    weekdays: 'Monday – Saturday: 10:30 AM – 7:00 PM',
    sunday: 'Sunday: Closed',
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/rightserveinfotechSystem/' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/19xdRSCobX/' },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/right_serve_infotech_system?igsh=MWx5emYxYXdrbHM3Yg==',
    },
  ],
  /** Areas we genuinely serve from the Nagpur office. */
  areaServed: ['Nagpur', 'Maharashtra', 'India'],
  languages: ['English', 'Hindi', 'Marathi'],
} as const;

/** Google reCAPTCHA-free honeypot field name used by the enquiry forms. */
export const HONEYPOT_FIELD = 'company_website';

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;

export const defaultWhatsAppMessage =
  'Hello Right Serve Infotech System, I would like to discuss a software requirement.';
