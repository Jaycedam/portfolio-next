import FormLoader from "@/components/form-loader";
import { Card, CardContent } from "@/components/ui/card";

export default function UpdateCarreer({ params }: { params: { id: string } }) {
  return (
    <section>
      <div className="container">
        <Card>
          <CardContent className="py-8">
            <FormLoader id={Number(params.id)} type="carreer" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
