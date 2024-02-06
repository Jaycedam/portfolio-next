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
  return (
    <Modal>
      {/* change skeleton  */}
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent repoFolder="blog" name={slug} />
      </Suspense>
    </Modal>
  );
}

// SSG, currently not supported on intercepting routes
// issue on nextjs https://github.com/vercel/next.js/issues/52842
export async function generateStaticParams() {
  const data = await getMDXMeta("blog");

  return data.map((item) => ({
    slug: item.id,
  }));
}
