import { Skeleton } from "@components/ui/skeleton";

export default function SkeletonArticle() {
  return (
    <div className="min-h-screen space-y-8">
      <Skeleton className="h-12 w-2/4" />
      <Skeleton className="h-4 w-3/4" />

      <div className="mt-4 space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="aspect-[16/10] w-full" />
      </div>
      <div className="mt-4 space-y-4">
        <Skeleton className="h-8 w-2/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
