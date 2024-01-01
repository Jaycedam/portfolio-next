import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto mt-24 grid max-w-4xl gap-6">
      <Skeleton className="h-12 w-2/4" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="my-8 h-1 w-full" />

      <div className="mt-4 grid gap-6">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="aspect-video w-full" />
      </div>
    </div>
  );
}
