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

/** A 1–5 severity as five booleans, for the Carbon-style severity meter. */
export function severityUnits(severity: number): boolean[] {
  return Array.from({ length: 5 }, (_, i) => i < severity);
}

// Stable category -> Carbon tag color. Known categories get a hand-picked hue;
// anything new hashes to a stable colour so the palette never churns.
const TAG_COLORS = ['purple', 'teal', 'red', 'blue', 'magenta'] as const;
const CATEGORY_TAG: Record<string, (typeof TAG_COLORS)[number]> = {
  'Misleading Scales': 'blue',
  'False Relationships': 'magenta',
  'Chart-Type Abuse': 'purple',
};

/** Map a category label to a Carbon tag colour modifier. */
export function tagModifier(category: string): (typeof TAG_COLORS)[number] {
  if (CATEGORY_TAG[category]) return CATEGORY_TAG[category];
  let hash = 0;
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  return TAG_COLORS[hash % TAG_COLORS.length];
}
