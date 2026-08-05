// Join a path onto the configured base path with exactly one slash, so links
// work whether `base` is "/chart-sins" (no trailing slash) or "/".
const BASE = import.meta.env.BASE_URL;

export function href(path = ''): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  if (path === '' || path === '/') return `${base}/`;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
