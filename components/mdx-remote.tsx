import { getProjectByName } from "@/actions/project";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { HeaderImage, LinkButton } from "@components/mdx-components";

export default async function MDX({ name }: { name: string }) {
  try {
    const project = await getProjectByName(name);

    const parsedUrl = new URL(project.url);
    const res = await fetch(parsedUrl.toString(), {
      // revalidate cache in 1 hour
      next: { revalidate: 3600 },
      // enable no cache on dev mode
      // next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch content from ${parsedUrl}`);
    }

    const markdown = await res.text();

    // custom components for MDX
    const components = { HeaderImage, LinkButton };

    return (
      <article className="prose prose-zinc mx-auto dark:prose-invert prose-a:text-primary prose-em:text-sm prose-em:text-muted-foreground prose-hr:border-border dark:prose-pre:bg-muted">
        <MDXRemote source={markdown} components={components} />
      </article>
    );
  } catch (error) {
    console.error("Error fetching or rendering MDX:", error);
    return notFound();
  }
}
