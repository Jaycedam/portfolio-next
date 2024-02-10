import Link from "next/link";
import { getMDXMeta } from "@/utils/fetch-mdx";
import { MDXMeta } from "@/utils/types";
import Image from "next/image";
import { badgeVariants } from "@components/ui/badge";

export default async function BlogPosts({
  homepage = false,
  tags,
}: {
  homepage?: boolean;
  tags?: string | string[];
}) {
  // fetch data from the github api
  let data = await getMDXMeta("blog");

  if (!data || data.length < 1)
    return (
      <p className="py-4 text-center font-light italic">
        No blog posts available...
      </p>
    );

  // if this component is rendered on the homepage, then filter by featured=true
  if (homepage) {
    data = data.filter((item) => item.featured === "true");
  }

  // filter by tags on the url params
  if (tags && tags.length > 0) {
    data = data.filter(
      (item) => item.tags && item.tags.some((tag) => tags.includes(tag))
    );
  }

  return (
    <div
      className={`grid gap-2 ${homepage ? "md:grid-cols-2" : "md:grid-cols-2"}`}
    >
      {data.map((item) => (
        <BlogPostCard key={item.id} {...item}></BlogPostCard>
      ))}
    </div>
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
