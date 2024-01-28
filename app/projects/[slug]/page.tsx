import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { readSlug } from "@/utils/slug";
import MDX from "@components/mdx-remote";
import { Suspense } from "react";

export default function ProjectMDX({ params }: { params: { slug: string } }) {
  const name: string = readSlug(params.slug);

  return (
    <section>
      <div className="container">
        <Suspense fallback={<SkeletonArticle />}>
          <article className="prose prose-zinc mx-auto dark:prose-invert prose-a:text-primary prose-em:text-sm prose-em:text-muted-foreground prose-hr:border-border dark:prose-pre:bg-muted">
            <MDX name={name} />
          </article>
        </Suspense>
      </div>
    </section>
  );
}
