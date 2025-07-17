import CarreerFormLoader from "@/components/form/carreer-form-loader";
import SkeletonAdminTable from "@/components/skeleton/skeleton-admin-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";

export default async function UpdateCarreerPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;

  const {
    id
  } = params;

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
              <CarreerFormLoader id={Number(id)} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
