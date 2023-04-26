import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";
import { Software } from "@prisma/client";

export default function SoftwareCard(props: Software) {
  // props = id, url, image_url, name, area, technologies, about
  return (
    <div
      className="grid gap-2
        md:grid-cols-2 md:gap-8"
    >
      {/* image with link to project */}
      <a href={props.url} target="_blank">
        <div
          className="group relative isolate aspect-square
            overflow-hidden rounded-xl shadow-xl transition-all
            duration-500 ease-in-out
            hover:scale-105
            hover:shadow-md"
        >
          {/* overlay  */}
          <div
            className="flex-center pointer-events-none absolute bottom-0
            left-0 z-10 w-full gap-2 bg-gradient-to-t
            from-zinc-950/80 pb-8 
            pt-12 font-bold
            text-zinc-50
            transition-all duration-500
            ease-in-out lg:-bottom-4
            lg:opacity-0 lg:group-hover:bottom-0 lg:group-hover:opacity-100"
          >
            Ver projecto <BiLinkExternal />
          </div>

          <Image
            src={props.imageUrl}
            alt="project-image"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover
            transition
            duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      </a>

      {/* text section */}
      <div className="grid place-content-center gap-3">
        <div>
          <h2 className="text-xl font-bold">{props.name}</h2>
          <p className="text-sm font-thin">{props.stack}</p>
        </div>
        <p>{props.about}</p>
      </div>
    </div>
  );
}
