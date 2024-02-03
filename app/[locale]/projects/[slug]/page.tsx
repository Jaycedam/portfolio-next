import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { getMDXByName } from "@/utils/fetch-mdx";
import { Metadata } from "next/types";

export default function ProjectMDX({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <section>
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent repoFolder="projects" name={slug} />
      </Suspense>
    </section>
  );
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const mdx = await getMDXByName(slug, "projects");

  return {
    title: mdx?.meta.title + " - Jordan Cortés",
  };
}
