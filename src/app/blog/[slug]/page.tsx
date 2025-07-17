import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { getMDXByName, getMDXMeta } from "@/utils/fetch-mdx";
import { Metadata } from "next/types";

export default async function BlogMDX(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;

  const {
    slug
  } = params;

  return (
    <Suspense key={slug} fallback={<SkeletonArticle />}>
      <MDXContent repoFolder="blog" name={slug} />
    </Suspense>
  );
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;

  const {
    slug
  } = params;

  const mdx = await getMDXByName(slug, "blog");

  return {
    title: mdx?.meta.title + " - Jordan Cortés",
  };
}

// SSG
export async function generateStaticParams() {
  const data = await getMDXMeta("blog");

  return data.map((item) => ({
    slug: item.id,
  }));
}
