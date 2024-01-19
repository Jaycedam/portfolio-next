import Image from "next/image";
import Link from "next/link";
import { ExtendedProject } from "@utils/interfaces";

export default function ProjectCard(props: ExtendedProject) {
  return (
    <Link href={`/projects/${props.id}`}>
      <div className="group relative isolate aspect-square overflow-hidden rounded-2xl transition-all duration-500">
        {/* overlay  */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-20 grid w-full items-center justify-center bg-gradient-to-t from-zinc-950/90 px-2 pb-8 pt-12 text-center text-zinc-50">
          <p className="text-xl font-bold">{props.name}</p>
          <p className="text-sm font-light">{props.area.name}</p>
        </div>
        <Image
          src={props.imageUrl}
          alt="project-image"
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,
          iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMUQQAAO8Ah7R22bwAAAAASUVORK5CYII="
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-[95%] w-[95%] transition-all duration-500 group-hover:scale-110 group-active:scale-100"
        />
      </div>
    </Link>
  );
}
