const EXTERNAL = /^([a-z][a-z0-9+.-]*:|\/\/|#)/i;

/** Site base path without trailing slash ('' when deployed at the domain root). */
export const base = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');

/**
 * Prefix an internal absolute path with the configured `base`.
 * External URLs, mailto:/tel:, protocol-relative URLs and #anchors are returned untouched.
 * Idempotent: an already-prefixed path is not prefixed twice.
 */
export function withBase(path: string): string {
  if (!path || EXTERNAL.test(path)) return path;
  const rooted = path.startsWith('/') ? path : `/${path}`;
  if (base && (rooted === base || rooted.startsWith(`${base}/`) || rooted.startsWith(`${base}?`) || rooted.startsWith(`${base}#`))) {
    return rooted;
  }
  return `${base}${rooted}`;
}

/** Remove the base prefix from a pathname (for matching against unprefixed route hrefs). */
export function stripBase(pathname: string): string {
  if (base && (pathname === base || pathname.startsWith(`${base}/`))) return pathname.slice(base.length) || '/';
  return pathname;
}
