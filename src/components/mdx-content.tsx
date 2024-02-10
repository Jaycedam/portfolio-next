import Image from "next/image";
import { Badge, badgeVariants } from "./ui/badge";
import { getMDXByName } from "@/utils/fetch-mdx";
import { notFound } from "next/navigation";
import { RepoFolder } from "@/utils/types";
import "@app/code-highlight.css";
import Link from "next/link";

export default async function MDXContent({
  name,
  repoFolder,
}: {
  name: string;
  repoFolder: RepoFolder;
}) {
  const mdx = await getMDXByName(name, repoFolder);
  if (!mdx) return notFound();

  const { meta, content } = mdx;

  return (
    <section className="container space-y-8">
      <div className="mx-auto max-w-prose space-y-4">
        <Badge variant="secondary">{meta.area}</Badge>
        <h1 className="title">{meta.title}</h1>

        <div className="mx-auto flex max-w-prose flex-wrap gap-2">
          {meta.tags.map((tag, idx) => (
            <Link
              href={`/${repoFolder}?tags=${tag}`}
              key={idx}
              className={`${badgeVariants({
                variant: "outline",
              })} hover:bg-accent hover:text-accent-foreground focus:ring-0 focus:ring-offset-0`}
            >
              {tag}
            </Link>
          ))}
        </div>

        <p className="prose prose-zinc dark:prose-invert">{meta.description}</p>
      </div>

      <div className="w-fulll relative aspect-video">
        <Image
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,
            iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMUQQAAO8Ah7R22bwAAAAASUVORK5CYII="
          src={meta.image}
          alt="preview"
          fill
          className="rounded-xl object-cover"
        />
      </div>

      <article className="prose-h2:heading prose prose-zinc mx-auto dark:prose-invert prose-a:text-primary">
        {content}
      </article>
    </section>
  );
}
