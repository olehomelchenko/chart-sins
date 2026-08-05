import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each "sin" is one Markdown/MDX file in src/content/sins/.
// Charts are authored as Vega-Lite JSON specs in src/charts/ and referenced
// here by their basename (without the .json extension). The page template
// renders `badChart` and `fixedChart` side by side automatically.
const sins = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sins' }),
  schema: z.object({
    title: z.string(),
    // Short one-line summary shown on the index gallery.
    summary: z.string(),
    // Grouping, e.g. "Misleading Scales", "Chart-Type Abuse".
    category: z.string(),
    // 1 (venial) … 5 (mortal). Drives the flame rating in the UI.
    severity: z.number().int().min(1).max(5),
    tags: z.array(z.string()).default([]),
    // Basenames of Vega-Lite specs in src/charts/ (without .json).
    badChart: z.string(),
    fixedChart: z.string(),
    // Optional publish date; unset entries sort last.
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { sins };
