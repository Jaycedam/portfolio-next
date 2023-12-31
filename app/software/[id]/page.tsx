import MDX from "@/components/MDX";
import prisma from "@/lib/prisma";
import React from "react";
import { notFound } from "next/navigation";

export default async function SoftwareDetails({
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
      <section className="container mt-24">
        <article
          className="prose mx-auto max-w-4xl dark:prose-invert prose-a:my-2 prose-a:rounded-md prose-a:bg-zinc-200
          prose-a:px-3 prose-a:py-2 prose-a:no-underline prose-img:aspect-square prose-img:w-full
          prose-img:rounded-md prose-img:object-cover prose-img:shadow-lg
          dark:prose-a:bg-zinc-700"
        >
          <MDX url={project.url} />
        </article>
      </section>
    );
  } catch (err) {
    notFound();
  }
}

async function getData(id: number) {
  const result = await prisma.software.findUnique({
    where: { id: id },
    select: {
      url: true,
    },
  });
  return result;
}
