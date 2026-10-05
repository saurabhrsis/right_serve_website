import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import { site, whatsappLink, defaultWhatsAppMessage } from '../../data/site';
import { servicesNav } from '../../data/services';
import { solutionsNav } from '../../data/solutions';
import { trackEvent } from '../../services/analytics';

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const socialIcons: Record<string, string> = {
  LinkedIn: 'Briefcase',
  Facebook: 'Users',
  Instagram: 'Gem',
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container container--wide">
        <div className="site-footer__top">
          <div>
            <div className="site-footer__brand">
              <img src={site.logoMark} alt="" width={46} height={46} loading="lazy" decoding="async" />
              <span>
                <span className="site-footer__brand-name">Right Serve Infotech System</span>
                <span className="site-footer__brand-sub">Private Limited · Nagpur, India</span>
              </span>
            </div>
            <p>
              A software development and technology company based in Nagpur, Maharashtra. We build custom software,
              web and mobile applications, ERP systems and industry-specific business software, and support the IT
              infrastructure our clients run them on.
            </p>
            <div className="site-footer__socials">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${social.label}`}
                  onClick={() => trackEvent('social_click', { network: social.label })}
                >
                  <Icon name={socialIcons[social.label] ?? 'Globe'} size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>Services</h3>
            <ul className="site-footer__list">
              {servicesNav.slice(0, 6).map((service) => (
                <li key={service.path}>
                  <Link to={service.path}>{service.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/services">All services</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Solutions</h3>
            <ul className="site-footer__list">
              {solutionsNav.map((solution) => (
                <li key={solution.path}>
                  <Link to={solution.path}>{solution.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/solutions">All solutions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="site-footer__contact">
              <li>
                <Icon name="MapPin" size={17} />
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {site.addressOneLine}
                </a>
              </li>
              {site.phones.map((phone) => (
                <li key={phone.href}>
                  <Icon name="Phone" size={17} />
                  <a href={phone.href} onClick={() => trackEvent('phone_click', { source: 'footer' })}>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <Icon name="Mail" size={17} />
                <a href={site.emailHref} onClick={() => trackEvent('email_click', { source: 'footer' })}>
                  {site.email}
                </a>
              </li>
              <li>
                <Icon name="Clock" size={17} />
                <span>
                  {site.hours.weekdays}
                  <br />
                  {site.hours.sunday}
                </span>
              </li>
            </ul>
            <div className="btn-row mt-5">
              <a
                className="btn btn--ghost-light btn--sm"
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'footer' })}
              >
                <Icon name="MessageCircle" size={16} />
                WhatsApp
              </a>
              <Link className="btn btn--light btn--sm" to="/request-quote">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="mb-0">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="site-footer__legal">
            {companyLinks.slice(0, 3).map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/sitemap.xml">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
