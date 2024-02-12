import BlogPosts from "@/components/blog-posts";
import FilterByParam from "@/components/filter-by-param";
import SkeletonBlogPosts from "@/components/skeleton/skeleton-blog-posts";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import es from "@/locales/es";
import { X } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function BlogPostsPage({
  searchParams,
}: {
  searchParams?: {
    tags?: string;
  };
}) {
  const t = es.blog;
  const tags = searchParams?.tags;

  return (
    <section className="container space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="title">
          {t.heading}{" "}
          {tags && (
            <span className="space-x-8 text-xl font-normal text-muted-foreground">
              {tags}
            </span>
          )}
        </h1>

        {tags && (
          <Link
            className={buttonVariants({ variant: "secondary", size: "sm" })}
            href="/blog"
          >
            <X className="h-4 w-auto" />
            &nbsp; Borrar filtros
          </Link>
        )}
      </div>

      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <FilterByParam repoFolder="blog" />
      </Suspense>

      <Suspense key={tags} fallback={<SkeletonBlogPosts />}>
        <BlogPosts tags={searchParams?.tags} />
      </Suspense>
    </section>
  );
}

export const metadata = {
  title: "Blog - Jordan Cortés",
  description: "A list of my posts.",
};
