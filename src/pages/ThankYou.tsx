import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { SITE, TEL_LINK, WHATSAPP_LINK } from '@/data/site'
import { trackOutbound } from '@/lib/analytics'

export default function ThankYou() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20 text-white">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="container-rsis relative max-w-3xl text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <CheckCircle2 className="h-8 w-8 text-emerald-300" aria-hidden />
        </span>
        <h1 className="heading-1 mt-6 !text-white">Thank you — your enquiry is with us</h1>
        <p className="mt-5 text-slate-200">
          A member of our team will contact you within one business day (often much sooner). If your requirement is urgent,
          message us on WhatsApp or call us directly — we are available Monday to Saturday, 10:30 AM to 7:00 PM.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_LINK()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#25D366] text-white hover:-translate-y-0.5"
            onClick={() => trackOutbound('whatsapp', 'thank-you')}
          >
            <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp us now
          </a>
          <a href={TEL_LINK} className="btn bg-white text-brand-900 hover:-translate-y-0.5" onClick={() => trackOutbound('phone', 'thank-you')}>
            <Phone className="h-4 w-4" aria-hidden /> {SITE.contact.phones[1]}
          </a>
        </div>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {[
            { title: 'Browse our work', to: '/portfolio', text: 'See projects similar to your requirement.' },
            { title: 'Read our guides', to: '/insights', text: 'Transparent pricing and planning advice.' },
            { title: 'Explore services', to: '/services/software', text: 'Software, hardware and marketing capabilities.' },
          ].map((item) => (
            <Link key={item.to} to={item.to} className="glass rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
              <span className="flex items-center gap-2 font-display text-sm font-bold text-white">
                {item.title} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="mt-1.5 block text-xs text-slate-200">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
