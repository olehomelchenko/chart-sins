import type { TopLevelSpec } from 'vega-lite';

// Eagerly load every Vega-Lite spec in src/charts/ at build time so pages can
// look one up by its basename (e.g. "dual-axis-bad").
const modules = import.meta.glob<{ default: TopLevelSpec }>('../charts/*.json', {
  eager: true,
});

const specsByName = new Map<string, TopLevelSpec>();
for (const [path, mod] of Object.entries(modules)) {
  const name = path.split('/').pop()!.replace(/\.json$/, '');
  specsByName.set(name, mod.default);
}

/** Look up a Vega-Lite spec by basename; throws at build time if missing. */
export function getChartSpec(name: string): TopLevelSpec {
  const spec = specsByName.get(name);
  if (!spec) {
    throw new Error(
      `Chart spec "${name}" not found in src/charts/. Available: ${[...specsByName.keys()].join(', ')}`,
    );
  }
  return spec;
}

/** Render a 1–5 severity as flame glyphs for display. */
export function severityFlames(severity: number): string {
  return '🔥'.repeat(severity) + '·'.repeat(Math.max(0, 5 - severity));
}
