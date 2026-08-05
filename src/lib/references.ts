// References — every source cited anywhere on the site.
//
// Each sin cites into this list by key, so a page can say "don't take our word
// for it" and point at someone who already made the argument. Add a reference
// once here; cite it from any number of sins.
//
// This is a bibliography, not a curated canon. There is no cap and no bar to
// clear beyond being real, relevant, and described accurately — so when a sin
// could cite five sources, cite five. Breadth is the point: a reader who
// bounces off one author should find another in the same list they already
// trust. Adding an entry is routine, not an editorial event.

export type RefKind = 'book' | 'site' | 'paper';

export interface Reference {
  authors: string;
  title: string;
  /** Publisher / journal / site, for books and papers. */
  work?: string;
  year?: number;
  url?: string;
  kind: RefKind;
  /** One line on what this source is good for. */
  blurb: string;
  /** True for the free-to-read-online works, surfaced as a hint. */
  free?: boolean;
}

export const REFERENCES = {
  // --- books ---
  munzner: {
    authors: 'Tamara Munzner',
    title: 'Visualization Analysis & Design',
    work: 'CRC Press',
    year: 2014,
    url: 'https://www.cs.ubc.ca/~tmm/vadbook/',
    kind: 'book',
    blurb: 'The rigorous framework: what channels the eye reads accurately, and why position beats angle, length, and area.',
  },
  swd: {
    authors: 'Cole Nussbaumer Knaflic',
    title: 'Storytelling with Data',
    work: 'Wiley',
    year: 2015,
    url: 'https://www.storytellingwithdata.com/books',
    kind: 'book',
    blurb: 'The practitioner’s bible on decluttering charts and directing attention honestly.',
  },
  tufte: {
    authors: 'Edward R. Tufte',
    title: 'The Visual Display of Quantitative Information',
    work: 'Graphics Press (2nd ed.)',
    year: 2001,
    url: 'https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/',
    kind: 'book',
    blurb: 'Origin of the “Lie Factor,” chartjunk, and the data-ink ratio.',
  },
  truthfulart: {
    authors: 'Alberto Cairo',
    title: 'The Truthful Art',
    work: 'New Riders',
    year: 2016,
    url: 'http://www.thefunctionalart.com/',
    kind: 'book',
    blurb: 'The companion argument to How Charts Lie: what a chart owes the reader, rather than only how charts betray them.',
  },
  showmenumbers: {
    authors: 'Stephen Few',
    title: 'Show Me the Numbers',
    work: 'Analytics Press (2nd ed.)',
    year: 2012,
    url: 'https://www.perceptualedge.com/',
    kind: 'book',
    blurb: 'The full table-and-graph design manual behind Few’s shorter broadsides.',
  },
  howchartslie: {
    authors: 'Alberto Cairo',
    title: 'How Charts Lie',
    work: 'W. W. Norton',
    year: 2019,
    url: 'http://www.thefunctionalart.com/',
    kind: 'book',
    blurb: 'A whole book on exactly this: the tricks charts use to mislead, and how to read past them.',
  },
  fewpies: {
    authors: 'Stephen Few',
    title: 'Save the Pies for Dessert',
    work: 'Perceptual Edge',
    year: 2007,
    url: 'https://www.perceptualedge.com/articles/visual_business_intelligence/save_the_pies_for_dessert.pdf',
    kind: 'paper',
    blurb: 'The best-known case against the pie chart, argued at length by the field’s most stubborn advocate for clarity.',
    free: true,
  },
  wilke: {
    authors: 'Claus O. Wilke',
    title: 'Fundamentals of Data Visualization',
    work: 'O’Reilly',
    year: 2019,
    url: 'https://clauswilke.com/dataviz/',
    kind: 'book',
    blurb: 'Free, thorough, and organized by problem — a per-topic reference for doing it right.',
    free: true,
  },
  healy: {
    authors: 'Kieran Healy',
    title: 'Data Visualization: A Practical Introduction',
    work: 'Princeton University Press',
    year: 2018,
    url: 'https://socviz.co/',
    kind: 'book',
    blurb: 'Free online; strong on why perception, not taste, decides what works.',
    free: true,
  },
  callingbullshit: {
    authors: 'Carl T. Bergstrom & Jevin D. West',
    title: 'Calling Bullshit',
    work: 'Random House',
    year: 2020,
    url: 'https://www.callingbullshit.org/tools/tools_misleading_axes.html',
    kind: 'book',
    blurb: 'Book and free course; the “Misleading Axes” module is required reading for axis crimes.',
    free: true,
  },
  huff: {
    authors: 'Darrell Huff',
    title: 'How to Lie with Statistics',
    work: 'W. W. Norton',
    year: 1954,
    kind: 'book',
    blurb: 'The 1954 classic that named the game; the truncated axis is right there in it.',
  },
  clevelandmcgill: {
    authors: 'William S. Cleveland & Robert McGill',
    title: 'Graphical Perception: Theory, Experimentation, and Application',
    work: 'Journal of the American Statistical Association',
    year: 1984,
    url: 'https://www.jstor.org/stable/2288400',
    kind: 'paper',
    blurb: 'The experiments proving people judge position accurately and angle/area poorly — the root of most of these sins.',
  },
  shapeparameter: {
    authors: 'William S. Cleveland, Marylyn E. McGill & Robert McGill',
    title: 'The Shape Parameter of a Two-Variable Graph',
    work: 'Journal of the American Statistical Association',
    year: 1988,
    kind: 'paper',
    blurb: 'Made aspect ratio measurable: the width-to-height ratio changes how slopes are judged, and “bank to 45°” came from it.',
  },
  schwabish: {
    authors: 'Jonathan Schwabish',
    title: 'Better Data Visualizations',
    work: 'Columbia University Press',
    year: 2021,
    url: 'https://policyviz.com/books/',
    kind: 'book',
    blurb: 'A modern, chart-by-chart guide to which form fits which job.',
  },

  economistmistakes: {
    authors: 'Sarah Leo',
    title: 'Mistakes, we’ve drawn a few',
    work: 'The Economist',
    year: 2019,
    kind: 'paper',
    blurb: 'A newsroom publicly reopening its own misleading charts and redrawing them — the rare correction written by the people who made the error.',
  },

  // --- sites ---
  datatoviz: {
    authors: 'Yan Holtz & Conor Healy',
    title: 'From Data to Viz — Caveats',
    work: 'data-to-viz.com',
    url: 'https://www.data-to-viz.com/caveats.html',
    kind: 'site',
    blurb: 'A browsable catalogue of common dataviz mistakes, each with a fix.',
    free: true,
  },
  datawrapper: {
    authors: 'Lisa Charlotte Muth & the Datawrapper team',
    title: 'Datawrapper Blog — Data Vis Do’s & Don’ts',
    work: 'blog.datawrapper.de',
    url: 'https://blog.datawrapper.de/category/datavis-dos-and-donts/',
    kind: 'site',
    blurb: 'Chart-type-by-chart-type “what to consider” posts, and the clearest free writing anywhere on choosing color scales.',
    free: true,
  },
  junkcharts: {
    authors: 'Kaiser Fung',
    title: 'Junk Charts',
    work: 'junkcharts.com',
    url: 'https://junkcharts.typepad.com/',
    kind: 'site',
    blurb: 'Fifteen years of chart critique-and-redesign, plus the #onelesspie campaign.',
    free: true,
  },
  spurious: {
    authors: 'Tyler Vigen',
    title: 'Spurious Correlations',
    work: 'tylervigen.com',
    url: 'https://www.tylervigen.com/spurious-correlations',
    kind: 'site',
    blurb: 'Thousands of nonsense correlations — the definitive proof that “they move together” proves nothing.',
    free: true,
  },
  eagereyes: {
    authors: 'Robert Kosara',
    title: 'eagereyes',
    work: 'eagereyes.org',
    url: 'https://eagereyes.org/',
    kind: 'site',
    blurb: 'A researcher translating visualization studies into plain English — and often complicating the received wisdom rather than repeating it.',
    free: true,
  },
  vizwtf: {
    authors: 'WTF Visualizations',
    title: 'WTF Visualizations',
    work: 'viz.wtf',
    url: 'https://viz.wtf/',
    kind: 'site',
    blurb: 'A running gallery of real charts that went wrong in the wild — proof these mistakes ship.',
    free: true,
  },
  ftvisvocab: {
    authors: 'Financial Times Visual Journalism',
    title: 'Visual Vocabulary',
    work: 'FT',
    url: 'https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary',
    kind: 'site',
    blurb: 'A cheat sheet mapping what you want to say to the chart that says it.',
    free: true,
  },
} as const satisfies Record<string, Reference>;

export type ReferenceKey = keyof typeof REFERENCES;

/** Resolve a citation key; throws at build time if it isn't in the list. */
export function getReference(key: string): Reference {
  const ref = (REFERENCES as Record<string, Reference>)[key];
  if (!ref) {
    throw new Error(
      `Reference "${key}" is not in src/lib/references.ts. Known: ${Object.keys(REFERENCES).join(', ')}`,
    );
  }
  return ref;
}

/** A short "Author, Title (Year)" label. */
export function citeLabel(ref: Reference): string {
  return `${ref.authors}, ${ref.title}${ref.year ? ` (${ref.year})` : ''}`;
}
