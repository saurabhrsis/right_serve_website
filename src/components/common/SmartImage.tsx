import type { CSSProperties } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  /** Set on the first in-viewport image of a page to protect LCP. */
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  style?: CSSProperties;
}

/**
 * Image element with sensible defaults: explicit dimensions to avoid layout
 * shift, lazy loading below the fold, and async decoding everywhere.
 *
 * `fetchpriority` is passed as a plain lowercase attribute because React 18
 * forwards unknown lowercase attributes to the DOM, while the camelCase
 * `fetchPriority` prop (React 19) triggers a warning.
 */
export default function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  sizes,
  objectPosition,
  style,
}: SmartImageProps) {
  const priorityAttrs: Record<string, string> = priority ? { fetchpriority: 'high' } : {};

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      style={objectPosition || style ? { objectPosition, ...style } : undefined}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      {...priorityAttrs}
    />
  );
}
