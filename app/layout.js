import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "RS AI SOFT - AI-Powered Software Solutions",
  description:
    "RS AI Soft provides advanced AI-driven software solutions for businesses and individuals. Explore our innovative AI applications today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        {/* SEO Meta Tags */}
        <meta name="keywords" content="RS AI Soft, AI Software, AI Solutions, Artificial Intelligence, AI Development, Machine Learning, AI Automation" />
        <meta name="description" content="RS AI Soft provides advanced AI-driven software solutions for businesses and individuals. Explore our innovative AI applications today." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="RS AI Soft" />
        <meta http-equiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://rsaisoft.vercel.app" />

        {/* International SEO - Default Language Version */}
        <link rel="alternate" href="https://rsaisoft.vercel.app" hreflang="x-default" />
        <link rel="alternate" href="https://rsaisoft.vercel.app/en" hreflang="en" />
        <link rel="alternate" href="https://rsaisoft.vercel.app/ar" hreflang="ar" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="RS AI SOFT - AI-Powered Software Solutions" />
        <meta property="og:description" content="AI software solutions designed for businesses and individuals. Enhance productivity with AI automation." />
        <meta property="og:image" content="https://rsaisoft.vercel.app/mobile.png" />
        <meta property="og:url" content="https://rsaisoft.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card for Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RS AI SOFT - AI-Powered Software Solutions" />
        <meta name="twitter:description" content="Discover AI-powered software solutions for business automation and efficiency." />
        <meta name="twitter:image" content="https://rsaisoft.vercel.app/mobile.png" />

        {/* Favicon & Mobile Icon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/mobile.png" />

        {/* Structured Data for Google Knowledge Graph */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RS AI SOFT",
            "url": "https://rsaisoft.vercel.app",
            "logo": "https://rsaisoft.vercel.app/mobile.png",
            "description": "AI-powered software solutions for businesses and individuals worldwide.",
            "sameAs": [
              "https://www.linkedin.com/company/yourcompany",
              "https://facebook.com/befix"
            ]
          })}
        </script>
      </head>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
