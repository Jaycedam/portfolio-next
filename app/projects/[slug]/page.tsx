import { getMDXByName } from "@/utils/fetch-mdx";
import { slugToURL } from "@/utils/slug";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";

export default async function ProjectMDX({
  params,
}: {
  params: { slug: string };
}) {
  const url = slugToURL(params.slug, "projects");
  const project = await getMDXByName(url);

  if (!project) return notFound();

  const { meta, content } = project;

  return (
    <section>
      <MDXContent content={content} meta={meta} />
    </section>
  );
}
