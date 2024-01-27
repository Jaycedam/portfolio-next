import FormLoader from "@/components/form-loader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function UpdateProjectArea({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section>
      <div className="container">
        <Card>
          <CardContent className="py-8">
            <FormLoader id={Number(params.id)} type="project-area" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
