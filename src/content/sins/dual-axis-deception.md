---
title: "The Dual-Axis Deception"
summary: "Two unrelated series on two independent axes, engineered to look correlated."
category: "False Relationships"
severity: 5
tags: ["dual axis", "correlation", "line chart"]
badChart: "dual-axis-bad"
fixedChart: "dual-axis-fixed"
date: 2026-08-05
---

## The sin

Put two series on the same plot with two independent y-axes and you can make
*anything* look correlated. Slide the scales until the lines overlap and the
reader's brain does the rest: "these move together, so one must cause the other."

## Why it deceives

With independent axes, the vertical position of each line is arbitrary — you
chose it. Overlapping lines imply a relationship that exists only because you
tuned two scales to coincide. Ice cream sales and shark attacks both rise in
summer; neither causes the other. The shared season is the hidden variable.

## The repentance

Don't force two series into one coordinate space just to imply a link. Show them
in **separate, stacked panels** with honest zero-based scales. If you truly want
to argue they move together, plot one **against** the other (a scatter plot) and
let the reader judge the relationship — don't manufacture it with axis scaling.
