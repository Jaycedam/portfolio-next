import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { getMDXByName } from "@/utils/fetch-mdx";
import { Metadata } from "next/types";
import { getCurrentLocale } from "@/locales/server";

export default function BlogMDX({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <section>
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent repoFolder="blog" name={slug} />
      </Suspense>
    </section>
  );
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const locale = getCurrentLocale();
  const mdx = await getMDXByName(slug, "blog");

  return {
    title: mdx?.meta.title + " - Jordan Cortés",
  };
}
