import { getCarreers } from "@utils/get-data";
import { Badge } from "@/components/ui/badge";
import { Carreer } from "@prisma/client";

export default async function Carreer() {
  let data = await getCarreers();

  return (
    <ol className="relative max-w-prose space-y-8 before:absolute before:left-4 before:hidden before:h-full before:border-l md:mx-auto md:before:block">
      {/* circle of timeline  */}
      <span className="motion-safe:scale-up sticky -left-8 top-1/4 hidden h-8 w-8 items-center justify-center rounded-full bg-primary md:flex"></span>
      {data?.map((item, idx) => (
        <li
          key={idx}
          className="motion-safe:fade-left space-y-1 rounded-xl border bg-background p-6 shadow-sm md:ms-16"
        >
          <time className="motion-safe:fade-left block text-sm leading-none text-muted-foreground">
            {item.date}
          </time>

          <div className="inline-flex items-center gap-2">
            <h2 className="motion-safe:fade-left flex items-center text-lg font-semibold text-foreground">
              {item.name} - {item.company}
            </h2>

            <Badge className="motion-safe:scale-up">{item.type.name}</Badge>
          </div>

          <p className="motion-safe:fade-left prose prose-zinc mb-4 dark:prose-invert">
            {item.about}
          </p>
        </li>
      ))}
    </ol>
  );
}
