import { slugToURL } from "@/utils/slug";
import Modal from "@components/modal";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";

export default async function Page({ params }: { params: { slug: string } }) {
  const url = slugToURL(params.slug, "blog");

  return (
    <Modal>
      {/* change skeleton  */}
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent type="blog" name={url} />
      </Suspense>
    </Modal>
  );
}
