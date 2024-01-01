import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container">
      <header className="flex items-center gap-2">
        <h1 className="title">Software</h1>
        <p className="text-sm font-light text-muted-foreground">
          click en imagen para más detalles.
        </p>
      </header>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div className="grid gap-2 md:grid-cols-3">
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
      </div>
    </section>
  );
}
