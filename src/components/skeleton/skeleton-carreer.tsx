import { Skeleton } from "@components/ui/skeleton";

// skeleton for image in the project list
function SkeletonLoader({ count }: { count: number }) {
  return Array.from({ length: count }, (_, index) => (
    <Skeleton key={index} className="grid h-32 w-full rounded-xl md:ms-16" />
  ));
}

// this layout should follow the component/projects.tsx layout, it takes the highlight prop
// use highlight true to homepage and false to /project path
export default function SkeletonCarreer() {
  return (
    <section>
      <div className="mx-auto max-w-prose space-y-4">
        <ol className="relative max-w-prose space-y-8 before:absolute before:left-4 before:hidden before:h-full before:border-l before:border-border md:mx-auto md:before:block">
          <SkeletonLoader count={5} />
        </ol>
      </div>
    </section>
  );
}
