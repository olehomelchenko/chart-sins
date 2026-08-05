# Datawrapper — pie charts, and stacked column charts

Two "Data vis do's & don'ts" posts by Lisa Charlotte Muth, supplied as PDFs and
read 2026-08-05. Answers queue rows 1 and 6.

## "What to consider when creating pie charts" (3 Jan 2018)

`blog.datawrapper.de/pie-charts/`

Opening line, which is the useful one for us:

> Pie charts are great to show how 100% divide up into a few shares.

And the positive case, which we should keep quoting when people accuse us of
banning the form:

> Pie charts work best for values around 25%, 50% or 75%. It's easier for
> readers to spot these percentages in a pie chart than in a stacked bar or
> column chart.

Then the limits, both of which are our published sin:

> Pie charts are not the best choice if you want readers to compare the size of
> shares. That's especially true if the differences between the shares are
> small.

> Pie charts work best if you only have a few values – five max.

Our sample pie has eight. Cited on `too-many-pie-slices`.

**Caveat for backlog entries 2 and 3.** This post does *not* say in so many
words that a pie's parts must be mutually exclusive and sum to 100% — so it
can't be cited for the multi-select survey case as I'd hoped. What it does give
is the premise those sins rest on:

> One pie chart can only show one total and its shares.

That's enough to support "there must be a whole," and nothing more. The backlog
notes now say exactly that rather than implying a stronger claim.

Also flags Robert Kosara's "Understanding Pie Charts" as a "great research-based
explanation of how people read pie charts" — independent support for our
`eagereyes` note (claim V7). URL not captured; queued.

## "What to consider when creating stacked column charts" (13 Feb 2018)

`blog.datawrapper.de/stacked-column-charts/`

The sentence backlog entry 6 is built on:

> It's hard for readers to compare columns that don't start at the same
> baseline.

And the design guidance:

> Bring the most important value to the bottom of the chart and use color to
> make it stand out. Your readers can compare values easier with each other if
> they have the same baseline.

Useful nuance I hadn't accounted for: a 100%-stacked chart has **two** usable
baselines, not one —

> You will gain a second baseline at the top of your chart where you can place
> the second most important category in your data.

So the sin is sharper than "only the bottom is readable": everything *between*
the two baselines floats. Worth writing the page that way.

Also: "Make sure that you include all parts of the total in your charts – and
only parts of the total." Pairs with the Economist's rainbow-stack example,
where a partial selection of countries was stacked as if it were the whole.
