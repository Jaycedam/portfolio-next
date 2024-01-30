import Image from "next/image";
import { Badge } from "./ui/badge";
import { MDX } from "@/utils/types";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const MDXContent = ({ content, meta }: MDX) => {
  return (
    <div className="container space-y-8">
      <div className="mx-auto max-w-prose space-y-4">
        <Badge variant="secondary">{meta.area}</Badge>
        <h1 className="heading">{meta.title}</h1>

        <div className="mx-auto flex max-w-prose flex-wrap gap-2">
          {meta.tags.map((tag, idx) => (
            <Link
              className={`text-base font-normal ${buttonVariants({
                variant: "outline",
                size: "sm",
              })}`}
              key={idx}
              href={`/projects?tags=${tag}`}
            >
              {tag}
            </Link>
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

      <article className="prose prose-zinc mx-auto dark:prose-invert prose-a:text-primary prose-em:text-sm prose-em:text-muted-foreground prose-hr:border-border dark:prose-pre:bg-muted">
        {content}
      </article>
    </div>
  );
};

export default MDXContent;
