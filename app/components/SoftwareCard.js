import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

export default function SoftwareCard(props) {
  // all props = id, url, image_url, name, area, technologies, about
  return (
    <div
      className="grid gap-2 
        md:grid-cols-2 md:gap-8"
    >
      {/* image with link to project */}
      <a href={props.url} target="_blank">
        <div
          className="overflow-hidden relative isolate group 
            rounded-xl aspect-[4/3] shadow-lg 
            hover:shadow-2xl
            transition-all ease-in-out duration-500"
        >
          {/* overlay  */}
          <div
            className="absolute bottom-0 left-0 z-10
            w-full pt-12 pb-8 flex-center gap-2
            text-zinc-50 font-bold 
            bg-gradient-to-t from-zinc-950/80
            pointer-events-none
            lg:-bottom-2 lg:group-hover:bottom-0
            lg:opacity-0 lg:group-hover:opacity-100
            transition-all ease-in-out duration-500"
          >
            Ver projecto <BiLinkExternal />
          </div>

          <Image
            src={props.image_url + ".jpg"}
            alt="project-image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover h-full w-full
            group-hover:scale-125
            transition ease-in-out duration-500"
          />
        </div>
      </a>

      {/* text section */}
      <div
        className="grid gap-3 
            place-content-center"
      >
        <div>
          <h2 className="font-black text-lg">
            {props.name} - {props.area}
          </h2>
          <p className="font-light text-sm">{props.technologies}</p>
        </div>
        <p>{props.about}</p>
      </div>
    </div>
  );
}
