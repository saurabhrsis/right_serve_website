import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Star } from 'lucide-react'
import type { Project } from '@/data/portfolio'
import type { Product } from '@/data/products'
import type { Insight } from '@/data/insights'
import type { SubService, ServicePillar } from '@/data/services'
import type { TeamMember } from '@/data/team'
import Icon from '@/components/Icon'
import { Img } from '@/components/ui'
import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/utils'

export function ServiceCard({ service, href, className }: { service: SubService; href: string; className?: string }) {
  return (
    <article className={cn('card card-hover group flex h-full flex-col', className)}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <h3 className="heading-3 !text-base">{service.name}</h3>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{service.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-ink-500">
        <span className="chip">From {service.priceFrom}</span>
        <span className="chip">{service.timeline}</span>
      </div>
      <Link
        to={href}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 transition-colors group-hover:text-accent-600"
      >
        Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </Link>
    </article>
  )
}

export function PillarCard({ pillar, className }: { pillar: ServicePillar; className?: string }) {
  return (
    <article className={cn('group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card', className)}>
      <Img
        src={pillar.heroImage}
        alt={pillar.heroImageAlt}
        className="h-44 w-full"
        imgClassName="group-hover:scale-105 transition-transform duration-700"
        width={640}
        height={360}
      />
      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
            <Icon name={pillar.icon} className="h-5 w-5" />
          </span>
          <h3 className="heading-3">{pillar.name}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">{pillar.summary}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-ink-600">
          {pillar.subServices.slice(0, 4).map((sub) => (
            <li key={sub.slug} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden />
              <Link to={`${pillar.path}/${sub.slug}`} className="hover:text-accent-600">
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to={pillar.path} className="btn-primary mt-5 w-full">
          View {pillar.subServices.length} services <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <article className={cn('group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card', className)}>
      <Img
        src={project.image}
        alt={`${project.title} project by Right Serve Infotech System`}
        className="h-48 w-full"
        imgClassName="group-hover:scale-105 transition-transform duration-700"
        width={640}
        height={384}
      />
      <div className="flex flex-1 flex-col p-5">
        <span className="chip w-fit">{project.category}</span>
        <h3 className="heading-3 mt-3 !text-base">{project.title}</h3>
        {project.client ? <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-accent-600">{project.client}</p> : null}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{project.description}</p>
        {project.highlights?.length ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.highlights.slice(0, 3).map((item) => (
              <li key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-ink-600">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  return (
    <article id={product.slug} className={cn('group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card', className)}>
      <div className="relative">
        <Img src={product.image} alt={`${product.name} software by Right Serve Infotech System`} className="h-44 w-full" width={640} height={352} />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="chip">{product.category}</span>
          {product.rating ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink-600">
              <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" aria-hidden />
              {product.rating}
            </span>
          ) : null}
        </div>
        <h3 className="heading-3 mt-3 !text-base">{product.name}</h3>
        <p className="text-xs font-semibold text-accent-600">{product.tagline}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{product.description}</p>
        <ul className="mt-3 space-y-1 text-[13px] text-ink-600">
          {product.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          {product.price ? <span className="text-sm font-bold text-brand-900">{product.price}</span> : <span />}
          <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-800 hover:text-accent-600">
            Request demo <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function TeamCard({ member, className }: { member: TeamMember; className?: string }) {
  return (
    <article className={cn('group overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-card', className)}>
      <Img
        src={member.image}
        alt={`${member.name}, ${member.position} at Right Serve Infotech System`}
        className="mx-auto h-28 w-28 rounded-full"
        imgClassName="group-hover:scale-105 transition-transform duration-500"
        width={224}
        height={224}
      />
      <h3 className="mt-4 font-display text-base font-bold text-brand-900">{member.name}</h3>
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">{member.position}</p>
      {member.bio ? <p className="mt-2 text-[13px] leading-relaxed text-ink-500">{member.bio}</p> : null}
    </article>
  )
}

export function InsightCard({ post, className }: { post: Insight; className?: string }) {
  return (
    <article className={cn('group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card', className)}>
      <Img
        src={post.image}
        alt={post.title}
        className="h-44 w-full"
        imgClassName="group-hover:scale-105 transition-transform duration-700"
        width={640}
        height={352}
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-ink-500">
          <span className="chip">{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3 className="heading-3 mt-3 !text-base">
          <Link to={`/insights/${post.slug}`} className="hover:text-accent-600">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
          <span>{post.readingTime}</span>
          <Link to={`/insights/${post.slug}`} className="inline-flex items-center gap-1 font-semibold text-brand-800 hover:text-accent-600">
            Read guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  )
}
