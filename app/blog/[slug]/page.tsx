import { slugToURL } from "@/utils/slug";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { getMDXMeta } from "@/utils/fetch-mdx";

export default function BlogMDX({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const url = slugToURL(slug, "blog");

  return (
    <section>
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent type="blog" name={url} />
      </Suspense>
    </section>
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const data = await getMDXMeta("blog");

  return data.map((item) => ({
    slug: item.id,
  }));
}
