import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { getChartSpec } from '../../lib/charts';
import { renderSinCard } from '../../lib/og';

export const getStaticPaths: GetStaticPaths = async () => {
  const sins = await getCollection('sins', ({ data }) => !data.draft);
  return sins.map((sin) => ({ params: { slug: sin.id }, props: { sin } }));
};

export const GET: APIRoute = async ({ props }) => {
  const { sin } = props as { sin: Awaited<ReturnType<typeof getCollection>>[number] };
  const png = await renderSinCard({
    poke: sin.data.poke,
    category: sin.data.category,
    severity: sin.data.severity,
    badSpec: getChartSpec(sin.data.badChart),
    fixedSpec: getChartSpec(sin.data.fixedChart),
    citationKeys: sin.data.citations.map((c) => c.key),
  });
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
