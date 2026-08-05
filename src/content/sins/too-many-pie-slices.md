---
title: "Too Many Slices in a Pie Chart"
summary: "Near-identical wedges nobody can rank by eye, when a sorted bar chart would have answered instantly."
poke: "More slices than anyone can rank by eye. A bar chart was right there."
category: "Chart-Type Abuse"
severity: 3
tags: ["pie chart", "part-to-whole", "comparison"]
badChart: "pie-overload-bad"
fixedChart: "pie-overload-fixed"
date: 2026-08-05
citations:
  - key: fewpies
    note: "“Save the Pies for Dessert” — the definitive, free takedown of the overloaded pie."
  - key: clevelandmcgill
    note: "Their ranking shows angle and area are judged far worse than position along a scale."
  - key: junkcharts
    note: "Kaiser Fung’s running #onelesspie campaign exists for precisely this chart."
  - key: datatoviz
    note: "Pie charts are the first entry in its catalogue of caveats."
---

## The sin

The pie chart asks the reader to compare **angles** — something people are
genuinely bad at. One or two slices, fine. But eight slices, several of them
within a percentage point of each other? Nobody can tell whether Firefox beats
Samsung by eyeballing two thin wedges on opposite sides of the circle.

## Why it deceives

Angle and area are hard to judge precisely, and slices scattered around the
circle can't be lined up against a common baseline. The small categories blur
into an indistinguishable fringe, and the ranking — usually the whole point —
becomes guesswork.

## The repentance

Use a **sorted horizontal bar chart**. Every value shares one baseline, the
ordering is explicit, and long labels sit comfortably beside their bars. Reserve
the pie for the rare case of two or three parts of an obvious whole — and even
then, a bar chart rarely does worse.
