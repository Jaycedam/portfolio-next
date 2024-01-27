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
          <MDX name={name} />
        </Suspense>
      </div>
    </section>
  );
}
