import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ChevronRight, X } from "lucide-react";
import { getMDXMeta } from "@/utils/fetch-mdx";
import { MDXMeta } from "@/utils/types";
import Image from "next/image";
import { badgeVariants } from "./ui/badge";

export default async function BlogPosts({
  homepage = false,
  tags,
}: {
  homepage?: boolean;
  tags?: string | string[];
}) {
  // if the prop homepage = true, fetch only 4 values with the homepage property set to true, else return all items
  let data = await getMDXMeta("blog");
  let title = "Blog Posts";

  if (!data || data.length === 0) {
    return <p className="p-4 text-center">Blog: No posts available...</p>;
  }

  if (homepage) {
    title = title + " destacados";
    data = data.filter((item) => item.featured === "true");
  }

  if (!homepage && tags && tags.length > 0) {
    title = title + " " + tags;
    data = data.filter(
      (item) => item.tags && item.tags.some((tag) => tags.includes(tag))
    );
  }

  return (
    <section id="blog-posts">
      <div className="container space-y-4">
        {/* title */}

        <div className="flex flex-wrap justify-between">
          <h1 className="heading">{title}</h1>

          {tags && (
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/blog"
            >
              <X className="h-4" />
              Limpiar filtros
            </Link>
          )}
        </div>

        {/* GRID LAYOUR FOR PROJECTS */}
        <div
          className={`grid gap-2 ${
            homepage ? "md:grid-cols-2" : "md:grid-cols-2"
          }`}
        >
          {data.map((item) => (
            <BlogPostCard key={item.id} {...item}></BlogPostCard>
          ))}
        </div>

        {homepage && (
          <div className="flex justify-end">
            <Link
              className={buttonVariants({
                variant: "outline",
              })}
              href="/blog"
            >
              Ver más
              <ChevronRight className="h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function BlogPostCard({
  id,
  image,
  title,
  area,
  date,
  description,
  tags,
}: MDXMeta) {
  return (
    // scroll false to avoid scrolling to the top on modal
    <Link href={id} scroll={false}>
      <div className="grid grid-cols-[auto_40%]">
        <div className="space-y-4 py-8 pr-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
          <div className="flex gap-2">
            <p>{date}</p>
            {tags.map((tag, idx) => (
              <p key={idx} className={badgeVariants({ variant: "secondary" })}>
                {tag}
              </p>
            ))}
          </div>
        </div>

        {/* image */}
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={image}
            alt="project-image"
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,
          iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMUQQAAO8Ah7R22bwAAAAASUVORK5CYII="
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
}