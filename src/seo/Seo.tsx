/*
 * This module intentionally exports the component alongside the two head
 * helpers that the entry points use, so the fast-refresh lint rule is disabled
 * here rather than splitting one small concern across three files.
 */
/* eslint-disable react-refresh/only-export-components */
import { useEffect } from 'react';
import { buildHeadTags, type HeadTag, type SeoInput } from './headTags';
import routeMeta from '../data/route-meta.json';

export interface SeoProps extends Omit<SeoInput, 'siteUrl' | 'siteName'> {
  /** Overrides the title/description stored for this path in route-meta.json. */
  path: string;
}

const routeIndex = new Map(
  (routeMeta.routes as { path: string; title: string; description: string; keywords?: string[] }[]).map((route) => [
    route.path,
    route,
  ]),
);

/** Resolves the stored metadata for a route, falling back to site defaults. */
export function resolveRouteMeta(path: string) {
  const normalised = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
  const stored = routeIndex.get(normalised);
  return {
    title: stored?.title ?? routeMeta.defaultTitle,
    description: stored?.description ?? routeMeta.defaultDescription,
    keywords: stored?.keywords,
  };
}

/**
 * Applies route metadata to the document head.
 *
 * During client-side navigation this updates the existing tags in place, so
 * browser history, sharing previews and analytics see the metadata of the page
 * that is actually displayed.
 */
export default function Seo({
  path,
  title,
  description,
  keywords,
  image,
  type,
  robots,
  publishedTime,
  modifiedTime,
  author,
  schema,
  locale,
}: SeoProps) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const resolved = resolveRouteMeta(path);
    const tags = buildHeadTags({
      title: title ?? resolved.title,
      description: description ?? resolved.description,
      keywords: keywords ?? resolved.keywords,
      path,
      image,
      type,
      robots,
      publishedTime,
      modifiedTime,
      author,
      schema,
      siteUrl: routeMeta.siteUrl,
      siteName: 'Right Serve Infotech System Pvt. Ltd.',
      locale,
    });

    applyHeadTags(tags);
  }, [
    path,
    title,
    description,
    keywords,
    image,
    type,
    robots,
    publishedTime,
    modifiedTime,
    author,
    schema,
    locale,
  ]);

  return null;
}

/** Upserts managed tags and removes stale ones left over from a previous route. */
export function applyHeadTags(tags: HeadTag[]) {
  const head = document.head;
  const managed: Element[] = [];

  for (const tag of tags) {
    if (tag.tag === 'title') {
      document.title = tag.text;
      continue;
    }

    if (tag.tag === 'script') {
      const existing = head.querySelector<HTMLScriptElement>('script[data-jsonld="route"]');
      const script = document.createElement('script');
      for (const [key, value] of Object.entries(tag.attrs)) script.setAttribute(key, value);
      script.textContent = tag.text;
      if (existing) {
        existing.replaceWith(script);
      } else {
        head.appendChild(script);
      }
      managed.push(script);
      continue;
    }

    const selectorKey =
      tag.tag === 'meta'
        ? tag.attrs.name
          ? `meta[name="${tag.attrs.name}"]`
          : `meta[property="${tag.attrs.property}"]`
        : `link[rel="${tag.attrs.rel}"]`;

    let element = head.querySelector(selectorKey);
    if (!element) {
      element = document.createElement(tag.tag);
      head.appendChild(element);
    }
    for (const [key, value] of Object.entries(tag.attrs)) element.setAttribute(key, value);
    managed.push(element);
  }

  // Remove managed tags from the previous route that are no longer relevant
  // (for example article:* when navigating from a blog post back to a page).
  head.querySelectorAll('meta[data-seo-managed="true"], link[data-seo-managed="true"]').forEach((element) => {
    if (!managed.includes(element)) element.remove();
  });
  head.querySelectorAll('script[data-jsonld="route"]').forEach((element) => {
    if (!managed.includes(element)) element.remove();
  });
  managed.forEach((element) => {
    if (element.tagName !== 'SCRIPT') element.setAttribute('data-seo-managed', 'true');
  });
}
