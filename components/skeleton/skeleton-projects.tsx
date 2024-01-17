import { Skeleton } from "@components/ui/skeleton";

// skeleton for image in the project list
function SkeletonLoader(props: { count: number }) {
  return Array.from({ length: props.count }, (_, index) => (
    <Skeleton key={index} className="aspect-square" />
  ));
}

// this layout should follow the component/projects.tsx layout, it takes the highlight prop
// use highlight true to homepage and false to /project path
export default function SkeletonProjects(props: { highlights: boolean }) {
  return (
    <section>
      <header className="flex flex-col gap-4">
        <Skeleton className="h-8 max-w-md" />
        <Skeleton className="h-4 max-w-md" />
      </header>

      <div
        className={`grid gap-2 ${
          props.highlights ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        <SkeletonLoader count={props.highlights ? 4 : 6} />
      </div>
    </section>
  );
}
