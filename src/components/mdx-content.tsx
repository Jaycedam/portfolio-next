import Image from "next/image";
import { Badge, badgeVariants } from "./ui/badge";
import { getMDXByName } from "@/utils/fetch-mdx";
import { notFound } from "next/navigation";
import { RepoFolder } from "@/utils/types";
import "@app/code-highlight.css";
import Link from "next/link";
import { Tags } from "lucide-react";

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
    <section className="container space-y-16">
      <div className="mx-auto max-w-prose space-y-8">
        <div className="flex flex-wrap items-start gap-2">
          <h1 className="title">{meta.title}</h1>
          <Badge variant="secondary">{meta.area}</Badge>
        </div>

        <p className="prose prose-zinc text-muted-foreground dark:prose-invert">
          {meta.description}
        </p>
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
          className="rounded-3xl object-cover"
        />
      </div>

      <article className="prose-h2:heading prose prose-zinc mx-auto dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-a:text-foreground prose-ol:text-foreground prose-ul:text-foreground">
        {content}
      </article>

      <div className="mx-auto flex max-w-prose flex-wrap gap-4 py-8">
        <Tags />
        {meta.tags.map((tag, idx) => (
          <Link
            href={`/${repoFolder}?tags=${tag}`}
            key={idx}
            className={badgeVariants()}
          >
            {tag}
          </Link>
        ))}
      </div>
    </section>
  );
}
