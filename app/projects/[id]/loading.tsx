import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6">
      <Skeleton className="h-12 w-2/4" />
      <Skeleton className="h-4 w-3/4" />

      <div className="mt-4 grid gap-6">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="aspect-video w-full" />
      </div>
    </div>
  );
}
