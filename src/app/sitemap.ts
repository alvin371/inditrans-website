import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";

// Define the properties for each sitemap item, matching the allowed types for changeFrequency
const sitemapItem = {
  lastModified: new Date(),
  changeFrequency: "yearly" as const, // Use 'as const' to ensure it's typed correctly
  priority: 1
};

// Define static routes
const staticRoutes = ["/", "/about", "/contact", "/privacy-policy", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  // Map through static routes and apply sitemap properties
  const sitemapGeneration = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    ...sitemapItem
  }));

  return sitemapGeneration;
}
