import { Skeleton } from "@components/ui/skeleton";

// skeleton for image in the project list
function SkeletonLoader(props: { count: number }) {
  return Array.from({ length: props.count }, (_, index) => (
    <Skeleton key={index} className="grid h-32 w-full" />
  ));
}

// this layout should follow the component/projects.tsx layout, it takes the highlight prop
// use highlight true to homepage and false to /project path
export default function SkeletonCarreer() {
  return (
    <section className="grid gap-4">
      <SkeletonLoader count={5} />
    </section>
  );
}
