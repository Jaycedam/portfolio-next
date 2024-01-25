import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { readSlug } from "@/utils/slug";
import MDX from "@components/mdx-remote";
import { Suspense } from "react";

export default function ProjectMDX({ params }: { params: { slug: string } }) {
  const name: string = readSlug(params.slug);

  return (
    <section>
      <div className="container">
        <article className="prose mx-auto max-w-4xl dark:prose-invert prose-em:text-sm prose-em:text-muted-foreground prose-img:aspect-video prose-img:w-full prose-img:rounded-2xl prose-img:border prose-img:object-cover prose-video:aspect-video prose-video:w-full prose-video:rounded-md prose-video:border">
          <Suspense fallback={<SkeletonArticle />}>
            <MDX name={name} />
          </Suspense>
        </article>
      </div>
    </section>
  );
}
