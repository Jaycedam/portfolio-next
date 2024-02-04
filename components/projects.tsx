import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ChevronRight, X } from "lucide-react";
import { getMDXMeta } from "@/utils/fetch-mdx";
import { MDXMeta } from "@/utils/types";
import Image from "next/image";
import FilterByParam from "./filter-by-param";
import { getScopedI18n } from "@/locales/server";

export default async function Projects({
  homepage = false,
  tags,
}: {
  homepage?: boolean;
  tags?: string | string[];
}) {
  const t = await getScopedI18n("projects");

  /**
   * This variable is for storing the filtered data,
   * since we need the original data array for the full tag list for filtering.
   */
  let projects: MDXMeta[] = [];

  // fetch data from the github api
  const data = await getMDXMeta("projects");
  if (!data) return;

  // sets an array from all the tags from the original data variable
  const metaTags = Array.from(new Set(data.flatMap((item) => item.tags))).map(
    (tag) => ({ tag })
  );

  // if this component is rendered on the homepage, then filter by featured=true
  if (homepage) {
    projects = data.filter((item) => item.featured === "true");
  } else if (!homepage) {
    projects = data;
  }

  // filter by tags on the url params
  if (tags && tags.length > 0) {
    projects = data.filter(
      (item) => item.tags && item.tags.some((tag) => tags.includes(tag))
    );
  }

  return (
    <section id="projects">
      <div className="container space-y-4">
        <div className="flex flex-col flex-wrap gap-4 md:flex-row md:justify-between">
          <div className="space-y-1">
            <h1 className="heading">
              {t("heading")}{" "}
              {tags && (
                <span className="text-xl font-normal text-muted-foreground">
                  {tags}
                </span>
              )}
            </h1>
            <p className="subheading">{t("subheading")}</p>
          </div>

          <div className="flex gap-2">
            {tags && (
              <Link
                className={buttonVariants({ variant: "outline", size: "icon" })}
                href="/projects"
              >
                <X className="h-4" />
              </Link>
            )}
            {!homepage && (
              <FilterByParam
                label={t("btn.filter")}
                repoFolder="projects"
                tags={metaTags}
              />
            )}
          </div>
        </div>

        <div
          className={`grid gap-2 ${
            homepage ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {projects.map((item) => (
            <ProjectCard key={item.id} {...item}></ProjectCard>
          ))}
        </div>

        {homepage && (
          <div className="flex justify-end">
            <Link
              className={`group ${buttonVariants({
                variant: "outline",
              })}`}
              href="/projects"
            >
              {t("btn.more")}
              <ChevronRight className="h-4 w-0 transition-all group-hover:w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ id, image, title, area }: MDXMeta) {
  return (
    // scroll false to avoid scrolling to the top on modal
    <Link href={`/projects/${id}`} scroll={false}>
      <div className="group relative isolate aspect-square overflow-hidden rounded-xl border transition-all duration-500">
        {/* overlay  */}
        <div className="pointer-events-none absolute bottom-0 z-10 flex min-h-[20%] w-full flex-col items-center justify-center bg-gradient-to-t from-black/80 p-4 text-center text-zinc-50 transition-all">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm">{area}</p>
        </div>
        <Image
          src={image}
          alt="project-image"
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,
          iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMUQQAAO8Ah7R22bwAAAAASUVORK5CYII="
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-500 group-hover:scale-110 group-active:scale-100"
        />
      </div>
    </Link>
  );
}
