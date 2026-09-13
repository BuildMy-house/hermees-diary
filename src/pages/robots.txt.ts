export const prerender = true;

export async function GET() {
  const txt = `User-agent: *
Allow: /

Sitemap: https://buildmy.house/diary/sitemap.xml
`;

  return new Response(txt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
