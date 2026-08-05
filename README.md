# Chart Sins

A catalogue of data-visualization sins — for each one: the chart that misleads,
why it fools the eye, and the honest version that fixes it.

Built with [Astro](https://astro.build) and styled on the
[Carbon Design System](https://carbondesignsystem.com). Charts are authored as
[Vega-Lite](https://vega.github.io/vega-lite/) specs and rendered to **static
SVG at build time**, so pages ship with zero client-side JavaScript.

## Tech stack

| Concern    | Choice                											  |
| ---------- | --------------------------------------------------- |
| Framework  | Astro 5 (static output)                             |
| Content    | Markdown/MDX via Astro Content Collections          |
| Charts     | Vega-Lite specs → SVG at build (headless Vega)       |
| Design     | Carbon Design System — tokens, type scale, spacing, motion, themes |
| Typeface   | IBM Plex Sans / Mono (self-hosted via `@fontsource`) |
| Styling    | Token-driven CSS (`src/styles/global.css`)          |
| Hosting    | GitHub Pages (via GitHub Actions)                   |
| Language   | TypeScript                                          |

### On the Carbon adoption

Carbon ships React/web-component libraries built for application UIs and they
ship JavaScript; this is a static content site, so instead of the component
runtime we adopt Carbon at the **design-token level** — its color tokens and
White/Gray-100 themes, the 8px spacing scale, the productive/expressive type
distinction (IBM Plex), motion tokens, square geometry, the focus ring, and
Carbon's **data-visualization palette** for the charts (validated for
colorblind-safety and contrast on the chart surface).

## Project layout

```
src/
├── content.config.ts        # typed frontmatter schema for a "sin"
├── content/sins/            # one Markdown file per sin
├── charts/                  # Vega-Lite JSON specs (bad + fixed)
├── components/VegaChart.astro   # build-time Vega-Lite → SVG renderer
├── layouts/BaseLayout.astro
├── lib/charts.ts            # spec lookup + severity helper
├── pages/
│   ├── index.astro          # the gallery
│   └── sins/[...slug].astro # a sin's detail page
└── styles/global.css
```

## Adding a new sin

1. Author two Vega-Lite specs in `src/charts/`, e.g.
   `my-sin-bad.json` and `my-sin-fixed.json`.
   > Omit `$schema`, `config`, and outer `width`/`height` tuning you don't need —
   > keep specs focused on the data and encoding.
2. Create `src/content/sins/my-sin.md` with frontmatter:

   ```yaml
   ---
   title: "My Sin"
   summary: "One-line description shown on the gallery."
   category: "Misleading Scales"
   severity: 3            # 1 (venial) … 5 (mortal)
   tags: ["bar chart"]
   badChart: "my-sin-bad"      # basename in src/charts/, no .json
   fixedChart: "my-sin-fixed"
   date: 2026-08-05
   ---

   Prose explaining the sin, why it deceives, and the repentance.
   ```
3. `npm run dev` and check it. The typed schema will flag a mistyped field or a
   missing chart spec at build time.

### Making a chart interactive (opt-in)

Charts are static SVG by default. To make one interactive, render it client-side
with `vega-embed` in a small Astro island (`client:visible`) on that page only,
instead of using `<VegaChart>`. This keeps the default fast while allowing
hover/zoom where a specific sin benefits from it.

## Commands

| Command           | Action                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start the dev server at `localhost:4321`  |
| `npm run build`   | Build the static site to `./dist`         |
| `npm run preview` | Preview the production build locally      |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. Enable it once under
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site is configured for the project path `https://olehomelchenko.github.io/chart-sins`
(`site` + `base` in `astro.config.mjs`). If you move to a custom domain, set
`site` to it and remove `base`.
