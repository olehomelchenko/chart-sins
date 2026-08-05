---
title: "A Colour Scale That Changed Between Two Charts"
summary: "Two snapshots of the same measure, placed side by side, with the legend quietly rebinned in between."
poke: "You changed the bins between the before and the after. Whatever the reader sees in that comparison, some of it is your legend, not your data."
category: "Misleading Scales"
severity: 4
tags: ["colour scale", "comparison", "heatmap", "map"]
badChart: "rebinned-scale-bad"
fixedChart: "rebinned-scale-fixed"
compareNote: "The same readings in both, at both dates. Only the legend changed."
related:
  - truncated-y-axis
  - aspect-ratio
date: 2026-08-05
wild:
  - caption: "Tagesschau, 7-day COVID incidence by German district: 17 March 2021 beside 9 April 2021."
    note: "The two maps are the same measure three weeks apart, and they invite exactly one reading: look how much worse it got. But the legend was rebinned in between. On 17 March the bands ran to 25 / 50 / 100 / 250 / 500; on 9 April, to 20 / 35 / 50 / 100 / 200 / above. A district sitting at 150 is a mid-orange on the left map and near-black on the right, without having moved at all. Incidence did rise over those three weeks — that part is real. What the pair can't tell you is how much of the colour change is the virus and how much is the key."
    image: "tagesschau-incidence-bins.jpg"
    alt: "Two choropleth maps of Germany showing 7-day COVID incidence by district, dated 17 March and 9 April 2021, each with a different set of legend thresholds."
    credit: "Maps by Tagesschau (ARD), data from the Robert Koch-Institut"
    sourceLabel: "collected by WTF Visualizations"
    sourceUrl: "https://viz.wtf/post/648282602475798528/german-main-news-website-changed-the-categrories"
citations:
  - key: howchartslie
    note: "Cairo on how the encoding, not the data, does the arguing when a reader compares two pictures."
  - key: callingbullshit
    note: "The axis-crime module, generalised: a colour key is an axis, and rescaling it mid-comparison is the same move."
  - key: datawrapper
    note: "Their colour-scale series is explicit that where you put the bin edges changes what readers see — the choice is never neutral."
  - key: munzner
    note: "Binning a continuous quantity is an encoding decision, and comparability depends on holding it fixed."
  - key: vizwtf
    note: "Where the specimen above was collected."
---

## The sin

Two panels, same measure, different dates, side by side. The reader is being
invited to compare them — that's the only reason to publish them together.

Then the bins move. The right-hand panel above uses a key that turns darker,
sooner, than the left one. Its districts are genuinely worse, but the picture
overstates by however much the key was tightened, and there is no way to
separate the two by looking.

## Why it deceives

A colour key is an axis. It maps a number to something the eye reads directly,
and every intuition about not moving the y-axis between two charts applies to it
unchanged — we just police it less, because a legend looks like a formatting
choice rather than a scale.

It's also uniquely hard to catch. A shifted y-axis leaves visible evidence: the
numbers are right there, and a suspicious reader can check them. Here the reader
would have to hold five thresholds from one legend in their head, read the five
in the other, and notice they differ — while looking at two attractive maps that
are clearly telling a story.

And rebinning is often *innocent* in origin, which is what keeps it alive. As a
number climbs, the old bands stop discriminating — everything saturates at the
top colour and the map goes flat. Rescaling genuinely does make each map, on its
own, more informative. The sin is doing it and still presenting the pair as a
before-and-after.

## The repentance

One key for every panel you want compared. That's the whole rule, and the fixed
version above does nothing else: same data, same dates, one legend serving both.
The rise is still perfectly visible — it just isn't amplified.

If the range really has outgrown the old bands, you have two honest options.
Rebin *both* panels, so the comparison stays like-for-like. Or keep the panels
separate, drop the side-by-side framing, and let each map be a snapshot rather
than half of an implied trend.

And if the two panels must carry different keys, say so loudly, in the chart —
not in a caption underneath, where it will be cropped off the first time anyone
shares it.
