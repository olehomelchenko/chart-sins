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
related:
  - incomplete-pie
citations:
  - key: fewpies
    note: "“Save the Pies for Dessert” — the definitive, free takedown of the overloaded pie."
  - key: clevelandmcgill
    note: "Their ranking shows angle and area are judged far worse than position along a scale."
  - key: junkcharts
    note: "Kaiser Fung’s running #onelesspie campaign exists for precisely this chart."
  - key: datatoviz
    note: "Pie charts are the first entry in its catalogue of caveats."
  - key: wilke
    note: "His chapter on proportions puts the same data in a pie, a stacked bar and side-by-side bars, so you can see what each one costs you."
  - key: eagereyes
    note: "Kosara has actually run the experiments, and they don't support treating the pie as broken by nature — useful if someone tells you the chart type itself is the problem."
  - key: datawrapper
    note: "Both halves in one place: pies are “great to show how 100% divide up into a few shares” and “work best for values around 25%, 50% or 75%” — but “work best if you only have a few values – five max.”"
  - key: showmenumbers
    note: "Few’s full design manual, for when the short broadside isn’t enough to win the argument."
---

## The sin

A pie chart does one job, and does it well: showing that a handful of parts make
up a whole — this slice is about half, that one about a quarter. Nothing else
communicates "most of it" quite as fast.

Eight slices, several within a percentage point of each other, is not that job.
Nobody can tell whether Firefox beats Samsung by eyeballing two thin wedges on
opposite sides of the circle.

**The chart type isn't the sin here — the workload is.** Pies are not banned
around here; this one was just asked to answer a question it can't answer.

## Why it deceives

Angle and area are hard to judge precisely, and slices scattered around the
circle can't be lined up against a common baseline. The small categories blur
into an indistinguishable fringe, and the ranking — usually the whole point —
becomes guesswork.

Worse, the reader doesn't feel like they're guessing. The chart looks exact, so
a rank read off it gets quoted with a confidence nothing on the page earns.

## The repentance

Match the form to the question you're actually asking.

If the point is "these few parts make up the whole," a pie with two or three
slices says it instantly, and you should keep it. If the point is a **ranking**
— which is what an eight-category breakdown nearly always is — use a sorted
horizontal bar chart: one shared baseline, explicit order, and room for long
labels beside their bars.

If you need the whole *and* the ranking, a sorted bar chart with the total
stated in the title does both.
