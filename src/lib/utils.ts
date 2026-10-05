import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Tailwind-aware className merge helper. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format an ISO date as "12 January 2026". */
export function formatDate(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

/** Absolute URL helper used for canonical tags, schema and sitemaps. */
export function absoluteUrl(path: string, siteUrl: string) {
  if (/^https?:\/\//i.test(path)) return path
  return `${siteUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`
}

/** Build a wa.me deep link with a pre-filled message. */
export function whatsappLink(number: string, message: string) {
  return `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}

/** Rough reading time for a block of text. */
export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}
