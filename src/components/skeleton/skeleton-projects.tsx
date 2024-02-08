import { Skeleton } from "@components/ui/skeleton";

// skeleton for image in the project list
function SkeletonLoader({ count }: { count: number }) {
  return Array.from({ length: count }, (_, index) => (
    <Skeleton key={index} className="aspect-square rounded-xl" />
  ));
}

// this layout should follow the component/projects.tsx layout, it takes the highlight prop
// use highlight true to homepage and false to /project path
export default function SkeletonProjects({
  homepage = false,
}: {
  homepage?: boolean;
}) {
  return (
    <div className="container space-y-6">
      {/* title */}
      <div className="space-y-2">
        <Skeleton className="h-12 max-w-md" />
        <Skeleton className="h-4 max-w-md" />
      </div>

      <Skeleton className="h-10 w-full" />

      <div
        className={`grid gap-2 ${
          homepage ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        <SkeletonLoader count={homepage ? 4 : 6} />
      </div>
    </div>
  );
}
