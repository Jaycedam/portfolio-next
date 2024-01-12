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
      <main>
        <section>
          <article className="prose mx-auto max-w-4xl dark:prose-invert prose-a:my-2 prose-a:rounded-md prose-a:bg-zinc-200 prose-a:px-3 prose-a:py-2 prose-a:no-underline prose-img:aspect-square prose-img:w-full prose-img:rounded-md prose-img:object-cover prose-img:shadow-lg dark:prose-a:bg-zinc-700">
            <MDX url={project.url} />
          </article>
        </section>
      </main>
    );
  } catch (err) {
    notFound();
  }
}
