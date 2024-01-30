import { slugToURL } from "@/utils/slug";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";

export default async function ProjectMDX({
  params,
}: {
  params: { slug: string };
}) {
  const url = slugToURL(params.slug, "projects");

  return (
    <section>
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent name={url} />
      </Suspense>
    </section>
  );
}
