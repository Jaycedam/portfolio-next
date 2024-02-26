import CarreerTypeFormLoader from "@/components/form/carreer-type-form-loader";
import SkeletonAdminTable from "@/components/skeleton/skeleton-admin-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";

export default function UpdateCarreerTypePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <section>
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle>Update Carreer Type</CardTitle>
          </CardHeader>

          <CardContent className="py-8">
            {/* todo: add fallback skeleton */}
            <Suspense fallback={<SkeletonAdminTable />}>
              <CarreerTypeFormLoader id={Number(id)} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
