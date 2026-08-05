# Content backlog — what to write next

Working document. The rule that generated this list: **every sin must be
condemned by something already in the canon** (`src/lib/references.ts`). We
don't invent authority, so the backlog is mined *from* the sources rather than
brainstormed and back-filled with citations.

The list deliberately mixes registers. Some sins are subtle enough that a
competent analyst commits them by accident; others are arithmetically void and
indefensible on sight. Both belong — the egregious ones are the most *sendable*
pages we can write, because there's nothing to argue about, and the subtle ones
are what keep the site useful to people who already know the basics. Severity
runs 2–5 on purpose.

## Canon coverage

Which references are doing work, after the first five sins:

| Reference | Cited by |
| --- | --- |
| `callingbullshit` | truncated-y-axis, inverted-y-axis |
| `clevelandmcgill` | truncated-y-axis, too-many-pie-slices, aspect-ratio |
| `tufte` | truncated-y-axis |
| `howchartslie` | truncated-y-axis, two-y-axes, inverted-y-axis, aspect-ratio |
| `datatoviz` | two-y-axes, too-many-pie-slices |
| `spurious` | two-y-axes |
| `swd` | two-y-axes |
| `fewpies` | too-many-pie-slices |
| `junkcharts` | too-many-pie-slices, inverted-y-axis |
| `shapeparameter` | aspect-ratio |
| **`munzner`** | — |
| **`wilke`** | — |
| **`healy`** | — |
| **`huff`** | — |
| **`schwabish`** | — |
| **`ftvisvocab`** | — |
| **`datawrapper`** | — |

Seven idle references. Each is an authority we've already endorsed on the canon
page, so a sin that leans on one is cheap to justify and strengthens the page it
sits on. The backlog is ordered to bring them all in.

## Ranked backlog

### 1. A Cherry-Picked Time Range — *Deceptive Framing*, severity 5

**Poke:** "You started the clock exactly where the story got good."

The trend runs one way over five years and the other way over five months, so
the chart shows the five months. Nothing about the chart is technically false —
the axis starts at zero, the labels are honest — which is what makes it the
nastiest sin on this list.

**Charts:** one series, two views. Bad = the flattering slice. Fixed = the full
record with the slice shaded in place. Literally the same dataset filtered, so
the "same numbers, both charts" rule holds by construction — the strongest proof
we can build.

**Citations:** `huff` (the original con), `callingbullshit`, `howchartslie`,
`junkcharts`.

### 2. Pie Slices That Sum to More Than 100% — *Impossible Wholes*, severity 5

**Poke:** "Your slices add up to 180%. A pie has one job — dividing a whole —
and this data has no whole to divide."

The multi-select survey is the classic source: "which of these tools do you
use?", respondents tick three each, and the results get poured into a pie. The
wedges are now sized as fractions of a total that doesn't exist, so every one of
them is drawn wrong, and the "share" each appears to hold is pure artifact.

Unlike most of this list, there's no judgment call — the chart is arithmetically
void. That's the appeal: nothing to argue about, and no way to defend it in a
meeting.

**Charts:** bad = pie of multi-select response counts, wedges summing past the
circle. Fixed = bar chart, one bar per option, each labelled "% of respondents"
with the base stated. Same counts.

**Citations:** `fewpies`, `datawrapper` (their pie-chart guidance covers when the
form applies at all), `datatoviz`, `junkcharts`.

### 3. A Pie Chart of Rates or Averages — *Impossible Wholes*, severity 5

**Poke:** "You made a pie out of averages. Adding them together produces a
number that means nothing, and that number is your denominator."

The other half of the same mistake, and the one people defend for longer.
Average deal size by region, conversion rate by channel, satisfaction score by
team — relative metrics, each with its own denominator, stacked into wedges as
if they were parts of a shared total. A region with a high *average* takes a big
slice regardless of how many deals it actually did.

Worth its own page rather than folding into the entry above: the tell is
different (these numbers *can* sum to 100% by coincidence), and the person who
needs sending here is making a different error — a category mistake about what
their metric is, not a counting mistake.

**Charts:** bad = pie of average order value by region. Fixed = bar chart of the
same averages, plus the volume behind each one so the weighting is visible.

**Citations:** `fewpies`, `munzner` (part-to-whole is a composition of a whole,
or it is nothing), `schwabish`, `ftvisvocab`.

### 4. Group Averages Shown Without the Distribution — *Hiding the Data*, severity 4

**Poke:** "Four bars, four averages, and no idea whether the difference is real."

The bar-of-means: every group collapsed to one number, so wildly different
distributions draw identical bars. Wilke devotes a section to exactly this and
Healy makes the perceptual case; it's the natural home for three idle references
at once.

**Charts:** bad = grouped bar of means. Fixed = strip/box plot over the same
observations, means still marked.

**Citations:** `wilke`, `healy`, `schwabish`, `datatoviz`.

### 5. Bubbles Sized by Radius Instead of Area — *Perceptual Traps*, severity 4

**Poke:** "You doubled the number and quadrupled the ink."

Scaling a circle's *radius* by the value instead of its *area* squares the
apparent difference. This is Tufte's Lie Factor with an actual number attached,
and it's the cleanest possible excuse to bring Munzner's channel ranking onto a
page — the same ranking that already underwrites the pie and truncated-axis
sins.

**Charts:** bad = radius ∝ value (a `calculate` transform squaring the size
encoding). Fixed = area ∝ value, or better, the same values as a dot plot where
position does the work.

**Citations:** `munzner`, `clevelandmcgill`, `tufte`, `howchartslie`.

### 6. Stacked Segments Without a Shared Baseline — *Perceptual Traps*, severity 3

**Poke:** "Only the bottom band of a stacked chart has a straight edge to
measure against. The rest are guesses."

In a stacked column chart, every segment except the bottom one starts at a
baseline that moves from column to column, so readers can compare the total and
the bottom series — and nothing else. The series you actually care about is
usually floating somewhere in the middle. Datawrapper's guidance is blunt about
it: bring the most important value to the bottom, because readers can only
compare values that share a baseline.

Ubiquitous in business dashboards, which is what earns it a slot despite the
milder severity.

**Charts:** bad = stacked columns with the interesting series stranded in the
middle. Fixed = the same numbers as small multiples (or the key series pulled
out to its own zero baseline), totals preserved.

**Citations:** `datawrapper`, `wilke`, `munzner`, `ftvisvocab`.

### 7. Categories Sorted Alphabetically Instead of by Value — *Sloppy Craft*, severity 2

**Poke:** "Your categories are sorted by name. Nobody wants to know which
region starts with A."

Venial, universal, and the single most useful page to fire at a colleague —
which is the whole product thesis. Low severity is a feature: the gallery needs
a range, and this one brings in the FT Visual Vocabulary.

**Charts:** bad = categorical bars in alphabetical order. Fixed = same bars
sorted by value.

**Citations:** `schwabish`, `ftvisvocab`, `swd`, `fewpies`.

## Not yet buildable

Real sins, but our pipeline can't prove them honestly today. Recorded so we stop
rediscovering them:

- **3D bars / gratuitous perspective** and **chartjunk** (Tufte, Few) — Vega-Lite
  won't render the sin, and a screenshot violates the same-pipeline rule that
  makes the before/after credible.
- **Counts on a choropleth instead of rates** (Cairo's set-piece) — needs
  TopoJSON geometry and a build-time data dependency we don't have yet. Strong
  candidate the moment we take that on.
- **Rainbow color scales for continuous data** (Wilke, Munzner, and Datawrapper's
  four-part color-scale series — the best free treatment of this anywhere) — the
  canon backing is no longer the constraint. What still blocks it is ours: the
  fixed chart needs a sequential ramp validated on `--chart-canvas` in both
  themes. Do the palette work first (`dataviz` skill + its validator), then this
  is ready to write.

## Conventions reminder

Anything picked up from this list still follows `CLAUDE.md`: the title names the
problem plainly and leaves the wit to the poke, the poke names the general sin
and never our sample's numbers, both charts share one dataset, and the fixed
chart obeys every rule the site preaches.

The headings above are working titles written to that rule — they say what the
sin *is*, so they can be taken as-is or rephrased without having to first decode
a pun.
