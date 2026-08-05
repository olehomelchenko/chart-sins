---
title: "Aspect Ratio That Exaggerates a Trend"
summary: "Drawn tall and narrow it's a cliff; drawn wide it's a shrug. Same series, both times."
poke: "You didn't change a number — you changed the shape of the box, and the trend changed with it."
category: "Misleading Scales"
severity: 3
tags: ["line chart", "aspect ratio", "exaggeration"]
badChart: "aspect-ratio-bad"
fixedChart: "aspect-ratio-fixed"
date: 2026-08-05
citations:
  - key: shapeparameter
    note: "The paper that made this measurable: a graph's width-to-height ratio changes how slopes are judged, and gave us “bank the average slope toward 45°.”"
  - key: clevelandmcgill
    note: "Slope is one of the elementary perceptual tasks they ranked — and it's the one the shape of the box distorts."
  - key: howchartslie
    note: "Cairo on proportions as a storytelling lever, not a neutral container."
---

## The sin

Two panels, twelve identical numbers, one identical y-range of 170–280 ms. The
only difference is the shape of the plotting area: one is tall and narrow, one
is a conventional landscape rectangle.

The narrow panel reads like an emergency. The wide one reads like a system
drifting slowly and predictably. Both are the same 47% rise.

## Why it deceives

The eye judges a trend by the **angle** of the line, and angle is a product of
the data *and* the box you draw it in. Squeeze the width and every segment tilts
toward vertical; stretch it and everything flattens toward nothing. Cleveland
and colleagues named this the graph's *shape parameter* and showed the effect is
real and measurable, not a matter of taste.

What makes this one slippery is that the sinner usually isn't sinning. Nobody
sets out to pick a dishonest aspect ratio — they drop a chart into the space a
slide template left them, or a dashboard tile stretches it to fill a column.
The distortion arrives by default, which is exactly why it survives review: the
numbers are right, the axis is right, and there is nothing to point at.

## The repentance

Treat the ratio as an encoding decision, because that's what it is. The classic
guidance is to shape the plot so the average slope of the line sits somewhere
near 45° — steep enough to read, shallow enough not to shout. Neither extreme
above qualifies; the wide panel is the more honest of the two, and it could
stand to be a little taller still.

Then hold the shape **constant across charts you want compared**. A dashboard
where each tile stretches to fill its slot has silently given every series a
different exaggeration factor, and no reader will know which trends are real.
