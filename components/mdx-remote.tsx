import { getProjectById } from "@/actions/project";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function MDX({ id }: { id: number }) {
  try {
    const project = await getProjectById(id);

    const parsedUrl = new URL(project.url);
    // revalidate cache in 1 hour
    const res = await fetch(parsedUrl.toString(), {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch content from ${parsedUrl}`);
    }

    const markdown = await res.text();
    return <MDXRemote source={markdown} />;
  } catch (error) {
    console.error("Error fetching or rendering MDX:", error);
    return notFound();
  }
}
