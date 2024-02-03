import Modal from "@components/modal";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";

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
