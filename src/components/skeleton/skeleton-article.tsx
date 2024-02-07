import { Skeleton } from "@components/ui/skeleton";

export default function SkeletonArticle() {
  return (
    <div className="container min-h-screen space-y-8">
      <div className="mx-auto max-w-prose space-y-4">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-12 w-2/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>

      <Skeleton className="aspect-video w-full rounded-xl" />

      <div className="mx-auto max-w-prose space-y-4">
        <Skeleton className="h-12 w-2/4" />

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
