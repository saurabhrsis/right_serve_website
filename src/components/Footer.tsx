import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { MAILTO_LINK, MAPS_LINK, SITE, TEL_LINK } from '@/data/site'
import { SERVICE_PILLARS } from '@/data/services'
import { INSIGHTS } from '@/data/insights'
import { trackEvent } from '@/lib/analytics'

const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Team', to: '/our-team' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Products', to: '/products' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/career' },
  { label: 'Contact', to: '/contact' },
  { label: 'Sitemap', to: '/sitemap' },
]

const SOCIALS = [
  { label: 'Facebook', href: SITE.socials.facebook, Icon: Facebook },
  { label: 'LinkedIn', href: SITE.socials.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: SITE.socials.instagram, Icon: Instagram },
  { label: 'X (Twitter)', href: SITE.socials.x, Icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-slate-300">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="container-rsis relative py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Company */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={SITE.images.logoMark} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
              <span>
                <span className="block font-display text-base font-extrabold text-white">Right Serve Infotech System</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">Pvt. Ltd. · Nagpur</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Software development, IT hardware &amp; infrastructure and digital marketing — one accountable partner for
              growing businesses across Nagpur, Maharashtra and India. Delivering since {SITE.foundingYear}.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.shortName} on ${label}`}
                  className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Services</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICE_PILLARS.map((pillar) => (
                <li key={pillar.slug}>
                  <Link to={pillar.path} className="font-semibold text-slate-200 transition-colors hover:text-accent-300">
                    {pillar.name}
                  </Link>
                  <ul className="mt-1 space-y-1">
                    {pillar.subServices.slice(0, 4).map((sub) => (
                      <li key={sub.slug}>
                        <Link to={`${pillar.path}/${sub.slug}`} className="text-[13px] text-slate-400 transition-colors hover:text-accent-300">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Company</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 transition-colors hover:text-accent-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-6 font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Latest guides</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {INSIGHTS.slice(0, 3).map((post) => (
                <li key={post.slug}>
                  <Link to={`/insights/${post.slug}`} className="text-slate-400 transition-colors hover:text-accent-300">
                    {post.title.length > 46 ? `${post.title.slice(0, 46)}…` : post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Contact</h2>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-slate-400 transition-colors hover:text-accent-300"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                <span>
                  {SITE.contact.addressLine}
                  <br />
                  {SITE.contact.addressLine2}
                </span>
              </a>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                <span className="flex flex-col gap-1">
                  {SITE.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      onClick={() => trackEvent('phone_click', { location: 'footer' })}
                      className="text-slate-400 transition-colors hover:text-accent-300"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </div>
              <a
                href={MAILTO_LINK}
                onClick={() => trackEvent('email_click', { location: 'footer' })}
                className="flex gap-3 break-all text-slate-400 transition-colors hover:text-accent-300"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                {SITE.contact.email}
              </a>
              <div className="flex gap-3 text-slate-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                <span>
                  {SITE.contact.hours.map((slot) => (
                    <span key={slot.days} className="block">
                      {slot.days}: {slot.time}
                    </span>
                  ))}
                </span>
              </div>
            </address>

            <a href={TEL_LINK} className="btn-accent mt-5 w-full" onClick={() => trackEvent('phone_click', { location: 'footer-cta' })}>
              <Phone className="h-4 w-4" aria-hidden />
              Call {SITE.contact.phones[1]}
            </a>
          </div>
        </div>

        {/* Service-area SEO line: real service areas only */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-400">
          <strong className="font-semibold text-slate-200">Serving:</strong> Nagpur, Wardha, Amravati, Bhandara, Chandrapur,
          Gondia, Nashik, Pune, Mumbai, Aurangabad and clients across India. On-site support in Nagpur and Vidarbha; remote
          delivery worldwide.
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName} All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/terms-and-conditions" className="transition-colors hover:text-accent-300">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy-policy" className="transition-colors hover:text-accent-300">
              Privacy Policy
            </Link>
            <Link to="/privacy-policy-bhajnarthi-app" className="transition-colors hover:text-accent-300">
              Bhajnarthi Privacy
            </Link>
            <Link to="/terms-and-conditions-bhajnarthi-app" className="transition-colors hover:text-accent-300">
              Bhajnarthi Terms
            </Link>
            <Link to="/sitemap" className="inline-flex items-center gap-1 transition-colors hover:text-accent-300">
              Sitemap <ArrowUpRight className="h-3 w-3" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
