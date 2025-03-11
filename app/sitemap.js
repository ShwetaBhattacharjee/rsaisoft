const BASE_URL = "https://www.rsaisoft.info";

// Function to generate the current date in YYYY-MM-DD format
function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

// Default export required for Next.js App Router
export default function sitemap() {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: getCurrentDate(),
      priority: 1.0,
    },
  ];
}
