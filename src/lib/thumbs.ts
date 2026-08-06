// Sin thumbnails.
//
// Each sin gets one hand-drawn pictogram at src/thumbs/<slug>.svg — a *symbol*
// of the sin, not a shrunken chart. The distinction matters: in nearly every
// sin the tell lives in the axis, the scale or the legend, which is exactly
// what a chart loses when you shrink it to thumbnail size. A miniature of the
// bad chart would throw away the evidence and leave eight indistinguishable
// squiggles.
//
// The glyphs are drawn against `currentColor` plus three theme tokens
// (--thumb-accent / --thumb-alt / --thumb-third, set in global.css), so unlike
// the build-time-baked Vega charts they follow the light/dark theme instead of
// needing the fixed --chart-canvas surface.

const modules = import.meta.glob<string>('../thumbs/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const bySlug = new Map<string, string>();
for (const [path, svg] of Object.entries(modules)) {
  const slug = path.split('/').pop()!.replace(/\.svg$/, '');
  bySlug.set(slug, svg);
}

/** Inline SVG markup for a sin's thumbnail; throws at build time if missing. */
export function getThumb(slug: string): string {
  const svg = bySlug.get(slug);
  if (!svg) {
    throw new Error(
      `No thumbnail for sin "${slug}". Add src/thumbs/${slug}.svg. ` +
        `Available: ${[...bySlug.keys()].join(', ')}`,
    );
  }
  return svg;
}
