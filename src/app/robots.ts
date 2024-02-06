import { MetadataRoute } from "next/types";

// Documentation https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  };
}
