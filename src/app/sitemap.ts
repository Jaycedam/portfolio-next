import { getMDXMeta } from "@/utils/fetch-mdx";
import { MetadataRoute } from "next/types";

// This file generates a sitemap.xml for the static routes and dynamic routes
// Sitemap documentation https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl: string = process.env.SITE_URL as string;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/projects` },
  ];

  // Fetching projects and blogs
  const projectsArray = await getMDXMeta("projects");
  const blogArray = await getMDXMeta("blog");

  // Constructing URLs based on the 'id' property of each item
  const projectRoutes = projectsArray.map((item) => ({
    url: `${baseUrl}/projects/${item.id}`,
  }));
  const blogRoutes = blogArray.map((item) => ({
    url: `${baseUrl}/blog/${item.id}`,
  }));

  const sitemapEntries = [...staticRoutes, ...projectRoutes, ...blogRoutes];

  return sitemapEntries;
}
