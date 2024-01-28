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
        <article className="prose prose-zinc mx-auto dark:prose-invert prose-a:text-primary prose-em:text-sm prose-em:text-muted-foreground prose-hr:border-border dark:prose-pre:bg-muted">
          <MDX name={name} />
        </article>
      </Suspense>
    </Modal>
  );
}
