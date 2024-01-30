import { slugToURL } from "@/utils/slug";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";

export default async function BlogMDX({
  params,
}: {
  params: { slug: string };
}) {
  const url = slugToURL(params.slug, "blog");

  return (
    <section>
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent type="blog" name={url} />
      </Suspense>
    </section>
  );
}
