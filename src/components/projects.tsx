import Link from "next/link";
import { getMDXMeta } from "@/utils/fetch-mdx";
import { MDXMeta } from "@/utils/types";
import Image from "next/image";

export default async function Projects({
  homepage = false,
  tags,
}: {
  homepage?: boolean;
  tags?: string | string[];
}) {
  // fetch data from the github api
  let data = await getMDXMeta("projects");

  if (!data || data.length < 1)
    return (
      <p className="py-4 text-center font-light italic">
        No projects available...
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
    <div className="space-y-4">
      <div
        className={`grid gap-2 ${
          homepage ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {data.map((item) => (
          <ProjectCard key={item.id} {...item}></ProjectCard>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ id, image, title, area }: MDXMeta) {
  return (
    // scroll false to avoid scrolling to the top on modal
    <Link
      className="group relative isolate aspect-square overflow-hidden rounded-xl border outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-ring"
      href={`/projects/${id}`}
      scroll={false}
    >
      {/* overlay  */}
      <div className="pointer-events-none absolute bottom-0 z-10 flex min-h-[20%] w-full flex-col items-center justify-center bg-gradient-to-t from-black/80 p-4 text-center text-zinc-50 ">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{area}</p>
      </div>
      <Image
        src={image}
        alt="project-image"
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/png;base64,
          iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMUQQAAO8Ah7R22bwAAAAASUVORK5CYII="
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-all duration-500 group-hover:scale-110 group-focus:scale-110 group-active:scale-100"
      />
    </Link>
  );
}
