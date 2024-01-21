import Modal from "@components/modal";
import MDX from "@components/mdx-remote";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";

export default function Page({ params }: { params: { id: string } }) {
  const id: number = parseInt(params.id);

  return (
    <Modal>
      <article
        className="prose mx-auto max-w-4xl dark:prose-invert
            prose-a:mr-4
            prose-em:text-sm prose-em:text-muted-foreground 
            prose-img:aspect-[4/3] prose-img:w-full prose-img:rounded-md prose-img:border prose-img:object-fill
            prose-video:aspect-[16/10] prose-video:w-full prose-video:rounded-md prose-video:border"
      >
        <Suspense fallback={<SkeletonArticle />}>
          <MDX id={id} />
        </Suspense>
      </article>
    </Modal>
  );
}
