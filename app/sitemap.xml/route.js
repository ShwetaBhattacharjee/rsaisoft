const BASE_URL = "https://rsaisoft.info";

// Default export required for Next.js App Router
export default function sitemap() {
  return [
    {
      url: `${BASE_URL}/`,
      changefreq: 'always', // Change frequency
    },
  ];
}
