---
title: "Bar Colours That Contradict Their Labels"
summary: "The categories already have colours. The chart assigned different ones anyway."
poke: "Your categories are colours, and you let the software pick different ones. The reader now has to override what they can see in order to read the chart."
category: "Sloppy Craft"
severity: 2
tags: ["bar chart", "colour", "encoding"]
badChart: "category-color-bad"
fixedChart: "category-color-fixed"
related:
  - too-many-pie-slices
date: 2026-08-05
wild:
  - caption: "“Shoe color Frequency” — a survey of shoe colours, plotted in a spreadsheet's default palette."
    note: "Every category is a colour, and not one bar matches. Black is a green bar. White is a blue bar. Red is orange, grey is teal, brown is navy. The numbers are all correct — you simply cannot use the fastest channel on the chart, because it has been filled with an answer to a different question."
    image: "shoe-colour-frequency.jpg"
    alt: "Bar chart titled Shoe color Frequency with categories White, Blue, Yellow, Black, Red, Grey and Brown, each drawn in an unrelated default palette colour."
    credit: "Spotted in the wild; original author unknown"
    sourceLabel: "collected by WTF Visualizations"
    sourceUrl: "https://viz.wtf/post/639589038118125568"
citations:
  - key: munzner
    note: "Colour is a channel that carries meaning whether or not you meant it to. Spending it on nothing is the cheap version of this mistake; spending it on the wrong thing is this one."
  - key: swd
    note: "Knaflic's rule that every colour on a chart should be a decision, made for a reason the reader can recover."
  - key: datawrapper
    note: "Their colour writing keeps returning to the same point: a palette is a mapping to data, not decoration."
  - key: vizwtf
    note: "Where the specimen above was collected."
  - key: schwabish
    note: "Chart-by-chart on matching the encoding to what the reader is actually being asked to do."
---

## The sin

Some categories arrive with a colour already attached. Colours themselves,
obviously — but also political parties, sports teams, brands, traffic-light
statuses, the red and black of a balance sheet. The reader knows the mapping
before they reach your chart.

Ignore it and you don't get a neutral chart. You get one that argues with
itself: a bar labelled *Black* drawn in green, one labelled *White* drawn in
blue. Every value is correct and the chart is still exhausting, because the
fastest channel on the page is now pointing somewhere the labels aren't.

## Why it deceives

"Deceives" is generous — nothing here is false, which is why this is a two and
not a four. But colour is pre-attentive: it lands before you've read a single
label. So the chart hands the reader an answer, the labels hand them a different
one, and the reader has to consciously suppress the first to trust the second.

That cost is paid on every glance, by every reader, forever, to save the author
one minute. And it doesn't stay merely annoying: anyone skimming, quoting from
memory, or looking at a thumbnail will take the colour at face value.

## The repentance

If a category has a natural colour, use it. The fix above is not clever — it
assigns each bar the colour it is named after, and adds a hairline stroke so
white and yellow keep an edge against the canvas.

If your categories *don't* have natural colours, the other repentance applies:
don't colour them at all. Seven bars in seven hues where a single hue would do
is the same mistake wearing a nicer coat — colour that encodes nothing but is
read as though it encodes something. One colour, or one highlighted bar and the
rest in grey.

The test is simple. Ask what a reader would conclude from the colours alone. If
the answer is "something wrong," or "nothing," change them.
