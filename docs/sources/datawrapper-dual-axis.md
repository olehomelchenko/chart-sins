# Datawrapper — "Why not to use two axes, and what to use instead"

Lisa Charlotte Muth, `blog.datawrapper.de/dualaxis/`, published **8 May 2018**,
intro updated **July 2026**. Supplied as PDF, read 2026-08-05.
Answers queue rows 2 and (partly) 1.

## The July 2026 revision, verbatim

> We originally published this article in May 2018 to explain why you couldn't
> create dual-axis charts in Datawrapper. Since then, we've changed our minds.
> We've learned that in some cases, dual-axis charts really are the best way to
> show the data — and that people who've learned to read them correctly (in
> financial services, for example) aren't misled by them. […] But all the issues
> this original article pointed out are still valid. A general audience is
> indeed likely to misread dual-axis charts.

So: audience-dependent, not a reversal. They now ship the feature on a Business
plan and kept the article standing. They also link a newer piece, "What to
consider when creating dual-axis charts" (23 July 2026), not supplied here.

## They draw the same line we drew

The article lists four reasons people reach for dual axes, then says:

> of these four use cases, we think that only the last dual axis chart can be
> used without being potentially misleading, since it only uses the second
> Y-axis to show an alternative scale and not a second data series.

The fourth case is **Fahrenheit and Celsius on one series** — the same example
our sin page arrived at independently. Their test and ours match: the sin is a
second *data series*, not a second *scale*.

## The three problems

1. **"Zero baselines at different heights can mislead."** The proportions are
   arbitrary. Their worked example: German vs global GDP looks like it rises at
   the same rate; extended to zero, global rose 80% and Germany 40%.
2. **"Even zero baselines at the same height can mislead"** — "humans have a
   tendency to set things in relation if they're close-by." Readers conclude
   German GDP exceeded global GDP, then crossed in 2011.
3. **"They're just hard to read."**

Nutshell line: *"The scales of dual axis charts are arbitrary and can therefore
(deliberately) mislead readers about the relationship between the two data
series."*

## The empirical source behind it — worth citing directly

Isenberg, Bezerianos, Dragicevic & Fekete (2011), *A Study on Dual-Scale Data
Charts*. 15 participants, four chart types; the dual-axis ("superimposed")
chart was quoted as:

> We found across the board that the superimposed chart performed poorly both
> in terms of accuracy and time. […] it was ranked lowest by all but one
> participant. Participants called it very confusing and demanding too much
> concentration or reflection to decipher the non-monotonic and discontinuous
> nature of the two scales.

Added to the reference list as `isenberg2011`. Venue/DOI still needed — queued.

Also flagged: Stephen Few, *Dual-Scaled Axes in Graphs: Are They Ever the Best
Solution?*, which per Datawrapper concludes he "cannot think of a situation that
warrants them in light of other, better solutions." Added as `fewdualaxes`;
year and URL queued.

## Alternatives they give

Side-by-side charts; indexed charts (with Knaflic's caveat that this fails when
one series moves +10000% and the other +5%); prioritise-and-label; connected
scatterplot. Our page's repentance already recommends the first two.
