import { getProjectByName } from "@/actions/project";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { HeaderImage, LinkButton } from "@components/mdx-components";
import { MDXProvider } from "@mdx-js/react";

export default async function MDX({ name }: { name: string }) {
  const project = await getProjectByName(name);

  const parsedUrl = new URL(project.url);
  const res = await fetch(parsedUrl.toString(), {
    // revalidate cache in 1 hour
    next: { revalidate: 3600 },
    // enable no cache on dev mode
    // next: { revalidate: 0 },
  });

  const markdown = await res.text();

  // custom components for MDX
  const components = { HeaderImage, LinkButton };

  return (
    <article className="prose prose-zinc mx-auto dark:prose-invert prose-a:text-primary prose-em:text-sm prose-em:text-muted-foreground prose-hr:border-border dark:prose-pre:bg-muted">
      <CompiledMDX source={markdown} components={components} />
    </article>
  );
}

const CompiledMDX = async ({
  source,
  components,
}: {
  source: string;
  components?: React.ComponentProps<typeof MDXProvider>["components"];
}) => {
  try {
    // it has to return with await since it returns a promise
    const result = await MDXRemote({ source: source, components: components });
    return result;
  } catch (error) {
    // handle the error here
    notFound();
  }
};
