import { Skeleton } from "@components/ui/skeleton";

// skeleton for image in the project list
function SkeletonLoader(props: { count: number }) {
  return Array.from({ length: props.count }, (_, index) => (
    <Skeleton key={index} className="h-8 w-full" />
  ));
}

// this layout should follow the component/projects.tsx layout, it takes the highlight prop
// use highlight true to homepage and false to /project path
export default function SkeletonAdminTable() {
  return (
    <section className="space-y-8">
      <header>
        <Skeleton className="h-8 max-w-md" />
      </header>
      <SkeletonLoader count={8} />
    </section>
  );
}
