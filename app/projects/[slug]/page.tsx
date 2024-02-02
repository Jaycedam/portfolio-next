import { slugToPath } from "@/utils/slug";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { getMDXByName, getMDXMeta } from "@/utils/fetch-mdx";
import { Metadata } from "next/types";

export default function ProjectMDX({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const name = slugToPath(slug, "projects");

  return (
    <section>
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent name={name} />
      </Suspense>
    </section>
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const data = await getMDXMeta("projects");

  return data.map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const name = slugToPath(slug, "projects");
  const mdx = await getMDXByName(name);

  return {
    title: mdx?.meta.title + " - Jordan Cortés",
  };
}
