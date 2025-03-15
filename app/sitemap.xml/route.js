// app/sitemap.xml/route.js
export async function GET() {
  const BASE_URL = "https://rsinfo.info"; // Ensure this is correct

  // Define the single URL for the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>`;

  // Return the sitemap as a response
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8", // Ensure this is set
      "Cache-Control": "s-maxage=86400, stale-while-revalidate", // Optional: Cache the sitemap
    },
  });
}
