import Image from "next/image";
import Link from "next/link";
import { MDXMeta } from "@/utils/types";

export default function ProjectCard({
  featured,
  id,
  image,
  tags,
  title,
}: MDXMeta) {
  return (
    // scroll false to avoid scrolling to the top on modal
    <Link href={id} scroll={false}>
      <div className="group relative isolate aspect-square overflow-hidden rounded-xl border transition-all duration-500">
        {/* overlay  */}
        <div className="pointer-events-none absolute bottom-0 z-10 flex min-h-[20%] w-full flex-col items-center justify-center bg-gradient-to-t from-black/80 p-4 text-center text-zinc-50 transition-all">
          <h2 className="text-2xl font-bold">{title}</h2>
          {/* <p className="text-sm text-zinc-400">{tags}</p> */}
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
          className="object-cover transition-all duration-500 group-hover:scale-110 group-active:scale-100"
        />
      </div>
    </Link>
  );
}
