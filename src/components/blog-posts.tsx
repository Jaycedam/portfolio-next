import Link from "next/link";
import { buttonVariants } from "@components/ui/button";
import { ChevronRight, X } from "lucide-react";
import { getMDXMeta } from "@/utils/fetch-mdx";
import { MDXMeta } from "@/utils/types";
import Image from "next/image";
import { badgeVariants } from "@components/ui/badge";
import FilterByParam from "@components/filter-by-param";
import es from "@/locales/es";

export default async function BlogPosts({
  homepage = false,
  tags,
}: {
  homepage?: boolean;
  tags?: string | string[];
}) {
  const t = es.blog;
  /**
   * This variable is for storing the filtered data,
   * since we need the original data array for the full tag list for filtering.
   */
  let posts: MDXMeta[] = [];

  // fetch data from the github api
  const data = await getMDXMeta("blog");
  if (!data || data.length < 1)
    return (
      <p className="py-4 text-center font-light italic">
        No blog posts available...
      </p>
    );

  console.log(data);
  // sets an array from all the tags from the original data variable
  const metaTags = Array.from(new Set(data.flatMap((item) => item.tags))).map(
    (tag) => ({ tag })
  );

  // if this component is rendered on the homepage, then filter by featured=true
  if (homepage) {
    posts = data.filter((item) => item.featured === "true");
  } else if (!homepage) {
    posts = data;
  }

  // filter by tags on the url params
  if (tags && tags.length > 0) {
    posts = data.filter(
      (item) => item.tags && item.tags.some((tag) => tags.includes(tag))
    );
  }

  return (
    <section id="blog-posts">
      <div className="container space-y-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h1 className={homepage ? "heading" : "title"}>
              {t.heading}{" "}
              {tags && (
                <span className="space-x-8 text-xl font-normal text-muted-foreground">
                  {tags}
                </span>
              )}
            </h1>

            {tags && (
              <Link
                className={buttonVariants({ variant: "secondary", size: "sm" })}
                href="/projects"
              >
                <X className="h-4 w-auto" />
                Borrar filtros
              </Link>
            )}
          </div>

          <p className="subheading">{t.subheading}</p>
        </div>
        {!homepage && <FilterByParam repoFolder="blog" tags={metaTags} />}

        <div
          className={`grid gap-2 ${
            homepage ? "md:grid-cols-2" : "md:grid-cols-2"
          }`}
        >
          {posts.map((item) => (
            <BlogPostCard key={item.id} {...item}></BlogPostCard>
          ))}
        </div>

        {homepage && (
          <div className="flex justify-end">
            <Link
              className={`group ${buttonVariants({
                variant: "outline",
              })}`}
              href="/blog"
            >
              {t.btn.more}
              <ChevronRight className="h-4 w-0 transition-all group-hover:w-4" />
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
    <Link href={`/blog/${id}`} scroll={false}>
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
            alt="post-image"
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
