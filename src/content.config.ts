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
    // The cheeky one-line callout — the thing you send the sinner.
    poke: z.string(),
    // Citations into the reference list (src/lib/references.ts) with a per-sin
    // note on why that source is relevant. Cite generously — this is the
    // "don't take our word for it", and more sources is a stronger page.
    citations: z
      .array(z.object({ key: z.string(), note: z.string().optional() }))
      .default([]),
    // Grouping, e.g. "Misleading Scales", "Chart-Type Abuse".
    category: z.string(),
    // 1 (venial) … 5 (mortal). Drives the flame rating in the UI.
    severity: z.number().int().min(1).max(5),
    tags: z.array(z.string()).default([]),
    // Basenames of Vega-Lite specs in src/charts/ (without .json).
    badChart: z.string(),
    fixedChart: z.string(),
    // Overrides the line under the before/after pair. Default asserts the two
    // charts share one dataset; set it when the sin *is* an omission and that
    // wording would be wrong.
    compareNote: z.string().optional(),
    // Real specimens of this sin, published by someone else and found in the
    // wild. Zero, one or many. Rendered above the citations. Always credit the
    // original and link where it was collected when we can.
    wild: z
      .array(
        z.object({
          caption: z.string(),
          note: z.string(),
          image: z.string().optional(),
          alt: z.string().optional(),
          credit: z.string(),
          sourceUrl: z.string().optional(),
          sourceLabel: z.string().optional(),
        }),
      )
      .default([]),
    // Slugs of other sins worth reading next — a chart usually commits more
    // than one. Validated at build; an unknown slug throws.
    related: z.array(z.string()).default([]),
    // Optional publish date; unset entries sort last.
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { sins };
