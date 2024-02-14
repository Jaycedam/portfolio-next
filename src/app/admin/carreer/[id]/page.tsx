import FormLoader from "@/components/form-loader";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";

export default function UpdateCarreer({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <section>
      <div className="container">
        <Card>
          <CardContent className="py-8">
            {/* todo: add fallback skeleton */}
            <Suspense>
              <FormLoader id={Number(id)} type="carreer" />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
