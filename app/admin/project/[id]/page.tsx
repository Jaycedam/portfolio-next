import FormLoader from "@/components/form-loader";
import { Card, CardContent } from "@/components/ui/card";

export default function UpdateProject({ params }: { params: { id: string } }) {
  return (
    <section>
      <div className="container space-y-4">
        <Card>
          <CardContent className="py-8">
            <FormLoader id={Number(params.id)} type="project" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
