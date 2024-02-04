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
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent repoFolder="projects" name={slug} />
      </Suspense>
    </Modal>
  );
}
