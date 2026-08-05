# Chart Sins — working notes

Conventions and gotchas for anyone (human or agent) working in this repo.
Keep this current when a convention changes.

## What this is

Chart Sins is **"nohello.net for bad charts."** The unit of value is a single,
linkable, cited page you send someone instead of re-explaining, for the
hundredth time, why their chart misleads. The gallery is secondary; the per-sin
page is the product.

Each sin page follows one shape: **poke → proof → why → the fix → receipts → share.**

## Voice & content conventions

- **The title names the problem plainly; the poke carries the voice.** A title
  is a label someone scans in the gallery and recognizes in a link — write
  "Truncated Y-Axis on a Bar Chart," not "The Truncated Temptation." Use the
  field's standard term for the sin where one exists. Save the wit for the poke;
  that's what it's for.
- **The poke names the general sin, never the sample's specifics.** A visitor
  didn't "start the axis at 90" — they mis-set the baseline. Write
  "Your bars don't start at zero…", not the numbers from our example data.
- **Tone: cheeky, not moralizing.** "Caught — here are the receipts," not
  "repent." Poke the mistake, keep it light.
- **We condemn uses, not chart types.** There is no banned form here. A pie
  chart showing three parts of a whole is doing its job; a second y-axis
  carrying °C against °F is fine. The sin is always a *use* — the workload the
  form can't carry, the alignment you picked yourself, the baseline you moved.
  Say so on the page when the form has honest uses, so nobody reads us as
  "pie charts are always wrong." Blanket bans are how dataviz advice turns into
  folklore, and folklore is what we're trying to replace with citations.
- **Severity means something.** Keep it consistent:
  **5** — reverses or fabricates meaning; no honest reading of the chart exists.
  **4** — actively misleads about magnitude or relationship, but the underlying
  form has legitimate uses. **3** — a sound form asked to do a job it can't; the
  reader can't extract what the chart claims to show. **2** — craft failure:
  nothing false, but the reader is made to work for no reason.
- **Same numbers, both charts.** The bad and fixed charts must share one dataset
  so the page *proves* dishonest-vs-honest by construction. Charts are authored
  as Vega-Lite specs and rendered at build time — never screenshots.
- **The bad chart is intentionally wrong; the fixed chart must obey the rules.**
  (e.g. the dual-axis "sin" deliberately breaks the one-axis rule; its fix uses
  separate honest panels.) When picking chart colors or building a new chart,
  run the `dataviz` skill and validate the palette with its validator.
- **Citations are core, and generous.** Every sin cites sources
  (`src/lib/references.ts`) under "Don't take our word for it." Don't invent
  authority — point at it, and point at as much of it as you honestly can.
  Five-ish sources per sin is normal; a reader who distrusts one author should
  find another in the list they don't. Adding a new reference is routine, not an
  editorial event — the file is a bibliography to grow, **not a canon to
  curate**, and coverage of it is not a goal in itself.
  Never stretch a source to fit: if it doesn't actually make the claim, cite one
  that does or leave it out. Getting an attribution wrong costs more than a
  thinner page.
  **When you can't reach a source, don't guess and don't quietly settle for a
  weaker page** — a lot of this material is behind 403s, paywalls and JSTOR.
  Add the link and the specific question to `docs/source-requests.md`; a human
  drops the content into `docs/sources/` and you finish the note from it. Same
  file holds the register of claims already live on the site that rest on recall
  rather than a source anyone opened — add to it when you write from memory,
  rather than leaving the page looking better-sourced than it is. Never invent a
  URL to fill a `url` field; leaving it empty is the correct move (`huff`,
  `shapeparameter`, `economistmistakes` all ship without one). A source that *complicates* our position (Kosara on pie charts,
  Datawrapper's second thoughts on dual axes) is worth citing too — say so in
  the note.
- **Internal build decisions stay out of visitor-facing content and the DOM.**
  The design system (Carbon), the typeface (IBM Plex), and the inspiration
  (nohello.net) are engineering choices — they must not appear in page copy,
  the footer, meta tags, or CSS class names on the public site. (They were
  scrubbed once already; keep them out.) Naming them *here*, in repo docs, is
  fine. **"Canon" is on that list too** — it's our internal shorthand for the
  reference list; the site says "References" and links to `/references/`.

## Adding a sin

1. Author two Vega-Lite specs in `src/charts/`, e.g. `my-sin-bad.json` and
   `my-sin-fixed.json`. Same underlying data in both. Omit `$schema`/`config`;
   explicit `width`/`height` are fine. The bad one breaks a rule on purpose; the
   fixed one is correct.
2. Add `src/content/sins/my-sin.md` with frontmatter (schema in
   `src/content.config.ts`):
   ```yaml
   title, summary, poke, category, severity (1–5), tags[],
   badChart, fixedChart, date, draft, citations: [{ key, note }]
   ```
   `badChart`/`fixedChart` are the spec basenames (no `.json`). `citations[].key`
   must exist in `src/lib/references.ts` (build throws otherwise).
3. New reference? Add it once to `src/lib/references.ts`, then cite its key.
4. `npm run dev` and check. The OG card for the sin is generated automatically.

## Design & rendering

- **Astro 5, static output, zero client JS** — the one exception is the small
  progressive-enhancement copy-link script on the sin page.
- Styling is a **token layer** (`src/styles/global.css`) built on Carbon design
  tokens: layered light/dark themes, 8px spacing scale, IBM Plex (self-hosted
  via `@fontsource`), square geometry, a 2px focus ring. Class prefix is
  `site-` (not `cds-`).
- **Charts** render to static SVG at build via the shared pipeline in
  `src/lib/renderChart.ts` (used by both the on-page component and the OG
  generator, so they stay identical). Charts sit on a **fixed light canvas**
  (`--chart-canvas`) in both themes so the single baked SVG keeps AA contrast.
- The categorical palette is Carbon's data-vis palette, **validated** for
  colorblind-safety/contrast on the chart surface. Re-validate if you change it.

## OpenGraph cards

- Per-sin 1200×630 cards are generated **at build time** — no browser.
  `src/lib/og.ts` composes with `satori`, rasterizes with `@resvg/resvg-js`;
  endpoints are `src/pages/og/[slug].png.ts` and `og/default.png.ts`.
- Card content stays lean: poke + before/after charts + severity + category.
  No citation list on the card (that lives on the page).
- Fonts: three IBM Plex TTF weights are committed under `src/og/fonts/` (satori
  and resvg need real font files; the `@fontsource` woff2 won't do).
- **satori gotchas** (all learned the hard way): empty `<div>`s in a flex row
  each need their own `display:flex`; don't put a quoted `font-family` in an
  inline `style` (it breaks the style parse — set the default font via satori's
  `fonts` instead); trim the markup so there's a single root node; give `<img>`
  dimensions in the `style` as px; cap charts by **height** so tall vconcat
  charts don't overflow.

## Deploy & ops

- GitHub Pages via `.github/workflows/deploy.yml`, triggered on push to `main`
  (plus `workflow_dispatch`). Project path is configured in `astro.config.mjs`
  (`site` + `base` → `/chart-sins`).
- **Known gotcha — the default branch.** The repo's default branch is currently
  the feature branch (it was the first branch pushed into the empty repo). The
  auto-created `github-pages` environment only allows deploys from the **default
  branch**, so a push to `main` builds but the *deploy* job is rejected. Until
  this is fixed we deploy by **dispatching the workflow on the default branch**.
  **Fix:** set the default branch to `main` (Settings → General); then plain
  pushes to `main` deploy normally and this note can go away.
- Pages had to be **enabled manually** once (Settings → Pages → Source: GitHub
  Actions) — the Actions token can't create the Pages site itself.
