import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Clock, Mail, Menu, Phone, X } from 'lucide-react'
import { SITE, TEL_LINK, MAILTO_LINK } from '@/data/site'
import { SERVICE_PILLARS } from '@/data/services'
import { useLeadModal } from '@/components/LeadModal'
import { cn } from '@/lib/utils'
import { trackEvent } from '@/lib/analytics'
import Icon from '@/components/Icon'

type NavItem = { label: string; to: string; children?: { label: string; to: string; description?: string; icon?: string }[] }

export const NAV: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About Us', to: '/about', description: 'Our story, mission and values', icon: 'Award' },
      { label: 'Our Team', to: '/our-team', description: 'Meet the people behind RSIS', icon: 'Users' },
      { label: 'Careers', to: '/career', description: 'Open roles and internships', icon: 'GraduationCap' },
    ],
  },
  {
    label: 'Services',
    to: '/services/software',
    children: SERVICE_PILLARS.map((pillar) => ({
      label: pillar.name,
      to: pillar.path,
      description: pillar.summary,
      icon: pillar.icon,
    })),
  },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Products', to: '/products' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const location = useLocation()
  const { openLeadModal } = useLeadModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus whenever the route changes
  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
    setMobileSection(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors',
      isActive ? 'text-brand-900' : 'text-ink-600 hover:text-brand-800',
    )

  const isPillarActive = (path: string) => location.pathname.startsWith(path)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar - NAP consistency for local SEO */}
      <div className="hidden bg-brand-950 text-white lg:block">
        <div className="container-rsis flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href={TEL_LINK} className="flex items-center gap-1.5 hover:text-accent-300" onClick={() => trackEvent('phone_click', { location: 'header-topbar' })}>
              <Phone className="h-3.5 w-3.5" aria-hidden />
              <span>{SITE.contact.phones[0]}</span>
            </a>
            <a
              href={MAILTO_LINK}
              className="flex items-center gap-1.5 hover:text-accent-300"
              onClick={() => trackEvent('email_click', { location: 'header-topbar' })}
            >
              <Mail className="h-3.5 w-3.5" aria-hidden />
              <span>{SITE.contact.email}</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              <span>Mon–Sat: 10:30 AM – 7:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span>Software • Hardware • Digital Marketing</span>
            <span className="text-white/30">|</span>
            <span className="text-accent-300">Nagpur, Maharashtra</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={cn(
          'border-b transition-all duration-300',
          scrolled ? 'border-slate-200/80 bg-white/95 shadow-soft backdrop-blur-lg' : 'border-transparent bg-white',
        )}
      >
        <div className="container-rsis flex h-[68px] items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${SITE.name} home`}>
            <img src={SITE.images.logoMark} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-[15px] font-extrabold tracking-tight text-brand-900">Right Serve Infotech</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-600">System Pvt. Ltd.</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className={cn(
                      'flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors',
                      item.children.some((child) => location.pathname === child.to) || isPillarActive(item.to)
                        ? 'text-brand-900'
                        : 'text-ink-600 hover:text-brand-800',
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn('h-4 w-4 transition-transform', openMenu === item.label && 'rotate-180')} aria-hidden />
                  </button>

                  {openMenu === item.label ? (
                    <div
                      className={cn(
                        'absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3',
                        item.label === 'Services' ? 'w-[720px] max-w-[92vw]' : 'w-64',
                      )}
                    >
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-card">
                        {item.label === 'Services' ? (
                          <div className="grid gap-3 md:grid-cols-3">
                            {SERVICE_PILLARS.map((pillar) => (
                              <div key={pillar.slug} className="rounded-xl bg-slate-50/80 p-3">
                                <Link to={pillar.path} className="mb-2 flex items-center gap-2 font-display text-sm font-bold text-brand-900 hover:text-accent-600">
                                  <Icon name={pillar.icon} className="h-4 w-4 text-accent-500" />
                                  {pillar.name}
                                </Link>
                                <ul className="space-y-1.5">
                                  {pillar.subServices.slice(0, 6).map((sub) => (
                                    <li key={sub.slug}>
                                      <Link
                                        to={`${pillar.path}/${sub.slug}`}
                                        className="block rounded-md px-2 py-1 text-[13px] text-ink-600 transition-colors hover:bg-white hover:text-accent-700"
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                  <li>
                                    <Link
                                      to={pillar.path}
                                      className="block px-2 py-1 text-[13px] font-semibold text-brand-700 hover:text-accent-600"
                                    >
                                      View all {pillar.subServices.length} services →
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-1">
                            {item.children.map((child) => (
                              <li key={child.to}>
                                <NavLink
                                  to={child.to}
                                  className={({ isActive }) =>
                                    cn(
                                      'flex items-start gap-3 rounded-xl p-3 transition-colors',
                                      isActive ? 'bg-accent-50' : 'hover:bg-slate-50',
                                    )
                                  }
                                >
                                  {child.icon ? <Icon name={child.icon} className="mt-0.5 h-4 w-4 text-accent-500" /> : null}
                                  <span>
                                    <span className="block text-sm font-semibold text-brand-900">{child.label}</span>
                                    {child.description ? <span className="block text-xs text-ink-500">{child.description}</span> : null}
                                  </span>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={linkClasses} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                trackEvent('cta_click', { location: 'header' })
                openLeadModal({ source: 'Header CTA' })
              }}
              className="btn-accent hidden lg:inline-flex"
            >
              Get Free Consultation
            </button>
            <a href={TEL_LINK} className="btn-outline !px-3 lg:hidden" aria-label="Call Right Serve Infotech System">
              <Phone className="h-4 w-4" aria-hidden />
            </a>
            <button
              type="button"
              className="btn-outline !px-3 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div className="fixed inset-0 top-[68px] z-40 overflow-y-auto bg-white px-4 pb-24 pt-4 lg:hidden">
          <nav aria-label="Mobile navigation" className="space-y-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-xl border border-slate-200">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-brand-900"
                    aria-expanded={mobileSection === item.label}
                    onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={cn('h-4 w-4 transition-transform', mobileSection === item.label && 'rotate-180')} aria-hidden />
                  </button>
                  {mobileSection === item.label ? (
                    <div className="border-t border-slate-100 px-4 py-2">
                      {item.label === 'Services' ? (
                        SERVICE_PILLARS.map((pillar) => (
                          <div key={pillar.slug} className="py-2">
                            <Link to={pillar.path} className="block text-sm font-semibold text-brand-800">
                              {pillar.name}
                            </Link>
                            <ul className="mt-1 space-y-1">
                              {pillar.subServices.map((sub) => (
                                <li key={sub.slug}>
                                  <Link to={`${pillar.path}/${sub.slug}`} className="block py-1 text-[13px] text-ink-500">
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        item.children.map((child) => (
                          <Link key={child.to} to={child.to} className="block py-2 text-sm text-ink-600">
                            {child.label}
                          </Link>
                        ))
                      )}
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-xl px-4 py-3 text-sm font-semibold',
                      isActive ? 'bg-accent-50 text-brand-900' : 'text-ink-600',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <button
            type="button"
            onClick={() => {
              setMobileOpen(false)
              openLeadModal({ source: 'Mobile menu CTA' })
            }}
            className="btn-accent mt-5 w-full"
          >
            Get Free Consultation
          </button>

          <div className="mt-5 space-y-2 rounded-2xl bg-slate-50 p-4 text-sm">
            <a href={TEL_LINK} className="flex items-center gap-2 font-semibold text-brand-900">
              <Phone className="h-4 w-4 text-accent-500" aria-hidden /> {SITE.contact.phones[0]}
            </a>
            <a href={MAILTO_LINK} className="flex items-center gap-2 text-ink-600">
              <Mail className="h-4 w-4 text-accent-500" aria-hidden /> {SITE.contact.email}
            </a>
            <p className="text-xs text-ink-500">
              {SITE.contact.addressLine}, {SITE.contact.addressLine2}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  )
}
