---
title: "Two Y-Axes Scaled to Imply a Correlation"
summary: "Two unrelated series, each handed its own scale, until the lines trace the same suggestive path."
poke: "Two scales, tuned until the lines overlap — and suddenly anything 'causes' anything."
category: "False Relationships"
severity: 4
tags: ["dual axis", "correlation", "line chart"]
badChart: "dual-axis-bad"
fixedChart: "dual-axis-fixed"
date: 2026-08-05
related:
  - aspect-ratio
  - truncated-y-axis
citations:
  - key: datatoviz
    note: "Lists “using two Y axes” as a top caveat — a way to manipulate the story."
  - key: spurious
    note: "Thousands of nonsense correlations: proof that “they move together” proves nothing."
  - key: howchartslie
    note: "Cairo on how aligned axes manufacture relationships that aren’t there."
  - key: swd
    note: "Knaflic’s standing advice: avoid the second axis; separate or index instead."
  - key: isenberg2011
    note: "They tested it: the dual-axis (“superimposed”) chart “performed poorly both in terms of accuracy and time” and was “ranked lowest by all but one participant.”"
  - key: datawrapper
    note: "“Why not to use two axes” — the scales are arbitrary, so they can “(deliberately) mislead readers about the relationship between the two data series.” Of the four uses they examine, only the alternative-scale one survives. In 2026 they softened the verdict for expert audiences while keeping every objection intact."
  - key: economistmistakes
    note: "Filed under “forcing a relationship by cherry-picking scales”: two series fell by three units each, which was −14% on one axis and −7% on the other, and the chart implied a perfect correlation."
  - key: fewdualaxes
    note: "Few takes the dual-axis case seriously enough to work through it properly, and still can't find a situation that warrants one."
  - key: truthfulart
    note: "Cairo on what a chart owes its reader, which is the standard this one fails."
---

## The sin

Put two *unrelated* series on one plot with two independent y-axes and you can
make anything look correlated. Slide the scales until the lines overlap and the
reader's brain does the rest: "these move together, so one must cause the other."

Note what's being condemned. A second axis is a tool, and the sin is one
particular use of it — the one where the alignment is yours to choose and you
chose the flattering one.

## Why it deceives

With independent axes, the vertical position of each line is arbitrary — you
chose it. Overlapping lines imply a relationship that exists only because you
tuned two scales to coincide. Ice cream sales and shark attacks both rise in
summer; neither causes the other. The shared season is the hidden variable.

## When a second axis is fine

It isn't automatically dishonest, and this is why the severity here isn't a 5.

A second axis is legitimate when both axes describe **the same quantity** —
°C and °F, millimetres and inches, a count and that same count as a share of the
total. The mapping between the two scales is fixed by arithmetic, so there's
nothing for you to tune and nothing for the reader to be misled about.

That's not just our line. Datawrapper examined the four reasons people reach for
a second axis and concluded that only this one — "an alternative scale and not a
second data series" — can be used without being potentially misleading. Their
example is Fahrenheit against Celsius.

Audience matters too: readers trained on these charts, in financial services for
instance, do read them correctly. If that's genuinely who you're drawing for,
this page is not about you.

The line is whether *you* picked the alignment. If sliding one scale would
change the story, you're on the wrong side of it.

## The repentance

Don't force two different quantities into one coordinate space to imply a link.
Show them in **separate, stacked panels** with honest zero-based scales, as
above — the seasonal shape is still perfectly visible, it just no longer poses
as causation.

If you genuinely want to argue the two move together, plot one **against** the
other in a scatter plot and let the reader judge the strength of it. And if
they're on wildly different scales but you want the shapes compared, index both
to a common base period so a shared axis becomes meaningful.
