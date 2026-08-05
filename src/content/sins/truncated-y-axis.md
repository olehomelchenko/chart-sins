---
title: "The Truncated Y-Axis"
summary: "Chopping the baseline off a bar chart to make small differences look enormous."
poke: "You started the y-axis at 90. That's not a bar chart — it's a magic trick."
category: "Misleading Scales"
severity: 4
tags: ["bar chart", "axis", "exaggeration"]
badChart: "truncated-axis-bad"
fixedChart: "truncated-axis-fixed"
date: 2026-08-05
citations:
  - key: callingbullshit
    note: "Their “Misleading Axes” module is the canonical explainer for exactly this move."
  - key: clevelandmcgill
    note: "The perception research: readers compare bar length, so length must map to value from zero."
  - key: tufte
    note: "The “Lie Factor” puts an actual number on how much the graphic exaggerates."
  - key: howchartslie
    note: "Cairo devotes a chapter to scale manipulation like this one."
---

## The sin

Bar charts encode value with **length**. When you start the y-axis somewhere
above zero, the bars no longer represent their true magnitudes — a jump from 92
to 98 (a ~6% change) can be drawn to look like a chart-topping surge. The reader
compares bar heights and walks away with a wildly inflated sense of the trend.

## Why it deceives

The eye reads the ratio of bar lengths, not the axis labels. Truncating the
baseline breaks the contract between "twice as tall" and "twice as much." It is
the single most common way an honest-looking bar chart tells a lie.

## The repentance

Start bar charts at zero. Always. If the interesting variation is genuinely
small and a zero baseline flattens it, that is a signal to switch encodings —
use a **line chart** or a **dot plot**, where position (not length) carries the
meaning and a non-zero range is legitimate.
