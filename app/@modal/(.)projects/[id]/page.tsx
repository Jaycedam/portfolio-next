import Modal from "@components/modal";
import MDX from "@components/mdx-remote";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";

export default function Page({ params }: { params: { id: string } }) {
  const id: number = parseInt(params.id);

  return (
    <Modal>
      <article className="prose mx-auto max-w-4xl py-16 dark:prose-invert prose-em:text-sm prose-em:text-muted-foreground prose-img:aspect-video prose-img:w-full prose-img:rounded-2xl prose-img:border prose-img:object-cover prose-video:aspect-video prose-video:w-full prose-video:rounded-md prose-video:border">
        <Suspense fallback={<SkeletonArticle />}>
          <MDX id={id} />
        </Suspense>
      </article>
    </Modal>
  );
}
