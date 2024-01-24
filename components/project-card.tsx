import Image from "next/image";
import Link from "next/link";
import { ExtendedProject } from "@utils/interfaces";
import { createSlug } from "@/utils/slug";

export default function ProjectCard({ name, area, imageUrl }: ExtendedProject) {
  // creates url based on the project name, separated by dashes
  const slug = createSlug(name);

  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative isolate aspect-square overflow-hidden rounded-2xl border transition-all duration-500">
        {/* overlay  */}
        <div className="pointer-events-none absolute bottom-0 z-10 flex h-[20%] w-full flex-col items-center justify-center bg-gradient-to-t from-black/80 px-2 text-center text-zinc-50 transition-all">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-sm text-zinc-400">{area.name}</p>
        </div>
        <Image
          src={imageUrl}
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
