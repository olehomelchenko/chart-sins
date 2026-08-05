# Content backlog — what to write next

Working document. Ranked by what is worth writing — the sins people actually
commit, and the pages most worth sending someone.

Sourcing is a constraint on that list, not the thing that generates it: a sin
earns a slot because it's worth a page, and then we go find the sources that
make the case. Never the reverse. What we don't do is invent authority, or
stretch a source into saying something it doesn't.

The list deliberately mixes registers. Some sins are subtle enough that a
competent analyst commits them by accident; others are arithmetically void and
indefensible on sight. Both belong — the egregious ones are the most *sendable*
pages we can write, because there's nothing to argue about, and the subtle ones
are what keep the site useful to people who already know the basics. Severity
runs 2–5 on purpose.

## Sources in play

`src/lib/references.ts` currently holds 24 entries, 22 of them cited by the 8
published sins. This table is a **convenience, not a scoreboard** — it's here so
you can spot a source that fits a sin you're drafting, not so we can drive the
right-hand column to zero blanks. An uncited reference is not a debt.

Adding new references is the normal way to strengthen a page. If a sin deserves
seven sources, give it seven and add whatever's missing to the file.

| Reference | Cited by |
| --- | --- |
| `ftvisvocab` | — |
| `healy` | — |
| `fewdualaxes` | dual-axis-correlation |
| `huff` | truncated-y-axis |
| `isenberg2011` | dual-axis-correlation |
| `schwabish` | category-colors |
| `shapeparameter` | aspect-ratio |
| `showmenumbers` | too-many-pie-slices |
| `spurious` | dual-axis-correlation |
| `tufte` | truncated-y-axis |
| `eagereyes` | aspect-ratio, too-many-pie-slices |
| `fewpies` | incomplete-pie, too-many-pie-slices |
| `junkcharts` | inverted-y-axis, too-many-pie-slices |
| `swd` | category-colors, dual-axis-correlation |
| `truthfulart` | aspect-ratio, dual-axis-correlation |
| `wilke` | too-many-pie-slices, truncated-y-axis |
| `callingbullshit` | inverted-y-axis, rebinned-colour-scale, truncated-y-axis |
| `clevelandmcgill` | aspect-ratio, too-many-pie-slices, truncated-y-axis |
| `datatoviz` | dual-axis-correlation, incomplete-pie, too-many-pie-slices |
| `economistmistakes` | dual-axis-correlation, inverted-y-axis, truncated-y-axis |
| `munzner` | category-colors, incomplete-pie, rebinned-colour-scale |
| `vizwtf` | category-colors, incomplete-pie, inverted-y-axis, rebinned-colour-scale |
| `datawrapper` | category-colors, dual-axis-correlation, incomplete-pie, rebinned-colour-scale, too-many-pie-slices |
| `howchartslie` | aspect-ratio, dual-axis-correlation, inverted-y-axis, rebinned-colour-scale, truncated-y-axis |

The citation lists in each entry below are **starting points, not budgets** —
add to them while drafting.

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

### 2. Results From a Hand-Picked Subgroup — *Deceptive Framing*, severity 4

**Poke:** "You didn't pick the wrong chart, you picked the wrong people. The
number is real; the group it describes was chosen after the fact."

The population-shaped twin of entry 1. Rather than trimming the time window, you
report the slice of the audience, region or segment where the number flatters —
often labelled honestly, which is what makes it feel above board.

The published `incomplete-pie` specimen is **also an example of this one**: it
reports the primary "in the countryside," excluding the capital, on a graphic
whose banner argues the capital can't win. Reuse the same image here with a note
about this failure mode — that's what the `wild` array is for, and it's the case
for keeping these as two pages rather than one.

Worth its own page rather than folding into entry 1: the tell is different (no
axis to inspect — you have to know what got left out), and the fix is different
(report the whole population, or every subgroup side by side, not just the
flattering one).

**Charts:** bad = one subgroup's result. Fixed = every subgroup plus the overall
figure, same underlying data.

**Citations:** `callingbullshit`, `howchartslie`, `huff`, `vizwtf`.

### 3. Pie Slices That Sum to More Than 100% — *Impossible Wholes*, severity 5

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

**Citations:** `fewpies`, `datawrapper` — but only for the premise: their
pie-chart post says "one pie chart can only show one total and its shares," and
it does *not* separately argue that parts must be mutually exclusive. Don't
stretch it further than that. Plus `datatoviz`, `junkcharts`.

### 4. A Pie Chart of Rates or Averages — *Impossible Wholes*, severity 5

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
or it is nothing), `datawrapper` (same one-total premise as above), `schwabish`,
`ftvisvocab`.

### 5. Group Averages Shown Without the Distribution — *Hiding the Data*, severity 4

**Poke:** "Four bars, four averages, and no idea whether the difference is real."

The bar-of-means: every group collapsed to one number, so wildly different
distributions draw identical bars. Wilke devotes a section to exactly this and
Healy makes the perceptual case.

**Charts:** bad = grouped bar of means. Fixed = strip/box plot over the same
observations, means still marked.

**Citations:** `wilke`, `healy`, `schwabish`, `datatoviz`.

### 6. Bubbles Sized by Radius Instead of Area — *Perceptual Traps*, severity 4

**Poke:** "You doubled the number and quadrupled the ink."

Scaling a circle's *radius* by the value instead of its *area* squares the
apparent difference. This is Tufte's Lie Factor with an actual number attached,
and Munzner's channel ranking — already underwriting the pie and truncated-axis
sins — applies directly.

**Charts:** bad = radius ∝ value (a `calculate` transform squaring the size
encoding). Fixed = area ∝ value, or better, the same values as a dot plot where
position does the work.

**Citations:** `munzner`, `clevelandmcgill`, `tufte`, `howchartslie`.

### 7. Stacked Segments Without a Shared Baseline — *Perceptual Traps*, severity 3

**Poke:** "Only the bottom band of a stacked chart has a straight edge to
measure against. The rest are guesses."

In a stacked column chart, every segment except the bottom one starts at a
baseline that moves from column to column. Datawrapper puts it plainly: "It's
hard for readers to compare columns that don't start at the same baseline," and
their fix is to "bring the most important value to the bottom of the chart."

One correction to how I first framed this, from reading their post: a
100%-stacked chart has **two** readable baselines, not one — the top edge works
as well as the bottom. So the sin isn't "only the bottom is readable," it's that
everything *between* the two baselines floats. Write it that way; adjust the
poke accordingly.

Ubiquitous in business dashboards, which is what earns it a slot despite the
milder severity. The Economist's own rainbow-stack example is a good second
angle: they stacked a selection of euro-area countries, and stacking implies the
parts are the whole.

**Charts:** bad = stacked columns with the interesting series stranded in the
middle. Fixed = the same numbers as small multiples (or the key series pulled
out to its own zero baseline), totals preserved.

**Citations:** `datawrapper`, `wilke`, `munzner`, `ftvisvocab`.

### 8. Categories Sorted Alphabetically Instead of by Value — *Sloppy Craft*, severity 2

**Poke:** "Your categories are sorted by name. Nobody wants to know which
region starts with A."

Venial, universal, and the single most useful page to fire at a colleague —
which is the whole product thesis. Low severity is a feature: the gallery needs
a range.

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
- **Rainbow color scales for continuous data** — blocked on **both** counts,
  and I had this wrong before. Part 1 of Datawrapper's color series turned out
  to be a taxonomy that makes no argument against rainbow scales at all, and it
  explicitly endorses multi-hue sequential gradients (see
  `docs/sources/datawrapper-color-scales.md`). So we currently have *no*
  verified source for the rainbow critique — parts 2–4 and Kosara's "How The
  Rainbow Color Map Misleads" are queued. The palette work is still outstanding
  too: the fixed chart needs a sequential ramp validated on `--chart-canvas` in
  both themes. Don't draft this one until a real source is in hand.

## Two new levers, as of the first wild specimen

Three specimens are live so far (`incomplete-pie`, `category-colors`,
`rebinned-colour-scale`), all collected from WTF Visualizations. Each one
arrived before its sin existed, which is turning out to be the healthier order:
a real chart in hand makes the failure mode obvious and stops us inventing sins
nobody commits.

- **`wild`** — real examples, credited and linked, rendered above the citations.
  Zero, one or many per sin. A specimen that commits two sins belongs on both
  pages, with a different note on each; that's a reason to split sins, not merge
  them.
- **`related`** — cross-links between sins, validated at build. Charts rarely
  break one rule at a time, and the person you sent a link to may need the
  neighbouring page more than the one they landed on.

## Conventions reminder

Note what the two pie entries above do and don't say. Neither condemns the pie
chart — both condemn feeding one data that has no whole to divide. Same for a
second y-axis: the form is fine, the manufactured correlation is not. We don't
ban chart types here, and a backlog entry that reads like a blanket ban has been
written wrong. See the severity rubric in `CLAUDE.md` — a form with legitimate
uses caps out at 4.

Anything picked up from this list still follows `CLAUDE.md`: the title names the
problem plainly and leaves the wit to the poke, the poke names the general sin
and never our sample's numbers, both charts share one dataset, and the fixed
chart obeys every rule the site preaches.

The headings above are working titles written to that rule — they say what the
sin *is*, so they can be taken as-is or rephrased without having to first decode
a pun.
