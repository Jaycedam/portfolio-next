import { getCarreers } from "@utils/get-data";
import { Badge } from "@/components/ui/badge";
import { getScopedI18n } from "@/locales/server";

export default async function Carreer() {
  const t = await getScopedI18n("carreer");
  const data = await getCarreers();

  return (
    <section
      id="carreer"
      className="border-y bg-muted/70 py-16 dark:bg-muted/20"
    >
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="heading">{t("heading")}</h1>
          <p className="subheading mx-auto max-w-prose">{t("subheading")}</p>
        </div>

        <ol className="relative max-w-prose space-y-8 before:absolute before:left-4 before:hidden before:h-full before:border-l before:border-border md:mx-auto md:before:block">
          {/* circle of timeline  */}
          <span className="motion-safe:scale-up sticky -left-8 top-1/4 hidden h-8 w-8 items-center justify-center rounded-full bg-primary md:flex"></span>
          {data.map((item, idx) => (
            <li
              key={idx}
              className="motion-safe:fade-left space-y-1 rounded-xl border bg-gradient-to-tl from-background/60 from-50% p-6 md:ms-16"
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

              <p className="motion-safe:fade-left mb-4 text-muted-foreground">
                {item.about}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
