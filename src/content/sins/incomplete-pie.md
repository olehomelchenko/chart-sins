---
title: "Pie Slices That Don't Sum to the Whole"
summary: "Four-fifths of a result, drawn as if it were all of it — so every share on the chart comes out too big."
poke: "Your slices don't add up to the whole, but they fill the circle anyway. Every number on that chart is bigger than the truth."
category: "Impossible Wholes"
severity: 5
tags: ["pie chart", "part-to-whole", "share"]
badChart: "incomplete-pie-bad"
fixedChart: "incomplete-pie-fixed"
compareNote: "One set of results in both charts. The sinful one just leaves a slice out."
date: 2026-08-05
wild:
  - caption: "Hungarian opposition primary, 2021 — results “in the countryside.”"
    note: "The three labelled slices read 38%, 22% and 19%: 79% in all. The remaining 21% — every other candidate — isn't drawn, and the circle is full anyway, so each share was quietly scaled up by a factor of about 1.27. Measuring the image, the 38% slice occupies 173.6° of arc, which is 48.3% of the pie. The graphic argues its own candidate is the one who can win outside the capital, and it draws her a whisker short of half the vote when she polled 38%."
    image: "hu-primary-countryside.jpg"
    alt: "Pie chart headed AZ ELLENZÉKI ELŐVÁLASZTÁS VÉGEREDMÉNYE VIDÉKEN, with three slices labelled Dobrev Klára 38%, Karácsony Gergely 22%, and Márki-Zay Péter 19%, filling the whole circle."
    credit: "Campaign graphic by Demokratikus Koalíció / Dobrev Klára"
    sourceLabel: "collected by WTF Visualizations"
    sourceUrl: "https://viz.wtf/post/664318320965795840/primary-election-result"
related:
  - too-many-pie-slices
citations:
  - key: datawrapper
    note: "Their pie-chart guidance starts from the premise this chart breaks: “one pie chart can only show one total and its shares.”"
  - key: munzner
    note: "Part-to-whole is a composition of a whole. Remove part of the whole and the encoding no longer means anything."
  - key: fewpies
    note: "Few's case against the pie, which lands hardest when the circle isn't even a real total."
  - key: vizwtf
    note: "Where the specimen above was collected — the archive exists because this ships to real audiences."
  - key: datatoviz
    note: "Its pie-chart caveats cover the arithmetic a pie quietly assumes."
---

## The sin

A pie chart makes exactly one promise: the circle is everything, and each wedge
is its share of that everything. Every reading depends on it. "Nearly half"
means nearly half *of the total* — otherwise the phrase is empty.

So when the parts don't add up to the whole, the tool has two options, and both
are bad. Either it leaves a gap in the circle — which nobody ships — or it
scales the parts up until they close it. Charting libraries do the second
silently, because they compute each angle as a fraction of *the values you
gave them*, not of the total you meant.

Above, three candidates hold 38%, 22% and 19% of the vote. That's 79%. The
remaining 21% went to people not shown, and dropping them doesn't shrink the
chart — it inflates everyone left in it. The leading candidate's 38% is drawn as
48% of the circle.

## Why it deceives

Nothing signals the omission. The circle is closed, the percentages are printed
correctly next to the slices, and the labels and the geometry disagree with each
other in a way almost nobody checks — because checking means adding three
numbers and noticing they don't reach 100.

The reader is doing what the chart asked: comparing areas. The areas are wrong.
And because every slice is inflated by the same factor, the chart stays
internally consistent — it looks exactly like a well-formed pie right up until
you do the arithmetic.

This is worse than a hard-to-read chart. A crowded pie makes you guess; this one
answers confidently and wrong.

## The repentance

Include the whole whole. If the small categories are too numerous or too dull to
list, that's what an **"Other" wedge** is for — it costs one slice and one label,
and it makes every other slice true. The fixed chart above does nothing more
clever than that.

If you can't account for the remainder — a poll with undecideds, a total that
genuinely isn't known — then you don't have a part-to-whole relationship, and a
pie is the wrong form. Use a bar chart, where each value stands on its own
baseline and nothing has to sum to anything.

And if you're tempted to drop the remainder because it makes your number look
better: that's not a charting decision.
