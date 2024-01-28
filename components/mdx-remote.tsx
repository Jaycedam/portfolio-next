import { getProjectByName } from "@utils/get-data";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { HeaderImage, LinkButton } from "@components/mdx-components";

export default async function MDX({ name }: { name: string }) {
  const project = await getProjectByName(name);

  const parsedUrl = new URL(project.url);

  const markdown = await fetch(parsedUrl.toString(), {
    // revalidate cache in 1 hour
    // next: { revalidate: 3600 },
    // enable no cache on dev mode
    next: { revalidate: 0 },
  }).then((response) => response.text());

  // custom components for MDX
  const components = { HeaderImage, LinkButton };

  try {
    // it has to return with await since it returns a promise
    const result = await MDXRemote({
      source: markdown,
      components: components,
    });
    return result;
  } catch (error) {
    // handle the error here
    notFound();
  }
}
