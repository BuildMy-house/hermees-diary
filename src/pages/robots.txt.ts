export const prerender = true;

export async function GET() {
  const txt = `User-agent: *
Allow: /
`;

  return new Response(txt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
