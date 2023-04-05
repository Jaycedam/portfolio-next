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
        className="aspect-[4/3] overflow-hidden rounded-xl 
            shadow-md"
      >
        <a href={props.url} target="_blank">
          <img
            src={props.image_url}
            alt="project-image"
            className="object-cover h-full w-full
            hover:scale-125
            transition ease-in-out duration-300"
          />
        </a>
      </div>

      {/* text section */}
      <div
        className="grid gap-3 
            place-content-center"
      >
        <div>
          <h1 className="font-black text-lg">
            {props.name} - {props.area}
          </h1>
          <h2 className="font-thin text-sm">{props.technologies}</h2>
        </div>
        <p>{props.about}</p>
      </div>
    </div>
  );
}
