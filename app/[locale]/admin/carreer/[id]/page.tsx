import FormLoader from "@/components/form-loader";
import { Card, CardContent } from "@/components/ui/card";

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
            <FormLoader id={Number(id)} type="carreer" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
