---
title: "An Inverted Y-Axis"
summary: "The values climb, the line descends, and the reader believes the shape."
poke: "Your y-axis runs downward, so every increase draws as a decline. Nobody checks which way the axis points before believing a shape."
category: "Misleading Scales"
severity: 5
tags: ["axis", "area chart", "direction"]
badChart: "inverted-axis-bad"
fixedChart: "inverted-axis-fixed"
date: 2026-08-05
citations:
  - key: callingbullshit
    note: "Their “Misleading Axes” module collects the axis manipulations, this one included."
  - key: howchartslie
    note: "Cairo's case that readers absorb a chart's shape long before they audit its axis."
  - key: junkcharts
    note: "Fung has redrawn this exact trick more than once — the fix is always just turning the axis back over."
---

## The sin

Both panels plot the same eight numbers, rising every year. The left one runs
its y-axis downward, so the highest value sits at the bottom of the plot and the
filled region hangs from the top edge. The line descends across the page while
the quantity it represents goes up.

Nothing here is falsified. The axis is labelled, the ticks are honest, the
numbers are correct. You could defend every element in a meeting.

## Why it deceives

Reading a chart's shape is close to automatic; auditing its axis is a
deliberate act that most readers never perform. "Up means more" is not a
convention people consciously check — it's the assumption that lets them skip
reading the axis at all. Invert it and you get the reader's instant, confident,
exactly wrong conclusion for free, while keeping a labelled axis to point at
if anyone objects.

That deniability is what makes this worse than a truncated baseline. A chopped
axis exaggerates a real trend. A flipped axis reverses it.

## The repentance

Point the y-axis up. There is no legitimate case for inverting a quantitative
axis to make "more" appear lower down.

The one genuine exception is a scale whose *meaning* is already inverted —
rankings, where 1st place is the best, or golf scores. Even then, label it
loudly (`1st` at the top, "lower is better" in the title), because you are
spending the reader's assumption and you owe them the warning.
