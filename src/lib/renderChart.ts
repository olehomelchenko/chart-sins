import * as vega from 'vega';
import { compile, type TopLevelSpec, type Config } from 'vega-lite';

// Chart theme — the visual parameters the renderer consumes. Shared by the
// on-page VegaChart component and the build-time OpenGraph card generator, so
// both render charts identically.
export const chartTheme: Config = {
  font: 'IBM Plex Sans',
  background: 'transparent',
  view: { stroke: null },
  title: {
    color: '#161616',
    font: 'IBM Plex Sans',
    fontSize: 13,
    fontWeight: 600,
    anchor: 'start',
    dy: -8,
  },
  axis: {
    labelFont: 'IBM Plex Sans',
    labelFontSize: 11,
    labelColor: '#525252',
    titleFont: 'IBM Plex Sans',
    titleFontSize: 12,
    titleFontWeight: 600,
    titleColor: '#393939',
    gridColor: '#e0e0e0',
    domainColor: '#8d8d8d',
    tickColor: '#8d8d8d',
    labelPadding: 4,
  },
  legend: {
    labelFont: 'IBM Plex Sans',
    labelFontSize: 11,
    labelColor: '#525252',
    titleFont: 'IBM Plex Sans',
    titleFontSize: 12,
    titleColor: '#393939',
    symbolType: 'square',
  },
  // Categorical palette (validated colorblind-safe/contrast on the
  // --chart-canvas surface).
  range: {
    category: ['#8a3ffc', '#009d9a', '#fa4d56', '#0f62fe', '#24a148', '#d02670', '#b28600', '#1192e8'],
  },
};

/** Compile a Vega-Lite spec and render it headlessly to a static SVG string. */
export async function renderChartSvg(spec: TopLevelSpec): Promise<string> {
  const vgSpec = compile(spec, { config: chartTheme }).spec;
  const view = new vega.View(vega.parse(vgSpec), { renderer: 'none' }).initialize();
  const svg = await view.toSVG();
  view.finalize();
  return svg;
}
