import MDX from "@/components/mdx-remote";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProjectDetails({
  params,
}: {
  params: { id: string };
}) {
  // try catch is used here to catch non numbers on the url (params), then throws 404
  // eg: /projects/a
  try {
    const id: number = parseInt(params.id);
    const project = await getData(id);

    return (
      <main>
        <section className="container">
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

async function getData(id: number) {
  const result = await prisma.project.findUnique({
    where: { id: id },
    select: {
      url: true,
    },
  });
  return result;
}
