import MDX from "@/components/mdx-remote";
import { getProject } from "@/utils/get-data";
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
          className="prose mx-auto max-w-4xl 
          dark:prose-invert
          prose-a:mr-4 
          prose-em:text-sm prose-em:text-muted-foreground
          prose-img:w-full prose-img:rounded-md prose-img:border-2 prose-img:shadow-lg"
        >
          <MDX url={project.url} />
        </article>
      </section>
    );
  } catch (err) {
    notFound();
  }
}
