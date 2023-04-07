import { BiLinkExternal } from "react-icons/bi";

export default function SoftwareCard(props) {
  // all props = id, url, image_url, name, area, technologies, about
  return (
    <div
      className="grid gap-2 
        md:grid-cols-2 md:gap-8"
      key={props.id}
    >
      {/* image with link to project */}
      <div
        className="aspect-[4/3] overflow-hidden rounded-xl group shadow-lg relative
            hover:shadow-2xl
            transition-all ease-in-out duration-500"
      >
        <a href={props.url} target="_blank">
          {/* overlay for hover image  */}
          <div
            className="absolute bottom-0 left-0 z-40
            w-full pt-12 pb-4 flex-center gap-2
            text-zinc-50 font-bold 
            bg-gradient-to-t from-zinc-950/90 
            pointer-events-none
            lg:-bottom-2 lg:group-hover:bottom-0
            lg:opacity-0 lg:group-hover:opacity-100
            transition-all ease-in-out duration-500"
          >
            Ver projecto <BiLinkExternal />
          </div>
          <img
            src={props.image_url}
            alt="project-image"
            className="object-cover h-full w-full
            group-hover:scale-110
            transition ease-in-out duration-500"
          />
        </a>
      </div>

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
