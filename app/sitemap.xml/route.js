import { NextResponse } from 'next/server';

const BASE_URL = 'https://rsaisoft.info';

// Function to generate the current date in YYYY-MM-DD format
function getCurrentDate() {
  return new Date().toISOString().slice(0, 10);
}

// Generate the sitemap XML content
function generateSitemap() {
  const urls = [
    {
      url: `${BASE_URL}/`,
      changefreq: 'always',
    },
    // Add more URLs here if needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (item) => `
    <url>
      <loc>${item.url}</loc>
      <changefreq>${item.changefreq}</changefreq>
      <lastmod>${getCurrentDate()}</lastmod>
    </url>
  `,
    )
    .join('')}
</urlset>`;

  return sitemap;
}

// Handle GET request for /sitemap.xml
export function GET() {
  const sitemap = generateSitemap();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}