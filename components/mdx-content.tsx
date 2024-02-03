import Image from "next/image";
import { Badge } from "./ui/badge";
import { getMDXByName } from "@/utils/fetch-mdx";
import { notFound } from "next/navigation";
import { RepoFolder } from "@/utils/types";
import { getCurrentLocale } from "@/locales/server";

export default async function MDXContent({
  name,
  repoFolder,
}: {
  name: string;
  repoFolder: RepoFolder;
}) {
  const locale = getCurrentLocale();

  const mdx = await getMDXByName(name, repoFolder, locale);
  if (!mdx) return notFound();

  const { meta, content } = mdx;

  return (
    <div className="container space-y-8">
      <div className="mx-auto max-w-prose space-y-4">
        <Badge variant="secondary">{meta.area}</Badge>
        <h1 className="heading">{meta.title}</h1>

        <div className="mx-auto flex max-w-prose flex-wrap gap-2">
          {meta.tags.map((tag, idx) => (
            <Badge key={idx} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <p className="prose text-muted-foreground">{meta.description}</p>
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

      <article className="prose prose-zinc mx-auto dark:prose-invert prose-a:text-primary dark:prose-pre:bg-muted">
        {content}
      </article>
    </div>
  );
}
