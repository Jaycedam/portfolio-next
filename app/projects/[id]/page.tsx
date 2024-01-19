import SkeletonArticle from "@/components/skeleton/skeleton-article";
import MDX from "@components/mdx-remote";
import { Suspense } from "react";

export default function ProjectMDX({ params }: { params: { id: string } }) {
  const id: number = parseInt(params.id);

  return (
    <section>
      <Suspense fallback={<SkeletonArticle />}>
        <article
          className="prose mx-auto max-w-4xl dark:prose-invert
          prose-a:mr-4
          prose-em:text-sm prose-em:text-muted-foreground 
          prose-img:aspect-[4/3] prose-img:w-full prose-img:rounded-md prose-img:border prose-img:object-fill
          prose-video:aspect-[16/10] prose-video:w-full prose-video:rounded-md prose-video:border"
        >
          <MDX id={id} />
        </article>
      </Suspense>
    </section>
  );
}
