import BlogPosts from "@/components/blog-posts";
import SkeletonProjects from "@/components/skeleton/skeleton-projects";
import { Suspense } from "react";

const BlogPostsPage = ({
  searchParams,
}: {
  searchParams?: {
    tags?: string | string[];
  };
}) => {
  return (
    <Suspense fallback={<SkeletonProjects />}>
      <BlogPosts tags={searchParams?.tags} />
    </Suspense>
  );
};

export default BlogPostsPage;
