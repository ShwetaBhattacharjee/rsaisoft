
export async function GET() {
  const BASE_URL = "https://rsinfo.info"; // Ensure this is correct
  const currentDate = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}/</loc>
      <lastmod>${currentDate}</lastmod>
      <priority>1.0</priority>
    </url>
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml", // Ensures the correct content type
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
