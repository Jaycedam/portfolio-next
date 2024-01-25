import { Skeleton } from "@components/ui/skeleton";

// skeleton for image in the project list
function SkeletonLoader({ count }: { count: number }) {
  return Array.from({ length: count }, (_, index) => (
    <Skeleton key={index} className="aspect-square" />
  ));
}

// this layout should follow the component/projects.tsx layout, it takes the highlight prop
// use highlight true to homepage and false to /project path
export default function SkeletonProjects({
  highlights,
}: {
  highlights: boolean;
}) {
  return (
    <section>
      <div className="container space-y-4">
        {/* title */}
        <div className="space-y-1">
          <Skeleton className="h-8 max-w-md" />
          <Skeleton className="h-4 max-w-md" />
        </div>

        <div
          className={`grid gap-2 ${
            highlights ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          <SkeletonLoader count={highlights ? 4 : 6} />
        </div>
      </div>
    </section>
  );
}
