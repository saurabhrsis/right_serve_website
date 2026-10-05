import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/* Scroll reveal (IntersectionObserver, respects reduced motion)       */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref as never} className={cn('reveal', className)}>
      {children}
    </Tag>
  )
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow ? (
        <span
          className={cn(
            'eyebrow mb-4',
            light && 'border-white/20 bg-white/10 text-accent-100',
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={cn('heading-2', light && 'text-white')}>{title}</h2>
      {subtitle ? (
        <p className={cn('lead mt-4', light && 'text-slate-200')}>{subtitle}</p>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Image with sane defaults (lazy + atomic layout + async decode)      */
/* ------------------------------------------------------------------ */
export function Img({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  priority = false,
  sizes,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}) {
  const [loaded, setLoaded] = useState(false)
  return (
    <span className={cn('block overflow-hidden bg-slate-100', className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchpriority: 'high' } : {})}
        onLoad={() => setLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          imgClassName,
        )}
      />
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Animated stat counter                                               */
/* ------------------------------------------------------------------ */
export function StatCounter({ value, label, caption, light = false }: { value: string; label: string; caption?: string; light?: boolean }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLDivElement | null>(null)
  const numeric = Number(value.replace(/[^\d.]/g, ''))
  const suffix = value.replace(/[\d.]/g, '')

  useEffect(() => {
    const node = ref.current
    if (!node || Number.isNaN(numeric) || numeric === 0) {
      setDisplay(value)
      return
    }
    let frame = 0
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return
      const duration = 1200
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        setDisplay(`${Math.round(progress * numeric)}${suffix}`)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
      observer.disconnect()
    })
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [numeric, suffix, value])

  return (
    <div ref={ref} className={cn('text-center sm:text-left', light && 'text-white')}>
      <div className={cn('font-display text-3xl font-extrabold sm:text-4xl', light ? 'text-white' : 'text-brand-900')}>
        {display}
      </div>
      <div className={cn('mt-1 text-sm font-semibold', light ? 'text-accent-100' : 'text-brand-800')}>{label}</div>
      {caption ? <p className={cn('mt-1 text-xs', light ? 'text-slate-300' : 'text-ink-500')}>{caption}</p> : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Breadcrumbs (visible + machine readable via schema on the page)     */
/* ------------------------------------------------------------------ */
export function Breadcrumbs({
  items,
  light = false,
  className,
}: {
  items: { name: string; path: string }[]
  light?: boolean
  className?: string
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-xs font-medium sm:text-sm', className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className={light ? 'text-white/90' : 'text-ink-500'}>
                  {item.name}
                </span>
              ) : (
                <>
                  <Link to={item.path} className={light ? 'text-accent-200 hover:text-white' : 'text-brand-700 hover:text-accent-600'}>
                    {item.name}
                  </Link>
                  <ChevronRight className={cn('h-3.5 w-3.5', light ? 'text-white/50' : 'text-slate-400')} aria-hidden />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */
export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('chip', className)}>{children}</span>
}

export function Divider({ className }: { className?: string }) {
  return <hr className={cn('border-slate-200', className)} />
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('prose-rsis', className)}>{children}</div>
}
