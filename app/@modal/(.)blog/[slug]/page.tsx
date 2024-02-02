import { slugToPath } from "@/utils/slug";
import Modal from "@components/modal";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { getMDXMeta } from "@/utils/fetch-mdx";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const name = slugToPath(slug, "blog");

  return (
    <Modal>
      {/* change skeleton  */}
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent name={name} />
      </Suspense>
    </Modal>
  );
}

// ERROR: NOT WORKING ON @SLOTS
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const data = await getMDXMeta("blog");

  return data.map((item) => ({
    slug: item.id,
  }));
}
