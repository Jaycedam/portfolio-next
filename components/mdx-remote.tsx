import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getProject } from "@utils/get-data";

export default async function MDX({ id }: { id: number }) {
  try {
    const project = await getProject(id);

    const parsedUrl = new URL(project.url);
    // disable cache
    const res = await fetch(parsedUrl.toString(), { cache: "no-store" });

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
