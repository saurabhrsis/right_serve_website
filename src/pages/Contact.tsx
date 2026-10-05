import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CONTACT_FAQS } from '@/data/faqs'
import { MAILTO_LINK, MAPS_EMBED, MAPS_LINK, SITE, TEL_LINK, WHATSAPP_LINK } from '@/data/site'
import ContactForm from '@/components/ContactForm'
import { PageHero, CTASection, FAQAccordion } from '@/components/sections'
import { Reveal, SectionHeading } from '@/components/ui'
import { trackOutbound } from '@/lib/analytics'

export default function Contact() {
  const cards = [
    {
      icon: <MapPin className="h-5 w-5" aria-hidden />,
      title: 'Office address',
      body: (
        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent-600">
          {SITE.contact.addressLine}
          <br />
          {SITE.contact.addressLine2}
        </a>
      ),
    },
    {
      icon: <Phone className="h-5 w-5" aria-hidden />,
      title: 'Phone',
      body: (
        <span className="flex flex-col gap-1">
          {SITE.contact.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, '')}`}
              onClick={() => trackOutbound('phone', 'contact-page')}
              className="hover:text-accent-600"
            >
              {phone}
            </a>
          ))}
        </span>
      ),
    },
    {
      icon: <Mail className="h-5 w-5" aria-hidden />,
      title: 'Email',
      body: (
        <a href={MAILTO_LINK} onClick={() => trackOutbound('email', 'contact-page')} className="break-all hover:text-accent-600">
          {SITE.contact.email}
        </a>
      ),
    },
    {
      icon: <Clock className="h-5 w-5" aria-hidden />,
      title: 'Business hours',
      body: (
        <span className="flex flex-col gap-1">
          {SITE.contact.hours.map((slot) => (
            <span key={slot.days}>
              {slot.days}: {slot.time}
            </span>
          ))}
        </span>
      ),
    },
  ]

  return (
    <>


      <PageHero
        eyebrow="Get in touch"
        title="Contact Right Serve Infotech System"
        subtitle="Ready to transform your business? Tell us about your requirement and we will show you exactly how we can help — with timelines, scope and costs."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
        actions={
          <>
            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:-translate-y-0.5"
              onClick={() => trackOutbound('whatsapp', 'contact-hero')}
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp us
            </a>
            <a href={TEL_LINK} className="btn-ghost-light" onClick={() => trackOutbound('phone', 'contact-hero')}>
              <Phone className="h-4 w-4" aria-hidden /> {SITE.contact.phones[1]}
            </a>
          </>
        }
      />

      {/* Contact cards */}
      <section className="section bg-white pb-0">
        <div className="container-rsis grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 50} className="h-full">
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  {card.icon}
                </span>
                <h2 className="heading-3 mt-4 !text-base">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="section bg-white">
        <div className="container-rsis grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Enquiry form"
              title="Send us a message"
              subtitle="Every enquiry reaches our directors directly. Expect a reply within one business day — usually the same day."
              align="left"
            />
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              <ContactForm source="Contact page form" redirectToThankYou />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
              <iframe
                title="Right Serve Infotech System office location on Google Maps"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0"
              />
              <div className="space-y-3 bg-slate-50 p-5 text-sm text-ink-600">
                <p className="font-semibold text-brand-900">Visit our Nagpur office</p>
                <p>{SITE.contact.addressLine}</p>
                <p>{SITE.contact.addressLine2}</p>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="link-underline inline-block text-sm">
                  Get directions on Google Maps
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-accent-200 bg-accent-50/60 p-6 text-sm text-ink-600">
              <h2 className="font-display text-base font-bold text-brand-900">Looking for a quote?</h2>
              <p className="mt-2">
                Sharing these details helps us respond with a precise estimate: what you need built, who the users are, any
                existing software, your ideal timeline and an indicative budget range.
              </p>
              <p className="mt-3">
                Need an NDA first? Mention it in the form and we will send ours, or happily sign yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={CONTACT_FAQS}
        title="Right Serve knowledge hub"
        subtitle="Answers reflecting our commitment to clarity, innovation and building digital solutions that grow with your business."
      />

      <CTASection
        title="Your vision, our expertise — let's make it happen"
        subtitle="Whether it is building software, scaling infrastructure or crafting your digital presence, our team is ready to turn your ideas into reality."
        source="Contact page CTA"
        primaryLabel="Start a conversation"
      />
    </>
  )
}
