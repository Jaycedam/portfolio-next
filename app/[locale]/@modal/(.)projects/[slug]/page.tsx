import { slugToPath } from "@/utils/slug";
import Modal from "@components/modal";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { getMDXMeta, getMDXByName } from "@/utils/fetch-mdx";
import type { Metadata } from "next";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const name = slugToPath(slug, "projects");

  return (
    <Modal>
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent name={name} />
      </Suspense>
    </Modal>
  );
}

// ERROR: NOT WORKING ON @SLOTS
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const data = await getMDXMeta("projects");

  return data.map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const mdx = await getMDXByName(params.name);

  return {
    title: "Jordan Cortés | " + mdx?.meta.title,
  };
}
