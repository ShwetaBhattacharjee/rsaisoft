export async function GET() {
  const BASE_URL = "https://rsinfo.info"; // Ensure it's correct

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8", // Explicitly set XML format
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
