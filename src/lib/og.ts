import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import type { TopLevelSpec } from 'vega-lite';
import { renderChartSvg } from './renderChart';

// OpenGraph card generator. Runs only at build time. Composes a 1200×630 card
// with satori (text → vector paths, so the raster step needs no fonts) and
// rasterizes to PNG with resvg. Charts are rendered by the shared Vega pipeline,
// rasterized to PNG (resvg, using the bundled IBM Plex TTFs for axis text), and
// embedded as images.

const OG_W = 1200;
const OG_H = 630;

// Resolve from the project root so it works after the module is bundled into
// dist/chunks/ at build time.
const fontDir = path.join(process.cwd(), 'src/og/fonts');
const fontPath = (f: string) => path.join(fontDir, f);
const fontFiles = [
  fontPath('IBMPlexSans-Light.ttf'),
  fontPath('IBMPlexSans-Regular.ttf'),
  fontPath('IBMPlexSans-SemiBold.ttf'),
];
const fonts = [
  { name: 'IBM Plex Sans', data: fs.readFileSync(fontFiles[0]), weight: 300 as const, style: 'normal' as const },
  { name: 'IBM Plex Sans', data: fs.readFileSync(fontFiles[1]), weight: 400 as const, style: 'normal' as const },
  { name: 'IBM Plex Sans', data: fs.readFileSync(fontFiles[2]), weight: 600 as const, style: 'normal' as const },
];

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Render a chart spec to a PNG data URI at a fixed display height (2× for crispness).
 *  Fixing height (not width) keeps tall vconcat charts from overflowing the card. */
async function chartImage(spec: TopLevelSpec, displayHeight: number) {
  const svg = await renderChartSvg(spec);
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'height', value: displayHeight * 2 },
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'IBM Plex Sans' },
    background: '#f4f4f4',
  });
  const rendered = resvg.render();
  const png = rendered.asPng();
  return {
    uri: `data:image/png;base64,${png.toString('base64')}`,
    width: Math.round(rendered.width / 2),
    height: displayHeight,
  };
}

async function toPng(markupStr: string): Promise<Buffer> {
  const svg = await satori(html(markupStr.trim()), { width: OG_W, height: OG_H, fonts });
  return Buffer.from(new Resvg(svg, { font: { fontFiles, loadSystemFonts: false } }).render().asPng());
}

function meter(severity: number): string {
  // Each square needs its own `display` — satori rejects a flex row of empty divs otherwise.
  return Array.from({ length: 5 }, (_, i) =>
    `<div style="display:flex;width:20px;height:20px;background:${i < severity ? '#fa4d56' : '#525252'}"></div>`,
  ).join('');
}

const wordmark = `<div style="display:flex;font-size:22px;font-weight:600;letter-spacing:4px;color:#f4f4f4">CHART SINS</div>`;

export interface SinCard {
  poke: string;
  category: string;
  severity: number;
  badSpec: TopLevelSpec;
  fixedSpec: TopLevelSpec;
}

export async function renderSinCard(d: SinCard): Promise<Buffer> {
  const bad = await chartImage(d.badSpec, 250);
  const fixed = await chartImage(d.fixedSpec, 250);

  const panel = (label: string, color: string, img: { uri: string; width: number; height: number }) => `
    <div style="display:flex;flex-direction:column;background:#f4f4f4;padding:12px;border-top:5px solid ${color}">
      <div style="display:flex;font-size:13px;font-weight:600;letter-spacing:1px;color:${color};margin-bottom:6px">${label}</div>
      <img src="${img.uri}" style="width:${img.width}px;height:${img.height}px" />
    </div>`;

  return toPng(`
    <div style="display:flex;flex-direction:column;width:${OG_W}px;height:${OG_H}px;background:#161616;padding:44px 56px">
      <div style="display:flex;align-items:center;justify-content:space-between">
        ${wordmark}
        <div style="display:flex;gap:6px">${meter(d.severity)}</div>
      </div>
      <div style="display:flex;font-size:40px;font-weight:300;line-height:1.15;color:#f4f4f4;margin-top:22px;max-width:1090px">${esc(d.poke)}</div>
      <div style="display:flex;gap:22px;margin-top:26px;justify-content:center">
        ${panel('THE SIN', '#fa4d56', bad)}
        ${panel('THE FIX', '#42be65', fixed)}
      </div>
      <div style="display:flex;margin-top:22px;font-size:17px;color:#a8a8a8">${esc(d.category)}</div>
    </div>
  `);
}

export async function renderDefaultCard(): Promise<Buffer> {
  return toPng(`
    <div style="display:flex;flex-direction:column;justify-content:space-between;width:${OG_W}px;height:${OG_H}px;background:#161616;padding:64px 72px">
      ${wordmark}
      <div style="display:flex;flex-direction:column">
        <div style="display:flex;font-size:66px;font-weight:300;line-height:1.08;color:#f4f4f4;max-width:1000px">Charts that lie, and the honest fix.</div>
        <div style="display:flex;font-size:26px;color:#a8a8a8;margin-top:24px;max-width:900px">The deceptive chart, why it fools the eye, and the honest version — with citations. Send the link instead of re-explaining.</div>
      </div>
      <div style="display:flex;font-size:18px;color:#6f6f6f">a catalogue of data-visualization sins</div>
    </div>
  `);
}
