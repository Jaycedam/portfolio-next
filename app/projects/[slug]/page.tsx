import { getMDXByName } from "@/utils/fetch-mdx";
import { slugToURL } from "@/utils/slug";
import { notFound } from "next/navigation";

export default async function ProjectMDX({
  params,
}: {
  params: { slug: string };
}) {
  const url = slugToURL(params.slug, "projects");
  const project = await getMDXByName(url);

  if (!project) return notFound();

  const { meta, content } = project;

  return (
    <section>
      <div className="container">
        <article className="prose prose-zinc mx-auto dark:prose-invert prose-a:text-primary prose-em:text-sm prose-em:text-muted-foreground prose-hr:border-border dark:prose-pre:bg-muted">
          {content}
        </article>
      </div>
    </section>
  );
}
