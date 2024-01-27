import Modal from "@components/modal";
import MDX from "@components/mdx-remote";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { readSlug } from "@/utils/slug";

export default function Page({ params }: { params: { slug: string } }) {
  const name: string = readSlug(params.slug);

  return (
    <Modal>
      <Suspense fallback={<SkeletonArticle />}>
        <MDX name={name} />
      </Suspense>
    </Modal>
  );
}
