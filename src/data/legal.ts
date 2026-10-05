/**
 * Legal content.
 *
 * The website privacy policy and terms are adapted from the policy already
 * published by the company, reviewed for clarity and for the current enquiry
 * forms and analytics. The Hindu Bhakti (Bhajnarthi) app documents must remain
 * available at their original URLs for app store compliance, so their paths are
 * preserved and their content is reproduced with only formatting changes.
 */

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  path: string;
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
  seoTitle: string;
  seoDescription: string;
  breadcrumb: string;
}

export const privacyPolicy: LegalDocument = {
  path: '/privacy-policy',
  seoTitle: 'Privacy Policy | Right Serve Infotech System Pvt. Ltd.',
  seoDescription:
    'How Right Serve Infotech System Pvt. Ltd. collects, uses, stores and protects personal information submitted through this website and our business communications.',
  breadcrumb: 'Privacy Policy',
  title: 'Privacy Policy',
  updated: '2026-01-05',
  intro: [
    'RIGHT SERVE INFOTECH SYSTEM PRIVATE LIMITED ("Company", "we", "our", "us") is committed to protecting the privacy of visitors, clients, partners and job applicants who access rightserveinfotechsystem.com or contact us through it.',
    'This policy explains what information we collect, why we collect it, how it is used and protected, and the choices available to you. It applies to this website and to enquiries, quotations and recruitment applications received through it.',
  ],
  sections: [
    {
      heading: '1. Information we collect',
      paragraphs: ['We collect information in the following ways:'],
      bullets: [
        'Information you provide: name, company name, email address, phone number, service of interest, budget range, timeline and the description of your requirement submitted through our contact, quote or careers forms.',
        'Application information: for job applications, your experience, role of interest and any portfolio or CV link you share.',
        'Technical information: IP address, browser and device type, operating system and approximate location derived from the IP address.',
        'Usage information: pages visited, time on page, referral source and interactions, collected through privacy-respecting analytics where analytics is enabled.',
      ],
    },
    {
      heading: '2. How we use your information',
      bullets: [
        'To respond to your enquiry, prepare a quotation or arrange a product demonstration.',
        'To communicate about a project, proposal, support request or recruitment application.',
        'To improve website content, structure and performance.',
        'To meet legal, accounting or regulatory obligations.',
        'To send service-related updates where you have requested them.',
      ],
    },
    {
      heading: '3. Cookies and analytics',
      paragraphs: [
        'The website may use cookies or similar technologies for basic functionality and, where configured, to measure traffic so we can improve the site. Analytics and tag management identifiers are configured through environment configuration rather than hard-coded, and no such service is loaded if it has not been enabled.',
        'You can block or delete cookies in your browser settings. Blocking cookies may affect some site features, but you can always reach us by phone or email.',
      ],
    },
    {
      heading: '4. Sharing of information',
      paragraphs: [
        'We do not sell, rent or trade personal information. Information may be shared only in these circumstances:',
      ],
      bullets: [
        'With service providers who help us operate the website, email or hosting infrastructure, under confidentiality obligations.',
        'With team members who need the information to respond to your enquiry.',
        'With legal or regulatory authorities where we are required to do so by law.',
        'During a business restructuring, where information may transfer as part of the business assets, with the same protections continuing.',
      ],
    },
    {
      heading: '5. Data storage and security',
      paragraphs: [
        'Enquiry information is stored on secured systems with access limited to team members who need it. We use administrative and technical safeguards including secure connections, access control and regular backups.',
        'We retain enquiry and project information for as long as needed for the purposes above, or for the period required by applicable law, and delete or anonymise it afterwards. No system can be guaranteed completely immune from risk, so please avoid sending sensitive personal or financial information through the website forms.',
      ],
    },
    {
      heading: '6. Your choices and rights',
      bullets: [
        'Request access to the personal information we hold about you.',
        'Request correction or deletion of that information.',
        'Withdraw consent to further communication at any time.',
        'Ask us to stop using your information for a specific purpose.',
        'Request that we transfer information you provided to another organisation where technically possible.',
      ],
      paragraphs: [
        'To exercise any of these, contact us using the details at the end of this policy. We may need to verify your identity before acting on a request.',
      ],
    },
    {
      heading: '7. Third-party links',
      paragraphs: [
        'This website links to external websites such as maps, social media profiles and product references. We are not responsible for the content or privacy practices of those sites, and we recommend reviewing their policies separately.',
      ],
    },
    {
      heading: '8. Children',
      paragraphs: [
        'Our website and services are directed at businesses and adults. We do not knowingly collect personal information from anyone under the age of 18. If you believe a minor has provided information through this site, contact us and we will delete it.',
      ],
    },
    {
      heading: '9. Changes to this policy',
      paragraphs: [
        'We may update this policy to reflect changes in our practices or legal requirements. The updated date at the top of this page will change accordingly, and continued use of the website after an update indicates acceptance of the revised policy.',
      ],
    },
    {
      heading: '10. Contact us',
      paragraphs: [
        'For any question about this policy or the information we hold, write to us or call during working hours. Our contact details are listed on the contact page of this website.',
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  path: '/terms-and-conditions',
  seoTitle: 'Terms & Conditions | Right Serve Infotech System Pvt. Ltd.',
  seoDescription:
    'The terms and conditions that apply to the use of the Right Serve Infotech System website, its content and the enquiries submitted through it.',
  breadcrumb: 'Terms & Conditions',
  title: 'Terms & Conditions',
  updated: '2026-01-05',
  intro: [
    'These Terms and Conditions govern the use of the website rightserveinfotechsystem.com, operated by RIGHT SERVE INFOTECH SYSTEM PRIVATE LIMITED. By accessing or using this website you agree to these terms.',
    'Terms relating to a specific engagement — scope, delivery, payment and support — are set out separately in the proposal or agreement signed for that project. Those terms take precedence over anything on this website.',
  ],
  sections: [
    {
      heading: '1. Use of this website',
      bullets: [
        'You may view, download and print pages for your own business evaluation purposes.',
        'You may not republish, sell or redistribute content from this website without written permission.',
        'You may not attempt to gain unauthorised access to any part of the website, its systems or connected infrastructure.',
        'You may not use the website or its forms to send unlawful, misleading or unsolicited commercial content.',
      ],
    },
    {
      heading: '2. Information on this website',
      paragraphs: [
        'Content on this website describes our services, software products and delivered projects. Product descriptions and feature lists reflect the software as documented at the time of publication; implementations are configured per client and may differ in detail.',
        'Company information, pricing indications and timelines are provided for general information and do not constitute a binding offer. A binding commitment exists only in a written proposal or agreement signed by both parties.',
      ],
    },
    {
      heading: '3. Enquiries, quotations and proposals',
      bullets: [
        'Enquiries submitted through the website are requests for information and do not create a contract.',
        'Quotations are prepared for a defined scope and are valid for the period stated in the quotation.',
        'Requirements outside an agreed scope are estimated separately.',
        'Project schedules depend on timely client inputs, feedback and approvals, which are noted in the proposal.',
      ],
    },
    {
      heading: '4. Intellectual property',
      paragraphs: [
        'The content of this website — text, layout, graphics, code and product documentation — belongs to Right Serve Infotech System Pvt. Ltd. or is used with permission, and is protected by applicable intellectual property law.',
        'Ownership of software developed for a client is governed by the agreement for that project. Ownership and licensing terms for our own products are stated in the applicable proposal.',
      ],
    },
    {
      heading: '5. Client responsibilities',
      bullets: [
        'Providing accurate business information, masters and data required for implementation.',
        'Nominating a decision-maker who can approve scope, screens and changes.',
        'Maintaining the infrastructure, connectivity and credentials needed to operate the software.',
        'Keeping user credentials confidential and informing us promptly of any suspected misuse.',
      ],
    },
    {
      heading: '6. Support, maintenance and availability',
      paragraphs: [
        'Support arrangements, response expectations and maintenance scope for a project are defined in the applicable agreement. Website availability may be interrupted by maintenance, hosting issues or events outside our control.',
      ],
    },
    {
      heading: '7. Limitation of liability',
      paragraphs: [
        'This website and its content are provided on an "as is" basis. To the extent permitted by law, we are not liable for indirect or consequential loss arising from the use of this website or reliance on its content.',
        'Liability relating to a specific project is limited as set out in the agreement for that project. Nothing in these terms excludes liability that cannot be excluded under applicable law.',
      ],
    },
    {
      heading: '8. Third-party content and links',
      paragraphs: [
        'This website may reference third-party tools, platforms or services. Such references do not imply endorsement, partnership or certification unless explicitly stated. We are not responsible for third-party websites or their content.',
      ],
    },
    {
      heading: '9. Governing law',
      paragraphs: [
        'These terms are governed by the laws of India, and disputes are subject to the jurisdiction of the courts at Nagpur, Maharashtra.',
      ],
    },
    {
      heading: '10. Changes to these terms',
      paragraphs: [
        'We may update these terms from time to time. The updated date at the top of this page will change, and continued use of the website after an update indicates acceptance of the revised terms.',
      ],
    },
  ],
};

export const bhajanAppPrivacy: LegalDocument = {
  path: '/privacy-policy-bhajnarthi-app',
  seoTitle: 'Privacy Policy | Hindu Bhakti App by Right Serve Infotech System',
  seoDescription:
    'Privacy policy for the Hindu Bhakti mobile application published by Right Serve Infotech System Pvt. Ltd., covering the data the app does and does not collect.',
  breadcrumb: 'Privacy Policy — Hindu Bhakti App',
  title: 'Privacy Policy — Hindu Bhakti App',
  updated: '2025-12-20',
  intro: [
    'This privacy policy applies to the Hindu Bhakti mobile application ("the App") published by Right Serve Infotech System Pvt. Ltd.',
    'The App provides devotional content including Aarti, Bhajan, Shlok, Stotra and Chalisa for personal spiritual practice. We respect your privacy and designed the App to work without collecting personal information.',
  ],
  sections: [
    {
      heading: '1. Information the App does not collect',
      bullets: [
        'No account, login or registration is required.',
        'We do not collect your name, email address or phone number.',
        'We do not collect location data.',
        'We do not access your camera, microphone, contacts or files.',
        'We do not collect advertising identifiers or sell any data.',
      ],
    },
    {
      heading: '2. Information stored on your device',
      paragraphs: [
        'The App stores a small amount of preference data locally on your device so that it works the way you left it. This data is not transmitted to us. It includes your language preference, the Japa counter value and basic in-app display preferences.',
      ],
      bullets: [
        'Language preference stored locally.',
        'Japa counter value stored locally.',
        'Display and convenience settings stored locally.',
      ],
    },
    {
      heading: '3. Anonymous usage information',
      paragraphs: [
        'If anonymous usage statistics are enabled in a build of the App, they are limited to technical information such as app version and device type, used only to identify crashes and improve stability. This information cannot be used to identify you.',
      ],
    },
    {
      heading: '4. Permissions',
      paragraphs: [
        'The App requests only the permissions required for its features. It does not request access to personal data. You can review and manage permissions at any time in your device settings.',
      ],
    },
    {
      heading: '5. Third-party services',
      paragraphs: [
        'The App may be distributed through the Google Play Store, which processes installation and update information under its own privacy policy. Other than store distribution, the App does not rely on third-party services that collect personal data.',
      ],
    },
    {
      heading: '6. Children',
      paragraphs: [
        'The App contains devotional content suitable for all ages and does not collect personal information from any user, including children.',
      ],
    },
    {
      heading: '7. Changes to this policy',
      paragraphs: [
        'If the App changes in a way that affects this policy, we will update this page and revise the date above. Continued use of the App after an update indicates acceptance of the revised policy.',
      ],
    },
    {
      heading: '8. Contact',
      paragraphs: [
        'For questions about this policy or the App, contact us through the details published on the contact page of rightserveinfotechsystem.com.',
      ],
    },
  ],
};

export const bhajanAppTerms: LegalDocument = {
  path: '/terms-and-conditions-bhajnarthi-app',
  seoTitle: 'Terms & Conditions | Hindu Bhakti App by Right Serve Infotech System',
  seoDescription:
    'Terms and conditions governing the use of the Hindu Bhakti mobile application published by Right Serve Infotech System Pvt. Ltd.',
  breadcrumb: 'Terms & Conditions — Hindu Bhakti App',
  title: 'Terms & Conditions — Hindu Bhakti App',
  updated: '2025-12-20',
  intro: [
    'These terms govern the use of the Hindu Bhakti mobile application ("the App") published by Right Serve Infotech System Pvt. Ltd. By downloading or using the App you agree to these terms. If you do not agree, please do not use the App.',
  ],
  sections: [
    {
      heading: '1. Purpose of the App',
      paragraphs: [
        'The App is a devotional application intended for personal, non-commercial spiritual use. It provides content such as Aarti, Bhajan, Shlok, Stotra and Chalisa, along with Japa counting tools.',
      ],
    },
    {
      heading: '2. Use of content',
      paragraphs: [
        'Devotional content is provided for personal devotional use. You may not reproduce, republish or distribute the content commercially, or present it as your own, without written permission. Where content originates from other sources, credit is given within the App where known.',
      ],
    },
    {
      heading: '3. Acceptable use',
      bullets: [
        'Do not attempt to modify, reverse engineer or redistribute the App.',
        'Do not use the App in a way that is unlawful, disrespectful or harmful to other users.',
        'Do not use automated systems to extract content from the App.',
      ],
    },
    {
      heading: '4. Availability and changes',
      paragraphs: [
        'We may add, update or remove features and content to improve the App or to comply with store requirements. The App is provided free of charge and may be updated from time to time through the store.',
      ],
    },
    {
      heading: '5. Audio, media and connectivity',
      paragraphs: [
        'Some features may require an internet connection to stream audio or load content. Charges from your network provider apply as per your plan. Where content is cached on your device, it is for offline convenience only.',
      ],
    },
    {
      heading: '6. Disclaimer',
      paragraphs: [
        'The App is provided on an "as is" basis for personal devotional use. To the extent permitted by law, we are not liable for any indirect loss arising from use of the App. Nothing in the App constitutes religious, medical or legal advice.',
      ],
    },
    {
      heading: '7. Governing law',
      paragraphs: ['These terms are governed by the laws of India, with jurisdiction of the courts at Nagpur, Maharashtra.'],
    },
    {
      heading: '8. Contact',
      paragraphs: [
        'For questions about these terms or the App, contact us through the details published on the contact page of rightserveinfotechsystem.com.',
      ],
    },
  ],
};
