import MDX from "@components/mdx-remote";
import { getProject } from "@utils/get-data";
import { notFound } from "next/navigation";

export default async function ProjectMDX({
  params,
}: {
  params: { id: string };
}) {
  // try catch is used here to catch non numbers on the url (params), then throws 404
  // eg: /projects/a
  try {
    const id: number = parseInt(params.id);
    const project = await getProject(id);

    return (
      <section>
        <article
          className="prose mx-auto max-w-4xl dark:prose-invert
          prose-a:mr-4
          prose-em:text-sm prose-em:text-muted-foreground 
          prose-img:aspect-[4/3] prose-img:w-full prose-img:rounded-md prose-img:border prose-img:object-fill
          prose-video:aspect-[16/10] prose-video:w-full prose-video:rounded-md prose-video:border"
        >
          <MDX url={project.url} />
        </article>
      </section>
    );
  } catch (err) {
    notFound();
  }
}
