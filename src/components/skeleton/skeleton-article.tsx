import { Skeleton } from "@components/ui/skeleton";

export default function SkeletonArticle() {
  return (
    <div className="mx-auto min-h-screen max-w-prose space-y-8">
      <Skeleton className="h-12 w-2/4" />
      <Skeleton className="h-4 w-3/4" />

      <div className="mt-4 space-y-4">
        <Skeleton className="aspect-video w-full" />

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="mt-4 space-y-4">
        <Skeleton className="h-8 w-2/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
