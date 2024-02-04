import BlogPosts from "@/components/blog-posts";
import SkeletonProjects from "@/components/skeleton/skeleton-projects";
import { Suspense } from "react";

export default function BlogPostsPage({
  searchParams,
}: {
  searchParams?: {
    tags?: string | string[];
  };
}) {
  return (
    <Suspense fallback={<SkeletonProjects />}>
      <BlogPosts tags={searchParams?.tags} />
    </Suspense>
  );
}

export const metadata = {
  title: "Blog - Jordan Cortés",
  description: "A list of my posts.",
};
